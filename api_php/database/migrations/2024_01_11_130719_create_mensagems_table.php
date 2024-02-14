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
        Schema::create('mensagems', function (Blueprint $table) {
            $table->id();
            $table->foreignId('id_usuario')->unique()->constrained('users')->onDelete('cascade');
            $table->foreignId('id_chat')->unique()->constrained('chats')->onDelete('cascade');
            $table->text('texto')->nullable();
            $table->string('url_arquivo', 200)->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('mensagems');
    }
};
