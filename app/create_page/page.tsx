"use client";

import { useEffect, useState } from "react";

export default function CreatePage() {
  const [pageUrl, setPageUrl] = useState("");
  const [fileName, setFileName] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id") || "0";

    if (id === "0") {
      alert("Invalid ID");
      return;
    }

    const random = Math.floor(100000 + Math.random() * 900000);
    const now = new Date().toLocaleString();
    const generatedFileName = `page_${random}.html`;

    const htmlContent = `
      <!DOCTYPE html>
      <html>
      <head>
          <title>Page ${id} - ${random}</title>
      </head>
      <body>
          <h1>This is page ${id} - ${random}</h1>
          <p>Created On ${now}</p>
      </body>
      </html>
    `;

    const blob = new Blob([htmlContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = generatedFileName;
    a.click();

    setFileName(generatedFileName);
    setPageUrl(url);
  }, []);

  return (
    <div style={{ padding: "40px", fontFamily: "Arial" }}>
      <h1>Your page is created</h1>

      {pageUrl && (
        <p>
          Page name is - <a href={pageUrl} target="_blank">{fileName}</a>
        </p>
      )}
    </div>
  );
}
