import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Users, Award, Globe } from 'lucide-react';

const milestones = [
  {
    year: '1987',
    title: 'Company Founded',
    description: 'Hans Chemicals Pvt. LTD was established with a vision to provide quality chemical trading services.'
  },
  {
    year: '1995',
    title: 'Expansion',
    description: 'Expanded operations to include metal treatment and electroplating chemicals.'
  },
  {
    year: '2005',
    title: 'ISO Certification',
    description: 'Achieved ISO certification for quality management systems and processes.'
  },
  {
    year: '2015',
    title: 'Digital Transformation',
    description: 'Implemented modern tracking and inventory management systems.'
  },
  {
    year: '2020',
    title: 'Sustainability Focus',
    description: 'Launched sustainable sourcing and eco-friendly packaging initiatives.'
  },
  {
    year: '2024',
    title: 'Present',
    description: 'Continuing to serve industries with reliable chemical solutions and expanding our reach.'
  }
];

const values = [
  {
    icon: Target,
    title: 'Quality First',
    description: 'We never compromise on quality. Every product undergoes rigorous testing and verification.'
  },
  {
    icon: Users,
    title: 'Customer Focus',
    description: 'Our customers are at the heart of everything we do. We build lasting relationships based on trust.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in every aspect of our business, from sourcing to delivery.'
  },
  {
    icon: Globe,
    title: 'Sustainability',
    description: 'We are committed to sustainable practices and environmental responsibility in all our operations.'
  }
];


export default function AboutPage() {
  return (
    <div className="pt-28 md:pt-32 pb-12">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold mb-4">About Hans Chemicals</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            For over three decades, we have been a trusted partner in chemical trading, 
            providing quality solutions to industries across India and beyond.
          </p>
        </div>


        {/* Our Story */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-center mb-8">Our Story</h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Founded in 1987, Hans Chemicals Pvt. LTD began as a small chemical trading company 
              with a simple mission: to provide reliable, high-quality chemicals to industries 
              that depend on them. Over the years, we have grown into a trusted partner for 
              companies across electroplating, metal treatment, feed, water treatment, and ceramics industries.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our success is built on three pillars: quality, reliability, and customer service. 
              We understand that our customers&apos; operations depend on the chemicals we supply, 
              which is why we never compromise on quality or delivery timelines. Today, we continue 
              to expand our product portfolio and supplier network while maintaining the same 
              commitment to excellence that has defined us for over three decades.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-12">
          <h2 className="text-2xl font-serif font-bold text-center mb-8">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-muted/50 rounded-lg p-8">
          <h2 className="text-2xl font-serif font-bold text-center mb-8">Our Journey</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                    {milestone.year}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
