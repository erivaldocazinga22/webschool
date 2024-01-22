<?php

use App\Http\Controllers\AlunoController;
use App\Http\Controllers\ProfessorController;
use App\Http\Controllers\AuthController;
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

Route::get('/dashboard/usuarios', [UserController::class, 'index'])->name('usuario.index');
Route::middleware('auth:sanctum')->group(function (){
    Route::post('/dashboard/usuarios', [UserController::class, 'store']);
    Route::get('/dashboard/usuarios/{id}', [UserController::class, 'show'])->name('dashboard.show');
    Route::get('dashboard/alunos', [AlunoController::class, 'index'])->middleware('auth:sanctum');
    Route::get('dashboard/professores', [ProfessorController::class, 'index']);
    Route::get('dashboard/professores/{id}', [ProfessorController::class, 'show']);
    Route::post('dashboard/alunos', [AlunoController::class, 'store'])->middleware('auth:sanctum');
    Route::get('dashboard/alunos/{id}', [AlunoController::class, 'show']);
});
