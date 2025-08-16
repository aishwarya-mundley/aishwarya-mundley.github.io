import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SocialLinks } from "@/components/SocialLinks";
import { Navbar } from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Title and Intro */}
          <div className="mb-12 animate-slide-up">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
              aishwarya mundley
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-8">
              software engineer and ml researcher
              
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              - software engineer at mastercard
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              - interested in math, ml, rl, and ai
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            - coding scratch implementations
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            - occasionally writing about experiments
            </p>
          </div>

          {/* Social Links */}
          <div className="mb-16 animate-slide-up">
            <SocialLinks />
          </div>

        </div>
      </div>
    </div>
  );
};

export default Index;