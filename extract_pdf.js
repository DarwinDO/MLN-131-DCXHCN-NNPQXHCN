const fs = require('fs');
const pdfjsLib = require('pdfjs-dist/legacy/build/pdf.js');

async function extractText() {
  const data = new Uint8Array(fs.readFileSync('Governing_the_National_Rise_Slide.pdf'));
  const doc = await pdfjsLib.getDocument({ data }).promise;
  
  console.log('Total pages:', doc.numPages);
  
  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const textContent = await page.getTextContent();
    const text = textContent.items.map(item => item.str).join(' ');
    console.log(`\n=== SLIDE ${i} ===`);
    console.log(text);
  }
}

extractText().catch(err => console.error('Error:', err.message));
