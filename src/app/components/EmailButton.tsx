"use client";

import React, { useState } from "react";

const EmailButton: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    const email = "zack.forssberg@gmail.com";
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy email:", err);
      });
  };

  return (
    <div className="flex items-center	">
      <button
        onClick={copyToClipboard}
        className={`px-6 py-2 text-xl rounded-lg text-white font-semibold transition-colors duration-300 ${
          copied ? "bg-green-500" : "bg-blue-500 hover:bg-blue-600"
        }`}
      >
        Get my email
      </button>
      {copied && <p className="ml-2 text-green-600 text-xl">Email copied!</p>}
    </div>
  );
};

export default EmailButton;
