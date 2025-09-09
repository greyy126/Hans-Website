export interface Product {
  id: string;
  name: string;
  gradeOrUse: string[];
  applications: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Zinc Oxide',
    gradeOrUse: ['Metal Treatment', 'Feed', 'Water Treatment'],
    applications: ['Electroplating']
  },
  {
    id: '2',
    name: 'Zinc Dust',
    gradeOrUse: ['Industrial Grade'],
    applications: ['Metal Treatment', 'Chemical Processing']
  },
  {
    id: '3',
    name: 'Benzoic Acid',
    gradeOrUse: ['Feed Grade'],
    applications: ['Animal Feed', 'Food Preservation']
  },
  {
    id: '4',
    name: 'Nickel Sulphate',
    gradeOrUse: ['Industrial Grade'],
    applications: ['Electroplating', 'Catalysts']
  },
  {
    id: '5',
    name: 'Nickel Carbonate',
    gradeOrUse: ['Industrial Grade'],
    applications: ['Catalysts', 'Ceramics']
  },
  {
    id: '6',
    name: 'Ferrous Sulphate',
    gradeOrUse: ['Pure Grade', 'Chemical Grade'],
    applications: ['Water Treatment', 'Agriculture']
  }
];
