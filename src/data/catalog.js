export const categories = [
  { id: 'all', label: 'Everything', icon: '✦' },
  { id: 'mobile', label: 'Mobiles', icon: '◉' },
  { id: 'laptop', label: 'Laptops', icon: '▣' },
  { id: 'audio', label: 'Audio', icon: '◌' },
]

export const products = [
  { id: 1, name: 'Nova Phone Pro', category: 'mobile', price: 899, rating: 4.9, badge: 'New drop', color: 'violet', description: 'A pocket-sized creative studio with a cinematic display and a camera made for golden hour.' },
  { id: 2, name: 'Orbit Book Air', category: 'laptop', price: 1249, rating: 4.8, badge: 'Editor’s pick', color: 'blue', description: 'Featherlight power for ideas that deserve more than a desk.' },
  { id: 3, name: 'Pulse Max', category: 'audio', price: 249, rating: 4.7, badge: 'Best seller', color: 'coral', description: 'Immersive, all-day sound tuned to make ordinary walks feel like scenes.' },
  { id: 4, name: 'Nova Phone Mini', category: 'mobile', price: 599, rating: 4.6, badge: 'Compact', color: 'mint', description: 'Beautifully capable, deliberately small, and ready for every spontaneous plan.' },
  { id: 5, name: 'Orbit Studio', category: 'laptop', price: 1799, rating: 5, badge: 'Pro choice', color: 'amber', description: 'A seriously quick canvas for your most ambitious work.' },
  { id: 6, name: 'Wave Buds', category: 'audio', price: 149, rating: 4.5, badge: 'Everyday favorite', color: 'pink', description: 'Tiny, comfortable earbuds with unexpectedly expansive sound.' },
]

export const formatPrice = (price) =>
  new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 }).format(price)
