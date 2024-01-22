<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Chat>
 */
class ChatFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'nome'=> $this->faker->randomElement(['TI12C-Matematica', 'TI12C-Fisica', 'TI11C-Quimica', 'BQ12C-Biologia', 'TI12C-Seac', 'TI10C-Tlp']),
            'curso'=> $this->faker->randomElement(['Informatica', 'Bioquimica']),
            'classe' => $this->faker->numberBetween(10, 13),
            'turma'=> $this->faker->randomElement(['A', 'B', 'C']),
            'disciplina' => $this->faker->randomElement(['Matematica', 'Fisica', 'Quimica', 'Biologia', 'Seac', 'Tlp']),
            'url_arquivo' => $this->faker->randomElement(['https://github.com/EmenegildoMarques.png','https://github.com/erivaldocazinga22.png']),

        ];
    }
}
