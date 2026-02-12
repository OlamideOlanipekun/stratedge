
import React from 'react';
import { TrendingUp, Settings, Target, Briefcase, Zap, CheckCircle } from 'lucide-react';
import { Service, CaseStudy, Testimonial } from './types';

export const SERVICES: Service[] = [
  {
    id: 'strategy',
    title: 'Strategy Consulting',
    description: 'Developing high-level roadmaps to align your business vision with market reality.',
    icon: 'Target',
    whoItIsFor: ['SMEs looking to scale', 'Founders seeking exit strategy', 'Businesses entering new markets'],
    outcomes: ['3-year strategic roadmap', 'Competitive analysis report', 'Go-to-market plan']
  },
  {
    id: 'operations',
    title: 'Operations Consulting',
    description: 'Optimizing internal processes to reduce waste and increase operational efficiency.',
    icon: 'Settings',
    whoItIsFor: ['High-overhead companies', 'Firms with legacy processes', 'Rapidly growing teams'],
    outcomes: ['Standard Operating Procedures (SOPs)', 'Tech stack optimization', '20% average cost reduction']
  },
  {
    id: 'growth',
    title: 'Growth Consulting',
    description: 'Data-driven marketing and sales strategies to boost your revenue and market share.',
    icon: 'TrendingUp',
    whoItIsFor: ['Sales teams hitting plateaus', 'E-commerce brands', 'Service businesses'],
    outcomes: ['Conversion rate optimization', 'Lead gen system', 'Customer retention framework']
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: '1',
    title: 'Retail Supply Chain Overhaul',
    clientType: 'Mid-sized Retail SME',
    problem: 'Excessive inventory holding costs and frequent stockouts.',
    solution: 'Implemented automated inventory tracking and demand forecasting.',
    result: 'Reduced holding costs by 25% while maintaining 99% stock availability.',
    metric: '+25% Profitability',
    image: 'https://picsum.photos/seed/retail/800/600'
  },
  {
    id: '2',
    title: 'Digital Transformation for Legal Firm',
    clientType: 'Boutique Law Firm',
    problem: 'Manual document processing leading to slow client onboarding.',
    solution: 'Cloud-based document automation and CRM integration.',
    result: 'Reduced onboarding time from 3 days to 4 hours.',
    metric: '95% Faster Onboarding',
    image: 'https://picsum.photos/seed/legal/800/600'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    role: 'CEO',
    company: 'Nexus Logistics',
    content: 'StratEdge completely transformed how we view our operations. We saved $200k in our first year of implementation.',
    avatar: 'https://picsum.photos/seed/sarah/100/100'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Founder',
    company: 'Chen & Co',
    content: 'Their growth strategy was clinical. We doubled our lead flow in under six months without increasing ad spend.',
    avatar: 'https://picsum.photos/seed/michael/100/100'
  }
];

export const ICONS = {
  Target: <Target className="w-6 h-6" />,
  Settings: <Settings className="w-6 h-6" />,
  TrendingUp: <TrendingUp className="w-6 h-6" />,
  Briefcase: <Briefcase className="w-6 h-6" />,
  Zap: <Zap className="w-6 h-6" />,
  CheckCircle: <CheckCircle className="w-6 h-6" />
};
