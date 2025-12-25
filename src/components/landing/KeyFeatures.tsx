import { motion } from "framer-motion";
import { 
  Store, 
  ShoppingCart, 
  PackageCheck, 
  Bell, 
  Users,
  Sparkles 
} from "lucide-react";

const features = [
  {
    icon: Store,
    title: "Marketplace with Approvals",
    description: "All products are reviewed and approved before listing to ensure quality and authenticity.",
  },
  {
    icon: ShoppingCart,
    title: "Cart & Checkout",
    description: "Intuitive shopping experience with easy cart management and streamlined checkout process.",
  },
  {
    icon: PackageCheck,
    title: "Order Lifecycle",
    description: "Track orders through every stage: pending → confirmed → shipped → delivered.",
  },
  {
    icon: Bell,
    title: "Notifications & Dashboards",
    description: "Stay updated with real-time notifications and comprehensive analytics dashboards.",
  },
  {
    icon: Users,
    title: "Role-Based Access",
    description: "Dedicated interfaces for Farmers, Buyers, and Administrators with tailored features.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const KeyFeatures = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Features</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Key Features
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to buy and sell agricultural products efficiently.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-shadow duration-300 border border-border/50 hover:border-primary/20"
            >
              <div className="flex items-start gap-4">
                <motion.div 
                  className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft group-hover:shadow-glow transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </motion.div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default KeyFeatures;
