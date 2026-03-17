import Layout from "@/components/Layout";
import { Mail, Phone, MapPin, Send, Clock, Globe } from "lucide-react";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", subject: "", message: "" });
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <Layout>
      {/* Header */}
      <section className="bg-hero section-padding pb-12">
        <p className="text-primary font-semibold text-sm tracking-widest uppercase mb-3">Get in Touch</p>
        <h1 className="font-heading text-4xl md:text-5xl font-bold text-hero-foreground mb-4">
          Contact <span className="gradient-text">Pulsar IT</span>
        </h1>
        <p className="text-hero-foreground/60 max-w-xl text-lg">
          Have a project in mind? We'd love to hear from you. Get in touch with our team and let's build something amazing together.
        </p>
      </section>

      {/* Contact Info Cards */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 mb-16">
          <div className="glass-card p-8 text-center">
            <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Mail className="text-primary" size={32} />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Email</h3>
            <p className="text-muted-foreground text-sm">Send us an email and we'll respond within 24 hours</p>
            <p className="text-primary font-semibold mt-3">hello@pulsarit.com</p>
          </div>

          <div className="glass-card p-8 text-center">
            <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Phone className="text-primary" size={32} />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Phone</h3>
            <p className="text-muted-foreground text-sm">Call us during business hours</p>
            <p className="text-primary font-semibold mt-3">+44 (161) 234-5678</p>
          </div>

          <div className="glass-card p-8 text-center">
            <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <MapPin className="text-primary" size={32} />
            </div>
            <h3 className="font-heading text-xl font-semibold text-foreground mb-2">Location</h3>
            <p className="text-muted-foreground text-sm">Visit us at our office</p>
            <p className="text-primary font-semibold mt-3">Manchester, UK</p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding bg-section-dark">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="font-heading text-3xl font-bold text-section-dark-foreground mb-8">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-section-dark-foreground font-semibold mb-2 text-sm">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-lg bg-section-dark border border-section-dark-foreground/20 text-section-dark-foreground placeholder-section-dark-foreground/40 focus:border-primary/50 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-section-dark-foreground font-semibold mb-2 text-sm">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-lg bg-section-dark border border-section-dark-foreground/20 text-section-dark-foreground placeholder-section-dark-foreground/40 focus:border-primary/50 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-section-dark-foreground font-semibold mb-2 text-sm">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Inquiry"
                  className="w-full px-4 py-3 rounded-lg bg-section-dark border border-section-dark-foreground/20 text-section-dark-foreground placeholder-section-dark-foreground/40 focus:border-primary/50 focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-section-dark-foreground font-semibold mb-2 text-sm">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell us about your project..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-section-dark border border-section-dark-foreground/20 text-section-dark-foreground placeholder-section-dark-foreground/40 focus:border-primary/50 focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold hover:bg-primary/90 transition-colors"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

          {/* Side Info */}
          <div>
            <h2 className="font-heading text-3xl font-bold text-section-dark-foreground mb-8">Why Choose Us</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20">
                    <Clock className="text-primary" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-section-dark-foreground mb-1">Quick Response</h3>
                  <p className="text-section-dark-foreground/60 text-sm">We respond to inquiries within 24 hours</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20">
                    <Globe className="text-primary" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-section-dark-foreground mb-1">Global Reach</h3>
                  <p className="text-section-dark-foreground/60 text-sm">Serving clients worldwide with timezones support</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary/20">
                    <Mail className="text-primary" size={24} />
                  </div>
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-section-dark-foreground mb-1">Expert Team</h3>
                  <p className="text-section-dark-foreground/60 text-sm">50+ certified professionals ready to help</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-8 rounded-xl bg-primary/10 border border-primary/20">
              <h3 className="font-heading font-semibold text-section-dark-foreground mb-3">Office Hours</h3>
              <ul className="space-y-2 text-section-dark-foreground/80 text-sm">
                <li><span className="font-semibold">Monday - Friday:</span> 9:00 AM - 6:00 PM GMT</li>
                <li><span className="font-semibold">Saturday:</span> 10:00 AM - 4:00 PM GMT</li>
                <li><span className="font-semibold">Sunday:</span> Closed</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-heading text-3xl font-bold text-foreground mb-8 text-center">Visit Our Office</h2>
          <div className="rounded-xl overflow-hidden shadow-lg h-96 bg-muted flex items-center justify-center">
            <div className="text-center">
              <MapPin className="mx-auto mb-4 text-muted-foreground" size={48} />
              <p className="text-muted-foreground text-lg">42 Deansgate, Manchester, M3 2BA, UK</p>
              <p className="text-muted-foreground text-sm mt-2">Map integration available</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
