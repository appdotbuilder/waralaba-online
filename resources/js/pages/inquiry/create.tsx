import React from 'react';
import { AppShell } from '@/components/app-shell';
import { Button } from '@/components/ui/button';
import { useForm } from '@inertiajs/react';
import InputError from '@/components/input-error';

interface Props {
  franchises: Array<{
    id: number;
    brand_name: string;
    category: string;
  }>;
  [key: string]: unknown;
}

export default function InquiryCreate({ franchises }: Props) {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    email: '',
    phone: '',
    location: '',
    franchise_id: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post('/inquiry', {
      onSuccess: () => reset(),
    });
  };

  return (
    <AppShell>
      <div className="max-w-2xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">💬 Konsultasi Gratis</h1>
          <p className="mt-2 text-gray-600">
            Dapatkan informasi lengkap dan konsultasi dari tim expert kami
          </p>
        </div>

        {/* Benefits */}
        <div className="bg-blue-50 rounded-lg p-6">
          <h2 className="font-semibold text-blue-900 mb-3">✨ Yang Akan Anda Dapatkan:</h2>
          <ul className="space-y-2 text-blue-800">
            <li className="flex items-center space-x-2">
              <span>✓</span>
              <span>Konsultasi gratis dengan ahli franchise</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>✓</span>
              <span>Analisis kelayakan bisnis</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>✓</span>
              <span>Rekomendasi franchise sesuai budget</span>
            </li>
            <li className="flex items-center space-x-2">
              <span>✓</span>
              <span>Panduan langkah memulai bisnis</span>
            </li>
          </ul>
        </div>

        {/* Form */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Nama Lengkap *
              </label>
              <input
                type="text"
                id="name"
                value={data.name}
                onChange={(e) => setData('name', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Masukkan nama lengkap Anda"
              />
              <InputError message={errors.name} />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  value={data.email}
                  onChange={(e) => setData('email', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="nama@email.com"
                />
                <InputError message={errors.email} />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Nomor Telepon *
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={data.phone}
                  onChange={(e) => setData('phone', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="08123456789"
                />
                <InputError message={errors.phone} />
              </div>
            </div>

            <div>
              <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                Lokasi Bisnis (Opsional)
              </label>
              <input
                type="text"
                id="location"
                value={data.location}
                onChange={(e) => setData('location', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Jakarta, Bandung, Surabaya, dll"
              />
              <InputError message={errors.location} />
            </div>

            <div>
              <label htmlFor="franchise_id" className="block text-sm font-medium text-gray-700 mb-1">
                Franchise yang Diminati (Opsional)
              </label>
              <select
                id="franchise_id"
                value={data.franchise_id}
                onChange={(e) => setData('franchise_id', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Pilih franchise (opsional)</option>
                {franchises.map((franchise) => (
                  <option key={franchise.id} value={franchise.id.toString()}>
                    {franchise.brand_name} - {franchise.category}
                  </option>
                ))}
              </select>
              <InputError message={errors.franchise_id} />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Pesan / Pertanyaan *
              </label>
              <textarea
                id="message"
                rows={5}
                value={data.message}
                onChange={(e) => setData('message', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Ceritakan tentang rencana bisnis Anda, budget yang tersedia, atau pertanyaan lainnya..."
              />
              <InputError message={errors.message} />
            </div>

            <Button 
              type="submit" 
              size="lg" 
              className="w-full"
              disabled={processing}
            >
              {processing ? 'Mengirim...' : '📤 Kirim Konsultasi'}
            </Button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-gray-50 rounded-lg p-6">
          <h2 className="font-semibold text-gray-900 mb-4">📞 Atau Hubungi Langsung</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl mb-2">📞</div>
              <div className="font-medium text-gray-900">Telepon</div>
              <div className="text-sm text-gray-600">(021) 1234-5678</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl mb-2">💬</div>
              <div className="font-medium text-gray-900">WhatsApp</div>
              <div className="text-sm text-gray-600">0812-3456-7890</div>
            </div>
            <div className="bg-white p-4 rounded-lg">
              <div className="text-2xl mb-2">📧</div>
              <div className="font-medium text-gray-900">Email</div>
              <div className="text-sm text-gray-600">info@waralabaonline.com</div>
            </div>
          </div>
        </div>

        {/* FAQ Mini */}
        <div className="bg-white rounded-lg shadow-sm border p-6">
          <h2 className="font-semibold text-gray-900 mb-4">❓ Pertanyaan Umum</h2>
          <div className="space-y-3">
            <div>
              <div className="font-medium text-gray-900 text-sm">Berapa lama proses konsultasi?</div>
              <div className="text-sm text-gray-600">Tim kami akan menghubungi Anda dalam 1x24 jam untuk konsultasi awal selama 15-30 menit.</div>
            </div>
            <div>
              <div className="font-medium text-gray-900 text-sm">Apakah konsultasi benar-benar gratis?</div>
              <div className="text-sm text-gray-600">Ya, konsultasi awal 100% gratis tanpa ada biaya tersembunyi.</div>
            </div>
            <div>
              <div className="font-medium text-gray-900 text-sm">Apa yang harus saya siapkan?</div>
              <div className="text-sm text-gray-600">Siapkan informasi tentang budget, lokasi yang diinginkan, dan jenis bisnis yang diminati.</div>
            </div>
          </div>
        </div>
      </div>
    </AppShell>
  );
}