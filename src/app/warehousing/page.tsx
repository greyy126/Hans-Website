import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Warehouse, Truck, Shield, Clock, Thermometer, Lock } from 'lucide-react';

const warehousingFeatures = [
  {
    icon: Warehouse,
    title: 'Strategic Locations',
    description: 'Multiple warehouse facilities strategically located for efficient distribution across India.'
  },
  {
    icon: Thermometer,
    title: 'Climate Control',
    description: 'Temperature and humidity controlled storage for sensitive chemical products.'
  },
  {
    icon: Shield,
    title: 'Safety Standards',
    description: 'Compliance with all safety regulations and proper segregation of incompatible materials.'
  },
  {
    icon: Lock,
    title: 'Secure Storage',
    description: '24/7 security monitoring and access control for all warehouse facilities.'
  },
  {
    icon: Truck,
    title: 'Logistics Network',
    description: 'Integrated logistics network ensuring timely and safe delivery to your location.'
  },
  {
    icon: Clock,
    title: 'Real-time Tracking',
    description: 'Complete visibility of inventory levels and shipment status through our tracking system.'
  }
];

const storageCapabilities = [
  {
    type: 'Bulk Storage',
    capacity: '500+ MT',
    description: 'Large quantity storage for high-volume chemicals with proper segregation and labeling.'
  },
  {
    type: 'Drum Storage',
    capacity: '2000+ Drums',
    description: 'Organized drum storage with proper stacking and rotation systems for optimal space utilization.'
  },
  {
    type: 'Bag Storage',
    capacity: '5000+ Bags',
    description: 'Dedicated bag storage area with proper ventilation and moisture control systems.'
  },
  {
    type: 'Hazardous Materials',
    capacity: 'Specialized',
    description: 'Dedicated storage areas for hazardous chemicals with enhanced safety protocols.'
  }
];

export default function WarehousingPage() {
  return (
    <div className="py-10 md:py-12">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold mb-4">Warehousing & Logistics</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our state-of-the-art warehousing facilities ensure safe storage, proper handling, 
            and efficient distribution of chemical products across India.
          </p>
        </div>

        {/* Warehousing Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {warehousingFeatures.map((feature, index) => (
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

        {/* Storage Capabilities */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-center mb-8">Storage Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {storageCapabilities.map((capability, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{capability.type}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{capability.capacity}</div>
                </CardHeader>
                <CardContent>
                  <CardDescription>{capability.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Flow */}
        <div className="bg-muted/50 rounded-lg p-8">
          <h2 className="text-2xl font-serif font-bold text-center mb-8">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Receipt</h3>
              <p className="text-muted-foreground text-sm">
                Careful inspection and documentation of incoming materials with quality verification.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Storage</h3>
              <p className="text-muted-foreground text-sm">
                Proper segregation and storage according to chemical compatibility and safety requirements.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Packaging</h3>
              <p className="text-muted-foreground text-sm">
                Safe packaging and labeling for transportation with proper documentation.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                4
              </div>
              <h3 className="text-lg font-semibold mb-2">Delivery</h3>
              <p className="text-muted-foreground text-sm">
                Timely delivery with tracking and confirmation to ensure safe arrival at destination.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
