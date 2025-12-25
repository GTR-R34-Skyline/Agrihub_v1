import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Smartphone } from "lucide-react";

const Hero = () => {
  const scrollToDownload = () => {
    document.getElementById('download')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToHowItWorks = () => {
    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Ambient glow effects - static, no animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-violet-accent/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 container-narrow section-padding text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-foreground/5 backdrop-blur-sm border border-foreground/10 px-4 py-2 rounded-full mb-8">
            <Smartphone className="w-4 h-4 text-primary" />
            <span className="text-sm text-muted-foreground font-medium">Mobile-First Marketplace</span>
          </div>
        </motion.div>

        <motion.h1 
          className="font-display text-4xl md:text-5xl lg:text-7xl text-foreground mb-6 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
        >
          AgriHub – A Smarter Way to{' '}
          <span className="text-gradient">Buy & Sell</span>{' '}
          Agricultural Products
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          Connecting farmers and buyers directly through a transparent digital marketplace
        </motion.p>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          <Button 
            size="lg" 
            onClick={scrollToDownload}
            className="bg-gradient-primary hover:opacity-90 transition-opacity text-primary-foreground px-8"
          >
            <Smartphone className="w-5 h-5 mr-2" />
            Get the App
          </Button>
          <Button 
            variant="ghost" 
            size="lg" 
            className="text-muted-foreground hover:text-foreground hover:bg-foreground/5 border border-foreground/10" 
            onClick={scrollToHowItWorks}
          >
            How It Works
            <ArrowDown className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>

        {/* Stats */}
        <motion.div 
          className="mt-24 grid grid-cols-3 gap-8 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
        >
          {[
            { value: '100%', label: 'Direct Sales' },
            { value: 'Verified', label: 'Sellers' },
            { value: 'Secure', label: 'Payments' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-foreground">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <div className="w-6 h-10 border-2 border-foreground/20 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-foreground/40 rounded-full mt-2"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
