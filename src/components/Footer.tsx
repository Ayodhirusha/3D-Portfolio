import { FaGithub, FaLinkedin, FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-[#050505] pt-24 pb-12 px-6 overflow-hidden">
      {/* Background Large Text Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full text-center pointer-events-none select-none opacity-[0.03]">
        <h1 className="font-display text-[15vw] font-black tracking-tighter leading-none text-white">
          AYOD HIRUSHA
        </h1>
      </div>

      {/* Top Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[300px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Logo & About */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center font-display font-black text-2xl text-black">
                A
              </div>
            </div>
            <p className="font-body text-sm text-white/50 leading-relaxed max-w-xs">
              Software Engineering graduate from University of Plymouth (UK). Experienced in Full Stack Development, UI/UX design, and mobile app development.
            </p>
          </div>

          {/* Contact Us */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-bold text-white">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors cursor-pointer group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Phone className="w-4 h-4" />
                </div>
                <span className="text-sm font-body">077 0336504</span>
              </li>
              <li className="flex items-center gap-3 text-white/60 hover:text-primary transition-colors cursor-pointer group">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm font-body">ayodhirusha77@gmail.com</span>
              </li>
            </ul>
          </div>

          {/* Portfolio */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-bold text-white">Portfolio</h3>
            <ul className="space-y-4">
              {[
                { name: "GitHub", icon: FaGithub, url: "https://github.com/Ayodhirusha" },
                { name: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/in/Ayod-hirusha" },
              ].map((item, i) => (
                <li key={i}>
                  <a 
                    href={item.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/60 hover:text-white transition-colors cursor-pointer group"
                  >
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-body">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-bold text-white">Social Media</h3>
            <div className="flex items-center gap-3">
              {[
                { icon: FaFacebookF, color: "hover:bg-blue-600", url: "#" },
                { icon: FaTwitter, color: "hover:bg-sky-500", url: "#" },
                { icon: FaInstagram, color: "hover:bg-pink-600", url: "#" },
                { icon: FaLinkedin, color: "hover:bg-blue-700", url: "https://www.linkedin.com/in/Ayod-hirusha" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-primary/90 flex items-center justify-center text-black transition-all duration-300 hover:scale-110 ${social.color} hover:text-white`}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-white/30">
            Copyright @ 2024 Ayod Hirusha
          </p>
          <p className="font-body text-xs text-white/30 uppercase tracking-widest">
            All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
