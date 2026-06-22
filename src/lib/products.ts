export interface Product {
  id: string;
  slug: string;
  name: string;
  fileName: string;
  pdfPath: string;
  category: string;
  keywords: string;
  applications: string[];
}

export const categories = [
  'All',
  'Zinc Compounds',
  'Copper Compounds',
  'Ferrous Compounds',
  'Dispersing Agent and Wetting Agent',
  'Sodium Compounds',
  'Other Compounds'
];

const categorizeProduct = (fileName: string): string => {
  const name = fileName.toLowerCase();

  if (name.includes('zinc') || name.includes('zno') || name.includes('zinc dust')) {
    return 'Zinc Compounds';
  } else if (name.includes('cupric') || name.includes('cuprous') || name.includes('copper')) {
    return 'Copper Compounds';
  } else if (name.includes('ferrous') || name.includes('iron')) {
    return 'Ferrous Compounds';
  } else if (name.includes('hansmol')) {
    return 'Dispersing Agent and Wetting Agent';
  } else if (name.includes('sodium')) {
    return 'Sodium Compounds';
  } else if (name.includes('magnesium') || name.includes('manganese') || name.includes('phthalic')) {
    return 'Other Compounds';
  } else {
    return 'Other Compounds';
  }
};

const formatProductName = (fileName: string): string => {
  const base = fileName
    .replace('.pdf', '')
    .split(' ')
    .map(word => {
      if (word.startsWith('(') && word.endsWith(')')) {
        return word.toUpperCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(' ');

  const replacements: Record<string, string> = {
    'Hansmol Bx Paste': 'Hansmol BX Paste',
    'Hansmol Bx Powder': 'Hansmol BX Powder',
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

  return replacements[base] ?? base;
};

const generateProductId = (fileName: string): string => {
  return fileName
    .replace('.pdf', '')
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-|-$/g, '');
};

const productFiles: { fileName: string; keywords: string }[] = [
  {
    fileName: 'Benzoic Acid - Tech.pdf',
    keywords: 'Benzoic Acid, Benzenecarboxylic Acid, Carboxybenzene, E210, Dracylic Acid, BZoH, CAS No.65-85-0, EC NO. 200-618-2, C7H6O2, C6H5COOH'
  },
  {
    fileName: 'Cupric Chloride Dihydrate Pure.pdf',
    keywords: 'Cupric Chloride - Dihydrate, Cupric Chloride, Copper ( II) Chloride, EC No. 600-176-4, CAS No. 10125-13-0, CuCl2, Cl2Cu.2H2O'
  },
  {
    fileName: 'Cupric Chloride Dihydrate Tech.pdf',
    keywords: 'Cupric Chloride - Dihydrate, Cupric Chloride, Copper ( II) Chloride, EC No. 600-176-4, CAS No. 10125-13-0, CuCl2, Cl2Cu.2H2O'
  },
  {
    fileName: 'Cupric Oxide - Black.pdf',
    keywords: 'Cupric Oxide - Black, Copper (II) Oxide, CAS No. 1317-38-0, CuO, Copper Oxide'
  },
  {
    fileName: 'Cuprous Oxide - Red.pdf',
    keywords: 'Cuprous Oxide - Red, Cuprous Oxide, CU2O, Copper ( I ) Oxide'
  },
  {
    fileName: 'Ferrous Sulphate - Heptahydrate.pdf',
    keywords: 'Feso4.7h2O, Ferrous Sulphate, Iron ( II ) Sulphate, Iron Vitriol, CAS No. 7782-63-0, Ferrous Sulfate'
  },
  {
    fileName: 'HANSMOL 10 POWDER.pdf',
    keywords: 'HANSMOL 10 Powder, Dispersing and wetting agents, Idet 10, Dodecyl benzene Sulphonic Acid Sodium Salts, CAS No. 42615-29-2, C18H29NaO3S'
  },
  {
    fileName: 'HANSMOL BX PASTE.pdf',
    keywords: 'HANSMOL BX PASTE, HANSMOL BX POWDER, BX POWDER, BX PASTE, Sodium Salts of DiButyl Naphthalene Sulphonate, Wetting Agents, CAS No. 25417-20-3'
  },
  {
    fileName: 'HANSMOL BX POWDER.pdf',
    keywords: 'HANSMOL BX PASTE, HANSMOL BX POWDER, BX POWDER, BX PASTE, Sodium Salts of DiButyl Naphthalene Sulphonate, Wetting Agents, CAS No. 25417-20-3'
  },
  {
    fileName: 'HANSMOL DN (SPL) Powder.pdf',
    keywords: 'HANSMOL DN POWDER, DN Powder, CAS No. 9041-04-7, Dispersing Agents for Agro and Pesticides'
  },
  {
    fileName: 'HANSMOL DN POWDER.pdf',
    keywords: 'HANSMOL DN POWDER, DN Powder, CAS No. 9041-04-7, Dispersing Agents for Agro and Pesticides'
  },
  {
    fileName: 'HANSMOL FBP1 Powder.pdf',
    keywords: 'HANSMOL FBP1 POWDER, FBP1 POWDER, Sodium salts of Naphthalene Formaldehyde Polycondensate, CAS No. 9084-06-4'
  },
  {
    fileName: 'HANSMOL FZ 1 LIQUID.pdf',
    keywords: 'HANSMOL FZ1, FZ1 Dispersing and Wetting agents, Dispersing and Wetting Agents, Dispersing Agents for Dyes, Phenol Formaldehyde Condensate'
  },
  {
    fileName: 'HANSMOL GL Powder.pdf',
    keywords: 'HANSMOL GL POWDER, HANSMOL SNF LIQUID, SNF POWDER, SNF LIQUID, Sodium naphthalene Formaldehyde Sulfonate, Naphthalene formaldehyde sulphonic acid Sodium salts, HANSMOL NKS, NKS POWDER, DISPERSING AGENTS FOR TEXTILE, AGRO AND PESTICIDES, CAS NO. 9084-06-4'
  },
  {
    fileName: 'HANSMOL GLS Powder.pdf',
    keywords: 'HANSMOL GL POWDER, HANSMOL SNF LIQUID, SNF POWDER, SNF LIQUID, Sodium naphthalene Formaldehyde Sulfonate, Naphthalene formaldehyde sulphonic acid Sodium salts, HANSMOL NKS, NKS POWDER, DISPERSING AGENTS FOR TEXTILE, AGRO AND PESTICIDES, CAS NO. 9084-06-4'
  },
  {
    fileName: 'HANSMOL NKS Powder.pdf',
    keywords: 'HANSMOL GL POWDER, HANSMOL SNF LIQUID, SNF POWDER, SNF LIQUID, Sodium naphthalene Formaldehyde Sulfonate, Naphthalene formaldehyde sulphonic acid Sodium salts, HANSMOL NKS, NKS POWDER, DISPERSING AGENTS FOR TEXTILE, AGRO AND PESTICIDES, CAS NO. 9084-06-4'
  },
  {
    fileName: 'Magnessium Sulphate TDS.pdf',
    keywords: 'Magnesium Sulphate, Magnesium Sulfate, Epsom Salt, CAS No. 7487-88-9, MgSO4'
  },
  {
    fileName: 'Manganese Sulphate TDS.pdf',
    keywords: 'Manganese Sulphate Monohydrate, MnSO4, Epsom Salt, CAS No. 10034-96-5'
  },
  {
    fileName: 'SODIUM ALLYL SULPHONATE.pdf',
    keywords: 'Sodium Allyl Sulphonate, HANSMOL -ALS, C3H5O3NaS, CAS No. 2495-39-8, 2 Propane-Sulphonic Acid, Sodium Salts of Allyl Sulphonic Acid, Sodium Salts, Sodium 1 -Propane-3-Sulphonate, Sodium 2 propane-1-Sulphonate, Sodium Allyl Sulphonate, ALS, SAS, ALS-Sodium Allyl Sulphonate, SAS, Sodium Allyl Sulfonate'
  },
  {
    fileName: 'Sodium Formaldehyde Bi sulphite.pdf',
    keywords: 'Sodium Formaldehyde Bi Sulphite, SFBS, Sodium Hydroxy Methane Sulphonate, NaCH3OSO3, CAS No. 870-72-4'
  },
  {
    fileName: 'Phthalic Anhydride TDS.pdf',
    keywords: 'Phthalic Anhydride, 1,2-Benzenedicarboxylic Anhydride, C8H4O3, CAS No. 85-44-9'
  },
  {
    fileName: 'Zinc Dust STD 7 Ever Zinc.pdf',
    keywords: 'Zinc Dust, Zinc Powder, ZN powder, CAS NO.7440-66-6'
  },
  {
    fileName: 'Zinc Dust Super Extra Ever Zinc.pdf',
    keywords: 'Zinc Dust, Zinc Powder, ZN powder, CAS NO.7440-66-6'
  },
  {
    fileName: 'Zinc Dust Super Fine Ever Zinc.pdf',
    keywords: 'Zinc Dust, Zinc Powder, ZN powder, CAS NO.7440-66-6'
  },
  {
    fileName: 'Zinc Oxide - Goldseal.pdf',
    keywords: 'Zinc oxide, ZnO, Zinc'
  },
  {
    fileName: 'Zinc Oxide - Whiteseal.pdf',
    keywords: 'Zinc oxide, ZnO, Zinc'
  },
  {
    fileName: 'Zinc Phospsphate.pdf',
    keywords: 'CAS No. 7779-90-0, Zinc Phosphate, Zinc Orthophosphate, Zn3( PO4)2'
  },
  {
    fileName: 'Zinc Stearate.pdf',
    keywords: 'Zinc Stearate, Zinc Soap CAS No. 557-05-1, Zn( C18H35O2)2'
  }
];

const applicationsByName: Record<string, string[]> = {
  'Benzoic Acid - Tech': ['Preservatives in Perfume', 'Food', 'Resin', 'Paints', 'Plasticizers', 'Benzoic Derivatives'],
  'Cupric Chloride Dihydrate Pure': ['Catalyst', 'Dyeing & Printing', 'Indelible & Laundry Ink'],
  'Cupric Chloride Dihydrate Tech': ['Catalyst', 'Dyeing & Printing', 'Indelible & Laundry Ink'],
  'Cupric Oxide - Black': ['Fertilizer', 'Copper Salts', 'Pigment', 'Wood Preservatives'],
  'Cuprous Oxide - Red': ['Paint', 'Semiconductor', 'Photocell', 'Pigment', 'Pharma'],
  'Ferrous Sulphate - Heptahydrate': ['Pharma', 'Fertilizers', 'Ferrous derivatives', 'Jewellery', 'Reagents'],
  'Hansmol 10 Powder': ['Electroplating', 'Textile'],
  'Hansmol BX Paste': ['Textile', 'Dyes'],
  'Hansmol BX Powder': ['Textile', 'Dyes'],
  'Hansmol DN (SPL) Powder': ['Pesticides', 'Fertilizers'],
  'Hansmol DN Powder': ['Pesticides', 'Fertilizers'],
  'Hansmol FBP1 Powder': ['Pesticides', 'Fertilizers'],
  'Hansmol FZ 1 Liquid': ['Textile', 'Fertilizers'],
  'Hansmol GL Powder': ['Dyes', 'Textile', 'Fertilizers', 'Pesticides', 'Pigments', 'Construction'],
  'Hansmol GLS Powder': ['Dyes', 'Textile', 'Fertilizers', 'Pesticides', 'Pigments', 'Construction'],
  'Hansmol NKS Powder': ['Dyes', 'Textile', 'Fertilizers', 'Pesticides', 'Pigments', 'Construction'],
  'Magnesium Sulphate': ['Reagents', 'Fertilizers', 'Pharma'],
  'Manganese Sulphate Monohydrate': ['Dyes', 'Fungicides', 'Medicines and ceramics', 'Nutrient and dietary supplement', 'Ore flotation', 'Laboratory reagent'],
  'Sodium Allyl Sulphonate': ['Electroplating'],
  'Sodium Formaldehyde BI Sulphate': ['Electroplating', 'Water treatment'],
  'Phthalic Anhydride': ['Resin', 'Pesticides', 'Plasticizers', 'Unsaturated Polyester', 'Alkyd Resins', 'Dyes and Pigments', 'Pharma', 'Flame Retardants'],
  'Zinc Dust Std 7': ['Paint', 'Pharma', 'Mechanical Plating'],
  'Zinc Dust Super Extra': ['Paint', 'Pharma', 'Mechanical Plating'],
  'Zinc Dust Super Fine': ['Paint', 'Pharma', 'Mechanical Plating'],
  'Zinc Oxide - Goldseal': ['Paint', 'Pharma', 'Fertilizers', 'Rubber', 'Zinc Salts'],
  'Zinc Oxide - Whiteseal': ['Paint', 'Pharma', 'Fertilizers', 'Rubber', 'Zinc Salts'],
  'Zinc Phospsphate': ['Paint', 'Reagents'],
  'Zinc Stearate': ['Lubricant', 'Release Agents', 'Plastic', 'Rubber', 'Pharma']
};

export const products: Product[] = productFiles.map(product => {
  const name = formatProductName(product.fileName);
  const slug = generateProductId(product.fileName);

  return {
    id: slug,
    slug,
    name,
    fileName: product.fileName,
    pdfPath: `/products/${product.fileName}`,
    category: categorizeProduct(product.fileName),
    keywords: product.keywords,
    applications: applicationsByName[name] ?? []
  };
});

export const getProductBySlug = (slug: string) => {
  return products.find(product => product.slug === slug);
};

export const siteUrl = 'https://hanschemicals.in';
