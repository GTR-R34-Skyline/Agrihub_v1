import { motion } from "framer-motion";
import { HelpCircle, Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "Is AgriHub free to download?",
    answer: "Yes! AgriHub is completely free to download and use. We don't charge any subscription fees. We only take a small commission on successful transactions to keep the platform running.",
  },
  {
    question: "How do I sign up as a farmer?",
    answer: "Download the AgriHub app, select 'Sign Up as Farmer' during registration, and complete your profile with valid ID verification. Once approved, you can start listing your products immediately.",
  },
  {
    question: "How are payments processed?",
    answer: "Currently, we support mock UPI payments for testing. Full payment integration with multiple options including UPI, net banking, and cards will be available in our upcoming release.",
  },
  {
    question: "How does product verification work?",
    answer: "All products listed by farmers go through our admin review process. We verify product quality, descriptions, and pricing before they appear on the marketplace to ensure buyer trust.",
  },
  {
    question: "Can I track my orders in real-time?",
    answer: "Absolutely! Both farmers and buyers can track orders through every stage: pending, confirmed, shipped, and delivered. You'll receive notifications at each step.",
  },
  {
    question: "What products can I sell on AgriHub?",
    answer: "You can sell all types of agricultural products including grains, vegetables, fruits, pulses, dairy products, and more. All products must meet our quality guidelines.",
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-gradient-soft">
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 px-3 py-1.5 rounded-full mb-6">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-sm text-primary font-medium">FAQ</span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
            Frequently Asked Questions
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Got questions? We have answers. Find everything you need to know about AgriHub.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-card rounded-xl shadow-soft border border-border/50 overflow-hidden"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-muted/50 transition-colors"
              >
                <span className="font-semibold text-foreground pr-4">{faq.question}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                  openIndex === idx ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                }`}>
                  {openIndex === idx ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </div>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === idx ? "auto" : 0,
                  opacity: openIndex === idx ? 1 : 0,
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
