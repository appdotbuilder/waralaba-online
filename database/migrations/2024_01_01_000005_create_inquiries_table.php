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
        Schema::create('inquiries', function (Blueprint $table) {
            $table->id();
            $table->string('name')->comment('Full name of inquirer');
            $table->string('email')->comment('Email address');
            $table->string('phone')->comment('Phone number');
            $table->string('location')->nullable()->comment('City or region of interest');
            $table->unsignedBigInteger('franchise_id')->nullable()->comment('Specific franchise of interest');
            $table->text('message')->comment('Inquiry message');
            $table->enum('status', ['pending', 'contacted', 'closed'])->default('pending')->comment('Inquiry status');
            $table->timestamps();
            
            // Foreign key constraint
            $table->foreign('franchise_id')->references('id')->on('franchises')->onDelete('set null');
            
            // Indexes for performance
            $table->index('status');
            $table->index('franchise_id');
            $table->index('created_at');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('inquiries');
    }
};