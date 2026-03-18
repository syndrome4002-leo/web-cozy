import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-hero text-hero-foreground/70 section-padding py-12">
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
      <div>
        <img src={logo} alt="Pulsar IT Logo" className="h-12 w-auto mb-3" />
        <p className="text-sm leading-relaxed max-w-xs">
          Empowering businesses with cutting-edge technology solutions since 2015.
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
          <li>hello@pulsarit.com</li>
          <li>+44 (161) 234-5678</li>
          <li>Manchester, UK</li>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-10 pt-6 border-t border-border/10 text-center text-xs">
      © {new Date().getFullYear()} Pulsar IT. All rights reserved.
    </div>
  </footer>
);

export default Footer;
