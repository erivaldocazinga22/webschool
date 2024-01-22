<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;


class AuthController extends Controller
{
     public function login(Request $request ){

        if(Auth::attempt($request->only('email', 'password'))){

            $token =  $request->user()->createToken('Adm')->plainTextToken;
            switch ($request->user()->nivel) {
                case '2':
                    dd($request->user()->id);
                    $token =  $request->user()->createToken('Professor', ['post-store','chat-update','mensagem-store'])->plainTextToken;
                    break;
                case '3':
                    $token =  $request->user()->createToken('Aluno', [$request->user()->id])->plainTextToken;
                    break;
            }
             //dd($request->user()->nivel);
            $sns = ['message' => "autorizado",
                    'token' => $token];
            return response()->json($sns);
        }else{
            $sns = ['message' => "nao autorizado", 'status' => 403];
        } return response()->json($sns);

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
