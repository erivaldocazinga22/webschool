<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Publicacao extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'texto',
        'path',
        
    ];

    public function imagem()
    {
        return $this->hasOne(Upload::class);
    }
    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function comentarios()
    {
        return $this->hasMany(Comentario::class);
    }

}
