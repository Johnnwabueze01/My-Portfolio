/*import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";


const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(false);
    setError(false);

    emailjs
      .send(
        "service_6nnh49c", // Replace with EmailJS Service ID
        "template_9fabb6x", // Replace with EmailJS Template ID
        formData,
        "modk31nZ48pATynwX" // Replace with EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("Message sent successfully!", response);
          setIsSent(true);
          setFormData({ name: "", email: "", message: "" }); // Clear form
        },
        (error) => {
          console.error("Failed to send message", error);
          setError(true);
        }
      );
  };

  return (
    <section id="contact" className="flex items-center justify-center min-h-screen bg-gray-100 p-6">
     
      {isSent && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90 z-50">
          <div className="flex flex-col items-center text-center p-8 bg-white rounded-lg shadow-lg">
             <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-6xl" />
            <h2 className="text-3xl font-bold text-green-500 mt-4">Message Sent!</h2>
            <p className="text-gray-700 mt-2">Thank you for reaching out. I'll get back to you soon!</p>
            <button
              onClick={() => setIsSent(false)}
              className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              OK
            </button>
          </div>
        </div>
      )}

      
      <div className="w-full max-w-lg bg-white p-8 shadow-lg rounded-lg">
        <h2 className="text-3xl font-bold text-center text-blue-500">Contact Me</h2>
        <p className="text-gray-600 text-center mb-6">Let's build something awesome together!</p>

        {error && (
          <p className="text-red-500 bg-red-100 p-3 rounded-md text-center">
            ❌ Failed to send message. Please try again.
          </p>
        )}

        <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-medium">Message</label>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium hover:bg-blue-600 transition cursor-pointer"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
*/

import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSent(false);
    setError(false);

    emailjs
      .send(
        "service_6nnh49c", // Replace with EmailJS Service ID
        "template_9fabb6x", // Replace with EmailJS Template ID
        formData,
        "modk31nZ48pATynwX" // Replace with EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("Message sent successfully!", response);
          setIsSent(true);
          setFormData({ name: "", email: "", message: "" }); // Clear form

          // Hide the confirmation after 3 seconds
          setTimeout(() => {
            setIsSent(false);
          }, 3000);
        },
        (error) => {
          console.error("Failed to send message", error);
          setError(true);
        }
      );
  };

  return (
    <section id="contact" className="flex items-center justify-center min-h-screen">
      {/* Full-Screen Confirmation Modal (Shows for 3 seconds) */}
      {isSent && (
        <div className="fixed inset-0 flex flex-col items-center justify-center bg-opacity-80 z-50">
          <FontAwesomeIcon icon={faCheckCircle} className="text-green-500 text-7xl animate-bounce" />
          <h2 className="text-3xl font-bold text-green-500 mt-4">Message Sent!</h2>
          <p className="text-gray-700 mt-2">Thank you for reaching out. I'll get back to you soon!</p>
        </div>
      )}

      {/* Contact Form */}
      {!isSent && (
        <div className="w-full max-w-lg bg-white p-8 shadow-lg rounded-lg">
          <h2 className="text-3xl font-bold text-center text-white">Contact Me</h2>
          <p className="text-center mb-6 text-white">Let's build something awesome together!</p>

          {/* Error Message */}
          {error && (
            <p className="text-red-500 bg-red-100 p-3 rounded-md text-center">
              ❌ Failed to send message. Please try again.
            </p>
          )}

          <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
            <div>
              <label className="block font-medium text-white">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-transparent"
                required
              />
            </div>

            <div>
              <label className="block font-medium  text-white">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-transparent"
                required
              />
            </div>

            <div>
              <label className="block font-medium  text-white">Message</label>
              <textarea
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-transparent"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-3 rounded-lg font-medium border-2 border-white transition"
            >
              Send Message
            </button>
          </form>
        </div>
      )}
    </section>
  );
};

export default Contact;
