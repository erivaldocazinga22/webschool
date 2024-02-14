<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\User>
 */
class UserFactory extends Factory
{
    /**
     * The current password being used by the factory.
     */
    protected static ?string $password;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'processo' => $this->faker->numberBetween(500, 1000),
            'identificacao' => $this->faker->randomElement(['BI','PASSAPORT']),
            'avatar_url'=> $this->faker->randomElement(['https://github.com/EmenegildoMarques.png','https://github.com/erivaldocazinga22.png']),
            'name' => fake()->name(),
            'sexo'=>$this->faker->randomElement(['F','M']),
            'email' => fake()->unique()->safeEmail(),
            'data_nascimento' => $this->faker->dateTimeBetween('-30 years', '-10 years'),
            'telefone' => $this->faker->randomElement(['93599315','923778736','935555500','900000000']),
            'nivel' => $this->faker->randomElement(['2','3']),
            'email_verified_at' => now(),
            'password' => static::$password ??= Hash::make('password'),
            'remember_token' => Str::random(10),
        ];
    }

    /**
     * Indicate that the model's email address should be unverified.
     */
    public function unverified(): static
    {
        return $this->state(fn (array $attributes) => [
            'email_verified_at' => null,
        ]);
    }
}
