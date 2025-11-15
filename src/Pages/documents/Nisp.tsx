import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Nisp() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess() {
    setNumPages(numPages);
  }

  return (
    <div className="min-h-screen bg-gray-100 px-6 md:px-16 py-16 text-center rounded-4xl">

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-blue-700 flex items-center justify-center gap-3">
          <FileText className="w-10 h-10 text-blue-600" />
          NISP Policy
        </h1>
        <p className="text-gray-600 mt-3 text-sm md:text-base max-w-2xl mx-auto">
          View the official National Innovation and Startup Policy (NISP) document of 
          Malnad College of Engineering. This policy outlines the institutional framework 
          for fostering innovation, IPR, and student & faculty startup support.
        </p>
      </motion.div>

      {/* PDF Viewer Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="bg-white shadow-xl rounded-xl p-6 mx-auto max-w-5xl"
      >
        <Document
          file="/pdfs/nisp.pdf"   // <-- put your PDF in public/pdfs folder
          onLoadSuccess={onDocumentLoadSuccess}
          loading={<p>Loading PDF...</p>}
        >
          <Page pageNumber={pageNumber} />

          {/* PDF Controls */}
          <div className="flex justify-between items-center mt-4 text-gray-700">
            <button
              onClick={() => setPageNumber((prev) => Math.max(prev - 1, 1))}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-400"
              disabled={pageNumber === 1}
            >
              Previous
            </button>

            <p className="text-sm">
              Page {pageNumber} of {numPages}
            </p>

            <button
              onClick={() => setPageNumber((prev) => Math.min(prev + 1))}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg disabled:bg-gray-400"
              disabled={pageNumber === numPages}
            >
              Next
            </button>
          </div>
        </Document>
      </motion.div>
    </div>
  );
}
