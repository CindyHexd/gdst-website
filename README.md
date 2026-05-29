中科深源网站（中/英）

Geophysical Deep Sensing Technology (GDST) website (zh/en)

**Access site via GitHub Pages:** [https://cindyhexd.github.io/gdst-website/](https://cindyhexd.github.io/gdst-website/)

## Local development onboarding
Node 20+ recommended
1. `git clone https://gitee.com/he-xindi/gdst-website.git` or `git clone https://github.com/CindyHexd/gdst-website`
2. `cd gdst-website`
3. `npm install`
4. Ensure `public-media/downloads/` contains the product PDFs (not always in git).
5. `npm run brochures:extract` — extracts brochure text and spec tables from PDFs into `src/data/productContent/` (requires Python 3 and vendored PyMuPDF in `.pdf-tools/`).
6. `npm run dev`