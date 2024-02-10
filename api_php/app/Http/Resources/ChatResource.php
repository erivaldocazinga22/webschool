<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ChatResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        
        return [
            'id' => $this->id,
            'name' => $this->nome,
            'curso' => $this->curso,
            'classe' => $this->classe,
            'avatar_url' => $this->url_arquivo,
            'turma' => $this->turma,
            'last_message' => 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, sunt. Expedita veritatis iure sint minus officiis hic fuga. Quod facere quaerat quis provident illum blanditiis numquam voluptate natus, nihil animi!',
            'cod_turma' => $this->cod_turma,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
    