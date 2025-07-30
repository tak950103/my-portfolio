import React, { useState } from 'react';
import experiences from '../data/experiences';
import ExperienceCard from '../components/Experience/ExperienceCard';
import MarkdownModel from '../components/Experience/MarkdownModel';
import "./Experience.css";


const Experience = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [filterTag, setFilterTag] = useState(null);

  const allTags = Array.from(new Set(experiences.flatMap(e => e.tags)));
  const filtered = filterTag
    ? experiences.filter(e => e.tags.includes(filterTag))
    : experiences;

  return(
    <div className='container'>
        <h2>実務経験</h2>

        <div className='tag-filter'>
            <button onClick={() => setFilterTag(null)} className={!filterTag ? "active" : ""}>全て</button>
            {allTags.map(tag => (
                <button
                    key={tag}
                    onClick={() => setFilterTag(tag)}
                    className={filterTag === tag ? "active" : ""}
                    >{tag}</button>
            ))}
        </div>

        <div className='experience-grid'>
            {filtered.map((exp, idx) => (
                <ExperienceCard
                    key={idx}
                    title={exp.title}
                    tags={exp.tags}
                    onClick={() => setSelectedFile(exp.file)}
                />
            ))}
        </div>

        {selectedFile && (
            <MarkdownModel file={selectedFile} onClose={() => setSelectedFile(null)} />
        )}
    </div>
  );
};

export default Experience;