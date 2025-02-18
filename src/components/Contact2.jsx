import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(""); // ✅ Success/Error Message state

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(""); // Reset status before sending

    emailjs
      .send(
        "service_smk3xp6", // ✅ Replace with your EmailJS Service ID
        "template_au38rzq", // ✅ Replace with your EmailJS Template ID
        {
          from_name: form.name,
          message: form.message,
          to_email: "av0232016@gmail.com", // ✅ Replace with your email
        },
        "p43i1Qz7oFmq37zNs" // ✅ Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          setStatus("✅ Email Sent Successfully!"); // ✅ Success Message
          setForm({ name: "", message: "" });
        },
        (error) => {
          setStatus("❌ Failed to send email. Try again!"); // ❌ Error Message
          console.error("Error:", error);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-6 bg-gradient-to-b from-[#121212] to-[#1e1e1e] mt-[8vw]">
      <div className="bg-[#1e1e1e] p-10 rounded-xl shadow-lg max-w-2xl w-full text-[#E0E0E0]">
        <h2 className="text-3xl font-bold text-center text-[#E0E0E0] mb-6">
          Let's Connect
        </h2>

        <form onSubmit={sendEmail} className="space-y-4">
          <div>
            <label className="block text-gray-300">Full Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full p-3 bg-[#2e2e2e] rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FACC15] text-[#E0E0E0]"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300">Message</label>
            <textarea
              rows="4"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message..."
              className="w-full p-3 bg-[#2e2e2e] rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FACC15] text-[#E0E0E0]"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className={`w-full text-black font-semibold py-3 rounded-md transition ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:bg-[#d4ac0d]"
            }`}
            disabled={loading} // ✅ Disable button when sending
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* ✅ Status Message (Success/Error) */}
        {status && (
          <p className="text-center mt-4 font-semibold">
            {status.includes("✅") ? (
              <span className="text-green-400">{status}</span>
            ) : (
              <span className="text-red-400">{status}</span>
            )}
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact;


