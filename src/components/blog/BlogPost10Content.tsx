import BlogPost10Intro from "./post10/BlogPost10Intro";
import BlogPost10MySituation from "./post10/BlogPost10MySituation";
import BlogPost10Choosing from "./post10/BlogPost10Choosing";
import BlogPost10Application from "./post10/BlogPost10Application";
import BlogPost10Results from "./post10/BlogPost10Results";
import BlogPost10MFOList from "./post10/BlogPost10MFOList";
import BlogPost10FAQ from "./post10/BlogPost10FAQ";
import BlogPost10CreditImprovement from "./post10/BlogPost10CreditImprovement";

const BlogPost10Content = () => {
  return (
    <article className="prose prose-lg max-w-4xl mx-auto">
      <BlogPost10Intro />
      <BlogPost10MySituation />
      <BlogPost10Choosing />
      <BlogPost10Application />
      <BlogPost10Results />
      <BlogPost10MFOList />
      <BlogPost10FAQ />
      <BlogPost10CreditImprovement />
    </article>
  );
};

export default BlogPost10Content;
