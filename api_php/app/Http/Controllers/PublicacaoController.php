<?php

namespace App\Http\Controllers;

use App\Models\Publicacao;
use Illuminate\Http\Request;

class PublicacaoController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $publicacao = Publicacao::all();
        return response()->json($publicacao);
    }

    /**
     * Show the form for creating a new resource.
     */

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //$arquivoNome = 'gp.jpg';
        //dd($request->all());
       /* if ($request->hasFile('imagem')) {
            $file = $request->file('caminho');
            $caminhoImagem = $file->storeAs('uploads', $file->getClientOriginalName(), 'public');

            // Você pode usar $caminhoImagem conforme necessário
            // ...

            $request->merge(['caminho' => $caminhoImagem]);
        }
*/
         for ($i=0; $i < count ($request->allFiles()['images']); $i++) {
            var_dump($i);
            $file = $request->allFiles()['images'][$i];
         }
        ///$publicacao = Publicacao::create($request->all());
        //$retorno = [$publicacao, $request->all() ];
        //return response()->json ($publicacao);

       //return $request;
    }

    /**
     * Display the specified resource.
     */
    public function show(Publicacao $publicacao)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Publicacao $publicacao)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Publicacao $publicacao)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Publicacao $publicacao)
    {
        //
    }
}
