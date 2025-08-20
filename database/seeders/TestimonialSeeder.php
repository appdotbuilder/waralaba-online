<?php

namespace Database\Seeders;

use App\Models\Testimonial;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class TestimonialSeeder extends Seeder
{
    /**
     * Run the database seeder.
     */
    public function run(): void
    {
        $testimonials = [
            [
                'name' => 'Budi Santoso',
                'business_name' => 'Ayam Geprek Bensu Kelapa Gading',
                'franchise_category' => 'Food & Beverage',
                'testimonial' => 'Bergabung dengan Ayam Geprek Bensu adalah keputusan terbaik saya. Dalam 8 bulan, modal sudah kembali dan sekarang profit konsisten Rp 8-12 juta per bulan. Support dari tim sangat membantu, mulai dari training sampai supply bahan baku yang selalu on-time.',
                'avatar_url' => 'https://ui-avatars.com/api/?name=Budi+Santoso&background=3b82f6&color=fff',
                'location' => 'Jakarta',
                'rating' => 5,
                'is_featured' => true,
            ],
            [
                'name' => 'Sari Dewi',
                'business_name' => 'Kopi Kenangan Sudirman',
                'franchise_category' => 'Food & Beverage',
                'testimonial' => 'Sebagai ibu rumah tangga yang ingin berbisnis, Kopi Kenangan memberikan sistem yang mudah dipahami. Omzet harian sudah mencapai Rp 10 juta dengan profit margin yang sangat memuaskan. Tim support juga sangat responsif membantu operational issues.',
                'avatar_url' => 'https://ui-avatars.com/api/?name=Sari+Dewi&background=ef4444&color=fff',
                'location' => 'Jakarta',
                'rating' => 5,
                'is_featured' => true,
            ],
            [
                'name' => 'Ahmad Rahman',
                'business_name' => 'Laundry Express Bandung',
                'franchise_category' => 'Services',
                'testimonial' => 'Bisnis laundry ternyata sangat profitable! Dengan modal Rp 120 juta, sekarang omzet bulanan sudah Rp 45 juta dengan profit bersih sekitar Rp 18 juta. Software management-nya memudahkan tracking customer dan inventory.',
                'avatar_url' => 'https://ui-avatars.com/api/?name=Ahmad+Rahman&background=10b981&color=fff',
                'location' => 'Bandung',
                'rating' => 5,
                'is_featured' => true,
            ]
        ];

        foreach ($testimonials as $testimonial) {
            Testimonial::create($testimonial);
        }

        // Create additional random testimonials
        Testimonial::factory(8)->create();
    }
}