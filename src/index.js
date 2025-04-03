const fs = require('fs-extra');
const path = require('path');
const { marked } = require('marked');
const chalk = require('chalk');
const themes = require('./themes');

/**
 * 将单个 Markdown 文件转换为 HTML
 * @param {string} filePath - Markdown 文件路径
 * @param {Object} options - 转换选项
 */
function convertSingle(filePath, options) {
  try {
    // 检查文件是否存在
    if (!fs.existsSync(filePath)) {
      throw new Error(`文件 "${filePath}" 不存在`);
    }

    // 检查文件扩展名
    if (!filePath.toLowerCase().endsWith('.md')) {
      throw new Error(`文件 "${filePath}" 不是有效的 Markdown 文件`);
    }

    // 读取 Markdown 文件内容
    const markdown = fs.readFileSync(filePath, 'utf8');
    
    // 设置 marked 选项
    const markedOptions = {
      headerIds: options.toc ? true : false,
      gfm: true,
      breaks: true,
      highlight: options.highlight ? highlightCode : null
    };
    
    marked.setOptions(markedOptions);
    
    // 转换为 HTML
    let html = marked.parse(markdown);
    
    // 应用主题样式
    const theme = options.theme || 'wechat';
    html = applyTheme(html, theme);
    
    // 确保输出目录存在
    const outputDir = options.output || './output';
    fs.ensureDirSync(outputDir);
    
    // 确定输出文件名称
    const fileName = path.basename(filePath, '.md');
    const outputFile = path.join(outputDir, `${fileName}.html`);
    
    // 写入 HTML 文件
    fs.writeFileSync(outputFile, html, 'utf8');
    
    console.log(chalk.green(`✓ 成功转换 "${filePath}" 到 "${outputFile}"`));
    
    return outputFile;
  } catch (error) {
    console.error(chalk.red(`✗ 转换 "${filePath}" 失败: ${error.message}`));
    throw error;
  }
}

/**
 * 批量转换文件夹中的所有 Markdown 文件
 * @param {string} folderPath - 文件夹路径
 * @param {Object} options - 转换选项
 */
function convertFolder(folderPath, options) {
  try {
    // 检查文件夹是否存在
    if (!fs.existsSync(folderPath)) {
      throw new Error(`文件夹 "${folderPath}" 不存在`);
    }
    
    // 获取文件夹中的所有文件
    const files = fs.readdirSync(folderPath);
    
    // 过滤出 Markdown 文件
    const markdownFiles = files.filter(file => file.toLowerCase().endsWith('.md'));
    
    if (markdownFiles.length === 0) {
      console.log(chalk.yellow(`警告: 文件夹 "${folderPath}" 中没有找到 Markdown 文件`));
      return [];
    }
    
    console.log(chalk.blue(`找到 ${markdownFiles.length} 个 Markdown 文件，开始转换...`));
    
    // 转换每个 Markdown 文件
    const convertedFiles = [];
    for (const file of markdownFiles) {
      const filePath = path.join(folderPath, file);
      try {
        const outputFile = convertSingle(filePath, options);
        convertedFiles.push(outputFile);
      } catch (error) {
        // 继续处理下一个文件
        console.error(chalk.red(`跳过文件 "${file}": ${error.message}`));
      }
    }
    
    console.log(chalk.green(`✓ 成功转换 ${convertedFiles.length}/${markdownFiles.length} 个文件`));
    
    return convertedFiles;
  } catch (error) {
    console.error(chalk.red(`✗ 批量转换失败: ${error.message}`));
    throw error;
  }
}

/**
 * 代码高亮函数
 * @param {string} code - 代码内容
 * @param {string} language - 代码语言
 * @returns {string} - 高亮后的 HTML
 */
function highlightCode(code, language) {
  // 这里可以集成 highlight.js 或 prism.js 来实现代码高亮
  // 这里仅简单实现
  return `<pre class="language-${language || 'text'}"><code>${code}</code></pre>`;
}

/**
 * 应用主题样式
 * @param {string} html - HTML 内容
 * @param {string} themeName - 主题名称
 * @returns {string} - 应用主题后的 HTML
 */
function applyTheme(html, themeName) {
  const theme = themes[themeName] || themes.wechat;
  
  // 添加 HTML 头和尾
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Markdown 转换结果</title>
  <style>
    ${theme.css}
  </style>
</head>
<body>
  <div class="markdown-body">
    ${html}
  </div>
</body>
</html>
  `;
}

module.exports = {
  convertSingle,
  convertFolder
}; 