#!/usr/bin/env node

const program = require('commander');
const figlet = require('figlet');
const chalk = require('chalk');
const converter = require('../src/index');

// 显示大 LOGO
console.log(
  chalk.green(
    figlet.textSync('MD2HTML', {
      font: 'Big',
      horizontalLayout: 'default',
      verticalLayout: 'default',
      width: 80,
      whitespaceBreak: true
    })
  )
);
console.log(chalk.blue('公众号格式 Markdown 转 HTML 工具'));
console.log(chalk.blue('================================='));

program
  .version('1.0.0', '-v, --version')
  .description('将 Markdown 文件转换为适合公众号的 HTML 格式');

program
  .option('-s, --single <file>', '转换单个 Markdown 文件')
  .option('-f, --folder <dir>', '批量转换文件夹中的所有 Markdown 文件')
  .option('-o, --output <dir>', '输出目录，默认为 ./output', './output')
  .option('-t, --theme <name>', '设置主题样式，默认为 wechat', 'wechat')
  .option('--toc', '添加目录', false)
  .option('--highlight', '启用代码高亮', true);

program.on('--help', () => {
  console.log('');
  console.log('示例:');
  console.log('  $ md-to-html --single README.md');
  console.log('  $ md-to-html --folder ./docs');
  console.log('  $ md-to-html --single README.md --output ./dist --theme github');
});

program.parse(process.argv);

const options = program.opts();

// 检查是否提供了必要的参数
if (!options.single && !options.folder) {
  console.log(chalk.yellow('请指定要转换的文件或文件夹！'));
  program.help();
}

// 开始转换
try {
  if (options.single) {
    converter.convertSingle(options.single, options);
  } else if (options.folder) {
    converter.convertFolder(options.folder, options);
  }
} catch (error) {
  console.error(chalk.red('转换过程中出错:'), error.message);
  process.exit(1);
} 