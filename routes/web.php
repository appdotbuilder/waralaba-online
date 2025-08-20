<?php

use App\Http\Controllers\FranchiseController;
use App\Http\Controllers\InquiryController;
use App\Models\Franchise;
use App\Models\Testimonial;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/health-check', function () {
    return response()->json([
        'status' => 'ok',
        'timestamp' => now()->toISOString(),
    ]);
})->name('health-check');

Route::get('/', function () {
    $franchises = Franchise::active()->featured()->limit(6)->get();
    $testimonials = Testimonial::featured()->limit(3)->get();
    $stats = [
        'total_franchises' => Franchise::active()->count(),
        'total_categories' => Franchise::active()->distinct('category')->count('category'),
        'total_partners' => Testimonial::count(),
    ];
    
    return Inertia::render('welcome', [
        'franchises' => $franchises,
        'testimonials' => $testimonials,
        'stats' => $stats,
    ]);
})->name('home');

// Public routes for franchise catalog
Route::resource('franchises', FranchiseController::class)->only(['index', 'show']);
Route::resource('inquiry', InquiryController::class)->only(['create', 'store']);

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
