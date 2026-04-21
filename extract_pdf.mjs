import { readFileSync } from 'fs';
import { getDocument } from 'pdfjs-dist/build/pdf.mjs';

const data = new Uint8Array(readFileSync('Governing_the_National_Rise_Slide.pdf'));
const doc = await getDocument({ data, useSystemFonts: true }).promise;

console.log('Total pages:', doc.numPages);

for (let i = 1; i <= doc.numPages; i++) {
  const page = await doc.getPage(i);
  const textContent = await page.getTextContent();
  const text = textContent.items.map(item => item.str).join(' ');
  console.log(`\n=== SLIDE ${i} ===`);
  console.log(text);
}
