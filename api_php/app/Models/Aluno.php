<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\User;

class Aluno extends Model
{
    use HasFactory;

    protected $fillable = [
        'user_id',
        'curso',
        'classe',
        'turma',

    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
    public function turma()
    {
        return $this->belongsTo(Turma::class);
    }

}
