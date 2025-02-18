import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1E1E1E] text-white py-8">
      <div className="container mx-auto text-center">
      
        <div className="flex justify-center space-x-6 mb-4">
          {[
            { href: "https://github.com/as581", icon: <FaGithub />, label: "GitHub" },
            { href: "https://www.linkedin.com/in/ashish-vishwakarma-51a769338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", icon: <FaLinkedin />, label: "LinkedIn" },
            { href: "https://twitter.com/your-twitter", icon: <FaTwitter />, label: "Twitter" },
            { href: "mailto:av0232016@gmail.com", icon: <FaEnvelope />, label: "Email" },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#F1E24] text-2xl hover:text-white transition-transform transform hover:scale-110"
              aria-label={item.label}
            >
              {item.icon}
            </a>
          ))}
        </div>

        <div className="w-1/2 mx-auto border-t border-gray-600 my-4"></div>

        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} <span className="text-[#F1E24]">Ashish Vishwakarma</span> | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;





