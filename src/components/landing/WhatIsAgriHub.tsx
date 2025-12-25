import { CheckCircle2, Leaf } from "lucide-react";

const features = [
  "Direct farmer-to-buyer marketplace",
  "Verified products and sellers",
  "Real-time orders and tracking",
  "Secure mock UPI payments (for now)",
];

const WhatIsAgriHub = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-full mb-6">
              <Leaf className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">About the Platform</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              What is AgriHub?
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              AgriHub is a modern agricultural marketplace that bridges the gap between 
              farmers and buyers. Our platform eliminates middlemen, ensuring fair prices 
              for farmers and fresh produce for buyers – all through a simple mobile app.
            </p>

            <ul className="space-y-4">
              {features.map((feature, idx) => (
                <li 
                  key={idx} 
                  className="flex items-center gap-3 text-foreground opacity-0 animate-fade-in"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-soft rounded-3xl shadow-prominent p-8 lg:p-12">
              <div className="h-full bg-card rounded-2xl shadow-elevated flex items-center justify-center relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/10 rounded-full" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-accent/10 rounded-full" />
                
                <div className="text-center relative z-10 p-6">
                  <div className="w-20 h-20 bg-gradient-hero rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow">
                    <Leaf className="w-10 h-10 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-2xl text-foreground mb-2">Fresh from Farm</h3>
                  <p className="text-muted-foreground text-sm">Directly to your doorstep</p>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-prominent p-4 flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Trusted Platform</div>
                <div className="text-sm text-muted-foreground">Verified sellers only</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsAgriHub;
