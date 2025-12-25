import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "Farmer, Punjab",
    quote: "AgriHub has transformed how I sell my wheat and rice. Direct connections with buyers mean better prices and no middlemen taking a cut.",
    rating: 5,
    avatar: "RK",
  },
  {
    name: "Priya Sharma",
    role: "Buyer, Delhi",
    quote: "The freshest vegetables I've ever ordered! I love tracking my orders in real-time and knowing exactly when my produce will arrive.",
    rating: 5,
    avatar: "PS",
  },
  {
    name: "Mohammed Ali",
    role: "Farmer, Maharashtra",
    quote: "Finally, a platform that understands farmers. The verification process ensures only serious buyers, and payments are always on time.",
    rating: 5,
    avatar: "MA",
  },
  {
    name: "Anita Patel",
    role: "Restaurant Owner",
    quote: "Bulk ordering has never been easier. I get quality produce directly from farms, which my customers absolutely love.",
    rating: 5,
    avatar: "AP",
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

const itemVariants = {
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

const Testimonials = () => {
  return (
    <section className="section-padding bg-background overflow-hidden">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1.5 rounded-full mb-6">
            <Quote className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">Testimonials</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Loved by Farmers & Buyers
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See what our community has to say about their AgriHub experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.article
              key={idx}
              variants={itemVariants}
              className="group bg-card rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-colors duration-500"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground text-lg leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
