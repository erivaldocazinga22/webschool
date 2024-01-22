<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUpdateAluno;
use App\Http\Resources\AlunoResource;
use App\Models\Aluno;
use App\Models\User;
use Illuminate\Http\Request;

class AlunoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       return AlunoResource::collection(Aluno::with('user')->get());
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
    public function store(StoreUpdateAluno $request)
    {
       dd($request);
    }

    /**
     * Display the specified resource.
     */
    public function show(Aluno $aluno)
    {
        $user = User::with('alunos')->find(8);
        dd($user);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Aluno $aluno)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Aluno $aluno)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Aluno $aluno)
    {
        //
    }
}
