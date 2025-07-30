import React from "react";
import "../../pages/Experience.css";

const ExperienceCard = ({ title, tags, onClick }) => (
    <div className="experience-card" onClick={onClick}>
        <div className="card-content">
            <h3>{title}</h3>
            <div className="tags">
                {tags.map((tag, idx) => (
                    <span key={idx} className="tag">{tag}</span>
                ))}
            </div>
        </div>
    </div>
);

export default ExperienceCard;