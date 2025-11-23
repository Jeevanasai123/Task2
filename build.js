import fs from 'fs';
import path from 'path';
import nunjucks from 'nunjucks';

const srcDir = path.resolve('src/templates');
const outDir = path.resolve('dist');

nunjucks.configure(srcDir, { autoescape: true });
fs.mkdirSync(outDir, { recursive: true });

const templateFiles = fs.readdirSync(srcDir).filter(f => f.endsWith('.njk'));

templateFiles.forEach(file => {
  const content = nunjucks.render(file, {});
  const outFile = path.join(outDir, file.replace('.njk', '.html'));
  fs.writeFileSync(outFile, content);
});

console.log('Nunjucks templates rendered to dist/');
