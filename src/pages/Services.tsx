import Layout from "@/components/Layout";
import { Shield, Cloud, BarChart3, Code, Server, Headphones } from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "Cybersecurity",
    desc: "Comprehensive threat detection, penetration testing, and security compliance to protect your business from evolving cyber threats.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    desc: "Design, migrate, and manage scalable cloud environments on AWS, Azure, and GCP with 99.9% uptime guaranteed.",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    desc: "Unlock business intelligence through advanced data pipelines, warehousing, and real-time analytics dashboards.",
  },
  {
    icon: Code,
    title: "Custom Software",
    desc: "End-to-end software development from web and mobile applications to enterprise systems tailored to your needs.",
  },
  {
    icon: Server,
    title: "IT Infrastructure",
    desc: "Network design, server management, and hardware procurement to build a rock-solid technology foundation.",
  },
  {
    icon: Headphones,
    title: "Managed IT Support",
    desc: "24/7 helpdesk, proactive monitoring, and on-site support to keep your operations running without interruption.",
  },
];

const Services = () => (
  <Layout>
    {/* Header */}
    <section className="bg-hero section-padding pb-12">
      <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Our Expertise</p>
      <h1 className="font-heading text-4xl md:text-5xl font-bold text-hero-foreground mb-4">
        Services & <span className="gradient-text">Solutions</span>
      </h1>
      <p className="text-hero-foreground/60 max-w-xl text-lg">
        From strategy to execution, we deliver technology services that create measurable business impact.
      </p>
    </section>

    {/* Services Grid */}
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="glass-card p-8 group hover:border-primary/30 transition-all animate-fade-up"
            style={{ animationDelay: `${i * 0.08}s` }}
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <s.icon className="text-primary" size={28} />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Process */}
    <section className="section-padding bg-secondary/50">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-3">
          How We <span className="gradient-text">Work</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          A proven methodology that ensures quality delivery every time.
        </p>
      </div>
      <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-8">
        {["Discovery", "Strategy", "Execution", "Support"].map((step, i) => (
          <div key={step} className="text-center">
            <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-heading font-bold text-lg flex items-center justify-center mx-auto mb-4">
              {i + 1}
            </div>
            <h4 className="font-heading font-semibold text-foreground mb-1">{step}</h4>
            <p className="text-muted-foreground text-sm">
              {["Understand your challenges", "Design the roadmap", "Build & deliver", "Ongoing optimization"][i]}
            </p>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Services;
