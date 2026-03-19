import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-hero text-hero-foreground/70 section-padding py-12">
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
      <div>
        <div className="flex items-center gap-2 mb-3">
          <img src={logo} alt="Pulsar IT Logo" className="h-12 w-auto rounded-md" />
          <h3 className="font-heading text-lg font-bold text-hero-foreground">
            <span className="gradient-text">Pulsar</span> IT
          </h3>
        </div>
        <p className="text-sm leading-relaxed max-w-xs">
          Empowering businesses with cutting-edge technology solutions since 2026.
        </p>
      </div>
      <div>
        <h4 className="font-heading font-semibold text-hero-foreground mb-3">Quick Links</h4>
        <ul className="space-y-2 text-sm">
          <li><Link to="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
          <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-heading font-semibold text-hero-foreground mb-3">Contact Us</h4>
        <ul className="space-y-2 text-sm">
          <li>hello@pulsarit.co.uk</li>
          <li>+44 7512709700</li>
          <li>Bartle House, Oxford Court, Manchester, M2 3WQ</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-border/10 text-center text-xs">
      © {new Date().getFullYear()} Pulsar IT. All rights reserved.
    </div>
  </footer>
);

export default Footer;
