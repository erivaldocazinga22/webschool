<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ProfessorResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'processo' => $this->user->processo,
            'nome' => $this->user->name,
            'genero' => $this->user->sexo,
            'Curso' => $this->curso,
            'Classe' => $this->classe,
            'Turma' => $this->turma,
    
        ];
    }
}
