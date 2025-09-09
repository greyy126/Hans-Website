import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Building2, Globe, Award, Users } from 'lucide-react';

const vendorFeatures = [
  {
    icon: Building2,
    title: 'Global Network',
    description: 'Established relationships with certified suppliers across multiple countries and regions.'
  },
  {
    icon: Globe,
    title: 'Diverse Sources',
    description: 'Multiple supply sources for each product to ensure availability and competitive pricing.'
  },
  {
    icon: Award,
    title: 'Certified Partners',
    description: 'All vendors are ISO certified and meet international quality and safety standards.'
  },
  {
    icon: Users,
    title: 'Long-term Relationships',
    description: 'Decades of trusted partnerships ensuring consistent quality and reliable supply.'
  }
];

const vendorCategories = [
  {
    category: 'Electroplating Chemicals',
    description: 'Specialized suppliers for zinc oxide, nickel compounds, and electroplating solutions.',
    count: '15+ Suppliers'
  },
  {
    category: 'Metal Treatment',
    description: 'Expert vendors for metal treatment chemicals and surface treatment solutions.',
    count: '12+ Suppliers'
  },
  {
    category: 'Feed & Agriculture',
    description: 'Certified suppliers for feed-grade chemicals and agricultural applications.',
    count: '8+ Suppliers'
  },
  {
    category: 'Water Treatment',
    description: 'Specialized vendors for water treatment chemicals and purification solutions.',
    count: '10+ Suppliers'
  }
];

export default function VendorsPage() {
  return (
    <div className="py-12">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold mb-4">Our Vendor Network</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We maintain a carefully curated network of certified suppliers worldwide, ensuring 
            quality, reliability, and competitive pricing for all our chemical products.
          </p>
        </div>

        {/* Vendor Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {vendorFeatures.map((feature, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-sm">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Vendor Categories */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-center mb-8">Vendor Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {vendorCategories.map((category, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                    <span className="text-sm font-medium text-primary">{category.count}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{category.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Partnership Benefits */}
        <div className="bg-muted/50 rounded-lg p-8">
          <h2 className="text-2xl font-serif font-bold text-center mb-8">Partnership Benefits</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">For Our Clients</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Consistent quality and supply reliability</li>
                <li>• Competitive pricing through bulk sourcing</li>
                <li>• Access to specialized and hard-to-find chemicals</li>
                <li>• Complete documentation and traceability</li>
                <li>• Technical support and application guidance</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">For Our Vendors</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Long-term partnership opportunities</li>
                <li>• Fair and transparent business practices</li>
                <li>• Regular quality assessments and feedback</li>
                <li>• Market expansion support</li>
                <li>• Technical collaboration and development</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
