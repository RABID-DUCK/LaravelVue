<?php

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

<<<<<<< HEAD
Route::post('/orders', \App\Http\Controllers\API\Order\StoreController::class);
Route::post('/products', \App\Http\Controllers\API\Product\IndexController::class);
=======
    Route::post('/products', \App\Http\Controllers\API\Product\IndexController::class);
>>>>>>> parent of aaf358a (project unification)
Route::get('/products/filters', \App\Http\Controllers\API\Product\FilterListController::class);
Route::get('/products/{product}', \App\Http\Controllers\API\Product\ShowController::class);
