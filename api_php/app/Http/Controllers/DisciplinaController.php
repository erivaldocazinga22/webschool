<?php

namespace App\Http\Controllers;

use App\Models\Chat;
use App\Models\Disciplina;
use Illuminate\Http\Request;
use App\Traits\HttpResponses;
use Illuminate\Database\UniqueConstraintViolationException;

class DisciplinaController extends Controller
{
    use HttpResponses;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return response()->json(Disciplina::all());
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {

        $disciplina = Disciplina::create($request->all());
        if($disciplina) {
            $dadosForm = $request->all();
            $dadosForm['turma'] = 'A';
            $dadosForm['cod_turma'] = $request->curso.$dadosForm['turma'];
            $dadosForm['nome'] = $request->curso.'-'.$request->classe .'-'.$dadosForm['turma']. '->' .$request->nome;
            $chat = Chat::create($dadosForm);
            return $this->response('Diisciplina cadastrada', 200, $disciplina);
        }
    } catch (UniqueConstraintViolationException $e) {

        return $this->error('Discplina já cadastrada', 422);
    } catch (\Exception $e) {

        return response()->json(['error' => 'Erro interno no servidor'], 500);
    }
    }

    /**
     * Display the specified resource.
     */
    public function show(Disciplina $disciplina)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Disciplina $disciplina)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Disciplina $disciplina)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Disciplina $disciplina)
    {
        //
    }
}
