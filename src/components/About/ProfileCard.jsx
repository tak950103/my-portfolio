import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaApple } from "react-icons/fa";
import "./ProfileCard.css";

const ProfileCard = () => {
  return (
    <header className="profile-card" aria-label="About me">
      <div className="container">
        <div className="profile-hero">
          <div className="name-block">
            <h1 className="profile-name">Takumi Tamaki</h1>
            <p className="profile-title">ソフトウェアエンジニア</p>

            <p className="profile-summary">
              要件定義〜運用保守まで一気通貫で推進。
              WPF（C#）を軸に、現場業務に沿ったUI設計と長期安定稼働を重視した実装が強みです。
            </p>

            <ul className="strength-list" aria-label="strengths">
              <li>要件定義・顧客折衝</li>
              <li>ユーザー目線の設計</li>
              <li>非IT層にも伝わる説明</li>
              <li>iOSアプリ4本公開</li>
              <li>応用情報技術者</li>
            </ul>

            <div className="cta">
                <Link className="btn primary" to="/experience">
                    実務経験を見る
                </Link>

                <Link className="btn" to="/projects">
                    個人開発を見る
                </Link>
              <a
                className="btn ghost"
                href="https://github.com/tak950103"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default ProfileCard;