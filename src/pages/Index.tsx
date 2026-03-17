import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import Counter from "@/components/Counter";
import { 
  Shield, Zap, BarChart3, ArrowRight, Code2, Cloud, Database,
  Users, Rocket, CheckCircle, TrendingUp, Lock, Globe, Server,
  Cpu, Monitor, Star, Clock, Award
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import avatar1 from "@/assets/members/1.jpg";
import avatar2 from "@/assets/members/2.png";
import avatar3 from "@/assets/members/3.png";

const stats = [
  { value: "200+", label: "Clients Served" },
  { value: "99.9%", label: "Uptime SLA" },
  { value: "50+", label: "Expert Engineers" },
  { value: "10+", label: "Years Experience" },
];

const services = [
  {
    icon: Shield,
    title: "Cybersecurity Solutions",
    desc: "Enterprise-grade protection for your digital assets and infrastructure with advanced threat detection and response.",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    desc: "Scalable cloud architecture designed for performance, reliability, and cost optimization.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    desc: "Turn raw data into actionable insights that drive business growth and competitive advantage.",
  },
  {
    icon: Code2,
    title: "Custom Development",
    desc: "Bespoke software solutions tailored to your unique business requirements and challenges.",
  },
  {
    icon: Database,
    title: "Database Management",
    desc: "Robust database solutions with backup, recovery, and optimization strategies.",
  },
  {
    icon: Users,
    title: "IT Consulting",
    desc: "Strategic technology guidance to align IT investments with your business objectives.",
  },
];

const caseStudies = [
  {
    title: "Digital Transformation for Fortune 500",
    category: "Enterprise Solution",
    result: "40% cost reduction",
    desc: "Migrated legacy systems to modern cloud infrastructure, improving operational efficiency.",
  },
  {
    title: "E-commerce Platform Scaling",
    category: "Development",
    result: "10x performance increase",
    desc: "Built high-performance platform handling 1M+ daily transactions with zero downtime.",
  },
  {
    title: "Security Infrastructure Overhaul",
    category: "Cybersecurity",
    result: "99.99% threat prevention",
    desc: "Implemented zero-trust architecture protecting sensitive financial data.",
  },
];

const testimonials = [
  { 
    name: "John Anderson", 
    role: "CTO, TechCorp Inc.", 
    feedback: "Excellent service and support. They transformed our infrastructure and improved efficiency by 40%.",
    image: avatar1
  },
  { 
    name: "Sarah Martinez", 
    role: "CEO, Digital Solutions", 
    feedback: "Professional team with deep technical expertise. Delivered on time and exceeded expectations.",
    image: avatar2
  },
  { 
    name: "Michael Chen", 
    role: "Operations Director", 
    feedback: "Outstanding security implementation. We now have peace of mind with their 24/7 monitoring.",
    image: avatar3
  },
];

const features = [
  { icon: Rocket, title: "Fast Deployment", desc: "Rapid implementation with minimal business disruption" },
  { icon: Lock, title: "Enterprise Security", desc: "Multi-layer security compliance with ISO 27001 certification" },
  { icon: TrendingUp, title: "Scalable Solutions", desc: "Grow your infrastructure as your business scales" },
  { icon: Users, title: "24/7 Support", desc: "Dedicated team available round-the-clock for assistance" },
  { icon: Award, title: "Industry Certified", desc: "AWS, Azure, and Google Cloud certified professionals" },
  { icon: Clock, title: "On-time Delivery", desc: "99% on-schedule project completion rate" },
];

const technologies = [
  { icon: Cloud, name: "Cloud Computing" },
  { icon: Cpu, name: "AI & Machine Learning" },
  { icon: Database, name: "Big Data" },
  { icon: Monitor, name: "DevOps" },
  { icon: Server, name: "Microservices" },
  { icon: Lock, name: "Blockchain" },
];

const Index = () => (
  <Layout>
    {/* Hero Section */}
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
          We deliver innovative technology solutions that transform enterprises, streamline operations, and accelerate growth through strategic IT partnerships.
        </p>
        <div className="flex flex-wrap gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            Explore Services <ArrowRight size={18} />
          </Link>
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-hero-foreground/20 text-hero-foreground font-semibold hover:bg-hero-foreground/5 transition-colors"
          >
            About Us
          </Link>
        </div>
      </div>
    </section>

    {/* Stats Section */}
    <section className="bg-primary section-padding py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground">
              <Counter target={s.value} />
            </p>
            <p className="text-primary-foreground/70 text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Services Grid */}
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Our Services</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Comprehensive <span className="gradient-text">IT Solutions</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl">
            From cybersecurity to cloud infrastructure, we provide end-to-end technology services that power modern enterprises.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="glass-card p-8 group hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{service.desc}</p>
              <Link to="/services" className="inline-flex items-center gap-1 text-primary text-sm font-semibold hover:gap-2 transition-all">
                Learn More <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us Section */}
    <section className="section-padding bg-section-dark">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Why Choose Us</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-section-dark-foreground">
            Excellence in Every <span className="gradient-text">Project</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div key={feature.title} className="flex gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20">
                  <feature.icon className="text-primary" size={24} />
                </div>
              </div>
              <div>
                <h3 className="font-heading font-semibold text-section-dark-foreground mb-2">{feature.title}</h3>
                <p className="text-section-dark-foreground/60 text-sm">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Technologies Section */}
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Technology Stack</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Cutting-Edge <span className="gradient-text">Technologies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mt-4">
            We leverage the latest technologies and frameworks to deliver solutions that stay ahead of industry trends.
          </p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {technologies.map((tech) => (
            <div key={tech.name} className="glass-card p-6 flex flex-col items-center text-center group hover:border-primary/30 transition-colors">
              <tech.icon className="text-primary mb-3" size={32} />
              <p className="font-semibold text-foreground text-sm">{tech.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Case Studies */}
    <section className="section-padding bg-section-dark">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Success Stories</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-section-dark-foreground">
            Our <span className="gradient-text">Case Studies</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div key={study.title} className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-section-dark-foreground/5 to-primary/5 border border-section-dark-foreground/20 hover:border-primary/50 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-primary/10 transition-all duration-300"></div>
              <div className="relative p-8">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors mb-4">
                  <Rocket className="text-primary" size={24} />
                </div>
                <p className="text-primary text-xs font-semibold uppercase tracking-wider mb-3">{study.category}</p>
                <h3 className="font-heading text-xl font-bold text-section-dark-foreground mb-3 leading-tight">{study.title}</h3>
                <p className="text-section-dark-foreground/70 text-sm leading-relaxed mb-6">{study.desc}</p>
                <div className="inline-block px-4 py-2 rounded-lg bg-primary/20 border border-primary/30">
                  <p className="text-primary font-bold text-sm flex items-center gap-2">
                    <TrendingUp size={16} />
                    {study.result}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Process Section */}
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Our Process</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            How We <span className="gradient-text">Work</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-4 gap-8">
          {[
            { number: "01", title: "Discovery", desc: "Understanding your business goals and technical requirements" },
            { number: "02", title: "Strategy", desc: "Developing a comprehensive roadmap aligned with objectives" },
            { number: "03", title: "Implementation", desc: "Executing solutions with agile methodologies and expertise" },
            { number: "04", title: "Support", desc: "Providing ongoing maintenance and 24/7 technical support" },
          ].map((step) => (
            <div key={step.number} className="relative">
              <div className="glass-card p-8 text-center h-full">
                <p className="text-5xl font-bold text-primary/20 mb-2">{step.number}</p>
                <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Testimonials Section */}
    <section className="section-padding bg-section-dark">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Testimonials</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-section-dark-foreground">
            What Our Clients <span className="gradient-text">Say</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.name} className="relative rounded-xl p-8 bg-section-dark border-l-4 border-l-primary border-t border-t-section-dark-foreground/20 border-r border-r-section-dark-foreground/20 border-b border-b-section-dark-foreground/20 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="fill-primary text-primary" />
                ))}
              </div>
              <p className="text-section-dark-foreground text-base leading-relaxed mb-6">\"{testimonial.feedback}\"</p>
              <div className="flex items-center gap-3 pt-4 border-t border-section-dark-foreground/10">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold text-section-dark-foreground text-sm">{testimonial.name}</p>
                  <p className="text-primary text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* CTA Section */}
    <section className="section-padding bg-gradient-to-r from-primary to-primary/80 text-center">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
          Ready to Transform Your Business?
        </h2>
        <p className="text-primary-foreground/80 text-lg mb-8">
          Let's discuss how our technology solutions can accelerate your growth and drive digital transformation.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary-foreground text-primary font-semibold hover:bg-primary-foreground/90 transition-colors"
          >
            Contact Us <ArrowRight size={18} />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-primary-foreground text-primary-foreground font-semibold hover:bg-primary-foreground/10 transition-colors"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
