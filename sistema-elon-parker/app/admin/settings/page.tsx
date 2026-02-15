'use client';

import { useState } from 'react';

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    systemName: 'Elon System',
    autoSync: true,
    trelloSync: true,
    emailNotifications: true,
    darkMode: true,
    consolidationTime: '23:00',
  });

  const [saved, setSaved] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setSettings((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
    setSaved(false);
  };

  const handleSave = async () => {
    try {
      // Simulado - substituir com API real
      console.log('Salvando configurações:', settings);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    } catch (error) {
      console.error('Failed to save settings:', error);
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-8">⚙️ Configurações do Sistema</h1>

      {saved && (
        <div className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-300">
          ✓ Configurações salvas com sucesso!
        </div>
      )}

      <div className="space-y-6">
        {/* General Settings */}
        <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Configurações Gerais</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-slate-300 text-sm font-medium mb-2">
                Nome do Sistema
              </label>
              <input
                type="text"
                name="systemName"
                value={settings.systemName}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-slate-900/50 border border-slate-600/50 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-blue-500/50"
              />
            </div>

            <div>
              <label className="block text-slate-300 text-sm font-medium mb-2">
                Hora da Consolidação Diária
              </label>
              <input
                type="time"
                name="consolidationTime"
                value={settings.consolidationTime}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-slate-900/50 border border-slate-600/50 rounded-lg text-white focus:outline-none focus:border-blue-500/50"
              />
            </div>
          </div>
        </div>

        {/* Integration Settings */}
        <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Integrações</h3>
          <div className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="trelloSync"
                checked={settings.trelloSync}
                onChange={handleChange}
                className="w-4 h-4 rounded"
              />
              <span className="text-slate-300">
                Sincronização Automática com Trello
              </span>
            </label>

            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="autoSync"
                checked={settings.autoSync}
                onChange={handleChange}
                className="w-4 h-4 rounded"
              />
              <span className="text-slate-300">
                Sincronização Automática de Integrações
              </span>
            </label>
          </div>
        </div>

        {/* Notification Settings */}
        <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Notificações</h3>
          <div className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="emailNotifications"
                checked={settings.emailNotifications}
                onChange={handleChange}
                className="w-4 h-4 rounded"
              />
              <span className="text-slate-300">
                Notificações por Email
              </span>
            </label>

            <div className="text-sm text-slate-400 ml-7">
              Receba alertas sobre tarefas completadas, bloqueios e consolidações diárias.
            </div>
          </div>
        </div>

        {/* Appearance Settings */}
        <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Aparência</h3>
          <div className="space-y-4">
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                name="darkMode"
                checked={settings.darkMode}
                onChange={handleChange}
                disabled
                className="w-4 h-4 rounded opacity-50"
              />
              <span className="text-slate-300">
                Modo Escuro (Padrão - não pode ser alterado)
              </span>
            </label>
          </div>
        </div>

        {/* API Keys Section */}
        <div className="bg-slate-800/50 backdrop-blur border border-slate-700/50 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Chaves de API</h3>
          <div className="space-y-4">
            <p className="text-slate-400 text-sm mb-4">
              Todas as chaves de API estão armazenadas com segurança em variáveis de ambiente.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-3 bg-slate-900/50 rounded border border-slate-700/50">
                <p className="text-slate-500 text-xs">Trello API</p>
                <p className="text-slate-300 text-sm font-mono">●●●●●●●●●●</p>
              </div>
              <div className="p-3 bg-slate-900/50 rounded border border-slate-700/50">
                <p className="text-slate-500 text-xs">GitHub Token</p>
                <p className="text-slate-300 text-sm font-mono">●●●●●●●●●●</p>
              </div>
              <div className="p-3 bg-slate-900/50 rounded border border-slate-700/50">
                <p className="text-slate-500 text-xs">Gmail API</p>
                <p className="text-slate-300 text-sm font-mono">●●●●●●●●●●</p>
              </div>
              <div className="p-3 bg-slate-900/50 rounded border border-slate-700/50">
                <p className="text-slate-500 text-xs">Cloudflare API</p>
                <p className="text-slate-300 text-sm font-mono">●●●●●●●●●●</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button
            onClick={handleSave}
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition"
          >
            💾 Salvar Configurações
          </button>
          <button className="px-6 py-2 bg-slate-600/20 hover:bg-slate-600/30 text-slate-300 rounded-lg font-medium transition">
            🔄 Resetar Padrões
          </button>
        </div>
      </div>
    </div>
  );
}
