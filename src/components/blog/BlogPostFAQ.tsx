import Icon from "@/components/ui/icon";

interface FAQItem {
  question: string;
  answer: string;
}

interface BlogPostFAQProps {
  items: FAQItem[];
}

const BlogPostFAQ = ({ items }: BlogPostFAQProps) => {
  const colors = [
    { bg: 'from-blue-50 to-indigo-50', border: 'border-blue-500', icon: 'text-blue-600' },
    { bg: 'from-green-50 to-emerald-50', border: 'border-green-500', icon: 'text-green-600' },
    { bg: 'from-orange-50 to-amber-50', border: 'border-orange-500', icon: 'text-orange-600' },
    { bg: 'from-purple-50 to-violet-50', border: 'border-purple-500', icon: 'text-purple-600' },
    { bg: 'from-pink-50 to-rose-50', border: 'border-pink-500', icon: 'text-pink-600' },
  ];

  return (
    <>
      <h2 className="text-2xl md:text-3xl font-bold mt-12 mb-6 text-foreground">
        Часто задаваемые вопросы
      </h2>

      <div className="space-y-4 mb-8">
        {items.map((item, index) => {
          const colorScheme = colors[index % colors.length];
          return (
            <details 
              key={index}
              className={`bg-gradient-to-br ${colorScheme.bg} rounded-xl p-6 border-l-4 ${colorScheme.border} group`}
            >
              <summary className="font-bold text-lg text-foreground cursor-pointer list-none flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <Icon name="HelpCircle" size={20} className={colorScheme.icon} />
                  {item.question}
                </span>
                <Icon name="ChevronDown" size={20} className={`${colorScheme.icon} group-open:rotate-180 transition-transform`} />
              </summary>
              <p className="mt-4 text-foreground/80 leading-relaxed">
                {item.answer}
              </p>
            </details>
          );
        })}
      </div>
    </>
  );
};

export default BlogPostFAQ;