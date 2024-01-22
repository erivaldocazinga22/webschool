<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->integer('processo')->unique();
            $table->string('identificacao', 255);
            $table->string('avatar_url', 255)->nullable();
            $table->string('name');
            $table->enum('sexo', ['M', 'F']);
            $table->string('email')->unique();
            $table->string('telefone', 255);
            $table->enum('nivel', ['1', '2', '3', '4']);
            $table->timestamp('email_verified_at')->nullable();
            $table->string('password');
            $table->rememberToken();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('users');
    }
};
