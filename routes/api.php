<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\Auth\AuthController;

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

Route::post('/orders', \App\Http\Controllers\API\Order\StoreController::class);
Route::post('/products', \App\Http\Controllers\API\Product\IndexController::class);
Route::get('/products/filters', \App\Http\Controllers\API\Product\FilterListController::class);
Route::get('/products/{product}', \App\Http\Controllers\API\Product\ShowController::class);
Route::post('/products/{user}', \App\Http\Controllers\API\Order\ListOrdersController::class);

Route::group(['middleware' => 'api', 'prefix' => 'auth'], function($router) {
    Route::post('me', [App\Http\Controllers\API\Auth\AuthController::class, 'me']);
    Route::post('register', [App\Http\Controllers\API\Auth\AuthController::class, 'register']);
    Route::post('login', [App\Http\Controllers\API\Auth\AuthController::class, 'login']);
    Route::post('refresh', [App\Http\Controllers\API\Auth\AuthController::class, 'refresh']);
    Route::post('logout', [App\Http\Controllers\API\Auth\AuthController::class, 'logout']);
});

