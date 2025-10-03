import Icon from "@/components/ui/icon";

const FloatingTelegram = () => {
  return (
    <a
      href="https://t.me/Microfinzaim"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#0088cc] hover:bg-[#006699] text-white rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center group hover:scale-110"
      aria-label="Написать в Telegram"
    >
      <Icon name="Send" size={24} className="group-hover:scale-110 transition-transform" />
      <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Написать в Telegram
      </span>
    </a>
  );
};

export default FloatingTelegram;
