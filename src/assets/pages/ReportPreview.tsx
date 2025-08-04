import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";


function ReportPreview() {
  const navigate = useNavigate();
  const [animateArrow, setAnimateArrow] = useState(false);

  const currentDateTime = new Date().toLocaleString("en-IN", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const handleDownloadPDF = () => {
    setAnimateArrow(true);
    setTimeout(() => setAnimateArrow(false), 500);
    console.log("Download PDF triggered");
  };

  return (
    <>
      <section className="bg-white px-6 py-10 min-h-screen relative">
        <div className="max-w-6xl mx-auto">

          {/* Header Buttons */}
          <div className="flex justify-end items-center mb-8 space-x-4">
            <button
              onClick={() => navigate("/dashboard")}
              className="text-gray-600 font-medium hover:underline"
            >
              ← Back to Dashboard
            </button>
            <button
              onClick={handleDownloadPDF}
              className="bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700 transition flex items-center gap-2"
            >
              <span>Download Report (PDF)</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-4 w-4 transition-transform duration-500 ${
                  animateArrow ? "animate-spin scale-110" : ""
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v12m0 0l-3-3m3 3l3-3m-6 6h6" />
              </svg>
            </button>
          </div>

          {/* Report Header */}
          <header className="mb-6">
            <h1 className="text-3xl font-bold text-gray-800 my-4">Product Transparency Report</h1>
            <h2 className="text-xl font-semibold text-gray-700 my-1">EcoBlend Coffee Beans</h2>
            <p className="text-gray-600 text-base">
              Transparency overview across Ethical, Health, and Sourcing pillars.
            </p>
            <p className="text-sm text-gray-400 mt-1">Last updated: {currentDateTime}</p>
          </header>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            <CategorySection title="Ethical Practices">
              <Card title="Fair Trade Certification" status="Compliant" color="green">
                Certified by FairTrade International for fair prices and safe working environments.
              </Card>
              <Card title="Labor Practices" status="Compliant" color="green">
                Meets ILO standards; no child or forced labor across all vendors.
              </Card>
              <Card title="Environmental Impact" status="Compliant" color="green">
                Uses sustainable farming, minimal water use, and biodiversity support.
              </Card>
              <Card title="Community Engagement" status="Ongoing" color="yellow">
                Allocates 2% of profits into local sourcing region development.
              </Card>
            </CategorySection>

            <CategorySection title="Health & Safety Compliance">
              <Card title="Allergen Information" status="Warning" color="red">
                Processed in facility with nuts; clear warnings on packaging.
              </Card>
              <Card title="Pesticide Use" status="Compliant" color="green">
                No synthetic pesticides; 100% organic pest controls used.
              </Card>
              <Card title="Nutritional Content" status="Compliant" color="green">
                Rich in fiber; low in saturated fat. Verified nutrition profile.
              </Card>
              <Card title="Heavy Metal Screening" status="Compliant" color="green">
                Tested for heavy metals quarterly with consistent safe results.
              </Card>
            </CategorySection>

            <CategorySection title="Sourcing Transparency">
              <Card title="Supply Chain Traceability" status="Complete" color="blue">
                End-to-end traceability from farms to retailers via batch tracking.
              </Card>
              <Card title="Supplier Audits" status="Verified" color="green">
                All vendors audited annually by independent certifiers.
              </Card>
              <Card title="Product Ingredients Disclosure" status="Full Disclosure" color="blue">
                Includes all ingredients + processing aids; published on product label and web.
              </Card>
            </CategorySection>
          </div>
        </div>
      </section>


    </>
  );
}

/** Category Section Component */
function CategorySection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-2">{title}</h2>
      {children}
    </div>
  );
}

/** Card Component */
function Card({
  title,
  status,
  color,
  children,
}: {
  title: string;
  status: string;
  color: "green" | "yellow" | "red" | "blue";
  children: React.ReactNode;
}) {
  const badgeColors = {
    green: "text-green-600 bg-green-100",
    yellow: "text-yellow-600 bg-yellow-100",
    red: "text-red-600 bg-red-100",
    blue: "text-blue-600 bg-blue-100",
  };

  return (
    <div
      className={`w-[283px] h-[179px] rounded-[10px] bg-white p-4 flex flex-col justify-between 
        shadow-[0_0_1px_rgba(23,26,31,0.07),0_0_2px_rgba(23,26,31,0.12)] 
        transition-all duration-300 ease-in-out 
        hover:shadow-lg hover:scale-[1.03] hover:-translate-y-1`}
    >
      <div>
        <h4 className="font-semibold text-gray-800 text-base mb-1">{title}</h4>
        <p className="text-sm text-gray-600">{children}</p>
      </div>
      <span
        className={`mt-2 px-2 py-1 text-sm font-medium rounded self-start ${badgeColors[color]}`}
      >
        {status}
      </span>
    </div>
  );
}

export default ReportPreview;
