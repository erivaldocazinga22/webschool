<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ComentariosResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            "nome" => $this->user->name,
            "avatar_url" => $this->user->avatar_url,
            "nivel" => $this->user->nivel,
             "texto" => $this->texto,
            "created_at" => $this-> created_at,
        
        ];
    }
}
