import { Leaf } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card border-t border-border/50">
      <div className="container-narrow section-padding py-12 md:py-16">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-display text-2xl text-foreground">AgriHub</span>
          </div>

          {/* Tagline */}
          <p className="text-muted-foreground text-lg mb-8 max-w-md">
            Built for farmers, powered by technology
          </p>

          {/* Divider */}
          <div className="w-24 h-px bg-border mb-8" />

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © {currentYear} AgriHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
