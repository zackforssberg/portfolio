"use client";

import { useState } from "react";
import { send } from "emailjs-com";

interface FormData extends Record<string, unknown> {
  user_name: string;
  user_email: string;
  message: string;
}

export default function RequestCvModal() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    user_name: "",
    user_email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    send("service_rps9pkl", "template_u57bx52", formData, "p4AAmIrN5peKL508Z")
      .then(() => {
        setSuccessMessage(
          "Your request has been sent! I’ll get back to you soon."
        );
        setFormData({ user_name: "", user_email: "", message: "" });
      })
      .catch((err) => {
        console.error("Failed to send request:", err);
        setSuccessMessage("Something went wrong. Please try again.");
      });
  };

  return (
    <div>
      <button
        className={`m-12 px-6 py-2 text-xl rounded-lg text-white font-semibold transition-colors duration-300 bg-sky-700 hover:bg-sky-800
          `}
        onClick={() => setShowModal(true)}
      >
        Request my CV
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Request my CV</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium">Your Name</label>
                <input
                  type="text"
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Your Email</label>
                <input
                  type="email"
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>

              <div>
                <label className="block text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  rows={4}
                />
              </div>

              <button
                type="submit"
                className="px-6 py-2 text-xl rounded-lg text-white font-semibold transition-colors duration-300 bg-green-500 hover:bg-green-600"
              >
                Submit Request
              </button>
            </form>

            {successMessage && (
              <p className="mt-4 text-green-600">{successMessage}</p>
            )}

            <button
              className="mt-4 text-sm text-gray-500 underline"
              onClick={() => setShowModal(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
