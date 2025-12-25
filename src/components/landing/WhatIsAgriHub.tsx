import { motion } from "framer-motion";
import { CheckCircle2, Leaf } from "lucide-react";

const features = [
  "Direct farmer-to-buyer marketplace",
  "Verified products and sellers",
  "Real-time orders and tracking",
  "Secure mock UPI payments (for now)",
];

const WhatIsAgriHub = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full mb-6">
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
                <motion.li 
                  key={idx} 
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                  className="flex items-center gap-3 text-foreground"
                >
                  <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                  <span>{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative"
          >
            <div className="aspect-square bg-card rounded-3xl shadow-elevated p-8 lg:p-12 border border-border/50">
              <div className="h-full bg-secondary/50 rounded-2xl flex items-center justify-center relative overflow-hidden">
                {/* Decorative circles */}
                <div className="absolute -top-12 -right-12 w-40 h-40 bg-primary/10 rounded-full blur-2xl" />
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-violet-accent/10 rounded-full blur-2xl" />
                
                <div className="text-center relative z-10 p-6">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                    className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-glow"
                  >
                    <Leaf className="w-10 h-10 text-primary-foreground" />
                  </motion.div>
                  <h3 className="font-display text-2xl text-foreground mb-2">Fresh from Farm</h3>
                  <p className="text-muted-foreground text-sm">Directly to your doorstep</p>
                </div>
              </div>
            </div>
            
            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-elevated p-4 flex items-center gap-3 border border-border/50"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <CheckCircle2 className="w-6 h-6 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-foreground">Trusted Platform</div>
                <div className="text-sm text-muted-foreground">Verified sellers only</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsAgriHub;
