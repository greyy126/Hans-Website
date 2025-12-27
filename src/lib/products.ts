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
  if (
    name.includes('sodium') ||
    name.includes('magnesium') ||
    name.includes('manganese') ||
    name.includes('phthalic')
  ) return 'Other Compounds';
  
  return 'Others';
};

// Convert filename to display name
const formatProductName = (fileName: string): string => {
  // Remove .pdf extension
  const name = fileName.replace('.pdf', '');
  
  // Convert to title case
  const formatted = name.replace(/\w\S*/g, (txt) => 
    txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );

  const replacements: Record<string, string> = {
    'Hansmol Bx Paste': 'Hansmol BX Paste',
    'Hansmol Bx Powder': 'Hansmol BZ Powder',
    'Hansmol Dn (Spl) Powder': 'Hansmol DN (SPL) Powder',
    'Hansmol Dn Powder': 'Hansmol DN Powder',
    'Hansmol Fbp1 Powder': 'Hansmol FBP1 Powder',
    'Hansmol Fz 1 Liquid': 'Hansmol FZ 1 Liquid',
    'Hansmol Gl Powder': 'Hansmol GL Powder',
    'Hansmol Gls Powder': 'Hansmol GLS Powder',
    'Hansmol Nks Powder': 'Hansmol NKS Powder',
    'Sodium Formaldehyde Bi Sulphite': 'Sodium Formaldehyde BI Sulphate',
    'Zinc Dust Std 7 Ever Zinc': 'Zinc Dust Std 7',
    'Zinc Dust Super Extra Ever Zinc': 'Zinc Dust Super Extra',
    'Zinc Dust Super Fine Ever Zinc': 'Zinc Dust Super Fine',
    'Magnessium Sulphate Tds': 'Magnesium Sulphate',
    'Manganese Sulphate Tds': 'Manganese Sulphate Monohydrate',
    'Phthalic Anhydride Tds': 'Phthalic Anhydride'
  };

  return replacements[formatted] ?? formatted;
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
  'Manganese Sulphate TDS.pdf',
  'Phthalic Anhydride TDS.pdf',
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
