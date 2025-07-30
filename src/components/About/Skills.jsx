import React from "react";
import skills from '../../data/skills.json';
import './Skills.css';

const Skills = () => {
    const levelTooltip = [
        "学習中",
        "簡易な実装・修正が可能",
        "実務経験あり（基本開発が可能）",
        "設計～実装まで対応可能",
        "要件定義～保守まで一人でも対応可能"
    ]

    const renderStars = (level) => {
        return (
            <span className="stars" data-tooltip={levelTooltip[level - 1]}>
                {Array.from({ length: 5 }, (_, i) => (
                    <span 
                        key={i} 
                        className={i < level ? 'filled' : 'empty'}
                    >★</span>
                ))}
            </span>
        );
    };

    return (
        <section className="skill-section">
            <div className="container">
                <h2>スキル</h2>
                <div className="skill-grid">
                    {skills.map((category, index) =>(
                        <div className="skill-card" key={index}>
                            <h3>{category.category}</h3>
                            <ul>
                                {category.skills.map((skill, idx) =>(
                                    <li key={idx}>
                                        <span className="skill-name">{skill.name}</span>
                                        {renderStars(skill.level)}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;