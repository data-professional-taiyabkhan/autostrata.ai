export interface Product {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  cta: string;
  category: string;
}

export const products: Product[] = [
  {
    slug: "mummy-help",
    name: "Mummy Help",
    tagline: "Voice-activated safety app for families with instant help and real-time location tracking",
    description: "A Voice-activated safety app for families: children trigger instant help with a wake phrase, verified by on-device speaker recognition; parents receive real-time location updates, push alerts, and a comprehensive alert history. Privacy-first (on-device wake word, secure APIs) and production-ready across mobile and backend.",
    features: [
      "Voice-activated emergency alerts with wake phrase detection",
      "On-device speaker recognition for security",
      "Real-time location tracking and push notifications",
      "Comprehensive alert history and reporting",
      "Privacy-first design with secure APIs",
      "Cross-platform mobile and backend support"
    ],
    cta: "Book a demo",
    category: "Safety & Security"
  },
  {
    slug: "virtual-receptionist",
    name: "Virtual Receptionist",
    tagline: "Streamline front-desk operations with self-serve visitor check-in and automated badge printing",
    description: "Streamline front-desk operations with self-serve visitor check-in, host approvals, and automated badge printing. Pre-register guests, get real-time host notifications when visitors arrive (or don't), and keep accurate logs to improve security and compliance.",
    features: [
      "Self-serve visitor check-in kiosk",
      "Automated badge printing and guest management",
      "Real-time host notifications and approvals",
      "Pre-registration system for scheduled visits",
      "Comprehensive visitor logs and compliance reporting",
      "Integration with existing security systems"
    ],
    cta: "Contact us",
    category: "Business Operations"
  },
  {
    slug: "ai-diet-tracker",
    name: "AI Diet Tracker",
    tagline: "Achieve your physique goals with AI-powered nutrition tracking and personalized coaching",
    description: "Achieve your physique goals with AI-powered nutrition tracking, personalised coaching, and smart meal logging. Get tailored recommendations, monitor progress against targets, and build sustainable habits with your virtual nutritionist.",
    features: [
      "AI-powered nutrition tracking and analysis",
      "Personalized meal recommendations and coaching",
      "Smart meal logging with photo recognition",
      "Progress monitoring against fitness targets",
      "Sustainable habit building and goal tracking",
      "Virtual nutritionist with 24/7 support"
    ],
    cta: "Book a demo",
    category: "Health & Fitness"
  },
  {
    slug: "visa-voyage",
    name: "Visa Voyage",
    tagline: "Your personal travel-visa advisor with AI-guided eligibility checks and document checklists",
    description: "Your personal travel-visa advisor: AI-guided eligibility checks, country-specific document checklists, and clear next steps—plus optional expert review when you need it. Plan confidently and cut application time, errors, and back-and-forth.",
    features: [
      "AI-guided visa eligibility assessment",
      "Country-specific document checklists",
      "Step-by-step application guidance",
      "Optional expert review and consultation",
      "Application timeline and deadline tracking",
      "Error prevention and compliance checking"
    ],
    cta: "Get started",
    category: "Travel & Immigration"
  },
  {
    slug: "housemate",
    name: "Housemate",
    tagline: "A simple, fair way for shared homes to divide chores and plan dinner rotas",
    description: "A simple, fair way for shared homes to divide chores, plan dinner rotas, and keep everyone accountable. Set weekly duties, track completions, and reduce house friction with gentle reminders and a clear, shared plan.",
    features: [
      "Fair chore rotation and assignment system",
      "Dinner planning and meal rota management",
      "Completion tracking and accountability features",
      "Gentle reminders and notification system",
      "Shared calendar and planning tools",
      "Conflict resolution and communication features"
    ],
    cta: "Try it free",
    category: "Home Management"
  },
  {
    slug: "time-attendance",
    name: "Time & Attendance",
    tagline: "Modern, secure attendance platform with contactless face-recognition clock-in/out",
    description: "A modern, secure attendance platform with contactless face-recognition clock-in/out, GPS geofencing to prevent off-site punches, and role-based dashboards for staff, managers, and admins. Includes anti-spoofing, encrypted template storage, audit logs, and exportable reports for compliance and productivity.",
    features: [
      "Contactless face-recognition clock-in/out system",
      "GPS geofencing to prevent off-site punches",
      "Role-based dashboards for staff, managers, and admins",
      "Anti-spoofing and encrypted template storage",
      "Comprehensive audit logs and compliance reporting",
      "Exportable reports for productivity analysis"
    ],
    cta: "Book a demo",
    category: "HR & Workforce"
  }
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(product => product.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}
