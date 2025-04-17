import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="w-full bg-[#0a192f] py-8 text-center text-gray-300">
      <div className="mx-auto flex max-w-[1000px] flex-col items-center justify-center">
        <div className="flex space-x-6">
          <a
            href="https://github.com/chitransh-sr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-[#64ffda]"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/chitransh-srivastava-0b2b12193"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-[#64ffda]"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://x.com/ChitranshSr"
            target="_blank"
            rel="noopener noreferrer"
            className="text-2xl hover:text-[#64ffda]"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="mailto:chitransh2209@gmail.com"
            className="text-2xl hover:text-[#64ffda]"
            aria-label="Email"
          >
            <FaEnvelope />
          </a>
        </div>
        <p className="mt-4 text-sm">
          &copy; {currentYear} Chitransh Srivastava. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
