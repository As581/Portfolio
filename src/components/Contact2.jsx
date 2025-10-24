import React, { useState } from "react";

const Contact2 = () => {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "0238eb23-f6e9-4fdb-a3cf-8f9d0a2ccb40"); // Web3Forms Key
    formData.append("email", "av0232016@gmail.com");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("✅ Message Sent Successfully!");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("❌ " + data.message);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen flex justify-center items-center px-6 bg-gradient-to-b from-[#121212] to-[#1e1e1e] mt-[8vw]">
      <div className="bg-[#1e1e1e] p-10 rounded-xl shadow-lg max-w-2xl w-full text-[#E0E0E0] border border-gray-700 hover:border-[#F1E24]/50 transition-all duration-500">
        <h2 className="text-3xl font-bold text-center text-[#F1E24] mb-8">
          Let's Connect 📩
        </h2>

        <form onSubmit={onSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="block text-gray-300 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              className="w-full p-3 bg-[#2e2e2e] rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#F1E24] text-[#E0E0E0]"
              required
            />
          </div>

          {/* Subject */}
          <div>
            <label className="block text-gray-300 mb-1">Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="e.g. Collaboration, Hiring, UI Design..."
              className="w-full p-3 bg-[#2e2e2e] rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#F1E24] text-[#E0E0E0]"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-300 mb-1">Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              pattern="[0-9]{10}"
              title="Enter a valid 10-digit phone number"
              className="w-full p-3 bg-[#2e2e2e] rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#F1E24] text-[#E0E0E0]"
              required
            />
          </div>

          {/* Hidden Email */}
          <div className="hidden">
            <input type="email" name="email" value="av0232016@gmail.com" readOnly />
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-300 mb-1">Message</label>
            <textarea
              rows="5"
              name="message"
              placeholder="Write your message..."
              className="w-full p-3 bg-[#2e2e2e] rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#F1E24] text-[#E0E0E0]"
              required
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full bg-[#F1E24] text-black font-semibold py-3 rounded-md transition flex justify-center items-center gap-2 ${
              loading ? "opacity-70 cursor-not-allowed" : "hover:bg-[#d4c214]"
            }`}
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="animate-spin border-2 border-black border-t-transparent rounded-full w-5 h-5"></span>
                Sending...
              </>
            ) : (
              "Send Message"
            )}
          </button>
        </form>

        {/* Result Feedback */}
        {result && (
          <p className="text-center mt-6 font-semibold text-lg">
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
