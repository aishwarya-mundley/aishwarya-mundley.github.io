import { Github, Twitter, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com",
    icon: Github,
    color: "hover:text-white"
  },
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: Twitter,
    color: "hover:text-blue-400"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com",
    icon: Linkedin,
    color: "hover:text-blue-500"
  },
  {
    name: "Email",
    url: "mailto:hello@example.com",
    icon: Mail,
    color: "hover:text-green-400"
  }
];

export const SocialLinks = () => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <Button
            key={link.name}
            variant="ghost"
            size="sm"
            asChild
            className="group transition-all duration-300 hover:bg-secondary/50 hover:shadow-glow"
          >
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Icon className={`h-5 w-5 transition-colors duration-300 ${link.color}`} />
              {link.name}
              <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </Button>
        );
      })}
    </div>
  );
};