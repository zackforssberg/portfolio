"use client";

import React, { useState } from "react";

const EmailButton: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [boink, setBoink] = useState(false);

  const copyToClipboard = () => {
    const email = "zack.forssberg@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
        setBoink(true);
        setTimeout(() => setCopied(false), 2000);
        setTimeout(() => setBoink(false), 500);
      })
      .catch((err) => {
        console.error("Failed to copy email:", err);
      });
  };

  return (
    <div className="flex items-center">
      <button
        onClick={copyToClipboard}
        className={`px-6 py-2 text-xl rounded-lg text-white font-semibold transition-colors duration-300
          ${copied ? "bg-green-500" : "bg-sky-700 hover:bg-sky-800"} ${
          boink ? "animate-boink" : ""
        }`}
      >
        Get my email
      </button>
      {copied && (
        <p className="ml-2 text-green-600 text-xl animate-fade">
          Email copied!
        </p>
      )}
    </div>
  );
};

export default EmailButton;
