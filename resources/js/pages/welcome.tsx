import React from 'react';
import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

interface Props {
  franchises: Array<{
    id: number;
    brand_name: string;
    category: string;
    short_description: string;
    image_url: string | null;
    min_investment: number;
    max_investment: number;
    is_featured: boolean;
  }>;
  testimonials: Array<{
    id: number;
    name: string;
    business_name: string;
    testimonial: string;
    rating: number;
    location: string | null;
  }>;
  stats: {
    total_franchises: number;
    total_categories: number;
    total_partners: number;
  };
  [key: string]: unknown;
}

const features = [
  {
    icon: '🏪',
    title: 'Katalog Franchise Lengkap',
    description: 'Temukan berbagai pilihan franchise dari berbagai industri dengan informasi lengkap dan terpercaya.'
  },
  {
    icon: '💰',
    title: 'Investasi Terjangkau',
    description: 'Pilihan modal mulai dari puluhan juta hingga miliaran rupiah sesuai kemampuan Anda.'
  },
  {
    icon: '📈',
    title: 'Profit Terbukti',
    description: 'Model bisnis yang sudah teruji dengan potensi keuntungan yang menarik dan sustainable.'
  },
  {
    icon: '🤝',
    title: 'Dukungan Penuh',
    description: 'Training, marketing support, dan operational guidance untuk kesuksesan bisnis Anda.'
  }
];

const steps = [
  {
    step: '1',
    title: 'Pilih Franchise',
    description: 'Jelajahi katalog dan temukan franchise yang sesuai dengan passion dan budget Anda.'
  },
  {
    step: '2',
    title: 'Konsultasi',
    description: 'Hubungi tim kami untuk mendapatkan informasi detail dan konsultasi gratis.'
  },
  {
    step: '3',
    title: 'Investment',
    description: 'Lakukan investasi dan mulai proses kemitraan dengan franchisor pilihan.'
  },
  {
    step: '4',
    title: 'Launch Business',
    description: 'Dapatkan training lengkap dan support untuk membuka bisnis franchise Anda.'
  }
];

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

export default function Welcome({ franchises, testimonials, stats }: Props) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">W</span>
              </div>
              <span className="text-xl font-bold text-gray-900">WaralabaOnline.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/login"
                className="text-gray-600 hover:text-gray-900 transition-colors"
              >
                Masuk
              </Link>
              <Link href="/register">
                <Button size="sm">
                  Daftar Gratis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              🚀 Wujudkan Impian Bisnis
              <br />
              <span className="text-blue-600">Bersama Franchise Terpercaya</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Platform terlengkap untuk menemukan peluang franchise terbaik di Indonesia. 
              Mulai bisnis dengan konsep yang sudah terbukti sukses dan dapatkan dukungan penuh dari franchisor berpengalaman.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{stats.total_franchises}+</div>
                <div className="text-gray-600">Brand Franchise</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{stats.total_categories}+</div>
                <div className="text-gray-600">Kategori Bisnis</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{stats.total_partners}+</div>
                <div className="text-gray-600">Mitra Sukses</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/franchises">
                <Button size="lg" className="w-full sm:w-auto">
                  🔍 Jelajahi Franchise
                </Button>
              </Link>
              <Link href="/inquiry">
                <Button variant="outline" size="lg" className="w-full sm:w-auto">
                  💬 Konsultasi Gratis
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Franchises */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">⭐ Franchise Unggulan</h2>
            <p className="text-lg text-gray-600">Pilihan franchise terpopuler dengan track record terbaik</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {franchises.slice(0, 6).map((franchise) => (
              <div key={franchise.id} className="bg-white border rounded-xl shadow-sm hover:shadow-lg transition-shadow overflow-hidden">
                <div className="aspect-video bg-gray-100 overflow-hidden">
                  {franchise.image_url ? (
                    <img 
                      src={franchise.image_url} 
                      alt={franchise.brand_name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                      <span className="text-4xl">🏪</span>
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                      {franchise.category}
                    </span>
                    {franchise.is_featured && (
                      <span className="text-yellow-500">⭐</span>
                    )}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{franchise.brand_name}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">{franchise.short_description}</p>
                  <div className="text-sm text-gray-500 mb-4">
                    Modal: {formatCurrency(franchise.min_investment)} - {formatCurrency(franchise.max_investment)}
                  </div>
                  <Link href={`/franchises/${franchise.id}`}>
                    <Button className="w-full" size="sm">
                      Lihat Detail
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/franchises">
              <Button variant="outline" size="lg">
                Lihat Semua Franchise →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">🎯 Mengapa Pilih WaralabaOnline?</h2>
            <p className="text-lg text-gray-600">Keunggulan platform yang memudahkan perjalanan bisnis Anda</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center bg-white p-8 rounded-xl shadow-sm">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">📋 Cara Memulai Bisnis Franchise</h2>
            <p className="text-lg text-gray-600">Langkah mudah untuk memulai perjalanan bisnis Anda</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">💬 Kisah Sukses Mitra Kami</h2>
            <p className="text-lg text-gray-600">Testimoni nyata dari para entrepreneur yang telah bergabung</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow-sm">
                <div className="flex items-center mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    {Array(testimonial.rating).fill(0).map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.testimonial}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.business_name}</div>
                  {testimonial.location && (
                    <div className="text-sm text-gray-500">📍 {testimonial.location}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">❓ Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Pertanyaan yang sering diajukan seputar franchise</p>
          </div>
          
          <div className="space-y-6">
            {[
              {
                q: "Berapa modal minimum untuk memulai franchise?",
                a: "Modal minimum bervariasi tergantung jenis franchise, mulai dari Rp 50 juta hingga ratusan juta. Kami menyediakan pilihan franchise untuk berbagai budget."
              },
              {
                q: "Apakah ada jaminan keuntungan dalam bisnis franchise?",
                a: "Meskipun franchise memiliki model bisnis yang terbukti, keuntungan tetap tergantung pada eksekusi, lokasi, dan dedikasi Anda sebagai franchisee."
              },
              {
                q: "Dukungan apa saja yang diberikan oleh franchisor?",
                a: "Dukungan meliputi training, supply bahan baku, marketing support, operational guidance, dan technical support berkelanjutan."
              },
              {
                q: "Bagaimana cara memilih franchise yang tepat?",
                a: "Pertimbangkan passion Anda, budget yang tersedia, analisis pasar lokasi, dan track record franchisor. Tim kami siap membantu konsultasi gratis."
              }
            ].map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6">
                <h3 className="font-semibold text-gray-900 mb-2">{faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">🎯 Siap Memulai Bisnis Franchise?</h2>
          <p className="text-xl mb-8 opacity-90">
            Bergabunglah dengan ribuan entrepreneur sukses lainnya. 
            Konsultasi gratis dengan tim expert kami sekarang juga!
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/inquiry">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                💬 Konsultasi Sekarang
              </Button>
            </Link>
            <Link href="/franchises">
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-600">
                🔍 Lihat Katalog Franchise
              </Button>
            </Link>
          </div>
          
          <div className="mt-8 text-sm opacity-80">
            📞 Hubungi kami: (021) 1234-5678 | 📧 info@waralabaonline.com
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">W</span>
                </div>
                <span className="text-xl font-bold">WaralabaOnline.com</span>
              </div>
              <p className="text-gray-400">
                Platform terdepan untuk menemukan peluang franchise terbaik di Indonesia.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Franchise</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/franchises" className="hover:text-white transition-colors">Katalog Franchise</Link></li>
                <li><Link href="/franchises?category=Food & Beverage" className="hover:text-white transition-colors">Food & Beverage</Link></li>
                <li><Link href="/franchises?category=Services" className="hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/franchises?category=Retail" className="hover:text-white transition-colors">Retail</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link href="/inquiry" className="hover:text-white transition-colors">Konsultasi</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">FAQ</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Panduan</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Kontak</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Kontak</h4>
              <div className="text-gray-400 space-y-2">
                <div>📞 (021) 1234-5678</div>
                <div>📧 info@waralabaonline.com</div>
                <div>📍 Jakarta, Indonesia</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 WaralabaOnline.com. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}