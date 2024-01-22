<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Professor>
 */
class ProfessorFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
           'id_user'=> User::all()->random()->id,
           'curso'=> $this->faker->randomElement(['Informatica', 'Bioquimica']),
           'classe' => $this->faker->numberBetween(7, 13),
           'turma'=> $this->faker->randomElement(['A', 'B', 'C'])
        ];
    }
}