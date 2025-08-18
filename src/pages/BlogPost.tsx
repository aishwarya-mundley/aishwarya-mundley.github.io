import { ArrowLeft, Calendar, Clock } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import { getMarkdownContent } from "@/lib/markdown";

// Blog metadata - in a real app this would come from an API or database
const blogPosts = {
  1: {
    title: "rl concept notes",
    date: "Aug 16, 2025",
    readTime: "7 min read",
    tags: ["rl", "math", "ml"]
  },
  2: {
    title: "trpo math notes",
    date: "Aug 18, 2025",
    readTime: "10 min read",
    tags: ["trpo", "math", "ml"]
  }
};

const BlogPost = () => {
  const { id } = useParams();
  const post = blogPosts[Number(id) as keyof typeof blogPosts];
  const [markdownContent, setMarkdownContent] = useState<string>('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadContent = async () => {
      if (!post) return;
      
      try {
        setLoading(true);
        const content = await getMarkdownContent(id!);
        console.log('Loaded markdown content:', content.substring(0, 200) + '...');
        setMarkdownContent(content);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load blog post');
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [id, post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
          <Button asChild>
            <Link to="/blogs">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading blog post...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-destructive">Error loading blog post</h1>
          <p className="text-muted-foreground mb-4">{error}</p>
          <Button asChild>
            <Link to="/blogs">Back to Blog</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            asChild
            className="mb-6 hover:bg-secondary/30"
          >
            <Link to="/blogs" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
          
          <div className="mb-6">
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {post.date}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground leading-tight">
              {post.title}
            </h1>
          </div>
        </div>

        {/* Content */}
        <article className="prose prose-lg prose-invert max-w-none">
          <MarkdownRenderer content={markdownContent} />
        </article>
      </div>
    </div>
  );
};

export default BlogPost;