import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faXTwitter, faInstagram, faTelegram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6">
      <div className="container mx-auto px-6 flex flex-col items-center">
        {/* Social Icons */}
        <div className="flex space-x-6 mb-4">
          <a href="https://github.com/Johnnwabueze01" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="text-white text-2xl hover:text-sky-400 transition" />
          </a>
          <a href="https://linkedin.com/in/Johnnwabueze" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="text-white text-2xl hover:text-sky-400 transition" />
          </a>
          <a href="https://x.com/Johnnwabuezeo" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faXTwitter} className="text-white text-2xl hover:text-sky-400 transition" />
          </a>
          <a href="https://instagram.com/Johnnwabueze1" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} className="text-white text-2xl hover:text-pink-500 transition" />
          </a>
          <a href="https://t.me/Johnnwabueze" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTelegram} className="text-white text-2xl hover:text-blue-400 transition" />
          </a>
          <a href="https://wa.me/+2349158989660" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} className="text-white text-2xl hover:text-green-400 transition" />
          </a>
          <a href="mailto:johnnwabueze70@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} className="text-white text-2xl hover:text-sky-400 transition" />
          </a>
        </div>

        {/* Footer Text */}
        <p className="text-sm text-white">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
