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
        Schema::create('franchises', function (Blueprint $table) {
            $table->id();
            $table->string('brand_name')->comment('Name of the franchise brand');
            $table->string('category')->comment('Industry category (food, beverage, services, etc.)');
            $table->text('short_description')->comment('Brief description for catalog display');
            $table->longText('full_description')->comment('Detailed description for detail page');
            $table->string('image_url')->nullable()->comment('Main franchise image');
            $table->decimal('min_investment', 15, 2)->comment('Minimum investment required');
            $table->decimal('max_investment', 15, 2)->comment('Maximum investment required');
            $table->decimal('franchise_fee', 15, 2)->nullable()->comment('Initial franchise fee');
            $table->decimal('royalty_fee', 5, 2)->nullable()->comment('Ongoing royalty fee percentage');
            $table->text('partnership_packages')->nullable()->comment('Available partnership packages');
            $table->text('potential_profits')->nullable()->comment('Estimated profit information');
            $table->text('support_provided')->nullable()->comment('Support offered by franchisor');
            $table->boolean('is_featured')->default(false)->comment('Whether franchise is featured');
            $table->boolean('is_active')->default(true)->comment('Whether franchise is active');
            $table->timestamps();
            
            // Indexes for performance
            $table->index('category');
            $table->index('is_featured');
            $table->index('is_active');
            $table->index(['is_active', 'is_featured']);
            $table->index(['category', 'is_active']);
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('franchises');
    }
};