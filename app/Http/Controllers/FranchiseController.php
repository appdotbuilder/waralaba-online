<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Franchise;
use Inertia\Inertia;

class FranchiseController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $franchises = Franchise::active()
            ->latest()
            ->paginate(12);

        $categories = Franchise::active()
            ->select('category')
            ->distinct()
            ->orderBy('category')
            ->pluck('category');

        return Inertia::render('franchises/index', [
            'franchises' => $franchises,
            'categories' => $categories
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Franchise $franchise)
    {
        // Load the franchise with related inquiries count
        $franchise->loadCount('inquiries');

        // Get related franchises in the same category
        $relatedFranchises = Franchise::active()
            ->byCategory($franchise->category)
            ->where('id', '!=', $franchise->id)
            ->limit(3)
            ->get();

        return Inertia::render('franchises/show', [
            'franchise' => $franchise,
            'relatedFranchises' => $relatedFranchises
        ]);
    }
}