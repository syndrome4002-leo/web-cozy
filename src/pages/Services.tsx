import Layout from "@/components/Layout";
import { ScrollToTopButton } from "@/components/ScrollToTop";
import { 
  Shield, Cloud, BarChart3, Code, Server, Headphones, 
  Check, ArrowRight, Lock, Zap, TrendingUp, Users,
  Database, Monitor, GitBranch, Cpu, Clock, Award
} from "lucide-react";
import { Link } from "react-router-dom";
import bg1 from "@/assets/bgs/1.jpg";
import bg4 from "@/assets/bgs/4.jpg";

const services = [
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    desc: "Comprehensive threat detection, penetration testing, and security compliance to protect your business from evolving cyber threats.",
    features: [
      "Threat Detection & Response",
      "Penetration Testing",
      "Security Compliance (ISO 27001)",
      "Data Encryption",
      "Access Management",
      "Security Audits"
    ]
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    desc: "Design, migrate, and manage scalable cloud environments on AWS, Azure, and GCP with 99.9% uptime guaranteed.",
    features: [
      "Cloud Migration",
      "Infrastructure Design",
      "Cost Optimization",
      "Multi-cloud Management",
      "Disaster Recovery",
      "Auto-scaling Solutions"
    ]
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    desc: "Unlock business intelligence through advanced data pipelines, warehousing, and real-time analytics dashboards.",
    features: [
      "Data Warehousing",
      "Analytics Dashboards",
      "Real-time Processing",
      "ML Models",
      "Data Visualization",
      "Business Intelligence"
    ]
  },
  {
    icon: Code,
    title: "Custom Software Development",
    desc: "End-to-end software development from web and mobile applications to enterprise systems tailored to your needs.",
    features: [
      "Web Development",
      "Mobile Apps",
      "API Development",
      "Legacy Modernization",
      "Agile Methodology",
      "DevOps Integration"
    ]
  },
  {
    icon: Server,
    title: "IT Infrastructure",
    desc: "Network design, server management, and hardware procurement to build a rock-solid technology foundation.",
    features: [
      "Network Design",
      "Server Management",
      "Hardware Procurement",
      "Virtualization",
      "Load Balancing",
      "Backup Solutions"
    ]
  },
  {
    icon: Headphones,
    title: "Managed IT Support",
    desc: "24/7 helpdesk, proactive monitoring, and on-site support to keep your operations running without interruption.",
    features: [
      "24/7 Helpdesk",
      "Proactive Monitoring",
      "Incident Management",
      "On-site Support",
      "Performance Optimization",
      "User Training"
    ]
  },
];

const serviceDetails = [
  {
    title: "Cybersecurity Solutions",
    icon: Shield,
    overview: "Protect your business with enterprise-grade security",
    benefits: [
      "99.99% threat prevention rate",
      "24/7 security monitoring and response",
      "Compliance with international standards",
      "Regular security audits and updates"
    ]
  },
  {
    title: "Cloud Infrastructure",
    icon: Cloud,
    overview: "Scale your operations with reliable cloud platforms",
    benefits: [
      "99.9% uptime SLA",
      "Automatic backup and recovery",
      "Global data centers",
      "Cost-effective scaling"
    ]
  },
  {
    title: "Data & Analytics",
    icon: BarChart3,
    overview: "Transform data into actionable business insights",
    benefits: [
      "Real-time analytics dashboards",
      "Predictive modeling capabilities",
      "Integration with existing systems",
      "Custom reporting solutions"
    ]
  }
];

const processSteps = [
  {
    number: "01",
    title: "Discovery & Assessment",
    desc: "We analyze your current infrastructure, business goals, and challenges to understand your unique needs."
  },
  {
    number: "02",
    title: "Strategy & Planning",
    desc: "Our experts create a detailed roadmap with timelines, milestones, and success metrics."
  },
  {
    number: "03",
    title: "Implementation",
    desc: "We execute the plan with agile methodologies, maintaining regular communication and transparency."
  },
  {
    number: "04",
    title: "Optimization & Support",
    desc: "Ongoing monitoring, updates, and optimization to ensure maximum ROI and performance."
  }
];

const whyChoose = [
  {
    icon: Award,
    title: "Expert Team",
    desc: "50+ certified professionals with industry expertise"
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    desc: "Rapid implementation with minimal business disruption"
  },
  {
    icon: Lock,
    title: "Security First",
    desc: "Enterprise-grade security in every solution"
  },
  {
    icon: TrendingUp,
    title: "Proven Results",
    desc: "40% average cost reduction for our clients"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    desc: "Round-the-clock support and monitoring"
  },
  {
    icon: Users,
    title: "Scalable Solutions",
    desc: "Grows with your business needs"
  }
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
        From strategy to execution, we deliver technology services that create measurable business impact and drive digital transformation.
      </p>
    </section>

    {/* Services Grid - Main */}
    <section className="relative section-padding bg-background overflow-hidden">
      <img
        src={bg1}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-5 pointer-events-none"
      />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">What We Offer</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive <span className="gradient-text">IT Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            We provide a full spectrum of technology solutions to address every aspect of your digital infrastructure.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <p className="text-muted-foreground text-sm leading-relaxed mb-5">{s.desc}</p>
              <ul className="space-y-2">
                {s.features.slice(0, 3).map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check size={16} className="text-primary flex-shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="inline-flex items-center gap-1 text-primary text-sm font-semibold mt-5 hover:gap-2 transition-all">
                Learn More <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="section-padding bg-section-dark">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Why Choose Us</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-section-dark-foreground">
            Excellence in <span className="gradient-text">Every Service</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChoose.map((item) => (
            <div key={item.title} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20">
                  <item.icon className="text-primary" size={24} />
                </div>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-section-dark-foreground mb-2">{item.title}</h3>
                <p className="text-section-dark-foreground/60 text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Service Details */}
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Service Details</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Deep Dive Into Our <span className="gradient-text">Top Services</span>
          </h2>
        </div>
        <div className="space-y-8">
          {serviceDetails.map((detail) => (
            <div key={detail.title} className="glass-card p-8 border border-border/20 hover:border-primary/30 transition-colors">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <detail.icon className="text-primary" size={28} />
                </div>
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground">{detail.title}</h3>
                  <p className="text-muted-foreground text-sm mt-1">{detail.overview}</p>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {detail.benefits.map((benefit) => (
                  <div key={benefit} className="flex items-start gap-3 p-4 rounded-lg bg-background/50">
                    <Check size={20} className="text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-sm">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Process Section */}
    <section className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Our Methodology</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            How We <span className="gradient-text">Deliver Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mt-4">
            A proven 4-step process that ensures quality delivery and measurable results every time.
          </p>
        </div>
        <div className="grid md:grid-cols-4 gap-6">
          {processSteps.map((step, i) => (
            <div key={step.number} className="relative">
              <div className="glass-card p-8 h-full">
                <p className="text-5xl font-bold text-primary/20 mb-2">{step.number}</p>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </div>
              {i < processSteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-primary to-transparent transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Technology Stack */}
    <section className="relative section-padding bg-section-dark overflow-hidden">
      <img
        src={bg4}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
      />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Technologies We Use</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-section-dark-foreground">
            Modern <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-section-dark-foreground/60 text-lg max-w-2xl mt-4">
            We leverage cutting-edge technologies and industry best practices to deliver optimal solutions.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Cloud, name: "AWS, Azure, GCP" },
            { icon: Database, name: "Databases" },
            { icon: GitBranch, name: "DevOps & CI/CD" },
            { icon: Cpu, name: "AI & Machine Learning" },
            { icon: Monitor, name: "Monitoring Tools" },
            { icon: Lock, name: "Security Tools" },
            { icon: Code, name: "Frameworks" },
            { icon: Users, name: "Collaboration" },
          ].map((tech) => (
            <div key={tech.name} className="rounded-lg p-6 bg-section-dark border border-section-dark-foreground/20 hover:border-primary/50 transition-colors text-center group">
              <tech.icon className="text-primary mb-3 mx-auto group-hover:scale-110 transition-transform" size={32} />
              <p className="font-semibold text-section-dark-foreground text-sm">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Pricing Tiers */}
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Flexible Options</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Service <span className="gradient-text">Models</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the service model that best fits your business needs and budget.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Project-Based",
              desc: "One-time projects with fixed scope and timeline",
              includes: ["Fixed pricing", "Dedicated team", "Milestone-based delivery", "Quality assurance"]
            },
            {
              name: "Time & Materials",
              desc: "Flexible engagement for evolving requirements",
              includes: ["Hourly billing", "Scalable team", "Agile methodology", "Flexible scope"],
              featured: true
            },
            {
              name: "Managed Services",
              desc: "Ongoing support and maintenance contracts",
              includes: ["24/7 monitoring", "Proactive support", "Performance optimization", "Cost predictability"]
            }
          ].map((model) => (
            <div 
              key={model.name} 
              className={`rounded-xl p-8 transition-all ${
                model.featured 
                  ? "bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-primary scale-105" 
                  : "glass-card border border-border/20"
              }`}
            >
              {model.featured && (
                <div className="inline-block px-3 py-1 rounded-full bg-primary/20 border border-primary/50 text-primary text-xs font-semibold mb-4">
                  Most Popular
                </div>
              )}
              <h3 className="font-heading text-2xl font-bold text-foreground mb-2">{model.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{model.desc}</p>
              <ul className="space-y-3 mb-8">
                {model.includes.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <Check size={16} className="text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                Get Started <ArrowRight size={16} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* FAQ Section */}
    <section className="section-padding bg-section-dark">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Questions</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-section-dark-foreground mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
        </div>
        <div className="space-y-6">
          {[
            {
              q: "What is your typical engagement timeline?",
              a: "Project timelines vary based on scope and complexity. Simple projects can be completed in 2-4 weeks, while larger enterprise solutions typically take 2-6 months."
            },
            {
              q: "Do you provide ongoing support after project delivery?",
              a: "Yes! We offer comprehensive maintenance and support packages. All our projects include a 30-day free support period, with extended support available."
            },
            {
              q: "Can you work with our existing technology stack?",
              a: "Absolutely. We're experienced with virtually all major technologies and can integrate seamlessly with your current systems and infrastructure."
            },
            {
              q: "How do you ensure security and compliance?",
              a: "Security is built into every project. We follow ISO 27001 standards, perform regular security audits, and ensure compliance with industry regulations like GDPR and HIPAA."
            }
          ].map((faq, i) => (
            <div key={i} className="rounded-lg p-6 bg-section-dark border border-section-dark-foreground/20 hover:border-primary/30 transition-colors">
              <h3 className="font-heading font-semibold text-section-dark-foreground text-lg mb-2">{faq.q}</h3>
              <p className="text-section-dark-foreground/70 text-sm">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding bg-gradient-to-r from-primary to-primary/80 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Ready to Transform Your Operations?
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8">
          Let's discuss which services are right for your business and create a customized solution.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/90 transition-colors"
        >
          Contact Our Team <ArrowRight size={18} />
        </Link>
      </div>
    </section>
    <ScrollToTopButton />
  </Layout>
);

export default Services;
