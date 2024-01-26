<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Publicacao extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_user',
        'texto',
        'caminho'
    ];

    public function imagens()
    {
        return $this->hasMany(Upload::class);
    }

}
