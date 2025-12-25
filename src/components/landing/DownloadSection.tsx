import { Smartphone, ScanLine } from "lucide-react";
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
        <div className="max-w-4xl mx-auto text-center">
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

          {/* QR Code Card */}
          <div className="inline-block bg-card rounded-3xl p-8 shadow-prominent">
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

            <p className="text-sm text-muted-foreground">
              Point your camera at the QR code
            </p>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-primary-foreground/60 text-sm">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
