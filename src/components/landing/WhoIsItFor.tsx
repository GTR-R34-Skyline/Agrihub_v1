import { motion } from "framer-motion";
import { Users, ShoppingBag, Shield, Tractor } from "lucide-react";

const userTypes = [
  {
    icon: Tractor,
    title: "Farmers",
    description: "List your products, manage incoming orders, receive payments directly, and grow your agricultural business.",
  },
  {
    icon: ShoppingBag,
    title: "Buyers",
    description: "Discover fresh agricultural products, place orders easily, and track deliveries in real-time.",
  },
  {
    icon: Shield,
    title: "Admins",
    description: "Approve products, monitor platform analytics, ensure quality control, and manage platform health.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

const WhoIsItFor = () => {
  return (
    <section className="section-padding bg-card/30">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full mb-6">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">For Everyone</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Who Is It For?
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AgriHub serves three key user groups, each with tailored features for their specific needs.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {userTypes.map((user, idx) => (
            <motion.article 
              key={idx}
              variants={cardVariants}
              className="group bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-colors duration-500"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors duration-500">
                <user.icon className="w-8 h-8 text-primary" />
              </div>

              <h3 className="font-display text-2xl text-foreground mb-3">
                {user.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {user.description}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
