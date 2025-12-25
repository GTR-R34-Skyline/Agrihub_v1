import { Download, UserPlus, Package, Truck, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Download,
    step: "01",
    title: "Download the App",
    description: "Scan the QR code or visit our app store to download AgriHub on your mobile device.",
  },
  {
    icon: UserPlus,
    step: "02",
    title: "Sign Up",
    description: "Create your account as a Farmer to sell products or as a Buyer to shop.",
  },
  {
    icon: Package,
    step: "03",
    title: "List or Browse",
    description: "Farmers can list their products; Buyers can discover fresh agricultural goods.",
  },
  {
    icon: Truck,
    step: "04",
    title: "Order & Track",
    description: "Place orders, track delivery status, and receive your fresh products.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-gradient-soft">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-full mb-6">
            <ArrowRight className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Getting Started</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            How It Works
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get started with AgriHub in just four simple steps.
          </p>
        </div>

        <div className="relative">
          {/* Connection line - hidden on mobile */}
          <div className="hidden lg:block absolute top-24 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="relative text-center opacity-0 animate-fade-in"
                style={{ animationDelay: `${idx * 0.15}s` }}
              >
                {/* Step number badge */}
                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 bg-card rounded-2xl shadow-elevated flex items-center justify-center relative z-10">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground shadow-soft z-20">
                    {step.step}
                  </div>
                </div>

                <h3 className="font-display text-xl text-foreground mb-3">
                  {step.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
