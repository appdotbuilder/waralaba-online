<?php

namespace Database\Seeders;

use App\Models\Franchise;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class FranchiseSeeder extends Seeder
{
    /**
     * Run the database seeder.
     */
    public function run(): void
    {
        // Create sample franchises with realistic Indonesian brands
        $franchises = [
            [
                'brand_name' => 'Ayam Geprek Bensu',
                'category' => 'Food & Beverage',
                'short_description' => 'Waralaba ayam geprek dengan cita rasa pedas yang menggugah selera, cocok untuk segala usia.',
                'full_description' => 'Ayam Geprek Bensu adalah waralaba makanan yang menyajikan ayam geprek dengan berbagai tingkat kepedasan. Konsep yang simple namun menguntungkan dengan target market yang luas dari anak muda hingga keluarga. Menu unggulan termasuk ayam geprek original, ayam geprek keju, dan berbagai minuman segar.',
                'image_url' => 'https://picsum.photos/400/300?random=1',
                'min_investment' => 75000000,
                'max_investment' => 150000000,
                'franchise_fee' => 35000000,
                'royalty_fee' => 5.0,
                'partnership_packages' => 'Paket Reguler: Rp 75 juta (booth kecil)\nPaket Standard: Rp 100 juta (outlet sedang)\nPaket Premium: Rp 150 juta (outlet besar dengan seating area)',
                'potential_profits' => 'Omzet harian: Rp 2-5 juta\nProfit margin: 25-35%\nROI: 12-18 bulan\nBreak even point: 8-12 bulan',
                'support_provided' => 'Training lengkap untuk owner dan staff\nSupply bahan baku berkualitas\nMarketing support dan promosi\nOperational guidance\nDesign outlet dan branding',
                'is_featured' => true,
                'is_active' => true,
            ],
            [
                'brand_name' => 'Kopi Kenangan',
                'category' => 'Food & Beverage',
                'short_description' => 'Brand kopi lokal terdepan dengan konsep modern dan harga terjangkau untuk semua kalangan.',
                'full_description' => 'Kopi Kenangan adalah waralaba minuman kopi yang telah terbukti sukses di pasar Indonesia. Dengan konsep grab-and-go yang praktis dan menu kopi berkualitas dengan harga affordable, brand ini sangat diminati anak muda dan pekerja kantoran.',
                'image_url' => 'https://picsum.photos/400/300?random=2',
                'min_investment' => 200000000,
                'max_investment' => 400000000,
                'franchise_fee' => 75000000,
                'royalty_fee' => 6.0,
                'partnership_packages' => 'Kiosk Package: Rp 200 juta\nCafe Package: Rp 300 juta\nDrive-Thru Package: Rp 400 juta',
                'potential_profits' => 'Omzet harian: Rp 5-15 juta\nProfit margin: 30-40%\nROI: 18-24 bulan',
                'support_provided' => 'Brand licensing dan marketing support\nTraining barista profesional\nSupply chain management\nOperational system dan SOP\nTechnical support',
                'is_featured' => true,
                'is_active' => true,
            ],
            [
                'brand_name' => 'Laundry Kiloan Express',
                'category' => 'Services',
                'short_description' => 'Bisnis laundry kiloan dengan sistem express dan layanan antar-jemput yang menguntungkan.',
                'full_description' => 'Waralaba laundry kiloan dengan konsep modern dan sistem manajemen yang terintegrasi. Melayani cuci kiloan, cuci satuan, dan layanan premium seperti dry cleaning. Cocok untuk daerah perumahan dan area perkantoran.',
                'image_url' => 'https://picsum.photos/400/300?random=3',
                'min_investment' => 85000000,
                'max_investment' => 180000000,
                'franchise_fee' => 25000000,
                'royalty_fee' => 4.0,
                'partnership_packages' => 'Basic Package: Rp 85 juta (mesin 2 unit)\nStandard Package: Rp 120 juta (mesin 3 unit)\nPremium Package: Rp 180 juta (mesin 5 unit + dryer)',
                'potential_profits' => 'Omzet harian: Rp 1.5-4 juta\nProfit margin: 35-45%\nROI: 10-15 bulan',
                'support_provided' => 'Pelatihan teknis dan manajemen\nSoftware management terintegrasi\nSOP operasional lengkap\nSupport marketing dan promosi\nSupply detergent dan chemical',
                'is_featured' => false,
                'is_active' => true,
            ]
        ];

        foreach ($franchises as $franchise) {
            Franchise::create($franchise);
        }

        // Create additional random franchises
        Franchise::factory(15)->create();
    }
}