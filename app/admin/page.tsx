'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    // Redirecionar para agents como página padrão do admin
    router.push('/admin/agents');
  }, [router]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="text-white text-center">
        <div className="text-4xl mb-4">⚙️</div>
        <p className="text-xl">Carregando Admin Panel...</p>
      </div>
    </div>
  );
}
