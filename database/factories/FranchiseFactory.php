<?php

namespace Database\Factories;

use App\Models\Franchise;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Franchise>
 */
class FranchiseFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var class-string<\App\Models\Franchise>
     */
    protected $model = Franchise::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $categories = ['Food & Beverage', 'Fashion', 'Beauty & Health', 'Education', 'Services', 'Technology', 'Retail'];
        $category = fake()->randomElement($categories);
        
        $minInvestment = fake()->numberBetween(50, 500) * 1000000; // 50M - 500M
        $maxInvestment = $minInvestment + fake()->numberBetween(100, 300) * 1000000;

        return [
            'brand_name' => fake()->company(),
            'category' => $category,
            'short_description' => fake()->sentence(20),
            'full_description' => fake()->paragraphs(4, true),
            'image_url' => 'https://picsum.photos/400/300?random=' . fake()->numberBetween(1, 1000),
            'min_investment' => $minInvestment,
            'max_investment' => $maxInvestment,
            'franchise_fee' => fake()->numberBetween(25, 100) * 1000000,
            'royalty_fee' => fake()->randomFloat(1, 3, 8),
            'partnership_packages' => fake()->paragraphs(2, true),
            'potential_profits' => fake()->paragraphs(2, true),
            'support_provided' => fake()->paragraphs(3, true),
            'is_featured' => fake()->boolean(30), // 30% chance of being featured
            'is_active' => true,
        ];
    }

    /**
     * Indicate that the franchise is featured.
     */
    public function featured(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_featured' => true,
        ]);
    }

    /**
     * Indicate that the franchise is inactive.
     */
    public function inactive(): static
    {
        return $this->state(fn (array $attributes) => [
            'is_active' => false,
        ]);
    }
}