<?php

namespace Database\Factories;

use App\Models\Chat;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Mensagem>
 */
class MensagemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'id_usuario'=> User::all()->random()->id,
            'id_chat'=> Chat::all()->random()->id,
            'texto'=> $this->faker->randomElement(['Ola Bom dia', 'Tudo Bem Turma?', null]),
            'url_arquivo' => $this->faker->randomElement(['https://github.com/EmenegildoMarques.png','https://github.com/erivaldocazinga22.png', null]),

        ];
    }
}
