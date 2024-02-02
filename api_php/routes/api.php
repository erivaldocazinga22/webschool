<?php

use App\Http\Controllers\AlunoController;
use App\Http\Controllers\ProfessorController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ChatController;
use App\Http\Controllers\DisciplinaController;
use App\Http\Controllers\PublicacaoController;
use App\Http\Controllers\UploadController;
use App\Http\Controllers\UserController;
use App\Models\Professor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/login', [AuthController::class, 'login']);
Route::post('/validate', [AuthController::class, 'valida']);


Route::middleware('auth:sanctum')->group(function (){

    Route::get('/dashboard/usuarios', [UserController::class, 'index'])->name('usuario.index');
    Route::get('/dashboard/usuarios/{id}', [UserController::class, 'show'])->name('dashboard.show');
    Route::get('dashboard/professores', [ProfessorController::class, 'index']);
    Route::get('dashboard/professores/{id}', [ProfessorController::class, 'show']);
    Route::post('dashboard/alunos', [AlunoController::class, 'store']);
    Route::get('dashboard/alunos/{id}', [AlunoController::class, 'show']);
    Route::get('dashboard/alunos', [AlunoController::class, 'index']);
    Route::post('/dashboard/usuarios', [UserController::class, 'store']);
    Route::resource('/publicacaos', PublicacaoController::class);
    Route::resource('/dashboard/disciplinas', DisciplinaController::class);
    Route::resource('/chats', ChatController::class);
    Route::resource('/uploads', UploadController::class);

});


