<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
{
    $dados = [];
    switch ($this->nivel) {
        case '3':
            $dados = $this->alunos ? $this->alunos->toArray() : [];
            break;
        case '2':
            $dados = $this->professores ? $this->professores->toArray() : [];
            break;
        case '4':
            $dados = $this->encarregados ? $this->encarregados->toArray() : [];
            break;
        default:
            break;
    }

    return array_merge($dados, [
        'id' => $this->id,
        'nivel' => $this->nivel,
        'processo' => $this->processo,
        'name' => $this->name,
        'email' => $this->email,
        'telefone' => $this->telefone,
        'sexo' => $this->sexo,
    ]);
}
}