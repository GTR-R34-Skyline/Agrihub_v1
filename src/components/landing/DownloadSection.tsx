import { motion } from "framer-motion";
import { Smartphone, ScanLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import qrCode from "@/assets/qr-code.png";

const DownloadSection = () => {
  return (
    <section id="download" className="relative section-padding bg-gradient-hero overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl" />
      </div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`
      }} />

      <div className="relative z-10 container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm px-4 py-2 rounded-full mb-8">
            <Smartphone className="w-4 h-4 text-primary-foreground" />
            <span className="text-sm text-primary-foreground/90 font-medium">Mobile App</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground mb-6">
            To Use AgriHub,<br />
            <span className="italic">Download the Mobile App</span>
          </h2>

          <p className="text-lg text-primary-foreground/80 max-w-xl mx-auto mb-12">
            Experience the full power of AgriHub on your mobile device. 
            Scan the QR code below to install the app and start buying or selling agricultural products today.
          </p>

          {/* QR Code and Store Buttons */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block bg-card rounded-3xl p-8 shadow-prominent"
          >
            <div className="flex items-center gap-2 justify-center mb-6">
              <ScanLine className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">Scan to Install</span>
            </div>

            <div className="bg-background p-4 rounded-2xl mb-6">
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
                variant="default"
                size="lg"
                className="gap-3 bg-foreground hover:bg-foreground/90 text-background"
                onClick={() => window.open('#', '_blank')}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-80">Download on the</div>
                  <div className="text-sm font-semibold -mt-0.5">App Store</div>
                </div>
              </Button>

              <Button
                variant="default"
                size="lg"
                className="gap-3 bg-foreground hover:bg-foreground/90 text-background"
                onClick={() => window.open('#', '_blank')}
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.802 8.99l-2.303 2.303-8.635-8.635z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs opacity-80">Get it on</div>
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
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-12 flex flex-wrap justify-center gap-8 text-primary-foreground/60 text-sm"
          >
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-foreground/60 rounded-full" />
              Free to Download
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-foreground/60 rounded-full" />
              Android & iOS
            </span>
            <span className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary-foreground/60 rounded-full" />
              No Hidden Fees
            </span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadSection;
