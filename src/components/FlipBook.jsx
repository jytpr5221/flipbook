import React from "react";
import HTMLFlipBook from "react-pageflip";
import { useState, useRef } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "./flipbookNote.pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

const Pages = React.forwardRef((props, ref) => {
  return (
    <div className="demoPage" ref={ref}>
      {props.children}
    </div>
  );
});

Pages.displayName = "Pages";

function Flipbook() {
  const [numPages, setNumPages] = useState(1);
  const flipbookRef = useRef(null);

  const nextPage = () => {
    if (flipbookRef.current) {
      flipbookRef.current.pageFlip().flipNext();
    }
  };

  const prevPage = () => {
    if (flipbookRef.current) {
      flipbookRef.current.pageFlip().flipPrev();
    }
  };

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div className="h-screen w-screen flex flex-col gap-5 justify-center items-center bg-gray-900">
      <div className="my-4 w-full container flex justify-around items-center">
        <button
          className="bg-blue-500 p-1 text-white rounded"
          onClick={prevPage}
        >
          Prev
        </button>
        <button
          className="bg-blue-500 p-1 text-white rounded"
          onClick={nextPage}
        >
          Next
        </button>
      </div>
      <HTMLFlipBook width={650} height={570} ref={flipbookRef}>
        {[...Array(numPages).keys()].map((pNum) => (
          <Pages key={pNum} number={pNum + 1}>
            <Document file={pdf} onLoadSuccess={onDocumentLoadSuccess}>
              <Page
                pageNumber={pNum + 1}
                width={650}
                renderAnnotationLayer={false}
                renderTextLayer={false}
              >
                <div
                  style={{
                    position: "absolute",
                    bottom: "10px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "5px",
                  }}
                >
                  Page: {pNum + 1} / {numPages}
                </div>
              </Page>
            </Document>
          </Pages>
        ))}
      </HTMLFlipBook>
    </div>
  );
}

export default Flipbook;
