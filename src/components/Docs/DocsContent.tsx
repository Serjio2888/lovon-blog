"use client";

import Prism from "prismjs";
import "prismjs/themes/prism.css";
import { useEffect, useRef } from "react";

const DocsContent = ({ content }: { content: string }) => {
  const rootRef = useRef(null);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  useEffect(() => {
    // @ts-ignore
    const allPres = rootRef.current.querySelectorAll("pre");

    allPres.forEach((pre: any) => {
      const code = pre.querySelector("code");

      if (!code) {
        return;
      }

      if (!pre.querySelector(".prism-copy-button")) {
        pre.appendChild(createCopyButton(code.textContent));
      }
    });
  }, []);

  return (
    <div ref={rootRef}>
      <div
        className="blog-details"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

function createCopyButton(codeContent: string) {
  const copyText = () => {
    navigator.clipboard.writeText(codeContent).then(() => {
      button.textContent = "Copied";
      setTimeout(() => {
        button.textContent = "Copy";
      }, 2000);
    });
  };

  const button = document.createElement("button");
  button.className = "prism-copy-button";
  button.textContent = "Copy";
  button.addEventListener("click", copyText);

  return button;
}

export default DocsContent;
