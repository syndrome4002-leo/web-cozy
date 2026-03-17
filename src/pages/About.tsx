import Layout from "@/components/Layout";
import { Target, Eye, Users } from "lucide-react";
import avatar1 from "@/assets/members/1.jpg";
import avatar2 from "@/assets/members/2.png";
import avatar3 from "@/assets/members/3.png";
import avatar4 from "@/assets/members/4.png";

const values = [
  { icon: Target, title: "Mission", desc: "To empower businesses of every size with innovative technology that drives efficiency, growth, and competitive advantage." },
  { icon: Eye, title: "Vision", desc: "To be the most trusted technology partner for forward-thinking organizations around the globe." },
  { icon: Users, title: "Culture", desc: "Collaboration, continuous learning, and an unwavering commitment to delivering excellence define who we are." },
];

const team = [
  { name: "Sarah Chen", role: "CEO & Founder", image: avatar1 },
  { name: "Marcus Rivera", role: "CTO", image: avatar2 },
  { name: "Aisha Patel", role: "VP of Engineering", image: avatar3 },
  { name: "James Okoye", role: "Head of Security", image: avatar4 },
];

const About = () => (
  <Layout>
    {/* Header */}
    <section className="bg-hero section-padding pb-12">
      <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Who We Are</p>
      <h1 className="font-heading text-4xl md:text-5xl font-bold text-hero-foreground mb-4">
        About <span className="gradient-text">Pulsar IT</span>
      </h1>
      <p className="text-hero-foreground/60 max-w-xl text-lg">
        Founded in 2015, we've grown from a small startup to a team of 50+ engineers serving 200+ clients worldwide.
      </p>
    </section>

    {/* Values */}
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {values.map((v) => (
          <div key={v.title} className="glass-card p-8">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
              <v.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{v.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Team */}
    <section className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-10 text-center">
          Leadership <span className="gradient-text">Team</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {team.map((t) => (
            <div key={t.name} className="glass-card p-6 text-center">
              <img 
                src={t.image} 
                alt={t.name}
                className="w-20 h-20 rounded-full object-cover mx-auto mb-4"
              />
              <h4 className="font-heading font-semibold text-foreground">{t.name}</h4>
              <p className="text-muted-foreground text-sm">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Contact */}
    <section className="section-padding bg-section-dark">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-section-dark-foreground mb-4">
          Let's Work Together
        </h2>
        <p className="text-section-dark-foreground/60 mb-8">
          Reach out to discuss your next project or technology challenge.
        </p>
        <div className="glass-card p-8 text-left max-w-md mx-auto bg-section-dark/80">
          <div className="space-y-4 text-section-dark-foreground/80 text-sm">
            <p><span className="font-semibold text-section-dark-foreground">Email:</span> hello@pulsarit.com</p>
            <p><span className="font-semibold text-section-dark-foreground">Phone:</span> +44 (161) 234-5678</p>
            <p><span className="font-semibold text-section-dark-foreground">Address:</span> 42 Deansgate, Manchester, M3 2BA, UK</p>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
