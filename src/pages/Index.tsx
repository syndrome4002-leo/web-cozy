import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Shield, Zap, BarChart3, ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "200+", label: "Clients Served" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "50+", label: "Expert Engineers" },
  { value: "10+", label: "Years Experience" },
];

const highlights = [
  {
    icon: Shield,
    title: "Cybersecurity",
    desc: "Enterprise-grade protection for your digital assets and infrastructure.",
  },
  {
    icon: Zap,
    title: "Cloud Solutions",
    desc: "Scalable cloud architecture designed for performance and reliability.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    desc: "Turn raw data into actionable insights that drive business growth.",
  },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section
      className="relative flex items-center min-h-[90vh] section-padding bg-hero overflow-hidden"
    >
      <img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40 pointer-events-none"
      />
      <div className="relative z-10 max-w-3xl">
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-4 animate-fade-up">
          IT Solutions & Consulting
        </p>
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-hero-foreground leading-[1.1] mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Building the <span className="gradient-text">Digital Future</span> of Your Business
        </h1>
        <p className="text-hero-foreground/70 text-lg md:text-xl max-w-xl mb-8 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          We deliver innovative technology solutions that transform enterprises, streamline operations, and accelerate growth.
        </p>
        <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            Our Services <ArrowRight size={18} />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-hero-foreground/20 text-hero-foreground font-semibold hover:bg-hero-foreground/5 transition-colors"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="bg-primary section-padding py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">{s.value}</p>
            <p className="text-primary-foreground/70 text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Highlights */}
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">What We Do</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-12">
          Solutions That <span className="gradient-text">Drive Results</span>
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((h) => (
            <div key={h.title} className="glass-card p-8 group hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <h.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{h.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link to="/services" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-section-dark text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-section-dark-foreground mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-section-dark-foreground/60 mb-8">
          Let's discuss how our technology solutions can accelerate your growth.
        </p>
        <Link
          to="/about"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
        >
          Contact Us <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  </Layout>
);

export default Index;
