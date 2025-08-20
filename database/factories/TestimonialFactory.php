<?php

namespace Database\Factories;

use App\Models\Testimonial;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Testimonial>
 */
class TestimonialFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<\App\Models\Testimonial>
     */
    protected $model = Testimonial::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $categories = ['Food & Beverage', 'Fashion', 'Beauty & Health', 'Education', 'Services', 'Technology', 'Retail'];
        $names = [
            'Budi Santoso', 'Sari Dewi', 'Ahmad Rahman', 'Maya Sari', 'Eko Prasetyo',
            'Dewi Lestari', 'Roni Hidayat', 'Indira Putri', 'Agus Wijaya', 'Fitri Handayani'
        ];
        
        $cities = [
            'Jakarta', 'Surabaya', 'Bandung', 'Medan', 'Semarang',
            'Makassar', 'Palembang', 'Yogyakarta', 'Depok', 'Tangerang'
        ];

        return [
            'name' => fake()->randomElement($names),
            'business_name' => fake()->company() . ' ' . fake()->randomElement(['Outlet', 'Store', 'Cafe', 'Shop']),
            'franchise_category' => fake()->randomElement($categories),
            'testimonial' => fake()->paragraphs(2, true),
            'avatar_url' => 'https://ui-avatars.com/api/?name=' . urlencode(fake()->name()) . '&background=random',
            'location' => fake()->randomElement($cities),
            'rating' => fake()->numberBetween(4, 5),
            'is_featured' => fake()->boolean(40), // 40% chance of being featured
        ];
    }

    /**
     * Indicate that the testimonial is featured.
     */
    public function featured(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_featured' => true,
        ]);
    }
}