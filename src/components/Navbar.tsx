import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

export const Navbar = () => {
  const location = useLocation();

  return (
    <nav className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent hover:opacity-80 transition-opacity"
          >
            Alex Johnson
          </Link>
          
          <div className="flex items-center gap-6">
            <Button
              variant={location.pathname === "/" ? "default" : "ghost"}
              asChild
              className={location.pathname === "/" ? "bg-gradient-primary" : "hover:bg-secondary/50"}
            >
              <Link to="/">Home</Link>
            </Button>
            <Button
              variant={location.pathname === "/blogs" ? "default" : "ghost"}
              asChild
              className={location.pathname === "/blogs" ? "bg-gradient-primary" : "hover:bg-secondary/50"}
            >
              <Link to="/blogs">Blog</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};