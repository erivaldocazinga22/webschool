<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Turma extends Model
{
    use HasFactory;

    public function professores()
    {
        return $this->belongsToMany(Professor::class);
    }

    public function alunos()
    {
        return $this->hasMany(Aluno::class);
    }
}
