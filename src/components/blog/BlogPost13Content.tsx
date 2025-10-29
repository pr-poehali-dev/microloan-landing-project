import BlogPost13Intro from './post13/BlogPost13Intro';
import BlogPost13TopMFO from './post13/BlogPost13TopMFO';
import BlogPost13HowTo from './post13/BlogPost13HowTo';
import BlogPost13Comparison from './post13/BlogPost13Comparison';
import BlogPost13Tips from './post13/BlogPost13Tips';

const BlogPost13Content = () => {
  const trackClick = async (mfoName: string) => {
    try {
      await fetch('https://functions.poehali.dev/c591c6e9-075e-48d0-a487-6cfffa0136b7', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mfo_name: mfoName }),
      });
    } catch (error) {
      console.error('Failed to track click:', error);
    }
  };

  const handleMFOClick = (mfoName: string, url: string) => {
    trackClick(mfoName);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="prose prose-lg max-w-none">
      <BlogPost13Intro />
      <BlogPost13TopMFO onMFOClick={handleMFOClick} />
      <BlogPost13HowTo />
      <BlogPost13Comparison />
      <BlogPost13Tips />
    </div>
  );
};

export default BlogPost13Content;
