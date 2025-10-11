import React, { useState } from "react";

const Contact2 = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "0238eb23-f6e9-4fdb-a3cf-8f9d0a2ccb40"); // ✅ Replace with your Web3Forms access key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Form Submitted Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("❌ " + data.message);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-6 bg-gradient-to-b from-[#121212] to-[#1e1e1e] mt-[8vw]">
      <div className="bg-[#1e1e1e] p-10 rounded-xl shadow-lg max-w-2xl w-full text-[#E0E0E0]">
        <h2 className="text-3xl font-bold text-center text-[#E0E0E0] mb-6">
          Let's Connect
        </h2>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-300">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full p-3 bg-[#2e2e2e] rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FACC15] text-[#E0E0E0]"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-3 bg-[#2e2e2e] rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#FACC15] text-[#E0E0E0]"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300">Message</label>
            <textarea
              rows="4"
              name="message"
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
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {result && (
          <p className="text-center mt-4 font-semibold">
            {result.includes("✅") ? (
              <span className="text-green-400">{result}</span>
            ) : result.includes("❌") ? (
              <span className="text-red-400">{result}</span>
            ) : (
              <span className="text-yellow-400">{result}</span>
            )}
          </p>
        )}
      </div>
    </div>
  );
};

export default Contact2;
