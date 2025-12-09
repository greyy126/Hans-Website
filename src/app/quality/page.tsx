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
    <div className="pt-24 md:pt-32 pb-12 md:pb-16">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold mb-4 text-slate-900">Quality Assurance</h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-700 mx-auto mb-4 rounded-full"></div>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our commitment to quality ensures that every chemical we supply meets the highest standards 
            and regulatory requirements. We maintain strict quality control processes from source to delivery.
          </p>
        </div>

        {/* Quality Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6 mb-12">
          {qualityFeatures.map((feature, index) => {
            // Use different blue shades for visual hierarchy
            const blueVariants = [
              'bg-blue-900', // Navy for Source Verification
              'bg-blue-700', // Dark blue for Quality Testing
              'bg-blue-800', // Medium navy for Documentation
              'bg-blue-900'  // Navy for Certification
            ];
            const hoverVariants = [
              'hover:bg-blue-800',
              'hover:bg-blue-600',
              'hover:bg-blue-700',
              'hover:bg-blue-800'
            ];
            
            return (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border border-blue-100">
                <CardHeader>
                  <div className={`mx-auto w-12 h-12 ${blueVariants[index]} ${hoverVariants[index]} rounded-full flex items-center justify-center mb-4 transition-colors duration-300`}>
                    <feature.icon className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg text-slate-900">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm text-slate-600">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Quality Process */}
        <div className="bg-blue-50 rounded-lg p-6 md:p-8 border border-blue-100">
          <h2 className="text-2xl font-serif font-bold text-center mb-8 text-slate-900">Our Quality Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-900 hover:bg-blue-800 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 transition-colors duration-300 shadow-md">
                1
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">Supplier Assessment</h3>
              <p className="text-slate-600">
                Comprehensive evaluation of supplier capabilities, certifications, and quality systems.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-700 hover:bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 transition-colors duration-300 shadow-md">
                2
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">Testing & Verification</h3>
              <p className="text-slate-600">
                Rigorous testing of samples to ensure chemical composition and purity meet specifications.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-800 hover:bg-blue-700 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 transition-colors duration-300 shadow-md">
                3
              </div>
              <h3 className="text-lg font-semibold mb-2 text-slate-900">Documentation & Delivery</h3>
              <p className="text-slate-600">
                Complete documentation package and secure packaging for safe transportation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
