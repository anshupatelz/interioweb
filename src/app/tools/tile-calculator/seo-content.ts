// SEO content for tile calculator

export interface FAQItem {
    question: string
    answer: string
}

export interface ContentSection {
    title: string
    content: string
}

export const SEO_FAQS: FAQItem[] = [
    {
        question: "How do I calculate how many tiles I need?",
        answer: "To calculate tiles needed, measure your room's length and width in feet, multiply them to get square footage, then divide by the area of one tile. Always add 10-15% extra for waste, cuts, and future repairs. Our calculator does this automatically, including grout spacing and waste allowance.",
    },
    {
        question: "How much waste should I add when ordering tiles?",
        answer: "Standard installations need 10% waste allowance. For diagonal patterns or herringbone layouts, add 15-20%. Complex designs with lots of cuts may need up to 25%. Our calculator includes adjustable waste percentages to match your project complexity.",
    },
    {
        question: "Do I need to account for grout lines in my calculation?",
        answer: "Yes! Grout lines reduce the effective coverage area of each tile. Standard grout lines are 1/8\" to 1/4\" wide. Our calculator automatically adds grout spacing to ensure accurate tile counts. Wider grout lines mean you'll need more tiles.",
    },
    {
        question: "What's the difference between calculating floor tiles vs wall tiles?",
        answer: "Wall tiles typically require more waste (15%) due to cuts around outlets, corners, and fixtures. Floor tiles usually need 10% waste. Wall installations also often use smaller tile sizes (subway tiles: 3×6, 4×12) compared to floor tiles (12×12, 18×18, 24×24).",
    },
    {
        question: "How many tiles come in a box?",
        answer: "This varies by tile size and manufacturer. Common quantities: 12×12 tiles = 10-14 per box, 18×18 tiles = 6-8 per box, 24×24 tiles = 4-6 per box. Always check your specific product's packaging. Our calculator helps you determine boxes needed once you know tiles per box.",
    },
    {
        question: "Should I order extra tiles for future repairs?",
        answer: "Absolutely! Order at least 5-10 extra tiles beyond your calculated amount. Tile batches vary in color and shade, making future matching difficult. Store extras in a dry place. This small investment prevents costly replacements if tiles crack or chip years later.",
    },
    {
        question: "How do I measure an irregularly shaped room?",
        answer: "Break the room into rectangular sections. Measure each section's length and width separately, calculate square footage for each, then add them together. For alcoves and nooks, measure as separate rectangles. Our calculator accepts total area if you've already done this math.",
    },
    {
        question: "What tile size should I choose for my space?",
        answer: "Small rooms (under 100 sq ft): Use 12×12 or smaller tiles. Medium rooms (100-200 sq ft): 12×12 to 18×18 tiles work well. Large rooms (200+ sq ft): 18×18 or 24×24 tiles create a spacious feel. Wood-look planks (6×24, 8×48) suit any size but especially shine in hallways and living areas.",
    },
    {
        question: "How much does tile installation cost per square foot?",
        answer: "DIY tile material costs $2-15 per sq ft. Professional installation adds $5-15 per sq ft for labor, depending on tile complexity and region. Diagonal or herringbone patterns cost 20-30% more. Large format tiles (24×24+) are faster to install, potentially reducing labor costs.",
    },
    {
        question: "Can I use this calculator for different tile materials?",
        answer: "Yes! Our calculator works for all tile types: ceramic, porcelain, natural stone (marble, granite, travertine), glass, cement, vinyl, and luxury vinyl tile (LVT). Just input your tile dimensions and the calculator provides accurate quantities regardless of material.",
    },
]

export const CONTENT_SECTIONS: ContentSection[] = [
    {
        title: "Understanding Tile Measurements and Coverage",
        content: "Accurate tile calculation begins with understanding how tiles are measured and how much area they actually cover. Tiles are typically sold by the square foot, but individual tiles are measured in inches (12×12, 18×18) or centimeters internationally. The key challenge is that the nominal size (advertised size) differs slightly from the actual size due to manufacturing tolerances. Additionally, grout lines reduce effective coverage—a 12×12 inch tile with 1/4\" grout lines actually covers only about 140 square inches per tile instead of 144. Professional tilers always account for this difference to avoid ordering shortages mid-project.",
    },
    {
        title: "Choosing the Right Tile Size for Your Space",
        content: "Tile size dramatically impacts both aesthetics and installation efficiency. Large format tiles (18×18 and above) make small rooms feel more spacious by reducing grout lines, but they require perfectly level subfloors and are harder to cut. Standard 12×12 tiles offer versatility and ease of installation, making them ideal for DIY projects. Rectangular tiles like 12×24 or wood-look planks (6×24, 8×48) can make rooms appear longer when laid parallel to the longest wall. For walls, smaller tiles (4×12 subway, 3×6 metro) provide classic appeal and are easier to work with on vertical surfaces. Consider your room size, subfloor condition, and installation skill level when selecting tile dimensions.",
    },
    {
        title: "The Importance of Waste Allowance in Tile Projects",
        content: "Waste allowance isn't optional—it's essential for project success. Even expert installers experience tile breakage during cutting, handling, and installation. Standard straight-lay patterns require 10% waste minimum. Diagonal installations increase waste to 15% due to corner cuts. Complex patterns like herringbone, chevron, or basketweave can need 20-25% extra. Beyond installation waste, keeping extra tiles ensures you can repair damage years later when your exact tile may be discontinued or from a different dye lot. Color variation between production batches makes matching old tiles nearly impossible. Professional designers recommend storing 1-2 full boxes of leftover tiles in a climate-controlled space for future repairs.",
    },
    {
        title: "Grout Line Spacing and Its Impact on Tile Count",
        content: "Grout line width seems minor but significantly affects tile quantity. Standard grout spacing ranges from 1/16\" (tight, for rectified tiles) to 3/8\" (wide, for rustic tiles). Each increase in grout width reduces tile coverage area, requiring more tiles. For example, 100 12×12 tiles with 1/8\" grout covers about 94 square feet, but with 1/4\" grout, the same tiles cover only 92 square feet. Rectified tiles (precisely cut edges) allow minimal grout lines, maximizing coverage. Non-rectified tiles with slight size variations need wider grout lines (1/4\"-3/8\") to maintain straight lines. Wall tiles typically use 1/8\" grout, while floor tiles often use 3/16\"-1/4\" for durability and ease of cleaning.",
    },
    {
        title: "Floor vs Wall Tile Installation Differences",
        content: "Floor and wall tile installations have distinct requirements affecting calculations. Floor tiles must withstand foot traffic, furniture weight, and typically use larger formats (12×12 minimum, commonly 18×18 or 24×24). They require level subfloors, thicker mortar beds, and can be more forgiving with layout since they're viewed from above. Wall tiles can be lighter-weight and smaller (common subway tiles: 3×6, 4×12), but installation is more complex due to gravity—tiles must be supported until mortar sets. Wall projects need more precise cutting around fixtures, outlets, and corners, increasing waste to 15% versus 10% for floors. Wall tile layout is viewed straight-on, making pattern alignment and grout line straightness more critical.",
    },
    {
        title: "Cost Estimation for Tile Projects",
        content: "Accurate cost estimation prevents budget overruns. Tile material costs vary widely: basic ceramic tiles start at $1-3 per square foot, mid-grade porcelain runs $3-8, and premium natural stone or designer tiles can exceed $15-30 per square foot. Beyond tile cost, factor in thin-set mortar ($25-40 per bag covering 50-100 sq ft), grout ($15-30 per bag for 100-200 sq ft), tile spacers, and sealer for natural stone. Professional installation averages $5-15 per square foot for labor, varying by region and complexity. DIY installations save labor costs but require tool rental or purchase: tile saw ($50-200), notched trowel ($10-20), tile cutter ($20-100), and leveling clips ($20-40). Total project costs typically run $7-25 per square foot for DIY, $12-40 for professional installation.",
    },
    {
        title: "Popular Tile Sizes and Their Best Uses",
        content: "Standard 12×12 tiles: The most versatile option, perfect for any room size, easy to install, widely available in countless styles. 18×18 tiles: Ideal for medium to large rooms, faster installation than 12×12, creates modern look with fewer grout lines. 24×24 large format: Best for large open spaces, contemporary aesthetic, requires expert installation and perfectly flat subfloor. 12×24 rectangular: Elongates spaces when installed lengthwise, popular for modern designs, good compromise between large and standard formats. Wood-look planks (6×24, 8×48): Mimics hardwood flooring, perfect for living rooms and bedrooms, offers water-resistant wood aesthetic. Subway tiles (3×6, 4×12): Classic wall tile for kitchens and bathrooms, timeless appeal, easy to work with on vertical surfaces. Mosaic sheets (12×12 mesh): Decorative accents and small spaces, pre-mounted for easier installation, ideal for shower floors and backsplashes.",
    },
    {
        title: "How to Measure Your Space Accurately",
        content: "Precise measurements ensure you order the right tile quantity. Start with proper tools: a 25-foot tape measure, pencil, and graph paper or smartphone calculator. For rectangular rooms, measure length and width at multiple points (rooms aren't always perfectly square). Use the largest measurements to avoid shortages. For L-shaped or irregular rooms, divide into rectangular sections, measure each separately, and add square footages together. Always measure in the same units (all feet or all inches) to avoid conversion errors. Account for permanent fixtures like kitchen islands or bathroom vanities by subtracting their footprint from total area. Round measurements up to the nearest inch. Document your measurements with sketches showing dimensions—this helps when ordering and during installation. If possible, have a second person verify measurements before ordering materials.",
    },
]

export const TILE_CALCULATOR_KEYWORDS = [
    "tile calculator",
    "how many tiles do I need",
    "tile square footage calculator",
    "flooring calculator",
    "bathroom tile calculator",
    "kitchen backsplash calculator",
    "tile estimator",
    "tile quantity calculator",
    "ceramic tile calculator",
    "porcelain tile calculator",
    "floor tile calculator",
    "wall tile calculator",
    "tile cost calculator",
    "tile waste calculator",
    "grout calculator",
]
