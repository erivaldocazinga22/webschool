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
               $dados = [$this->alunos];
                break;
            case '3':
                $dados = [$this->professores];
                break;
            case '3':
                    $dados = $this->encarregados;
                    break;

            default:
                # code...
                break;
        }
        return [
             $dados,
            'nivel' => $this->nivel,
            'processo' => $this->processo,
            'nome' => $this->name,
            'email' => $this->email,
            'telefone' => $this->telefone,
            'sexo' => $this->sexo,
        ];
    }
}
