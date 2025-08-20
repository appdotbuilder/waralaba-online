<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreInquiryRequest;
use App\Models\Inquiry;
use App\Models\Franchise;
use Inertia\Inertia;

class InquiryController extends Controller
{
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $franchises = Franchise::active()
            ->select('id', 'brand_name', 'category')
            ->orderBy('brand_name')
            ->get();

        return Inertia::render('inquiry/create', [
            'franchises' => $franchises
        ]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreInquiryRequest $request)
    {
        $inquiry = Inquiry::create($request->validated());

        return redirect()->back()->with('success', 'Terima kasih! Inquiry Anda telah dikirim. Tim kami akan menghubungi Anda segera.');
    }
}