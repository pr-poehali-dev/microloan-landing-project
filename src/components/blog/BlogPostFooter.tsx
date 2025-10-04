import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface BlogPostFooterProps {
  postUrl: string;
  postTitle: string;
}

const BlogPostFooter = ({ postUrl, postTitle }: BlogPostFooterProps) => {
  const openLeadForm = () => {
    window.dispatchEvent(new CustomEvent('openLeadForm'));
  };
  return (
    <div className="mt-12 pt-8 border-t px-8 md:px-12 pb-8">
      <div className="mb-8">
        <h3 className="text-lg font-bold mb-4 text-foreground">Поделиться статьей:</h3>
        <div className="flex flex-wrap gap-3">
          <a
            href={`https://vk.com/share.php?url=${encodeURIComponent(postUrl)}&title=${encodeURIComponent(postTitle)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#0077FF] hover:bg-[#0066DD] text-white rounded-lg transition-all hover:scale-105 font-medium"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93v6.14C2 20.67 3.33 22 8.93 22h6.14c5.6 0 6.93-1.33 6.93-6.93V8.93C22 3.33 20.67 2 15.07 2zm3.45 14.98c-.15.4-.78.76-1.63.76-.57 0-1.27-.13-2.1-.52-1.04-.48-2.06-1.38-2.87-2.53-.47-.67-.82-1.33-1.03-1.93-.18-.49-.18-.87-.04-1.09.15-.24.42-.36.81-.36.27 0 .52.07.76.2.41.22.69.58.87 1.07.2.54.42 1.02.64 1.43.41.75.86 1.37 1.34 1.85.35.35.69.58 1.02.68.24.08.44.08.58 0 .19-.1.29-.33.29-.67v-2.42c0-.28-.02-.51-.05-.68-.03-.15-.09-.29-.18-.4-.17-.21-.48-.32-.92-.32h-.45c-.21 0-.32-.13-.32-.38 0-.13.06-.24.18-.32.29-.2.58-.3.87-.3h2.54c.48 0 .82.1 1.03.31.2.2.31.54.31 1.02v3.17c0 .34.1.57.29.67.14.08.34.08.58 0 .33-.1.67-.33 1.02-.68.48-.48.93-1.1 1.34-1.85.22-.41.44-.89.64-1.43.18-.49.46-.85.87-1.07.24-.13.49-.2.76-.2.39 0 .66.12.81.36.14.22.14.6-.04 1.09-.21.6-.56 1.26-1.03 1.93-.81 1.15-1.83 2.05-2.87 2.53-.83.39-1.53.52-2.1.52-.85 0-1.48-.36-1.63-.76z"/>
            </svg>
            ВКонтакте
          </a>

          <a
            href={`https://t.me/share/url?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(postTitle)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#0088CC] hover:bg-[#0077BB] text-white rounded-lg transition-all hover:scale-105 font-medium"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
            </svg>
            Telegram
          </a>

          <a
            href={`https://wa.me/?text=${encodeURIComponent(postTitle + ' ' + postUrl)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#25D366] hover:bg-[#20BD5A] text-white rounded-lg transition-all hover:scale-105 font-medium"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>

          <a
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(postUrl)}&text=${encodeURIComponent(postTitle)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-[#1DA1F2] hover:bg-[#1A91DA] text-white rounded-lg transition-all hover:scale-105 font-medium"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            Twitter
          </a>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
        <Link to="/blog">
          <Button variant="outline" className="gap-2">
            <Icon name="ArrowLeft" size={20} />
            Все статьи блога
          </Button>
        </Link>
        
        <Button 
          onClick={openLeadForm}
          className="bg-gradient-to-r from-orange-400 via-pink-400 to-teal-400 gap-2"
        >
          Оставить заявку
          <Icon name="Sparkles" size={20} />
        </Button>
      </div>
    </div>
  );
};

export default BlogPostFooter;