import { ArrowLeft, Search } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BlogCard } from "@/components/BlogCard";

const samplePosts = [
  {
    id: 1,
    title: "Building Modern React Applications with TypeScript",
    excerpt: "Explore the benefits of using TypeScript in React applications and learn best practices for type-safe development. We'll cover everything from basic setup to advanced patterns.",
    date: "Mar 15, 2024",
    readTime: "5 min read",
    tags: ["React", "TypeScript", "Frontend"]
  },
  {
    id: 2,
    title: "The Art of Clean Code: Principles and Practices",
    excerpt: "Discover the fundamental principles that make code readable, maintainable, and scalable. Learn practical techniques to improve your coding style and team collaboration.",
    date: "Mar 10, 2024",
    readTime: "8 min read",
    tags: ["Clean Code", "Best Practices", "Development"]
  },
  {
    id: 3,
    title: "Mastering CSS Grid and Flexbox for Modern Layouts",
    excerpt: "A comprehensive guide to creating responsive layouts using CSS Grid and Flexbox. Understand when to use each technique and how to combine them effectively.",
    date: "Mar 5, 2024",
    readTime: "6 min read",
    tags: ["CSS", "Layout", "Design"]
  },
  {
    id: 4,
    title: "Performance Optimization in React Applications",
    excerpt: "Learn essential techniques to optimize React app performance, including code splitting, memoization, and bundle optimization strategies.",
    date: "Feb 28, 2024",
    readTime: "7 min read",
    tags: ["React", "Performance", "Optimization"]
  },
  {
    id: 5,
    title: "Introduction to Web Accessibility",
    excerpt: "Understanding the importance of web accessibility and implementing ARIA standards, semantic HTML, and keyboard navigation for inclusive design.",
    date: "Feb 20, 2024",
    readTime: "4 min read",
    tags: ["Accessibility", "HTML", "UX"]
  },
  {
    id: 6,
    title: "Node.js API Development Best Practices",
    excerpt: "Build robust and scalable APIs with Node.js. Cover authentication, error handling, testing, and deployment strategies for production-ready applications.",
    date: "Feb 15, 2024",
    readTime: "10 min read",
    tags: ["Node.js", "API", "Backend"]
  }
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-12">
          <Button
            variant="ghost"
            asChild
            className="mb-6 hover:bg-secondary/50 transition-colors"
          >
            <Link to="/" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Profile
            </Link>
          </Button>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
              My Blog
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              Thoughts on web development, design, and technology. 
              Sharing knowledge and experiences from my journey as a developer.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto mb-8 animate-slide-up">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search blog posts..."
                className="pl-10 bg-secondary/30 border-border focus:border-accent transition-colors"
              />
            </div>
          </div>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {samplePosts.map((post, index) => (
            <div
              key={post.id}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <BlogCard post={post} />
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-border hover:bg-secondary/50 transition-all duration-300"
          >
            Load More Posts
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Blogs;