<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Traits\HttpResponses;

class AuthController extends Controller
{
    use HttpResponses;

     public function login(Request $request ){

        if(Auth::attempt($request->only('email', 'password'))){

            $token =  $request->user()->createToken('Adm')->plainTextToken;
            switch ($request->user()->nivel) {
                case '2':
                   // dd($request->user()->id);
                    $token =  $request->user()->createToken('Professor', ['post-store','chat-update','mensagem-store'])->plainTextToken;
                    break;
                case '3':
                    $token =  $request->user()->createToken('Aluno', [$request->user()->id, 'post-index',])->plainTextToken;
                    break;
            }
             //dd($request->user()->nivel);
           // $sns = ['message' => "autorizado",
                    //'token' => $token];
            //return response()->json($sns);
            return $this->response('Autorizado', 200, ['token' => $token]);
        }else{
            return $this->error('Não autorizado', 422);
           // $sns = ['message' => "nao autorizado", 'status' => 403];
        } //return response()->json($sns);=

     }

     public function valida(Request $request){
        $token = $request->bearerToken();

        if (Auth::guard('sanctum')->check($token)) {
            //$userIdFromToken = auth()->payload()->get('user_id');
            //$user = Auth::user();
            $teste = Auth::guard('sanctum')->user($token)->id;

            return response()->json(User::find($teste));
        }

     }
}
