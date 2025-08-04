import React from 'react';

type Props = {
  title: string;
  summary: string;
  pdfPath: string;
};

const ReportCard: React.FC<Props> = ({ title, summary, pdfPath }) => {
  return (
    <div className="border border-gray-300 rounded-lg p-6 bg-white shadow hover:shadow-md transition-shadow">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{summary}</p>
      <a
        href={pdfPath}
        download
        className="inline-block bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded"
      >
        Download PDF
      </a>
    </div>
  );
};

export default ReportCard;
