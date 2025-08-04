import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

export default function Homepage() {
  const navigate = useNavigate();

  const logoText = "logo";
  const navItems = [
    { label: "Home", path: "/" },
    { label: "Submit Product", path: "/submit-product" },
    { label: "Reports", path: "/reports" },
    { label: "Login", path: "/login" },
  ];

  const rotatingWords = [
    
    "Sustainable Choices",
 " Ethical Standards",
"Transparent Practices",
    "Consumer Trust",
    "Product Integrity"
  ];

  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const heroDescription =
    "EthicalScan is your trusted platform for product transparency, empowering consumers and businesses to make informed choices that align with their values.";
  const primaryButtonText = "Submit Your Product";
  const secondaryButtonText = "Explore Transparency Reports";
  const valuesTitle = "Our Core Values";

  const values = [
    {
      title: "Trust",
      description: "Building a foundation of verifiable data and transparent processes.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-gray-600 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M20 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M4 21v-2a4 4 0 0 1 3-3.87" />
          <path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4z" />
        </svg>
      )
    },
    {
      title: "Transparency",
      description: "Providing clear, accessible, and comprehensive product information.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-gray-600 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    },
    {
      title: "Simplicity",
      description: "Streamlining complex data into easily digestible insights for everyone.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 text-gray-600 mx-auto" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <polygon points="13 2 3 14 12 14 11 22 21 10 13 10 13 2" />
        </svg>
      )
    }
  ];

  const benefits = [
    {
      title: "Enhanced Brand Reputation",
      description: "Build consumer trust by openly sharing your product's ethical and health attributes.",
      icon: (
        <svg className="absolute top-6 left-6 w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#998E7AFF">
          <path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" />
        </svg>
      )
    },
    {
      title: "Streamlined Compliance",
      description: "Simplify the process of meeting regulatory and ethical standards with guided submissions.",
      icon: (
        <svg className="absolute top-6 left-6 w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#998E7AFF" strokeWidth="1.5">
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M8 12l3 3 5-5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    },
    {
      title: "Data-Driven Insights",
      description: "Leverage comprehensive reports to understand and improve your product's transparency.",
      icon: (
        <svg className="absolute top-6 left-6 w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#998E7AFF" strokeWidth="1.5">
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M8 17v-5M12 17V7M16 17v-3" strokeLinecap="round" />
        </svg>
      )
    },
    {
      title: "Market Differentiation",
      description: "Stand out in the market by showcasing your commitment to ethical and sustainable practices.",
      icon: (
        <svg className="absolute top-6 left-6 w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#998E7AFF" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 7v5l4 2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="hidden">
        
      </div>
      <main className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center py-16 lg:py-24">
        <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-20">
  Empowering Ethical and{" "}
  <span
    key={rotatingWords[wordIndex]}
    className="inline-block text-green-700 transition-opacity duration-700 ease-in-out"
    style={{ minWidth: "300px", display: "inline-block", textAlign: "left" }}
  >
    {rotatingWords[wordIndex]}
  </span>
</h1>
<div className="">
          <p className="text-lg text-gray-600 mt-2 mb-20 max-w-3xl mx-auto">{heroDescription}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button onClick={() => navigate("/login")} className="bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-8 rounded-md transition-colors">{primaryButtonText}</button>
            <button onClick={() => navigate("/login")} className="bg-white hover:bg-gray-50 text-gray-700 font-medium py-3 px-8 rounded-md border border-gray-300 transition-colors">{secondaryButtonText}</button>
            </div>
          </div>
        </div>

        <section className="py-16">
          <h2 className="text-3xl flex items-center justify-center lg:text-4xl font-bold text-gray-900 mb-16">{valuesTitle}</h2>
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {values.map((value, index) => (
              <div key={index} className="text-center border border-gray-300 rounded-lg p-6 shadow-sm hover:shadow-md bg-white transition-shadow">
                <div className="mb-6">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-20 relative">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-12 text-center">Benefits for Your Business</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-12 place-items-center">
            {benefits.map((item, idx) => (
              <div
                key={idx}
                className="relative w-[580px] h-[180px] bg-white rounded-[10px] p-6 pt-16 shadow-[0px_0px_1px_#171a1f              shadow-[0px_0px_1px_#171a1f12,0px_0px_2px_#171a1f1F]"
              >
                {item.icon}
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How EthicalScan Works Section */}
        <section className="py-20 text-left flex flex-col items-center">
          <div className="max-w-3xl w-full">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-10">How EthicalScan Works</h2>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              <span style={{ color: '#4E7E57FF' }} className="mr-7">1.</span> Submit Product Data
            </h3>
            <p className="text-gray-600 mb-6">
              Easily enter detailed information about your product's ingredients, sourcing, and certifications through our intuitive guided form.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              <span style={{ color: '#4E7E57FF' }} className="mr-7">2.</span> Generate Transparency Report
            </h3>
            <p className="text-gray-600 mb-6">
              EthicalScan compiles your submitted data into a comprehensive, easy-to-read transparency report for consumers.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              <span style={{ color: '#4E7E57FF' }} className="mr-7">3.</span> Share with Confidence
            </h3>
            <p className="text-gray-600 mb-6">
              Provide your customers with immediate access to your product's ethical footprint, building trust and loyalty.
            </p>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="relative flex flex-col items-center justify-center py-16 bg-gray-100 rounded-md">
          <section className="mt-14 mb-14 px-6 flex flex-col items-center text-center">
            <svg
              className="w-23 h-23 text-gray-400 mb-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17a4 4 0 0 1 4-4H7V7H3v10h4zm10 0a4 4 0 0 1 4-4h-4V7h-4v10h4z" />
            </svg>

            <blockquote className="max-w-3xl">
              <p className="text-3xl font-semibold text-gray-800">
                <i>EthicalScan has transformed how we communicate our product values.
                The platform is incredibly user-friendly, and the transparency reports have
                significantly boosted our customer engagement.</i>
              </p>
              <footer className="mt-11 text-green-600 font-medium">
                — Ethical Foods Inc.
              </footer>
            </blockquote>
          </section>
        </section>

        {/* Call to Action */}
        <div className="flex flex-col items-center justify-center my-32 mx-auto border border-gray-100 rounded-md p-11 bg-[#F5F9F6FF] w-[1184px] h-[321px] mt-20">
          <h3 className="flex items-center justify-center font-semibold text-gray-900 mb-4 text-4xl">
            Ready to Transform Your Product's Transparency?
          </h3>
          <p className="text-gray-600 mb-6">
            Join EthicalScan today and empower your customers with the information they deserve.
          </p>
          <button className="bg-black text-white font-medium py-3 px-6 rounded-md transition-colors">
            Get Started Now
          </button>
        </div>
      </main>
    
    </div>
  );
}
