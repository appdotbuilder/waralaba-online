import React, { useState } from 'react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

interface Props {
  franchises: {
    data: Array<{
      id: number;
      brand_name: string;
      category: string;
      short_description: string;
      image_url: string | null;
      min_investment: number;
      max_investment: number;
      is_featured: boolean;
    }>;
    links: Array<{
      url: string | null;
      label: string;
      active: boolean;
    }>;
  };
  categories: string[];
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

export default function FranchiseIndex({ franchises, categories }: Props) {
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  return (
    <AppShell>
      <div className="space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-3xl font-bold text-gray-900">🏪 Katalog Franchise</h1>
          <p className="mt-2 text-gray-600">
            Temukan peluang bisnis franchise terbaik untuk Anda
          </p>
        </div>

        {/* Filters */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h2 className="text-lg font-semibold mb-4">Filter Kategori</h2>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === '' ? 'default' : 'outline'}
              size="sm"
              onClick={() => setSelectedCategory('')}
            >
              Semua
            </Button>
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                size="sm"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Franchise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {franchises.data
            .filter(franchise => !selectedCategory || franchise.category === selectedCategory)
            .map((franchise) => (
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
                    <span className="text-yellow-500 text-sm">⭐ Unggulan</span>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{franchise.brand_name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{franchise.short_description}</p>
                <div className="text-sm text-gray-500 mb-4">
                  💰 Modal: {formatCurrency(franchise.min_investment)} - {formatCurrency(franchise.max_investment)}
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

        {/* Empty State */}
        {franchises.data.filter(franchise => !selectedCategory || franchise.category === selectedCategory).length === 0 && (
          <div className="text-center py-12">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Tidak ada franchise ditemukan</h3>
            <p className="text-gray-600">Coba ubah filter atau lihat kategori lainnya</p>
          </div>
        )}

        {/* Pagination */}
        {franchises.links.length > 3 && (
          <div className="flex justify-center">
            <nav className="flex space-x-1">
              {franchises.links.map((link, index) => (
                <Link
                  key={index}
                  href={link.url || '#'}
                  className={`px-3 py-2 text-sm rounded-md ${
                    link.active
                      ? 'bg-blue-600 text-white'
                      : link.url
                      ? 'text-gray-700 hover:bg-gray-100'
                      : 'text-gray-400 cursor-not-allowed'
                  }`}
                  dangerouslySetInnerHTML={{ __html: link.label }}
                />
              ))}
            </nav>
          </div>
        )}
      </div>
    </AppShell>
  );
}