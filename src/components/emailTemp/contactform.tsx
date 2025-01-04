"use client"

import React, { useState } from "react";
import { sendContactForm } from "@/lib/api"; // Import the actual API function

import RoundBtn from '@/common/RoundedButton/rounBtn';

// Define types for the state and form values
interface FormValues {
  name: string;
  email: string;
  message: string;
}

interface FormState {
  isLoading: boolean;
  error: string;
  values: FormValues;
}

interface TouchedState {
  [key: string]: boolean;
}

// Initial values and state
const initValues: FormValues = { name: "", email: "", message: "" };
const initState: FormState = { isLoading: false, error: "", values: initValues };

export default function ContactForm() {
  const [state, setState] = useState<FormState>(initState);
  const [touched, setTouched] = useState<TouchedState>({});

  const { values, isLoading, error } = state;

  // Handle blur event (mark field as touched)
  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setTouched((prev) => ({ ...prev, [e.target.name]: true }));

  // Handle input change (update values in the form state)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setState((prev) => ({
      ...prev,
      values: {
        ...prev.values,
        [e.target.name]: e.target.value,
      },
    }));

  // Handle form submission
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!values.name || !values.email || !values.message) {
      alert("All fields are required!");
      return;
    }
  
    setState((prev) => ({
      ...prev,
      isLoading: true,
      error: "",
    }));
  
    try {
      // Convert FormValues to Record<string, string>
      const formattedValues: Record<string, string> = {
        name: values.name,
        email: values.email,
        message: values.message,
      };
  
      const response = await sendContactForm(formattedValues);
      if (response.success) {
        alert("Message sent successfully!");
        setState(initState);
        setTouched({});
      } else {
        throw new Error("Failed to send message.");
      }
    } catch (error: any) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message || "An error occurred",
      }));
    }
  };

  return (
    <div>
      <h3 className="text-[5vw] leading-[6vw]">Message</h3>
      {error && (
        <p style={{ color: "#EF1A2D", fontSize: "16px", marginBottom: "1rem" }}>
          {error}
        </p>
      )}
      <form onSubmit={onSubmit} className="mt-[3vw]">
        <div className="mb-[2vw]">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={values.name}
            onChange={handleChange}
            onBlur={onBlur}
            id="name"
            className="text-[18px] w-full border-0 border-b-2 bg-transparent p-2 focus:outline-none border-gray-300 focus:border-[#EF1A2D] peer"
          />
          {touched.name && !values.name && (
            <span style={{ color: "#EF1A2D", fontSize: "14px" }}>Name is required</span>
          )}
        </div>

        <div className="mb-[2vw]">
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={values.email}
            onChange={handleChange}
            onBlur={onBlur}
            id="email"
            className="text-[18px] w-full border-0 border-b-2 bg-transparent p-2 focus:outline-none border-gray-300 focus:border-[#EF1A2D] peer"
          />
          {touched.email && !values.email && (
            <span style={{ color: "#EF1A2D", fontSize: "14px" }}>Email is required</span>
          )}
        </div>

        <div className="mb-[2vw]">
          <textarea
            name="message"
            rows={4}
            placeholder="Your Message"
            value={values.message}
            onChange={handleChange}
            onBlur={onBlur}
            id="message"
            className="text-[18px] w-full border-0 border-b-2 bg-transparent p-2 focus:outline-none border-gray-300 focus:border-[#EF1A2D] peer"
          />
          {touched.message && !values.message && (
            <span style={{ color: "#EF1A2D", fontSize: "14px" }}>Message is required</span>
          )}
        </div>
          
        <RoundBtn>
        <button
          type="submit"
          disabled={isLoading || !values.name || !values.email || !values.message}  
          className={`w-full relative z-10 cursor-pointer`}
        >
            {isLoading ? "Submitting..." : "Submit"}
        </button>
        </RoundBtn>
      </form>
    </div>
  );
}