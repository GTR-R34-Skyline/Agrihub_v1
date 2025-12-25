import { Leaf } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-narrow section-padding py-12 md:py-16">
        <div className="flex flex-col items-center text-center">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center">
              <Leaf className="w-6 h-6 text-primary-foreground" />
            </div>
            <span className="font-display text-2xl">AgriHub</span>
          </div>

          {/* Tagline */}
          <p className="text-primary-foreground/70 text-lg mb-8 max-w-md">
            Built for farmers, powered by technology
          </p>

          {/* Divider */}
          <div className="w-24 h-px bg-primary-foreground/20 mb-8" />

          {/* Copyright */}
          <p className="text-sm text-primary-foreground/50">
            © {currentYear} AgriHub. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
