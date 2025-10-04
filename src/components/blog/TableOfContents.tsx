import { useEffect, useState } from "react";
import Icon from "@/components/ui/icon";

interface TocItem {
  id: string;
  text: string;
  level: number;
}

const TableOfContents = () => {
  const [headings, setHeadings] = useState<TocItem[]>([]);
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const article = document.querySelector("article");
    if (!article) return;

    const headingElements = article.querySelectorAll("h2, h3");
    const items: TocItem[] = [];

    headingElements.forEach((heading, index) => {
      const text = heading.textContent || "";
      const id = `heading-${index}`;
      heading.id = id;
      
      items.push({
        id,
        text,
        level: heading.tagName === "H2" ? 2 : 3,
      });
    });

    setHeadings(items);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-100px 0px -80% 0px",
      }
    );

    headingElements.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, []);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (headings.length === 0) return null;

  return (
    <div className="lg:sticky lg:top-32 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border border-primary/10">
      <div className="flex items-center gap-2 mb-4">
        <Icon name="List" size={20} className="text-primary" />
        <h3 className="font-bold text-lg text-foreground">Содержание статьи</h3>
      </div>
      
      <nav>
        <ul className="space-y-2">
          {headings.map((heading) => (
            <li key={heading.id}>
              <button
                onClick={() => scrollToHeading(heading.id)}
                className={`
                  text-left w-full py-2 px-3 rounded-lg transition-all
                  ${heading.level === 3 ? "pl-6 text-sm" : "text-base"}
                  ${
                    activeId === heading.id
                      ? "bg-primary text-white font-semibold"
                      : "text-muted-foreground hover:bg-primary/10 hover:text-foreground"
                  }
                `}
              >
                {heading.text}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TableOfContents;
