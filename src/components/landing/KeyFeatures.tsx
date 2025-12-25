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

const KeyFeatures = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-narrow">
        <div className="text-center mb-16">
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
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="group relative bg-card rounded-2xl p-6 shadow-soft hover:shadow-elevated transition-all duration-300 border border-border/50 hover:border-primary/20 opacity-0 animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center flex-shrink-0 shadow-soft group-hover:shadow-glow transition-all duration-300">
                  <feature.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;
