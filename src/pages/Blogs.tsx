import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BlogCard } from "@/components/BlogCard";
import { Navbar } from "@/components/Navbar";

const samplePosts = [
  {
    id: 1,
    title: "rl concept notes",
    excerpt: "notes on rl concepts",
    date: "16/08/25",
    readTime: "7 min read",
    tags: ["rl", "math", "ml"]
  }
];

const Blogs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-12">          
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent animate-fade-in">
              blogs
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-slide-up">
              thoughts on experiments, notes on reading.
            </p>
          </div>

          {/* Search */}
          <div className="max-w-md mx-auto mb-8 animate-slide-up">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="search blog posts..."
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
        {/* <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-border hover:bg-secondary/50 transition-all duration-300"
          >
            Load More Posts
          </Button>
        </div> */}
      </div>
    </div>
  );
};

export default Blogs;