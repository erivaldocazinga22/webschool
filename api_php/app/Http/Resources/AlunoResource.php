<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class AlunoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'User' => $this->user,
            'Curso' => $this->curso,
            'Classe' => $this->classe,
            'Turma' => $this->turma,
        ];
    }
}
