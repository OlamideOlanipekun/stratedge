
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  whoItIsFor: string[];
  outcomes: string[];
}

export interface CaseStudy {
  id: string;
  title: string;
  clientType: string;
  problem: string;
  solution: string;
  result: string;
  metric: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar: string;
}
