import { Calendar, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  tags: string[];
}

interface BlogCardProps {
  post: BlogPost;
}

export const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <Link to={`/blog/${post.id}`}>
      <Card className="group cursor-pointer transition-all duration-300 hover:shadow-card hover:shadow-glow/20 hover:-translate-y-1 bg-gradient-subtle border-border/50">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            {post.date}
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            {post.readTime}
          </div>
        </div>
        <h3 className="text-xl font-semibold group-hover:text-accent transition-colors duration-300">
          {post.title}
        </h3>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-muted-foreground mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 3).map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs bg-secondary/30"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <ArrowRight className="h-4 w-4 text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
        </div>
      </CardContent>
    </Card>
    </Link>
  );
};