import React, { useState } from "react";
import qualifications from '../../data/qualifications.json';
import './Qualifications.css';

const Qualifications = () => {
    const [filter, setFilter] = useState("All");

    const filteredQualifications = qualifications.filter(item => {
        if (filter === "All") return true;
        return item.category === filter;
    });

    return (
        <section className="qualifications-section">
            <div className="container">
                <h2>資格</h2>
                <div className="filter-buttons">
                    <button onClick={() => setFilter("All")} className={filter === "All" ? "active" : ""}>全て</button>
                    <button onClick={() => setFilter("IT")} className={filter === "IT" ? "active" : ""}>IT資格のみ</button>
                    <button onClick={() => setFilter("Other")} className={filter === "Other" ? "active" : ""}>その他</button>
                </div>

                <div className="qualification-list">
                    {filteredQualifications.map((item, index) =>(
                        <div key={index} className="qualification-item">
                            <span className="qualification-name">{item.name}</span>
                            <span className="qualification-year">{item.year}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Qualifications;