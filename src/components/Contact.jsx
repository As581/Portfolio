/*import { motion } from "framer-motion";
import { useState } from "react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted! 🚀");
  };

  return (
    <motion.div
      className=" bg-[#121212] w-full flex justify-center items-center py-20 px-5"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className=" bg-[#f1f1f1] p-10 rounded-lg w-full max-w-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-[#F1E24] mb-6">
          Contact Me
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-[#E0E0E0] text-sm font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[#121212] text-white rounded-md outline-none focus:ring-2 focus:ring-[#F1E24]"
            />
          </div>

          <div>
            <label className="block text-[#E0E0E0] text-sm font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full p-3 bg-[#121212] text-white rounded-md outline-none focus:ring-2 focus:ring-[#F1E24]"
            />
          </div>

          <div>
            <label className="block text-[#E0E0E0] text-sm font-semibold mb-1">
              Message
            </label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              required
              rows="4"
              className="w-full p-3 bg-[#121212] text-white rounded-md outline-none focus:ring-2 focus:ring-[#F1E24]"
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-[#F1E24] text-black py-3 rounded-md font-semibold text-lg"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;*/
/*import { motion } from "framer-motion";
import { useState } from "react";


const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setSubmitted(true);
      setIsSubmitting(false);
      setForm({ name: "", email: "", message: "" });
    }, 1500);
  };

  return (
    <motion.section
      className="bg-gradient-to-t  from-[#121212] to-[#1e1e1e] min-h-screen flex justify-center items-center bg-[#121212] px-6 py-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="bg-[#1E1E1E] p-10 rounded-xl shadow-2xl w-full max-w-md">
        <h2 className="text-4xl font-bold text-center text-[#F1E24] mb-6">
          Get In Touch
        </h2>
        <p className="text-gray-400 text-center mb-6">
          Let's connect! Feel free to reach out for any inquiries or
          collaborations.
        </p>

        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center text-green-400 font-semibold text-lg"
          >
            ✅ Message sent successfully!
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-[#E0E0E0] text-sm font-semibold mb-1">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full p-3 bg-[#121212] text-white rounded-md outline-none border border-gray-700 focus:ring-2 focus:ring-[#F1E24]"
              />
            </div>

            <div>
              <label className="block text-[#E0E0E0] text-sm font-semibold mb-1">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full p-3 bg-[#121212] text-white rounded-md outline-none border border-gray-700 focus:ring-2 focus:ring-[#F1E24]"
              />
            </div>

            <div>
              <label className="block text-[#E0E0E0] text-sm font-semibold mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows="4"
                className="w-full p-3 bg-[#121212] text-white rounded-md outline-none border border-gray-700 focus:ring-2 focus:ring-[#F1E24]"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              disabled={isSubmitting}
              className={`w-full py-3 rounded-md font-semibold text-lg transition-all duration-300 ${
                isSubmitting
                  ? "bg-gray-500 text-gray-300 cursor-not-allowed"
                  : "bg-[#F1E24] text-black hover:bg-[#d9c221]"
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>
          </form>
        )}
      </div>
    </motion.section>
  );
};

export default Contact;*/
import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="min-h-screen flex justify-center items-center px-6 bg-gradient-to-b from-[#121212] to-[#1e1e1e]">
      <div className="bg-[#1e1e1e] p-10 rounded-xl shadow-lg max-w-2xl w-full text-[#E0E0E0]">
        
        {/* Heading */}
        <motion.h2 
          className="text-3xl font-bold text-center text-[#E0E0E0]  mb-6"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Let's Connect
        </motion.h2>

        {/* Form */}
        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-gray-300">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-3 bg-[#2e2e2e] rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FACC15] text-[#E0E0E0]"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-300">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-3 bg-[#2e2e2e] rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FACC15] text-[#E0E0E0]"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-300">Message</label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              className="w-full p-3 bg-[#2e2e2e] rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FACC15] text-[#E0E0E0]"
            ></textarea>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className="w-full text-[#E0E0E0] text-black font-semibold py-3 rounded-md hover:bg-[#FACC15] transition"
            whileHover={{ scale: 1.05 }}
          >
            Send Message
          </motion.button>
        </form>

        {/* Contact Info */}
        <div className="mt-6 text-center text-gray-400">
          <p>Email: <a href="mailto:av0232016@gmail.com" className="text-[#FACC15]">av0232016@gmail.com</a></p>
          <p>Phone: <a href="tel:+1234567890" className="text-[#FACC15]">+91 9324302573</a></p>
        </div>
      </div>
    </div>
  );
};

export default Contact;






