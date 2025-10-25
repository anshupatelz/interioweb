export interface Service {
    id: string
    title: string
    description: string
    icon: string // lucide icon name
    features: string[]
    slug: string
}

export interface Tool {
    id: string
    title: string
    description: string
    category: string
    slug: string
    icon: string // lucide icon name
}

export const services: Service[] = [
    {
        id: "1",
        title: "Website Design",
        description: "Custom, responsive websites tailored for interior designers to showcase their portfolio and attract clients.",
        icon: "MonitorSmartphone",
        slug: "website-design",
        features: [
            "Mobile-responsive design",
            "Portfolio galleries",
            "Contact forms & lead capture",
            "Fast loading times",
            "Professional aesthetics"
        ]
    },
    {
        id: "2",
        title: "SEO & Marketing",
        description: "Get found by clients searching for interior design services in your area with strategic SEO and digital marketing.",
        icon: "TrendingUp",
        slug: "seo-marketing",
        features: [
            "Local SEO optimization",
            "Google Business Profile setup",
            "Content strategy",
            "Keyword research",
            "Monthly reporting"
        ]
    },
    {
        id: "3",
        title: "Branding & Identity",
        description: "Develop a cohesive brand identity that resonates with your target audience and sets you apart from competitors.",
        icon: "Palette",
        slug: "branding",
        features: [
            "Logo design",
            "Color palette & typography",
            "Brand guidelines",
            "Business cards & collateral",
            "Social media templates"
        ]
    }
]

export const tools: Tool[] = [
    {
        id: "1",
        title: "Tile Calculator",
        description: "Calculate how many tiles you need for your project, including waste allowance.",
        category: "Flooring",
        slug: "tile-calculator",
        icon: "LayoutGrid"
    },
    {
        id: "2",
        title: "Paint Calculator",
        description: "Estimate paint quantity needed for walls and ceilings based on room dimensions.",
        category: "Painting",
        slug: "paint-calculator",
        icon: "Paintbrush"
    },
    {
        id: "3",
        title: "Room Size Calculator",
        description: "Calculate square footage and cubic footage for any room or space.",
        category: "Measurement",
        slug: "room-size-calculator",
        icon: "Ruler"
    },
    {
        id: "4",
        title: "Flooring Calculator",
        description: "Estimate hardwood, laminate, or vinyl flooring materials needed for your project.",
        category: "Flooring",
        slug: "flooring-calculator",
        icon: "Layers"
    },
    {
        id: "5",
        title: "Wallpaper Calculator",
        description: "Calculate the number of wallpaper rolls required based on wall dimensions.",
        category: "Decoration",
        slug: "wallpaper-calculator",
        icon: "ScrollText"
    },
    {
        id: "6",
        title: "Curtain Fabric Calculator",
        description: "Determine how much fabric you need for custom curtains and drapes.",
        category: "Textiles",
        slug: "curtain-calculator",
        icon: "Scissors"
    }
]

export const testimonials = [
    {
        id: "1",
        name: "Sarah Mitchell",
        business: "Mitchell Interiors",
        location: "San Francisco, CA",
        text: "InterioWeb transformed my online presence. My website is beautiful and I'm now ranking #1 for 'interior designer San Francisco'!",
        rating: 5
    },
    {
        id: "2",
        name: "David Chen",
        business: "Chen Design Studio",
        location: "Austin, TX",
        text: "The tools on InterioWeb saved me countless hours. The tile calculator alone has become indispensable for my projects.",
        rating: 5
    },
    {
        id: "3",
        name: "Emily Rodriguez",
        business: "Luxe Living Designs",
        location: "Miami, FL",
        text: "Professional branding and a stunning website at a fraction of what I expected to pay. Highly recommend!",
        rating: 5
    }
]
