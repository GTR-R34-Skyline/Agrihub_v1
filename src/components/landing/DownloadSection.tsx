import { motion } from "framer-motion";
import { Smartphone, ScanLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import qrCode from "@/assets/qr-code.png";

const DownloadSection = () => {
  return (
    <section id="download" className="relative section-padding bg-background overflow-hidden">
      {/* Ambient glow - static */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-accent/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative z-10 container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-8">
            <Smartphone className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Mobile App</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            To Use AgriHub,<br />
            <span className="text-gradient">Download the Mobile App</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-xl mx-auto mb-12">
            Experience the full power of AgriHub on your mobile device. 
            Scan the QR code below to install the app and start buying or selling agricultural products today.
          </p>

          {/* QR Code and Store Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="inline-block bg-card rounded-3xl p-8 border border-border/50 shadow-elevated"
          >
            <div className="flex items-center gap-2 justify-center mb-6">
              <ScanLine className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">Scan to download the AgriHub app</span>
            </div>

            <div className="bg-foreground p-4 rounded-2xl mb-6">
              <img 
                src={qrCode} 
                alt="Scan this QR code to download the AgriHub mobile application" 
                className="w-48 h-48 md:w-56 md:h-56 mx-auto"
              />
            </div>

            <p className="text-sm text-muted-foreground mb-6">
              Point your camera at the QR code
            </p>

            {/* Divider */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-border" />
              <span className="text-sm text-muted-foreground">or download from</span>
              <div className="flex-1 h-px bg-border" />
            </div>

            {/* App Store Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                variant="secondary"
                size="lg"
                className="gap-3"
                onClick={() => window.open('#', '_blank')}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-70">Download on the</div>
                  <div className="text-sm font-semibold -mt-0.5">App Store</div>
                </div>
              </Button>

              <Button
                variant="secondary"
                size="lg"
                className="gap-3"
                onClick={() => window.open('#', '_blank')}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-70">Get it on</div>
                  <div className="text-sm font-semibold -mt-0.5">Google Play</div>
                </div>
              </Button>
            </div>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-muted-foreground text-sm"
          >
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              Free to Download
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              Android & iOS
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              No Hidden Fees
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
