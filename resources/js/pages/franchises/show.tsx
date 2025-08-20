import React from 'react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

interface Props {
  franchise: {
    id: number;
    brand_name: string;
    category: string;
    short_description: string;
    full_description: string;
    image_url: string | null;
    min_investment: number;
    max_investment: number;
    franchise_fee: number | null;
    royalty_fee: number | null;
    partnership_packages: string | null;
    potential_profits: string | null;
    support_provided: string | null;
    is_featured: boolean;
  };
  relatedFranchises: Array<{
    id: number;
    brand_name: string;
    category: string;
    short_description: string;
    image_url: string | null;
    min_investment: number;
    max_investment: number;
  }>;
  [key: string]: unknown;
}

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
};

export default function FranchiseShow({ franchise, relatedFranchises }: Props) {
  return (
    <AppShell>
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Breadcrumb */}
        <nav className="flex items-center space-x-2 text-sm text-gray-500">
          <Link href="/" className="hover:text-gray-700">Home</Link>
          <span>/</span>
          <Link href="/franchises" className="hover:text-gray-700">Franchise</Link>
          <span>/</span>
          <span className="text-gray-900">{franchise.brand_name}</span>
        </nav>

        {/* Header */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-4">
                {franchise.image_url ? (
                  <img 
                    src={franchise.image_url} 
                    alt={franchise.brand_name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <span className="text-6xl">🏪</span>
                  </div>
                )}
              </div>
            </div>
            
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                  {franchise.category}
                </span>
                {franchise.is_featured && (
                  <span className="inline-block px-3 py-1 bg-yellow-100 text-yellow-800 text-sm rounded-full">
                    ⭐ Unggulan
                  </span>
                )}
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 mb-4">{franchise.brand_name}</h1>
              <p className="text-lg text-gray-600 mb-6">{franchise.short_description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-sm text-blue-600 font-medium">Modal Investasi</div>
                  <div className="text-lg font-semibold text-blue-900">
                    {formatCurrency(franchise.min_investment)} - {formatCurrency(franchise.max_investment)}
                  </div>
                </div>
                {franchise.franchise_fee && (
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-sm text-green-600 font-medium">Biaya Franchise</div>
                    <div className="text-lg font-semibold text-green-900">
                      {formatCurrency(franchise.franchise_fee)}
                    </div>
                  </div>
                )}
              </div>

              {franchise.royalty_fee && (
                <div className="mb-6">
                  <span className="text-sm text-gray-500">Royalty Fee: </span>
                  <span className="text-lg font-semibold text-gray-900">{franchise.royalty_fee}%</span>
                </div>
              )}
              
              <Link href="/inquiry" className="w-full">
                <Button size="lg" className="w-full">
                  💬 Konsultasi Sekarang
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">📋 Deskripsi Lengkap</h2>
          <div className="prose max-w-none text-gray-600">
            {franchise.full_description.split('\n').map((paragraph, index) => (
              <p key={index} className="mb-4">{paragraph}</p>
            ))}
          </div>
        </div>

        {/* Partnership Packages */}
        {franchise.partnership_packages && (
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">📦 Paket Kemitraan</h2>
            <div className="text-gray-600">
              {franchise.partnership_packages.split('\n').map((line, index) => (
                <p key={index} className="mb-2">{line}</p>
              ))}
            </div>
          </div>
        )}

        {/* Potential Profits */}
        {franchise.potential_profits && (
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">💰 Potensi Keuntungan</h2>
            <div className="text-gray-600">
              {franchise.potential_profits.split('\n').map((line, index) => (
                <p key={index} className="mb-2">{line}</p>
              ))}
            </div>
          </div>
        )}

        {/* Support Provided */}
        {franchise.support_provided && (
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">🤝 Dukungan yang Diberikan</h2>
            <div className="text-gray-600">
              {franchise.support_provided.split('\n').map((line, index) => (
                <p key={index} className="mb-2">{line}</p>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl font-bold mb-4">Tertarik dengan {franchise.brand_name}?</h2>
          <p className="text-lg mb-6 opacity-90">
            Dapatkan informasi lengkap dan konsultasi gratis dengan tim expert kami
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/inquiry">
              <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                💬 Konsultasi Gratis
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-blue-600">
              📞 Hubungi: (021) 1234-5678
            </Button>
          </div>
        </div>

        {/* Related Franchises */}
        {relatedFranchises.length > 0 && (
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">🔗 Franchise Sejenis</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedFranchises.map((related) => (
                <div key={related.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                  <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden mb-3">
                    {related.image_url ? (
                      <img 
                        src={related.image_url} 
                        alt={related.brand_name}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-gray-400">
                        <span className="text-2xl">🏪</span>
                      </div>
                    )}
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2">{related.brand_name}</h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{related.short_description}</p>
                  <div className="text-xs text-gray-500 mb-3">
                    {formatCurrency(related.min_investment)} - {formatCurrency(related.max_investment)}
                  </div>
                  <Link href={`/franchises/${related.id}`}>
                    <Button size="sm" className="w-full">
                      Lihat Detail
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </AppShell>
  );
}