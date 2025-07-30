import React from 'react';
import "./Projects.css";
import { FaGithub, FaApple } from 'react-icons/fa';

const projects = [
    {
        title: "よみポン！（子ども向け読書記録アプリ）",
        description: "ISBNをもとに読書記録を保存し、記録した数をスタンプラリー形式で表示する。",
        description2: "フロントエンド：React、バックエンド：Laravel、データベース：MySQL",
        github: "https://github.com/tak950103/book-manager-app",
        appStore: "",
        image: "/images/book-app.PNG",
    },
];

const Projects = () => {
  return (
    <div className='container'>
      <h2>個人開発</h2>
      <div className='project-list'>
        {projects.map((p, idx) => (
            <div key={idx} className='project-item'>
                <div className='project-info'>
                    <h3>{p.title}</h3>
                    <p className='description'>{p.description}</p>
                    <p className='description2'>{p.description2}</p>
                    <div className='links'>
                        {p.github && 
                            <a href={p.github} target='_blank' rel='noopener noreferrer'>
                                <FaGithub style={{marginRight : '6px'}} />
                                GitHub
                            </a>}
                        {p.appStore &&
                          <a href={p.appStore} target='_blank' rel='noopener noreferrer'>
                            <FaApple style={{marginRight: '6px'}} />
                            App Store
                          </a>
                        }
                    </div>
                </div>
                <div className='project-image'>
                    <img src={`${import.meta.env.BASE_URL}images/book-app.PNG`} alt={p.title} />
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;