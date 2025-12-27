import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Target, Users, Award, Globe } from 'lucide-react';

const milestones = [
  {
    year: '1987',
    title: 'Founded',
    description: 'Established with a vision to provide quality chemical trading services.'
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
    year: '2026',
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
    <div className="pt-24 md:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-gray-50 to-white min-h-screen">
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        {/* Two-Column Layout */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-x-16 lg:gap-y-4 items-start">
            
            {/* Heading & Quote - shown first on mobile, right column on desktop */}
            <div className="order-1 lg:order-2 lg:col-start-2 space-y-8">
              <div>
                <h1 className="text-2xl md:text-4xl font-bold text-slate-900 mb-4">
                  About Us
                </h1>
                <div className="w-24 h-1 bg-slate-900 mb-6 rounded-full"></div>
                
                <blockquote className="text-base md:text-xl font-light italic text-slate-600 leading-relaxed">
                  &ldquo;For over three decades, we have been a trusted partner in chemical trading, 
                  providing quality solutions to industries across India and beyond.&rdquo;
                </blockquote>
              </div>
            </div>

            {/* Image */}
            <div className="order-2 lg:order-1 lg:col-start-1 lg:row-span-2">
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <img
                  src="/about2.jpg"
                  alt="HANS CHEMICALS - About Us"
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            </div>

            {/* Story - sits after image on mobile, aligns to right column on desktop */}
            <div className="order-3 lg:order-3 lg:col-start-2 space-y-6">
              <div>
                <h2 className="text-2xl font-serif font-bold text-slate-900">Our Story</h2>
              </div>
              
              <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 max-w-2xl">
                <div className="prose prose-lg max-w-none">
                  <p className="text-slate-700 leading-relaxed mb-6 text-justify">
                    <span className="md:float-left text-5xl md:text-6xl font-bold text-slate-600 leading-none md:pr-2 md:pt-1">F</span>
                    ounded in 1987, we began as a small chemical trading company 
                    with a simple mission: <span className="font-semibold text-slate-900 border-b-2 border-slate-300 pb-1">to provide reliable, high-quality chemicals to industries 
                    that depend on them</span>. Over the years, we have grown into a trusted partner for 
                    companies across electroplating, metal treatment, feed, water treatment, and ceramics industries.
                  </p>
                  <p className="text-slate-700 leading-relaxed text-justify">
                    Our success is built on three pillars: <span className="font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded">quality, reliability, and customer service</span>. 
                    We understand that our customers&apos; operations depend on the chemicals we supply, 
                    which is why we never compromise on quality or delivery timelines. Today, we continue 
                    to expand our product portfolio and supplier network while maintaining the same 
                    commitment to excellence that has defined us for over three decades.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Vertical Divider - Desktop Only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-slate-200 transform -translate-x-1/2"></div>
        </div>

        {/* Spacing for Values Section */}
        <div className="mt-20">
          {/* Values */}
          <div className="mb-12">
            <h2 className="text-2xl font-serif font-bold text-center mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center mb-4">
                      <value.icon className="h-6 w-6 text-white" />
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
                <div key={index} className="flex flex-col sm:flex-row sm:items-start sm:space-x-4 space-y-3 sm:space-y-0">
                  <div className="flex-shrink-0 sm:self-start">
                    <div className="w-16 h-16 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
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
    </div>
  );
}
