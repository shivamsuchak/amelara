// Curated stock image URLs from Unsplash for placeholder product images
// These will be replaced with real product images later

export const squishyImages: Record<string, string> = {
  "dreamy-cloud-squishy": "https://images.unsplash.com/photo-1563396983906-b3795482a59a?w=600&h=600&fit=crop",
  "rainbow-cat-squishy": "https://images.unsplash.com/photo-1535930749574-1399327ce78f?w=600&h=600&fit=crop",
  "galaxy-donut-squishy": "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&h=600&fit=crop",
  "jumbo-strawberry-squishy": "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=600&h=600&fit=crop",
  "mini-animal-set": "https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?w=600&h=600&fit=crop",
  "fidget-pop-cube": "https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?w=600&h=600&fit=crop",
};

export const cosmeticsImages: Record<string, string> = {
  "velvet-glow-serum": "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=600&fit=crop",
  "rose-petal-lip-gloss": "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=600&h=600&fit=crop",
  "silk-finish-foundation": "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&h=600&fit=crop",
  "midnight-bloom-perfume": "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=600&fit=crop",
  "cloud-cream-moisturizer": "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=600&h=600&fit=crop",
  "luminous-setting-spray": "https://images.unsplash.com/photo-1571781926291-c477ebfd024b?w=600&h=600&fit=crop",
};

export function getPlaceholderImage(slug: string, category: string): string {
  if (category === "squishy") return squishyImages[slug] || squishyImages["dreamy-cloud-squishy"];
  return cosmeticsImages[slug] || cosmeticsImages["velvet-glow-serum"];
}
