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
        $dados = 0;
        switch ( $this->nivel) {
            case '2':
               $dados = ['Aluno',$this->alunos];
                break;
            case '3':
                $dados = ['Professor', $this->professores];
                break;
            case '3':
                    $dados = $this->encarregados;
                    break;

            default:
                # code...
                break;
        }
        return [
            'tipo user' => $dados,
            'nivel' => $this->nivel,
            'Processo' => $this->processo,
            'Nome' => $this->name,
            'Email' => $this->email,
            'Telefone' => $this->telefone,
        ];
    }
}
