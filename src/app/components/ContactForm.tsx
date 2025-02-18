"use client";

import { useState } from "react";
import { send } from "emailjs-com";

interface FormData extends Record<string, unknown> {
  user_name: string;
  user_email: string;
  message: string;
}

interface ContactFormProps {
  onClose?: () => void;
  isModal?: boolean;
}

export function ContactForm({ onClose, isModal = false }: ContactFormProps) {
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
          "Your request has been sent! I'll get back to you soon."
        );
        setFormData({ user_name: "", user_email: "", message: "" });
      })
      .catch((err) => {
        console.error("Failed to send request:", err);
        setSuccessMessage("Something went wrong. Please try again.");
      });
  };

  // The form content that will be used in both modal and non-modal versions
  const formContent = (
    <>
      {isModal ? (
        <h2 className="text-xl font-bold mb-4">Request my CV</h2>
      ) : (
        <h2 className="text-xl font-bold mb-4">Send me a message!</h2>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Your Name</label>
          <input
            type="text"
            name="user_name"
            value={formData.user_name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg bg-foreground"
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
            className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg bg-foreground"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border-2 border-gray-300 rounded-lg bg-foreground"
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

      {isModal && onClose && (
        <button
          className="mt-4 text-sm text-gray-500 underline"
          onClick={onClose}
        >
          Close
        </button>
      )}
    </>
  );

  // If it's a modal, wrap in modal container
  if (isModal) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-foreground text-background p-6 rounded-lg shadow-lg w-full max-w-md">
          {formContent}
        </div>
      </div>
    );
  }

  // If it's not a modal, return the form content directly
  return <div className="w-full max-w-md">{formContent}</div>;
}
