import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
     
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          access_key: 'a6b4714a-f358-4fa0-99a7-5beddeaa877a', 
          subject: 'New Contact Form Submission',
          from_name: 'Portfolio Contact Form',
          reply_to: formData.email,
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="w-full bg-[#0a192f] py-20 text-gray-300">
      <div className="mx-auto flex h-full w-full max-w-[1000px] flex-col justify-center p-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="inline border-b-4 border-[#64ffda] text-4xl font-bold">
            Contact
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row md:gap-8">
          <motion.div
            className="mt-4 flex-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-[#ccd6f6]">
                Get In Touch
              </h2>
              <p className="mt-2 text-[#8892b0]">
                I'm currently looking for new opportunities to work on exciting
                projects. Whether you have a question or just want to say hi,
                I'll try my best to get back to you!
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center">
                <span className="mr-3 text-[#64ffda]">Email:</span>
                <a
                  href="mailto:chitransh2209@gmail.com"
                  className="text-[#8892b0] hover:text-[#64ffda]"
                >
                  chitransh2209@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-3 text-[#64ffda]">Phone:</span>
                <a
                  href="tel:+918081009062"
                  className="text-[#8892b0] hover:text-[#64ffda]"
                >
                  +91 8081009062
                </a>
              </div>
              <div className="flex items-center">
                <span className="mr-3 text-[#64ffda]">Location:</span>
                <span className="text-[#8892b0]">India</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="mt-8 flex w-full items-center justify-center md:mt-0 flex-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className="flex w-full max-w-[600px] flex-col"
            >
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="border-2 border-[#ccd6f6] bg-[#ccd6f6] bg-opacity-10 p-2 text-[#ccd6f6] focus:border-[#64ffda] focus:outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="my-4 border-2 border-[#ccd6f6] bg-[#ccd6f6] bg-opacity-10 p-2 text-[#ccd6f6] focus:border-[#64ffda] focus:outline-none"
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={8}
                className="border-2 border-[#ccd6f6] bg-[#ccd6f6] bg-opacity-10 p-2 text-[#ccd6f6] focus:border-[#64ffda] focus:outline-none"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="mx-auto mt-8 flex items-center border-2 border-[#ccd6f6] px-6 py-3 font-bold text-[#ccd6f6] hover:border-[#64ffda] hover:bg-[#64ffda] hover:bg-opacity-20 hover:text-[#64ffda] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:border-[#ccd6f6] disabled:hover:bg-transparent disabled:hover:text-[#ccd6f6]"
              >
                {isSubmitting ? 'Sending...' : "Let's Collaborate"}
              </button>
              
              {submitStatus === 'success' && (
                <div className="mt-4 p-3 bg-green-500 bg-opacity-20 border border-green-500 rounded-lg text-green-400 text-center">
                  ✅ Message sent successfully! I'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="mt-4 p-3 bg-red-500 bg-opacity-20 border border-red-500 rounded-lg text-red-400 text-center">
                  ❌ Failed to send message. Please try again or email me directly.
                </div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
