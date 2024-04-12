<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UserPreferencesController;
use App\Http\Controllers\NewsArticleController;

Route::post('/register', [AuthController::class, 'register']);
Route::post('/login', [AuthController::class, 'login']);
Route::middleware('auth:api')->group(function () {
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::post('/user/preferences', [UserPreferencesController::class, 'update']);
    Route::get('/user/preferences', [UserPreferencesController::class, 'index']);

    Route::get('/articles', [NewsArticleController::class, 'index']);
    Route::get('/articles/category/{category}/{date}/{source}', [NewsArticleController::class, 'getNewsByCategory']);
    Route::get('/articles/search/{search}/{date}/{source}', [NewsArticleController::class, 'getNewsBySearch']);
    Route::get('/articles/{article}', [NewsArticleController::class, 'show']);
    Route::post('/articles', [NewsArticleController::class, 'store']);
    Route::put('/articles/{article}', [NewsArticleController::class, 'update']);
    Route::delete('/articles/{article}', [NewsArticleController::class, 'destroy']);
});


