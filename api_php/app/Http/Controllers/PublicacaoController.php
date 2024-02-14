<?php

namespace App\Http\Controllers;

use App\Http\Resources\PublicacaoResource;
use App\Models\Publicacao;
use App\Models\Upload;
use App\Traits\HttpResponses;
use GuzzleHttp\Promise\Create;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PublicacaoController extends Controller
{
    use HttpResponses;
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return PublicacaoResource::collection(Publicacao::with('user')->get());
        //$publicacao = Publicacao::with('user');
        //return response()->json($publicacao);
    }

    /**
     * Show the form for creating a new resource.
     */

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $dataForm = $request->all();
       if($request->file()){

            $path = 'webschool_upload';
            $image = $request->imagem;
            $nameImage = uniqid(date('Ymdh'. 'image')) . '.' . $image->getClientOriginalExtension();
            $uploadFiles = $image->storeAs($path, $nameImage);
            $dataForm['path'] = $uploadFiles;
            $regra = 'nullable';
       }else{

            $regra = 'required';
       }
        $validador = Validator::make($dataForm, [
            'user_id' => 'required',
            'texto' => $regra,
            'path' => 'nullable'

        ]);

        if ($validador->fails()) {

            return $this->error('Preencha todos os campos', 422, $validador->errors());
        }
        $publicacao = Publicacao::create($dataForm);

        if($publicacao) {

            return $this->response('Post Criado com sucesso', 200, new PublicacaoResource($publicacao->load('user')));
        }


        return response()->json ($publicacao);

    }

    /**
     * Display the specified resource.
     */
    public function show(Publicacao $publicacao)
    {
        return new PublicacaoResource(Publicacao::with('user')->first());
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Publicacao $publicacao)
    {

    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Publicacao $publicacao)
    {
     
        if($publicacao->user_id == $request->user_id){
        
            $dataForm = $request->all();
            if($request->file()){

                $path = 'webschool_upload';
                $image = $request->imagem;
                $nameImage = uniqid(date('Ymdh'. 'image')) . '.' . $image->getClientOriginalExtension();
                $uploadFiles = $image->storeAs($path, $nameImage);
                $dataForm['path'] = $uploadFiles;
                $regra = 'nullable';
            }else{

                $regra = 'required';
            }
            $validador = Validator::make($dataForm, [
                'user_id' => 'required',
                'texto' => $regra,
                'path' => 'nullable'

            ]);

            if ($validador->fails()) {

                return $this->error('data invalid', 422, $validador->errors());
            }

            $update = $publicacao->update($request->all());
            if($update){
                return $this->response('Post atualizado com sucesso', 200, new PublicacaoResource($publicacao->load('user')));
            // return new PublicacaoResource(Publicacao::with('user')->first());
            }else{
                return $this->error('Post não atualizado', 422);
            }
        }else{
            return $this->error('Não tem a permissão para actualizar este post', 422);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Publicacao $publicacao)
    {
       // if($publicacao->find($publicacao->id)) {;
            $delete = $publicacao->delete();
            if($delete) {
                return $this->response('Post apagado com sucesso', 200);
            }
        //}else{
            return response('Post  nao sucesso', 200);
       // }

    }

    public function deletePublicacaos(Request $request)
    {
        $userIdsToDelete = null !==($request->input('post_ids')) ? $request->input('post_ids') : false ;

        if ($userIdsToDelete) {
           if(Publicacao::whereIn('id', $userIdsToDelete)->delete() == 0){
             return $this->error('Posts não existem', 422);
           }
            return $this->response('Posts excluídos com sucesso', 200);
        }else{
            return $this->error('Nenhum post selecionado', 422);
        }
    }

}
