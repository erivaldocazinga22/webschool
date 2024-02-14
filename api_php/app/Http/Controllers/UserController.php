<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\Aluno;
use App\Models\Professor;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Traits\HttpResponses;
use Illuminate\Database\UniqueConstraintViolationException;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    use HttpResponses;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

     //   return response()->json(User::all());
        return UserResource::collection(User::all());

    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //$senhaCripro = Hash::make($request->password);

        try {
        $dataForm = $request->all();
        $validador = Validator::make($dataForm, [
            'processo' => 'required',
            'name' => 'required',
            'email' => 'required',
            'telefone' => 'required',
            'sexo' => 'required',
            'avatar_url' => 'nullable',
            'curso' => 'required',
            'classe' => 'required',
            'turma' => 'required',
            'identificacao' => 'required',
            'nivel' => 'required',
            'data_nascimento' => 'required',
            'password' => 'required'
        ]);

        if ($validador->fails()) {
            return $this->error('data invalid', 422, $validador->errors());
        }

        $user =  User::create($request->all());
        $request['user_id'] = $user->id;
        $entidade = 0;
        switch ($user->nivel) {
            case '2':
                $entidade = Professor::create($request->all());
                break;
            case '3':
                $entidade = Aluno::create($request->all());
                break;
        }

        if([$user,$entidade]) {
            return $this->response('Usuário cadastrado com sucesso', 200, [$user,$entidade]);
        }
     } catch (UniqueConstraintViolationException $e) {
            // Tratar a exceção de violação de restrição única (registro duplicado)
            // Você pode retornar uma resposta JSON informando sobre a duplicidade

            return $this->error('Usuário já cadastrado', 422, $validador->errors());
        } catch (\Exception $e) {
            // Outras exceções podem ser tratadas aqui
            return response()->json(['error' => 'Erro interno no servidor', $e], 500);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        return new UserResource(User::find($id));

    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(User $user)
    {

        //$userId = 1; // Substitua pelo ID real do usuário



            // Exclua manualmente os registros relacionado
            // Agora, você pode excluir o usuário
            //$user->alunos->delete();
            //$user->professores->delete();`


            $user->delete();
            $userIdsToDelete = [1, 2, 3, 4, 5];
            User::whereIn('id', $userIdsToDelete)->delete();

    }

    public function deleteUsers(Request $request)
    {
        $userIdsToDelete = null !==($request->input('user_ids')) ? $request->input('user_ids') : false ;
        
        if ($userIdsToDelete) {
           if(User::whereIn('id', $userIdsToDelete)->delete() !== 1){
             return $this->error('Usuários não existem', 422);
           }
            return $this->response('Usuários excluídos com sucesso', 200);
        }else{
            return $this->error('Usuários não excluídos', 422);
        }
    }
}





