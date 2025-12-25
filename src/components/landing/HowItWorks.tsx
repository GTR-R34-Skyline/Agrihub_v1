import { motion } from "framer-motion";
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section-padding bg-gradient-soft">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
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
        </motion.div>

        <div className="relative">
          {/* Connection line - hidden on mobile */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3 }}
            className="hidden lg:block absolute top-24 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20 origin-left"
          />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="relative text-center"
              >
                {/* Step number badge */}
                <div className="relative inline-flex mb-6">
                  <motion.div 
                    className="w-20 h-20 bg-card rounded-2xl shadow-elevated flex items-center justify-center relative z-10"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <step.icon className="w-8 h-8 text-primary" />
                  </motion.div>
                  <motion.div 
                    className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-hero rounded-full flex items-center justify-center text-xs font-bold text-primary-foreground shadow-soft z-20"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 + idx * 0.1 }}
                  >
                    {step.step}
                  </motion.div>
                </div>

                <h3 className="font-display text-xl text-foreground mb-3">
                  {step.title}
                </h3>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
