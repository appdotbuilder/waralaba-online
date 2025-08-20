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
        Schema::create('testimonials', function (Blueprint $table) {
            $table->id();
            $table->string('name')->comment('Name of the person giving testimonial');
            $table->string('business_name')->comment('Name of their franchise business');
            $table->string('franchise_category')->comment('Category of franchise they joined');
            $table->text('testimonial')->comment('The testimonial content');
            $table->string('avatar_url')->nullable()->comment('Profile image URL');
            $table->string('location')->nullable()->comment('Business location');
            $table->integer('rating')->default(5)->comment('Rating out of 5 stars');
            $table->boolean('is_featured')->default(false)->comment('Whether testimonial is featured');
            $table->timestamps();
            
            // Indexes for performance
            $table->index('is_featured');
            $table->index('franchise_category');
            $table->index('rating');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('testimonials');
    }
};