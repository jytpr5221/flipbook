# Flipbook Application
 This project converts a pdf into a flipbook using React-pageFlip and React-pdf.  

## Tech Stacks Used
Vite-React
Tailwind CSS
React PDF
React Page-flip

## Workflow
 The pdf converted is given in the src/component folder. 
 ### React-PDF
  React-PDF is a React library that allows rendering PDF documents directly in React applications. It uses pdf.js under the hood to handle PDF rendering. Pdf.js is a 
  JavaScript library for parsing and rendering PDFs in the browser. It extracts text content from the PDF.
 ### React-Pageflip
   React-Pageflip is a React library that provides an interactive flipbook interface with realistic page-flipping animations. 
 
## Complete build process
   Firstly the pages component is used with React-forwardRef hook. It is because React-flipbook component i.e the "HTMLFlipbook" component needs the access of 
   it's child component.
   The HTMLFlipbook is the react-flipbook component used to make the flipbook.
   Inside the HTMLFlipbook the Pages component is passed with the Document and Page component which comes from react-pdf.
   Document and Page components are inbuild react-pdf components that are needed to render an page of a pdf onto the react application.
   Along with that the reference to the HTMLFlipbook is needed, to change the pages to go next or previous. For this react-useRef hook is used.
   The pdf inside the component folder is used in this application. 
