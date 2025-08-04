import React from "react";
import { useState } from "react";
import Footer from "../components/Footer";

const steps = ["Product Details", "Ethical Claims", "Health Info", "Review & Submit"];

export default function ProductSubmission() {
  const [step, setStep] = useState(0);

  const goNext = () => {
    if (step < steps.length - 1) setStep((prev) => prev + 1);
  };

  const goBack = () => {
    if (step > 0) setStep((prev) => prev - 1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Main Content */}
      <main className="flex-grow px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="text-center mb-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Submit Your Product for Transparency
            </h2>
            <p className="text-gray-600">
              Navigate through each step to build a complete transparency profile.
            </p>
          </header>

          {/* Step Navigation */}
          <nav className="grid grid-cols-4 gap-4 text-sm text-center mb-10">
            {steps.map((label, index) => (
              <div
                key={index}
                className={`px-2 py-1 rounded ${
                  index === step ? "font-semibold text-green-600" : "text-gray-400"
                }`}
              >
                {label}
              </div>
            ))}
          </nav>

          {/* Step Content */}
          <form className="space-y-6">
            {step === 0 && (
              <>
                <h3 className="text-xl font-medium text-gray-700">Product Details</h3>
                <p className="text-gray-500 mb-6">
                  Provide foundational product info to establish identity and classification.
                </p>
                <input type="text" className="w-full border px-4 py-2 rounded" placeholder="Product Name" />
                <input type="text" className="w-full border px-4 py-2 rounded" placeholder="Brand Name" />
                <select className="w-full border px-4 py-2 rounded bg-white">
                  <option>Select Category</option>
                  <option>Cleaning Supplies</option>
                  <option>Personal Care</option>
                </select>
                <textarea className="w-full border px-4 py-2 rounded" rows={4} placeholder="Product Description" />
              </>
            )}

            {step === 1 && (
              <>
                <h3 className="text-xl font-medium text-gray-700">Ethical Claims</h3>
                <p className="text-gray-500 mb-6">
                  Specify ethical sourcing, sustainability practices, and labor standards.
                </p>
                <input type="text" className="w-full border px-4 py-2 rounded" placeholder="Sourcing Practices" />
                <textarea className="w-full border px-4 py-2 rounded" rows={3} placeholder="Sustainability Measures" />
                <textarea className="w-full border px-4 py-2 rounded" rows={3} placeholder="Labor Transparency" />
              </>
            )}

            {step === 2 && (
              <>
                <h3 className="text-xl font-medium text-gray-700">Health Information</h3>
                <p className="text-gray-500 mb-6">
                  Share relevant certifications and consumer health data.
                </p>
                <input type="text" className="w-full border px-4 py-2 rounded" placeholder="Certifications" />
                <textarea className="w-full border px-4 py-2 rounded" rows={2} placeholder="Allergen Info" />
                <textarea className="w-full border px-4 py-2 rounded" rows={3} placeholder="Health Benefits" />
              </>
            )}

            {step === 3 && (
              <>
                <h3 className="text-xl font-medium text-gray-700">Review & Submit</h3>
                <p className="text-gray-500 mb-6">
                  Finalize your submission and confirm your product details.
                </p>
                <div className="bg-white border px-4 py-6 rounded-lg space-y-4">
                  <p className="text-gray-700">✅ Review completed sections and ensure data accuracy.</p>
                  <p className="text-gray-600 text-sm">
                    By submitting, you agree your product will be indexed for transparency reporting.
                  </p>
                  <button
                    type="submit"
                    className="bg-green-600 text-white px-6 py-2 rounded-3xl hover:bg-green-700 transition"
                  >
                    Submit Product
                  </button>
                </div>
              </>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              <button
                type="button"
                onClick={goBack}
                className={`px-6 py-2 rounded-3xl transition ${
                  step === 0
                    ? "invisible"
                    : "bg-gray-300 hover:bg-gray-400 text-black"
                }`}
              >
                Previous
              </button>
              <button
                type="button"
                onClick={goNext}
                className={`px-6 py-2 rounded-3xl transition ${
                  step === steps.length - 1
                    ? "invisible"
                    : "bg-green-600 hover:bg-green-700 text-white"
                }`}
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </main>

      {/* Footer stays anchored and visible */}
   
    </div>
  );
}
