"use client";

import { useState } from "react";
import { ContactForm } from "./ContactForm";

interface RequestCvButtonProps {
  className?: string;
}

export function RequestCvButton({ className }: RequestCvButtonProps) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="flex">
        <button
          className={`px-6 py-2 text-xl rounded-lg text-white font-semibold transition-colors duration-300 bg-sky-700 hover:bg-sky-800 ${className}`}
          onClick={() => setShowModal(true)}
        >
          Request my CV
        </button>
      </div>
      {showModal && (
        <ContactForm onClose={() => setShowModal(false)} isModal={true} />
      )}
    </>
  );
}
