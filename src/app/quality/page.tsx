import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Shield, FileText, Award } from 'lucide-react';

const qualityFeatures = [
  {
    icon: CheckCircle,
    title: 'Source Verification',
    description: 'Every supplier undergoes rigorous verification and quality assessment before partnership.'
  },
  {
    icon: Shield,
    title: 'Quality Testing',
    description: 'Comprehensive testing protocols ensure all chemicals meet industry standards and specifications.'
  },
  {
    icon: FileText,
    title: 'Documentation',
    description: 'Complete traceability with certificates of analysis, safety data sheets, and compliance documentation.'
  },
  {
    icon: Award,
    title: 'Certification',
    description: 'ISO certified processes and adherence to international quality management standards.'
  }
];

export default function QualityPage() {
  return (
    <div className="pt-28 md:pt-32 pb-12">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold mb-4">Quality Assurance</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our commitment to quality ensures that every chemical we supply meets the highest standards 
            and regulatory requirements. We maintain strict quality control processes from source to delivery.
          </p>
        </div>

        {/* Quality Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {qualityFeatures.map((feature, index) => (
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

        {/* Quality Process */}
        <div className="bg-muted/50 rounded-lg p-8">
          <h2 className="text-2xl font-serif font-bold text-center mb-8">Our Quality Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2">Supplier Assessment</h3>
              <p className="text-muted-foreground">
                Comprehensive evaluation of supplier capabilities, certifications, and quality systems.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2">Testing & Verification</h3>
              <p className="text-muted-foreground">
                Rigorous testing of samples to ensure chemical composition and purity meet specifications.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2">Documentation & Delivery</h3>
              <p className="text-muted-foreground">
                Complete documentation package and secure packaging for safe transportation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
