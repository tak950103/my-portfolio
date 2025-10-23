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
    {
      title: "マイイレ - サッカーの選手評価・記録アプリ",
      description: "推しクラブや推し選手を自由に作って評価・記録する。",
      description2: "Swift、Realm",
      github: "",
      appStore: "https://apps.apple.com/jp/app/%E3%83%9E%E3%82%A4%E3%82%A4%E3%83%AC-%E3%82%B5%E3%83%83%E3%82%AB%E3%83%BC%E3%81%AE%E9%81%B8%E6%89%8B%E8%A9%95%E4%BE%A1-%E8%A8%98%E9%8C%B2%E3%82%A2%E3%83%97%E3%83%AA/id6748753545",
      image: "/images/myele.png",
    },
    {
      title: "よみポン - 子どもの読書記録アプリ",
      description: "子どもの読書記録をサポート。親子で楽しくスタンプ集め。",
      description2: "Swift、Realm、FireStore、API：楽天BooksAPI、openBD API",
      github: "",
      appStore: "https://apps.apple.com/jp/app/%E3%82%88%E3%81%BF%E3%83%9D%E3%83%B3/id6752224574",
      image: "/images/yomipon.png",
    }
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
                    <img src={`${import.meta.env.BASE_URL}${p.image}`} alt={p.title} />
                </div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;