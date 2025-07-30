import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import "../../pages/Experience.css";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const MarkdownModel = ({ file, onClose }) => {
    const [content, setContent] = useState("");

    useEffect(() => {
        const base = import.meta.env.BASE_URL || "/";
        fetch(`${base}/markdown/${file}`)
            .then((res) => res.text())
            .then(setContent)
            .catch((err) => {
                console.error("Markdown fetch eeror: err");
                setContent("ファイルの読み込みに失敗しました。");
            });
    }, [file]);

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>×</button>
                <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
                    {content}
                </ReactMarkdown>
            </div>
        </div>
    );
};

export default MarkdownModel;