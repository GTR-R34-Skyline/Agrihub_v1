import { Users, ShoppingBag, Shield, Tractor } from "lucide-react";

const userTypes = [
  {
    icon: Tractor,
    title: "Farmers",
    description: "List your products, manage incoming orders, receive payments directly, and grow your agricultural business.",
    color: "bg-primary/10",
    iconColor: "text-primary",
  },
  {
    icon: ShoppingBag,
    title: "Buyers",
    description: "Discover fresh agricultural products, place orders easily, and track deliveries in real-time.",
    color: "bg-accent/10",
    iconColor: "text-accent",
  },
  {
    icon: Shield,
    title: "Admins",
    description: "Approve products, monitor platform analytics, ensure quality control, and manage platform health.",
    color: "bg-secondary/10",
    iconColor: "text-secondary",
  },
];

const WhoIsItFor = () => {
  return (
    <section className="section-padding bg-gradient-soft">
      <div className="container-narrow">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-full mb-6">
            <Users className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">For Everyone</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Who Is It For?
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            AgriHub serves three key user groups, each with tailored features for their specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {userTypes.map((user, idx) => (
            <article 
              key={idx}
              className="group bg-card rounded-2xl p-8 shadow-soft hover:shadow-prominent transition-all duration-500 hover:-translate-y-2 opacity-0 animate-fade-in"
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              <div className={`w-16 h-16 ${user.color} rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110`}>
                <user.icon className={`w-8 h-8 ${user.iconColor}`} />
              </div>

              <h3 className="font-display text-2xl text-foreground mb-3">
                {user.title}
              </h3>

              <p className="text-muted-foreground leading-relaxed">
                {user.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoIsItFor;
