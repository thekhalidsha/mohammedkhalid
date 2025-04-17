// components/CommonMarkPreview.jsx
import { useEffect, useRef } from "react";
import * as commonmark from "commonmark";

const CommonMarkPreview = ({ markdown }) => {
  const previewRef = useRef(null);

  useEffect(() => {
    const reader = new commonmark.Parser();
    const writer = new commonmark.HtmlRenderer();
    const parsed = reader.parse(markdown || "");
    const result = writer.render(parsed);

    if (previewRef.current) {
      previewRef.current.innerHTML = result;
    }
  }, [markdown]);

  return (
    <div
      ref={previewRef}
      className="markdown-body prose max-w-none dark:prose-invert" style={{backgroundColor: 'transparent'}}
    />
  );
};

export default CommonMarkPreview;
