'use client';

import { useState } from 'react';

const externalLinks = [
  ['GitHub', 'https://github.com/Yuchen-Wang-CHN'],
  ['ORCID', 'https://orcid.org/0009-0000-6492-6345'],
  ['小红书', 'https://xhslink.cn/o/19lA3BKmlMD'],
];

export default function Home() {
  const [language, setLanguage] = useState<'en' | 'zh'>('en');
  const isEnglish = language === 'en';

  return (
    <main lang={isEnglish ? 'en' : 'zh-CN'}>
      <div className="language-switcher" aria-label="Language / 语言">
        <button
          type="button"
          className={isEnglish ? 'active' : undefined}
          aria-pressed={isEnglish}
          onClick={() => setLanguage('en')}
        >
          EN
        </button>
        <button
          type="button"
          className={!isEnglish ? 'active' : undefined}
          aria-pressed={!isEnglish}
          onClick={() => setLanguage('zh')}
        >
          中文
        </button>
      </div>

      <header>
        <h1>{isEnglish ? 'Colin Yuchen Wang' : '王宇晨'}</h1>
        <p className="alternate-name">
          {isEnglish ? '王宇晨' : 'Colin Yuchen Wang'}
        </p>
        <p className="intro">
          {isEnglish
            ? 'MPhil student in Industrial and Systems Engineering at The Hong Kong Polytechnic University.'
            : '香港理工大学工业及系统工程学系哲学硕士研究生。'}
        </p>
      </header>

      <section aria-labelledby="research-heading">
        <h2 id="research-heading">{isEnglish ? 'Research' : '研究方向'}</h2>
        <p>
          {isEnglish
            ? 'My research focuses on Retrieval-Augmented Generation (RAG), information retrieval, and large language models.'
            : '我的研究聚焦于检索增强生成（RAG）、信息检索与大语言模型。'}
        </p>
      </section>

      <section aria-labelledby="project-heading">
        <h2 id="project-heading">{isEnglish ? 'Project' : '项目'}</h2>
        <p>
          <a
            href="https://chatbot-kteo.polyu.edu.hk/"
            target="_blank"
            rel="noreferrer"
          >
            {isEnglish ? 'Chatbot Project' : '聊天机器人项目'} ↗
          </a>
        </p>
      </section>

      <section aria-labelledby="links-heading">
        <h2 id="links-heading">{isEnglish ? 'Links' : '链接'}</h2>
        <ul>
          {externalLinks.map(([label, href]) => (
            <li key={label}>
              <a href={href} target="_blank" rel="noreferrer">
                {label} ↗
              </a>
            </li>
          ))}
        </ul>
      </section>

      <footer>
        © {new Date().getFullYear()} {isEnglish ? 'Colin Yuchen Wang' : '王宇晨'}
      </footer>
    </main>
  );
}
