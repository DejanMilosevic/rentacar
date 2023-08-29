<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BrandController;
use App\Http\Controllers\CarController;
use App\Http\Controllers\RentalController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

// Car routes
Route::get('/cars', [CarController::class, 'index']);
Route::post('/cars', [CarController::class, 'store'])->middleware('auth:sanctum');;
Route::put('/cars/{car}', [CarController::class, 'update'])->middleware('auth:sanctum');;
Route::delete('/cars/{id}', [CarController::class, 'destroy'])->middleware('auth:sanctum');;

// Brand routes
Route::get('/brands', [BrandController::class, 'index']);

// Rental routes
Route::get('/rentals', [RentalController::class, 'index']);
Route::post('/rentals', [RentalController::class, 'store'])->middleware('auth:sanctum');;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::post('/logout', [AuthController::class, 'logout'])->middleware('auth:sanctum');