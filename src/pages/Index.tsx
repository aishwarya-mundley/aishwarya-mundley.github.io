import { ArrowRight, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SocialLinks } from "@/components/SocialLinks";
import profileAvatar from "@/assets/profile-avatar.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div className="mb-8 animate-fade-in">
            <div className="relative w-32 h-32 mx-auto mb-6">
              <img
                src={profileAvatar}
                alt="Profile"
                className="w-full h-full rounded-full object-cover border-4 border-primary/20 shadow-glow animate-float"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-0 hover:opacity-20 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Title and Intro */}
          <div className="mb-12 animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              Alex Johnson
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
              Full-Stack Developer & UI/UX Designer
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Passionate about creating beautiful, functional web experiences. 
              Specializing in React, TypeScript, and modern web technologies. 
              Always learning, always building.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-slide-up">
            <Button
              asChild
              size="lg"
              className="bg-gradient-primary hover:shadow-glow transition-all duration-300"
            >
              <Link to="/blogs" className="flex items-center gap-2">
                View My Blog
                <ArrowRight className="h-5 w-5" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-border hover:bg-secondary/50 transition-all duration-300"
            >
              <Download className="h-5 w-5 mr-2" />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div className="mb-16 animate-slide-up">
            <SocialLinks />
          </div>

          {/* Featured Work/Stats */}
          <div className="grid md:grid-cols-3 gap-6 animate-slide-up">
            <Card className="bg-gradient-subtle border-border/50 hover:shadow-card transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="text-muted-foreground">Projects Completed</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-subtle border-border/50 hover:shadow-card transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">3+</div>
                <div className="text-muted-foreground">Years Experience</div>
              </CardContent>
            </Card>
            <Card className="bg-gradient-subtle border-border/50 hover:shadow-card transition-all duration-300">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-accent mb-2">25+</div>
                <div className="text-muted-foreground">Blog Posts</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;