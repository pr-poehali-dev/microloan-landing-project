import { useState, useEffect } from 'react';
import { X, Download } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const InstallPWA = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);

  useEffect(() => {
    const handler = (e: Event) => {
      e.preventDefault();
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      setShowInstallBanner(true);
    };

    window.addEventListener('beforeinstallprompt', handler);

    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) return;

    deferredPrompt.prompt();
    const { outcome } = await deferredPrompt.userChoice;
    
    if (outcome === 'accepted') {
      setDeferredPrompt(null);
      setShowInstallBanner(false);
    }
  };

  const handleClose = () => {
    setShowInstallBanner(false);
  };

  if (!showInstallBanner) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:w-96 bg-gradient-to-r from-primary to-blue-600 text-white rounded-2xl shadow-2xl p-6 z-50 animate-slide-up">
      <button
        onClick={handleClose}
        className="absolute top-3 right-3 text-white/80 hover:text-white transition-colors"
        aria-label="Закрыть"
      >
        <X size={20} />
      </button>
      
      <div className="flex items-start gap-4">
        <div className="bg-white/20 rounded-xl p-3">
          <Download size={24} />
        </div>
        
        <div className="flex-1">
          <h3 className="font-bold text-lg mb-1">
            Установить приложение
          </h3>
          <p className="text-white/90 text-sm mb-4">
            Быстрый доступ к займам с главного экрана вашего телефона
          </p>
          
          <button
            onClick={handleInstallClick}
            className="w-full bg-white text-primary font-semibold py-3 px-6 rounded-xl hover:bg-white/90 transition-all transform hover:scale-105 active:scale-95"
          >
            Установить сейчас
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstallPWA;
