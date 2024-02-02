<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class PublicacaoResource extends JsonResource
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
            'avatar_url' => $this->user->avatar_url,
            'user_id' => $this->user->id,
            'email' => $this->user->email,
            'nivel' => $this->user->nivel,
            'name' => $this->user->name,
            'text' => $this->texto,
            'fotos' => $this->path,
            'created_at' => $this->created_at,
           
        ];
    }
}
