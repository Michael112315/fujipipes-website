export const img = {
  hero: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&w=1800&q=85",
  city: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
  water: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=900&q=80",
  agriculture: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",
  house: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=900&q=80",
  infrastructure: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80",
  office: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=85",
  factory: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1200&q=85",
  hdpe: "https://placehold.co/900x600/0b3b78/ffffff?text=HDPE+Pipes",
  upvc: "https://placehold.co/900x600/e85b20/ffffff?text=uPVC+Pipes",
  ppr: "https://placehold.co/900x600/08a986/ffffff?text=PPR+Pipes",
  sanitary: "https://placehold.co/900x600/777777/ffffff?text=Sanitary+Pipes",
  drainage: "https://placehold.co/900x600/222222/ffffff?text=Drainage+Pipes",
  electrical: "https://placehold.co/900x600/e66a18/ffffff?text=Electrical+Pipes",
  tanks: "https://placehold.co/900x600/0876e8/ffffff?text=Water+Tanks",
  roofing: "https://placehold.co/900x600/758493/ffffff?text=Roofing",
};

export const products = [
  ["HDPE Pipes & Fittings", "HDPE", "Durable. Strong. Reliable.", img.hdpe],
  ["uPVC Pipes & Fittings", "uPVC", "Versatile for various applications.", img.upvc],
  ["PPR Pipes & Fittings", "PPR", "Leak-proof. Long-lasting.", img.ppr],
  ["Sanitary Pipes & Fittings", "Sanitary", "Safe and hygienic plumbing solutions.", img.sanitary],
  ["Drainage Pipes", "Drainage", "Efficient flow. Stronger infrastructure.", img.drainage],
  ["Electrical Pipes & Fittings", "Electrical", "Safe solutions for electrical systems.", img.electrical],
  ["Tanks & Storage Solutions", "Tanks", "Reliable water storage for every need.", img.tanks],
  ["Roofing Solutions", "Roofing", "Durable. Weather-resistant.", img.roofing],
] as const;

export const solutions = [
  ["Water Supply", "💧", "Reliable piping solutions for safe and efficient distribution of potable water.", img.water],
  ["Drainage & Sewerage", "〰", "Durable systems for flood control, drainage and wastewater management.", img.drainage],
  ["Agriculture & Irrigation", "🍃", "Efficient and long-lasting piping solutions for modern farming.", img.agriculture],
  ["Electrical & Telecom", "⚡", "Protective piping systems for electrical and telecommunication networks.", img.electrical],
  ["Infrastructure", "🏢", "Trusted solutions for roads, bridges and public infrastructure projects.", img.infrastructure],
  ["Residential & Commercial", "⌂", "High-quality piping and tanks for homes, commercial buildings and developments.", img.house],
  ["Industrial Applications", "🏭", "Strong and reliable systems for industrial requirements.", img.factory],
  ["Tanks & Storage Solutions", "🛢️", "PE and stainless-steel tank solutions for water and chemical storage.", img.tanks],
] as const;

export const projects = [
  ["Bulk Water Supply Project", "Water Supply", "Bacolod City, Negros Occidental", img.water, "HDPE pipes for reliable and efficient water distribution."],
  ["Urban Drainage Improvement", "Drainage & Sewerage", "Cebu City, Cebu", img.drainage, "HDPE drainage pipes for flood control and stormwater management."],
  ["Irrigation System Project", "Agriculture", "San Carlos City, Negros Occidental", img.agriculture, "HDPE pipes for efficient agricultural water supply."],
  ["Electrical Conduit Installation", "Infrastructure", "Iloilo City, Iloilo", img.electrical, "uPVC electrical pipes for a safer electrical system."],
  ["Infrastructure Development", "Infrastructure", "Manila, Metro Manila", img.infrastructure, "HDPE and uPVC pipes for public infrastructure projects."],
  ["Residential Housing Project", "Residential", "Davao City, Davao del Sur", img.house, "PPR and uPVC pipes for modern residential plumbing."],
  ["Industrial Piping System", "Industrial", "Batangas", img.factory, "HDPE and PPR pipes for industrial applications."],
  ["Water Storage Solution", "Tanks & Storage", "Bohol", img.tanks, "PE tanks for community water storage and distribution."],
  ["Coastal Protection Project", "Infrastructure", "Tacloban City, Leyte", img.infrastructure, "HDPE pipes for coastal and marine applications."],
  ["Commercial Establishment", "Commercial", "Cebu City, Cebu", img.city, "Complete piping solutions for commercial buildings."],
] as const;

export const dealers = [
  ["ABC Construction Supply", "Cebu City, Cebu", "(032) 123 4567"],
  ["Ramos Plumbing Center", "Iloilo City, Iloilo", "(033) 321 7654"],
  ["Negros Builders Depot", "Bacolod City, Negros Occidental", "(034) 703 8899"],
  ["Mindanao Hardware & Supply", "Davao City, Davao del Sur", "(082) 234 5678"],
  ["Luzon Industrial Supply", "Quezon City, Metro Manila", "(02) 8456 7890"],
] as const;
