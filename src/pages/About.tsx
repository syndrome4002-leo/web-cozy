import Layout from "@/components/Layout";
import { ScrollToTopButton } from "@/components/ScrollToTop";
import { 
  Target, Eye, Users, Award, TrendingUp, Shield, 
  Globe, Clock, CheckCircle, Star, Heart, Zap,
  Building, Code, Database, Cloud, Lock, Users as UsersIcon
} from "lucide-react";
import { Link } from "react-router-dom";
import avatar1 from "@/assets/members/1.jpg";
import avatar2 from "@/assets/members/2.png";
import avatar3 from "@/assets/members/3.png";
import avatar4 from "@/assets/members/4.png";
import avatar5 from "@/assets/members/5.png";
import jackAvatar from "@/assets/directors/jack.png";
import danielAvatar from "@/assets/directors/daniel.png";
import bg2 from "@/assets/bgs/2.jpg";
import bg5 from "@/assets/bgs/5.png";
import bg8 from "@/assets/bgs/8.jpg";
import heroBg from "@/assets/hero-bg.png";

const values = [
  { 
    icon: Target, 
    title: "Mission", 
    desc: "To deliver reliable, straightforward IT support that businesses can depend on—keeping systems running smoothly without the hassle.",
    details: ""
  },
  { 
    icon: Eye, 
    title: "Vision", 
    desc: "To be the IT partner businesses trust—not just for support, but as a team they can rely on, know by name, and grow with.",
    details: ""
  },
  { 
    icon: Users, 
    title: "Culture", 
    desc: "We believe in honest communication, taking responsibility, and building real relationships—because great IT support starts with people.",
    details: ""
  },
];

const milestones = [
  { year: "Years of Experience", title: "We've spent over two decades working in IT, supporting businesses of all sizes and solving real-world problems.", desc: "" },
  { year: "Why We Started", title: "We saw too many companies getting poor, impersonal support—so we set out to change that.", desc: "" },
  { year: "Building Something Different", title: "Creating an IT service that's approachable, reliable, and built around real relationships.", desc: "" },
  { year: "Growing Together", title: "Working closely with our clients as a trusted partner, not just another provider.", desc: "" },
];

const team = [
  { 
    name: "Sarah Chen", 
    role: "CEO & Founder", 
    image: avatar1,
    bio: "Former Google engineer with 15+ years in enterprise software. Passionate about leveraging technology to solve complex business challenges.",
    expertise: ["Strategic Leadership", "Enterprise Architecture", "Digital Transformation"],
    linkedin: "#"
  },
  { 
    name: "Marcus Rivera", 
    role: "CTO", 
    image: avatar2,
    bio: "AWS certified architect with expertise in cloud infrastructure and DevOps. Leads our technical innovation and engineering excellence.",
    expertise: ["Cloud Architecture", "DevOps", "System Design"],
    linkedin: "#"
  },
  { 
    name: "Aisha Patel", 
    role: "VP of Engineering", 
    image: avatar3,
    bio: "Full-stack developer turned engineering leader. Focuses on building high-performing teams and scalable software solutions.",
    expertise: ["Team Leadership", "Software Development", "Agile Methodologies"],
    linkedin: "#"
  },
  { 
    name: "James Okoye", 
    role: "Head of Security", 
    image: avatar4,
    bio: "Cybersecurity expert with CISSP certification. Ensures our clients' data and systems remain protected against evolving threats.",
    expertise: ["Cybersecurity", "Risk Assessment", "Compliance"],
    linkedin: "#"
  },
  { 
    name: "Jack Healy", 
    role: "Director", 
    image: jackAvatar,
    bio: "Jack Healy, Director, brings over a decade of hands-on experience in the IT sector. With a range of industry-recognised qualifications, he combines technical expertise with strategic insight to drive innovation and deliver high-quality results.",
    expertise: ["IT Infrastructure", "Strategic Planning", "Technical Expertise"],
    linkedin: "#"
  },
  { 
    name: "Daniel Martin", 
    role: "Director", 
    image: danielAvatar,
    bio: "Daniel Martin is a Director who brings both technical expertise and a people-first approach to IT. With a range of qualifications and real-world experience, he enjoys working closely with clients, making technology simple and helping businesses get the most out of their systems.",
    expertise: ["Client Relations", "Technical Solutions", "Business Growth"],
    linkedin: "#"
  },
];

const certifications = [
  { name: "ISO 27001", desc: "Information Security Management" },
  { name: "AWS Certified", desc: "Cloud Architecture & DevOps" },
  { name: "Microsoft Gold Partner", desc: "Azure Solutions" },
  { name: "Google Cloud Partner", desc: "Cloud Services" },
  { name: "CISSP Certified", desc: "Security Professionals" },
  { name: "ITIL Foundation", desc: "IT Service Management" },
];

const stats = [
  { value: "Built on Trust", label: "Long-Term Partnerships", desc: "We focus on relationships, not just quick fixes" },
  { value: "Experienced Team", label: "20+ Years Combined", desc: "Hands-on knowledge across all areas of IT" },
  { value: "Dependable Service", label: "Consistency You Can Rely On", desc: "Keeping your business running smoothly" },
  { value: "Here When You Need Us", label: "Responsive & Approachable", desc: "Support from people who actually know you" },
];

const culture = [
  {
    icon: Heart,
    title: "People First",
    desc: "You'll always deal with real people who know your business—not a helpdesk or a ticket number."
  },
  {
    icon: Zap,
    title: "Straightforward Approach",
    desc: "No jargon, no overcomplication—just clear, honest advice and IT support that makes sense."
  },
  {
    icon: UsersIcon,
    title: "Reliable Support",
    desc: "When you need us, we're there—ready to help, fix issues, and keep your business running."
  },
  {
    icon: Award,
    title: "Built on Trust",
    desc: "We focus on long-term relationships, being a team you can rely on and grow with."
  },
];

const clientTestimonials = [
  {
    name: "David Thompson",
    role: "CIO, TechCorp UK",
    company: "TechCorp UK",
    feedback: "Pulsar IT transformed our legacy infrastructure into a modern, scalable cloud platform. Their expertise and professionalism are unmatched.",
    rating: 5,
    image: avatar1
  },
  {
    name: "Emma Wilson",
    role: "CEO, Digital Solutions Ltd",
    company: "Digital Solutions Ltd",
    feedback: "Outstanding cybersecurity implementation. We now have complete peace of mind with their 24/7 monitoring and rapid response capabilities.",
    rating: 5,
    image: avatar2
  },
  {
    name: "Robert Chen",
    role: "Operations Director, Global Logistics",
    company: "Global Logistics",
    feedback: "Their data analytics solutions helped us reduce operational costs by 35% while improving decision-making processes.",
    rating: 5,
    image: avatar3
  },
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
        Founded in 2015, we've grown from a small startup to a team of 50+ engineers serving 200+ clients worldwide. We're not just service providers – we're strategic technology partners committed to your success.
      </p>
    </section>

    {/* Company Story */}
    <section className="relative section-padding bg-background overflow-hidden">
      <img
        src={bg2}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-5 pointer-events-none"
      />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Our Story</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Built on Experience. <span className="gradient-text">Driven by People.</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                We’re two IT professionals with over 20 years of combined experience, brought together by a shared belief—IT support should be reliable, straightforward, and genuinely personal.
              </p>
              <p>
                After years of working in the industry, we saw the same problem time and time again: businesses being treated like ticket numbers instead of people. So we decided to do things differently.
              </p>
              <p>
                What started as a simple idea has grown into a service built on trust, relationships, and real accountability. We don’t just fix problems—we work alongside you, understanding your business and providing the support you can rely on every day.
              </p>
              <p>
                Whether it’s keeping your systems secure, moving you to the cloud, or just being there when something goes wrong, we’re the team you know, trust, and can always reach.
              </p>
            </div>
          </div>
          <div className="relative glass-card p-8 overflow-hidden">
            <img
              src={heroBg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
            />
            <div className="relative z-10">
              <h3 className="font-heading text-xl font-semibold text-foreground mb-6">Key Achievements</h3>
              <div className="space-y-4">
                {stats.map((stat) => (
                  <div key={stat.label} className="flex items-center justify-between p-4 rounded-lg bg-primary/5">
                    <div>
                      <p className="font-heading text-2xl font-bold text-primary">{stat.value}</p>
                      <p className="text-foreground font-semibold">{stat.label}</p>
                    </div>
                    <p className="text-muted-foreground text-sm max-w-xs">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Timeline */}
    <section className="relative section-padding bg-section-dark overflow-hidden">
      <img
        src={bg5}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-10 pointer-events-none"
      />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Our Journey</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-section-dark-foreground">
            Journey
          </h2>
        </div>
        <div className="relative max-w-6xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/60 to-primary/20 transform -translate-x-1/2"></div>

          <div className="space-y-16">
            {milestones.map((milestone, index) => (
              <div key={milestone.year} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-section-dark shadow-lg z-10"></div>

                {/* Content card */}
                <div className={`w-full max-w-md ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="group relative">
                    {/* Card with enhanced styling */}
                    <div className="relative bg-gradient-to-br from-section-dark-foreground/10 to-primary/10 rounded-2xl p-8 border border-section-dark-foreground/20 hover:border-primary/40 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 backdrop-blur-sm">
                      {/* Year badge */}
                      <div className="absolute -top-4 left-6 bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                        {index + 1}
                      </div>

                      {/* Icon */}
                      <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-colors">
                        <span className="text-primary font-bold text-lg">{index + 1}</span>
                      </div>

                      {/* Content */}
                      <h3 className="font-heading text-xl font-bold text-section-dark-foreground mb-3 group-hover:text-primary transition-colors">
                        {milestone.year}
                      </h3>
                      <p className="text-section-dark-foreground/80 leading-relaxed text-sm">
                        {milestone.title}
                      </p>

                      {/* Decorative elements */}
                      <div className="absolute top-4 right-4 w-20 h-20 bg-primary/5 rounded-full blur-xl group-hover:bg-primary/10 transition-colors"></div>
                      <div className="absolute bottom-4 left-4 w-16 h-16 bg-primary/5 rounded-full blur-lg group-hover:bg-primary/10 transition-colors"></div>
                    </div>

                    {/* Connecting line to timeline */}
                    <div className={`absolute top-1/2 transform -translate-y-1/2 w-8 h-0.5 bg-gradient-to-r from-primary/60 to-transparent ${index % 2 === 0 ? 'right-0' : 'left-0'}`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Our Foundation</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Core <span className="gradient-text">Values</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v) => (
            <div key={v.title} className="glass-card p-8 group hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <v.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-heading text-xl font-semibold text-foreground mb-3">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{v.desc}</p>
              <p className="text-muted-foreground/80 text-xs italic">{v.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Culture */}
    <section className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Work With Us</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Company <span className="gradient-text">Culture</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            We believe that great work comes from great people. Our culture fosters innovation, collaboration, and continuous growth.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {culture.map((item) => (
            <div key={item.title} className="text-center">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-primary" size={32} />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Leadership Team */}
    <section className="section-padding bg-section-dark">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Meet the Team</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-section-dark-foreground">
            Leadership <span className="gradient-text">Team</span>
          </h2>
          <p className="text-section-dark-foreground/60 text-lg max-w-2xl mx-auto mt-4">
            Our experienced leadership team brings decades of combined expertise in technology, business, and innovation.
          </p>
        </div>

        {/* Directors Section */}
        <div className="mb-16">
          <h3 className="text-primary font-semibold text-sm tracking-widest uppercase mb-8 text-center">Directors</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {team.filter(t => t.role === "Director").map((t) => (
              <div key={t.name} className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/40 hover:border-primary/60 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 opacity-100 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative p-8">
                  {/* Profile image with enhanced styling */}
                  <div className="relative mb-6">
                    <div className="w-32 h-32 rounded-full mx-auto overflow-hidden ring-4 ring-primary/40 group-hover:ring-primary/60 transition-all duration-300">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center ring-4 ring-section-dark">
                      <span className="text-primary-foreground text-xs font-bold">
                        {t.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center">
                    <h4 className="font-heading text-2xl font-bold text-section-dark-foreground mb-2 group-hover:text-primary transition-colors">
                      {t.name}
                    </h4>
                    <p className="bg-primary px-4 py-2 rounded-full inline-block text-primary-foreground font-semibold text-sm mb-4">
                      {t.role}
                    </p>
                    <p className="text-section-dark-foreground/80 text-base leading-relaxed mb-6">
                      {t.bio}
                    </p>

                    {/* Expertise tags */}
                    <div className="flex flex-wrap justify-center gap-2">
                      {t.expertise.map((skill) => (
                        <span key={skill} className="bg-primary/25 text-primary-foreground text-xs px-3 py-1 rounded-full border border-primary/40">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* Certifications */}
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Quality Assurance</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Certifications & <span className="gradient-text">Partnerships</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mt-4">
            We maintain the highest industry standards and partner with leading technology providers.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert) => (
            <div key={cert.name} className="glass-card p-6 text-center hover:border-primary/30 transition-colors">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary" size={24} />
              </div>
              <h3 className="font-heading font-semibold text-foreground mb-2">{cert.name}</h3>
              <p className="text-muted-foreground text-sm">{cert.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Client Testimonials */}
    <section className="section-padding bg-section-dark">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Client Success</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-section-dark-foreground">
            What Our Clients <span className="gradient-text">Say</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {clientTestimonials.map((testimonial) => (
            <div key={testimonial.name} className="group relative">
              {/* Main card with enhanced styling */}
              <div className="relative rounded-2xl bg-gradient-to-br from-section-dark-foreground/5 to-primary/5 p-8 border border-section-dark-foreground/20 hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
                {/* Quote mark */}
                <div className="absolute -top-4 left-8 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-primary-foreground text-lg font-bold">"</span>
                </div>

                {/* Star rating */}
                <div className="flex gap-1 mb-6 justify-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={18} className="fill-primary text-primary" />
                  ))}
                </div>

                {/* Testimonial text */}
                <blockquote className="text-section-dark-foreground text-base leading-relaxed mb-8 text-center italic">
                  "{testimonial.feedback}"
                </blockquote>

                {/* Author info with enhanced styling */}
                <div className="pt-6 border-t border-section-dark-foreground/10">
                  <div className="flex items-center gap-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0 border-2 border-primary/20"
                    />
                    <div>
                      <p className="font-bold text-section-dark-foreground text-sm group-hover:text-primary transition-colors">
                        {testimonial.name}
                      </p>
                      <p className="text-primary text-xs font-medium">{testimonial.role}</p>
                      <p className="text-section-dark-foreground/60 text-xs">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Subtle background glow on hover */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Industry Expertise */}
    <section className="relative section-padding bg-background overflow-hidden">
      <img
        src={bg8}
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-5 pointer-events-none"
      />
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="mb-12 text-center">
          <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Our Expertise</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Industry <span className="gradient-text">Specializations</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Building, name: "Financial Services", desc: "Secure banking and fintech solutions" },
            { icon: Code, name: "Software Development", desc: "Custom applications and platforms" },
            { icon: Database, name: "Data & Analytics", desc: "Business intelligence and insights" },
            { icon: Cloud, name: "Cloud Solutions", desc: "Scalable infrastructure and migration" },
            { icon: Lock, name: "Cybersecurity", desc: "Threat protection and compliance" },
            { icon: Globe, name: "E-commerce", desc: "Online retail and marketplace solutions" },
            { icon: Users, name: "Healthcare", desc: "HIPAA compliant healthcare systems" },
            { icon: TrendingUp, name: "Manufacturing", desc: "IoT and Industry 4.0 solutions" },
          ].map((industry) => (
            <div key={industry.name} className="glass-card p-6 text-center group hover:border-primary/30 transition-colors">
              <industry.icon className="text-primary mb-3 mx-auto group-hover:scale-110 transition-transform" size={32} />
              <h3 className="font-heading font-semibold text-foreground mb-2">{industry.name}</h3>
              <p className="text-muted-foreground text-sm">{industry.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Community & Social Responsibility */}
    <section className="section-padding bg-secondary/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Giving Back</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              Community & <span className="gradient-text">Social Impact</span>
            </h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                At Pulsar IT, we believe in using our expertise to make a positive impact beyond business. We're committed to supporting the communities where we live and work.
              </p>
              <p>
                Through technology education programs, coding bootcamps for underrepresented groups, and partnerships with local charities, we strive to create opportunities and drive positive change.
              </p>
              <p>
                Our team volunteers regularly at tech meetups, mentors aspiring developers, and contributes to open-source projects that benefit the wider community.
              </p>
            </div>
          </div>
          <div className="glass-card p-8">
            <h3 className="font-heading text-xl font-semibold text-foreground mb-6">Our Initiatives</h3>
            <div className="space-y-4">
              {[
                { title: "Code for Good", desc: "Free coding workshops for local schools" },
                { title: "Women in Tech", desc: "Mentorship program for female developers" },
                { title: "Open Source", desc: "Contributions to community projects" },
                { title: "Digital Inclusion", desc: "Bridging the digital divide in underserved communities" },
              ].map((initiative) => (
                <div key={initiative.title} className="flex items-start gap-3 p-3 rounded-lg bg-background/50">
                  <CheckCircle className="text-primary flex-shrink-0 mt-0.5" size={18} />
                  <div>
                    <p className="font-semibold text-foreground text-sm">{initiative.title}</p>
                    <p className="text-muted-foreground text-xs">{initiative.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Contact */}
    <section className="section-padding bg-section-dark">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-section-dark-foreground mb-4">
          Ready to Work With Us?
        </h2>
        <p className="text-section-dark-foreground/60 text-lg mb-8 max-w-2xl mx-auto">
          Join hundreds of businesses that trust Pulsar IT with their technology needs. Let's discuss how we can help transform your operations.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
          >
            Get Started <TrendingUp size={18} />
          </Link>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-section-dark-foreground/20 text-section-dark-foreground font-semibold hover:bg-section-dark-foreground/5 transition-colors"
          >
            View Services
          </Link>
        </div>
        <div className="glass-card p-8 text-left max-w-md mx-auto bg-section-dark/80">
          <h3 className="font-heading font-semibold text-section-dark-foreground mb-4">Contact Information</h3>
          <div className="space-y-4 text-section-dark-foreground/80 text-sm">
            <p><span className="font-semibold text-section-dark-foreground">Email:</span> hello@pulsarit.co.uk</p>
            <p><span className="font-semibold text-section-dark-foreground">Phone:</span> +44 7512709700</p>
            <p><span className="font-semibold text-section-dark-foreground">Address:</span> Bartle House, Oxford Court, Manchester, M2 3WQ</p>
            <p><span className="font-semibold text-section-dark-foreground">Hours:</span> Monday-Friday, 9AM-6PM GMT</p>
          </div>
        </div>
      </div>
    </section>
    <ScrollToTopButton />
  </Layout>
);

export default About;
