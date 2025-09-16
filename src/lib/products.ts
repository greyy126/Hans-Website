export interface Product {
  id: string;
  name: string;
  fileName: string;
  category: string;
  pdfPath: string;
}

// Product categories based on naming patterns
const getProductCategory = (fileName: string): string => {
  const name = fileName.toLowerCase();
  
  if (name.includes('zinc')) return 'Zinc Compounds';
  if (name.includes('cupric') || name.includes('cuprous') || name.includes('copper')) return 'Copper Compounds';
  if (name.includes('ferrous') || name.includes('iron')) return 'Ferrous Compounds';
  if (name.includes('hansmol')) return 'Hansmol Range';
  if (name.includes('sodium') || name.includes('magnesium')) return 'Other Compounds';
  
  return 'Others';
};

// Convert filename to display name
const formatProductName = (fileName: string): string => {
  // Remove .pdf extension
  let name = fileName.replace('.pdf', '');
  
  // Convert to title case
  return name.replace(/\w\S*/g, (txt) => 
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
};

// Static list of products based on the PDF files
export const products: Product[] = [
  'Benzoic Acid - Tech.pdf',
  'Cupric Chloride Dihydrate Pure.pdf',
  'Cupric Chloride Dihydrate Tech.pdf',
  'Cupric Oxide - Black.pdf',
  'Cuprous Oxide - Red.pdf',
  'Ferrous Sulphate - Heptahydrate.pdf',
  'HANSMOL 10 POWDER.pdf',
  'HANSMOL BX PASTE.pdf',
  'HANSMOL BX POWDER.pdf',
  'HANSMOL DN (SPL) Powder.pdf',
  'HANSMOL DN POWDER.pdf',
  'HANSMOL FBP1 Powder.pdf',
  'HANSMOL FZ 1 LIQUID.pdf',
  'HANSMOL GL Powder.pdf',
  'HANSMOL GLS Powder.pdf',
  'HANSMOL NKS Powder.pdf',
  'Magnessium Sulphate TDS.pdf',
  'SODIUM ALLYL SULPHONATE.pdf',
  'Sodium Formaldehyde Bi sulphite.pdf',
  'Zinc Dust STD 7 Ever Zinc.pdf',
  'Zinc Dust Super Extra Ever Zinc.pdf',
  'Zinc Dust Super Fine Ever Zinc.pdf',
  'Zinc Oxide - Goldseal.pdf',
  'Zinc Oxide - Whiteseal.pdf',
  'Zinc Phospsphate.pdf',
  'Zinc Stearate.pdf'
].map((fileName, index) => ({
  id: (index + 1).toString(),
  name: formatProductName(fileName),
  fileName,
  category: getProductCategory(fileName),
  pdfPath: `/products/${fileName}`
}));

// Get unique categories
export const categories = ['All', ...Array.from(new Set(products.map(p => p.category)))];
