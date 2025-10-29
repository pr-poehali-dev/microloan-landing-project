const SocialSubscribe = () => {
  return (
    <div className="my-8 p-6 md:p-8 bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 rounded-2xl border-2 border-primary/20">
      <div className="text-center mb-6">
        <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Подписывайтесь на наши соцсети! 📱
        </h3>
        <p className="text-muted-foreground">
          Актуальные новости, полезные советы и эксклюзивные материалы
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-stretch">
        <a
          href="https://vk.com/mikrofinru"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="flex items-center justify-center gap-3 px-6 py-4 bg-[#0077FF] hover:bg-[#0066DD] text-white rounded-xl transition-all hover:scale-105 hover:shadow-xl font-semibold group"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
            <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.35 14.45h-1.34c-.53 0-.69-.42-1.65-1.39-.83-.82-1.2-.93-1.41-.93-.29 0-.37.08-.37.47v1.27c0 .34-.11.54-1 .54-1.5 0-3.15-.91-4.31-2.6-1.75-2.45-2.23-4.29-2.23-4.66 0-.21.08-.4.47-.4h1.34c.35 0 .48.16.61.53.71 2.05 1.9 3.85 2.38 3.85.19 0 .27-.09.27-.56v-2.2c-.06-.99-.58-1.08-.58-1.43 0-.17.14-.34.36-.34h2.1c.3 0 .4.16.4.5v2.98c0 .3.14.4.22.4.19 0 .35-.1.7-.44 1.08-1.22 1.85-3.1 1.85-3.1.1-.21.27-.4.62-.4h1.34c.4 0 .49.21.4.5-.16.73-1.84 3.29-1.84 3.29-.16.25-.21.37 0 .65.15.21.65.64 1 1.03.6.67 1.07 1.22 1.19 1.61.13.39-.07.59-.46.59z"/>
          </svg>
          <span className="text-lg">ВКонтакте</span>
        </a>

        <a
          href="https://t.me/mikrofinru"
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="flex items-center justify-center gap-3 px-6 py-4 bg-[#0088CC] hover:bg-[#0077BB] text-white rounded-xl transition-all hover:scale-105 hover:shadow-xl font-semibold group"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="group-hover:scale-110 transition-transform">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
          </svg>
          <span className="text-lg">Telegram</span>
        </a>
      </div>

      <div className="mt-6 text-center">
        <p className="text-sm text-muted-foreground">
          Будьте в курсе всех новостей микрофинансирования! 🚀
        </p>
      </div>
    </div>
  );
};

export default SocialSubscribe;
