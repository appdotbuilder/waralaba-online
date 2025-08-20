<?php

namespace Database\Factories;

use App\Models\Inquiry;
use App\Models\Franchise;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Inquiry>
 */
class InquiryFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<\App\Models\Inquiry>
     */
    protected $model = Inquiry::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $cities = [
            'Jakarta', 'Surabaya', 'Bandung', 'Medan', 'Semarang',
            'Makassar', 'Palembang', 'Yogyakarta', 'Depok', 'Tangerang'
        ];

        return [
            'name' => fake()->name(),
            'email' => fake()->safeEmail(),
            'phone' => fake()->phoneNumber(),
            'location' => fake()->randomElement($cities),
            'franchise_id' => Franchise::factory(),
            'message' => fake()->paragraphs(2, true),
            'status' => fake()->randomElement(['pending', 'contacted', 'closed']),
        ];
    }
}