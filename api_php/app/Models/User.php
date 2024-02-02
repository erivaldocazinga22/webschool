<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;
use App\Models\Aluno;
class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    public function alunos()
    {
        return $this->hasOne(Aluno::class);
    }
    public function professores()
    {
        return $this->hasOne(Professor::class);
    }

    public function publicacaos()
    {
        return $this->hasOne(Publicacao::class);
    }
    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'processo',
        'name',
        'email',
        'telefone',
        'sexo',
        'avatar_url',
        'identificacao',
        'password',
        'nivel',
        'data_nascimento', // Adicione 'nivel' se não estiver presente
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
        'password' => 'hashed',
    ];


}
