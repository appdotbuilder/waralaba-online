<?php

namespace Tests\Feature;

use App\Models\Franchise;
use App\Models\Testimonial;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class FranchiseTest extends TestCase
{
    use RefreshDatabase;

    public function test_welcome_page_displays_featured_franchises(): void
    {
        // Create some franchises
        $featuredFranchise = Franchise::factory()->featured()->create();
        $regularFranchise = Franchise::factory()->create(['is_featured' => false]);
        $testimonial = Testimonial::factory()->featured()->create();

        $response = $this->get('/');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => 
            $page->component('welcome')
                ->has('franchises', 1) // Should only show featured
                ->has('testimonials', 1)
                ->has('stats')
        );
    }

    public function test_franchise_index_page_displays_all_franchises(): void
    {
        Franchise::factory(3)->create();

        $response = $this->get('/franchises');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => 
            $page->component('franchises/index')
                ->has('franchises.data', 3)
                ->has('categories')
        );
    }

    public function test_franchise_show_page_displays_single_franchise(): void
    {
        $franchise = Franchise::factory()->create();
        Franchise::factory()->create(['category' => $franchise->category]); // Related franchise

        $response = $this->get("/franchises/{$franchise->id}");

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => 
            $page->component('franchises/show')
                ->where('franchise.id', $franchise->id)
                ->where('franchise.brand_name', $franchise->brand_name)
                ->has('relatedFranchises')
        );
    }

    public function test_inquiry_form_can_be_displayed(): void
    {
        $franchise = Franchise::factory()->create();

        $response = $this->get('/inquiry/create');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => 
            $page->component('inquiry/create')
                ->has('franchises', 1)
        );
    }

    public function test_inquiry_can_be_submitted(): void
    {
        $franchise = Franchise::factory()->create();

        $response = $this->post('/inquiry', [
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'phone' => '08123456789',
            'location' => 'Jakarta',
            'franchise_id' => $franchise->id,
            'message' => 'I am interested in this franchise opportunity.',
        ]);

        $response->assertRedirect();
        $response->assertSessionHas('success');

        $this->assertDatabaseHas('inquiries', [
            'name' => 'John Doe',
            'email' => 'john@example.com',
            'franchise_id' => $franchise->id,
        ]);
    }

    public function test_inquiry_validation_rules(): void
    {
        $response = $this->post('/inquiry', []);

        $response->assertSessionHasErrors(['name', 'email', 'phone', 'message']);
    }

    public function test_only_active_franchises_are_displayed(): void
    {
        Franchise::factory()->create(['is_active' => true]);
        Franchise::factory()->create(['is_active' => false]);

        $response = $this->get('/franchises');

        $response->assertStatus(200);
        $response->assertInertia(fn ($page) => 
            $page->has('franchises.data', 1) // Only active franchise
        );
    }
}