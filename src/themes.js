/**
 * 主题样式定义
 */

const themes = {
  // 微信公众号主题
  wechat: {
    name: '微信公众号',
    css: `
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
        font-size: 16px;
        line-height: 1.6;
        color: #333;
        background-color: #fff;
        margin: 0;
        padding: 15px;
      }
      
      .markdown-body {
        max-width: 860px;
        margin: 0 auto;
        padding: 20px;
      }
      
      h1, h2, h3, h4, h5, h6 {
        margin-top: 24px;
        margin-bottom: 16px;
        font-weight: 600;
        line-height: 1.25;
      }
      
      h1 {
        font-size: 2em;
        margin: 0.67em 0;
        padding-bottom: 0.3em;
        border-bottom: 1px solid #eaecef;
      }
      
      h2 {
        font-size: 1.5em;
        padding-bottom: 0.3em;
        border-bottom: 1px solid #eaecef;
      }
      
      h3 {
        font-size: 1.25em;
      }
      
      h4 {
        font-size: 1em;
      }
      
      h5 {
        font-size: 0.875em;
      }
      
      h6 {
        font-size: 0.85em;
        color: #6a737d;
      }
      
      p {
        margin-top: 0;
        margin-bottom: 16px;
      }
      
      a {
        color: #1e6bb8;
        text-decoration: none;
      }
      
      a:hover {
        text-decoration: underline;
      }
      
      ul, ol {
        padding-left: 2em;
        margin-top: 0;
        margin-bottom: 16px;
      }
      
      li {
        margin-bottom: 0.25em;
      }
      
      blockquote {
        margin: 0;
        padding: 0 1em;
        color: #6a737d;
        border-left: 0.25em solid #dfe2e5;
      }
      
      pre {
        font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;
        font-size: 14px;
        padding: 16px;
        overflow: auto;
        line-height: 1.45;
        background-color: #f6f8fa;
        border-radius: 3px;
        margin-bottom: 16px;
      }
      
      code {
        font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, monospace;
        font-size: 14px;
        background-color: rgba(27, 31, 35, 0.05);
        padding: 0.2em 0.4em;
        border-radius: 3px;
      }
      
      pre code {
        background-color: transparent;
        padding: 0;
        border-radius: 0;
      }
      
      img {
        max-width: 100%;
        height: auto;
        box-sizing: content-box;
      }
      
      table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 16px;
      }
      
      table th, table td {
        padding: 6px 13px;
        border: 1px solid #dfe2e5;
      }
      
      table th {
        font-weight: 600;
        background-color: #f6f8fa;
      }
      
      table tr {
        background-color: #fff;
        border-top: 1px solid #c6cbd1;
      }
      
      table tr:nth-child(2n) {
        background-color: #f6f8fa;
      }
      
      hr {
        height: 0.25em;
        padding: 0;
        margin: 24px 0;
        background-color: #e1e4e8;
        border: 0;
      }
    `
  },
  
  // GitHub 主题
  github: {
    name: 'GitHub',
    css: `
      body {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif;
        font-size: 16px;
        line-height: 1.5;
        color: #24292e;
        background-color: #fff;
        margin: 0;
        padding: 20px;
      }
      
      .markdown-body {
        max-width: 980px;
        margin: 0 auto;
        padding: 45px;
      }
      
      h1, h2, h3, h4, h5, h6 {
        margin-top: 24px;
        margin-bottom: 16px;
        font-weight: 600;
        line-height: 1.25;
      }
      
      h1 {
        font-size: 2em;
        margin: 0.67em 0;
        padding-bottom: 0.3em;
        border-bottom: 1px solid #eaecef;
      }
      
      h2 {
        font-size: 1.5em;
        padding-bottom: 0.3em;
        border-bottom: 1px solid #eaecef;
      }
      
      h3 {
        font-size: 1.25em;
      }
      
      h4 {
        font-size: 1em;
      }
      
      h5 {
        font-size: 0.875em;
      }
      
      h6 {
        font-size: 0.85em;
        color: #6a737d;
      }
      
      p {
        margin-top: 0;
        margin-bottom: 16px;
      }
      
      a {
        color: #0366d6;
        text-decoration: none;
      }
      
      a:hover {
        text-decoration: underline;
      }
      
      ul, ol {
        padding-left: 2em;
        margin-top: 0;
        margin-bottom: 16px;
      }
      
      li {
        margin-bottom: 0.25em;
      }
      
      blockquote {
        margin: 0;
        padding: 0 1em;
        color: #6a737d;
        border-left: 0.25em solid #dfe2e5;
      }
      
      pre {
        font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
        font-size: 85%;
        padding: 16px;
        overflow: auto;
        line-height: 1.45;
        background-color: #f6f8fa;
        border-radius: 3px;
        margin-bottom: 16px;
      }
      
      code {
        font-family: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace;
        font-size: 85%;
        background-color: rgba(27, 31, 35, 0.05);
        padding: 0.2em 0.4em;
        border-radius: 3px;
      }
      
      pre code {
        background-color: transparent;
        padding: 0;
        border-radius: 0;
      }
      
      img {
        max-width: 100%;
        box-sizing: content-box;
      }
      
      table {
        width: 100%;
        border-collapse: collapse;
        margin-bottom: 16px;
      }
      
      table th, table td {
        padding: 6px 13px;
        border: 1px solid #dfe2e5;
      }
      
      table th {
        font-weight: 600;
      }
      
      table tr {
        background-color: #fff;
        border-top: 1px solid #c6cbd1;
      }
      
      table tr:nth-child(2n) {
        background-color: #f6f8fa;
      }
      
      hr {
        height: 0.25em;
        padding: 0;
        margin: 24px 0;
        background-color: #e1e4e8;
        border: 0;
      }
    `
  }
};

module.exports = themes; 