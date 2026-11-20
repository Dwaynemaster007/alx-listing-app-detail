// constants/index.ts
import { PropertyProps, ReviewProps } from "@/interfaces";

export const HERO_BG_IMAGE = "/assets/images/listing-1.png";

export const FILTER_LABELS = [
  "Top Villa",
  "Self Checkin",
  "Luxury Villa",
  "Pet Friendly",
  "Free Parking",
  "Beachfront",
];

const RAW_LISTINGS: Omit<PropertyProps, "id" | "description">[] = [
    {
        name: "Villa Ocean Breeze",
        address: {
            state: "Seminyak",
            city: "Bali",
            country: "Indonesia"
        },
        rating: 4.89,
        category: ["Luxury Villa", "Pool", "Free Parking",],
        price: 3200,
        offers: {
            bed: "3",
            shower: "3",
            occupants: "4-6"
        },
        image: "/assets/images/listing-1.png",
        discount: ""
    },
    {
        name: "Mountain Escape Chalet",
        address: {
            state: "Aspen",
            city: "Colorado",
            country: "USA"
        },
        rating: 4.70,
        category: ["Mountain View", "Fireplace", "Self Checkin"],
        price: 1800,
        offers: {
            bed: "4",
            shower: "2",
            occupants: "5-7"
        },
        image: "/assets/images/listing-2.png",
        discount: "30"
    },
    {
        name: "Cozy Desert Retreat",
        address: {
            state: "Palm Springs",
            city: "California",
            country: "USA"
        },
        rating: 4.92,
        category: ["Desert View", "Pet Friendly", "Self Checkin"],
        price: 1500,
        offers: {
            bed: "2",
            shower: "1",
            occupants: "2-3"
        },
        image: "/assets/images/listing-3.png",
        discount: ""
    },
    {
        name: "City Lights Penthouse",
        address: {
            state: "New York",
            city: "New York",
            country: "USA"
        },
        rating: 4.85,
        category: ["City View", "Free WiFi", "24h Checkin"],
        price: 4500,
        offers: {
            bed: "2",
            shower: "2",
            occupants: "2-4"
        },
        image: "/assets/images/listing-4.png",
        discount: "15"
    },
    {
        name: "Riverside Cabin",
        address: {
            state: "Queenstown",
            city: "Otago",
            country: "New Zealand"
        },
        rating: 4.77,
        category: ["Riverside", "Private Dock", "Free Kayaks"],
        price: 2800,
        offers: {
            bed: "3",
            shower: "2",
            occupants: "4-6"
        },
        image: "/assets/images/listing-5.png",
        discount: "20"
    },
    {
        name: "Modern Beachfront Villa",
        address: {
            state: "Sidemen",
            city: "Bali",
            country: "Indonesia"
        },
        rating: 4.95,
        category: ["Beachfront", "Private Pool", "Chef Service"],
        price: 5000,
        offers: {
            bed: "5",
            shower: "4",
            occupants: "8-10"
        },
        image: "/assets/images/listing-6.png",
        discount: ""
    },
    {
        name: "Lakeside Chalet",
        address: {
            state: "Banff",
            city: "Alberta",
            country: "Canada"
        },
        rating: 4.65,
        category: ["Lakeside", "Mountain View", "Hiking Trails"],
        price: 2300,
        offers: {
            bed: "3",
            shower: "3",
            occupants: "4-5"
        },
        image: "/assets/images/listing-7.png",
        discount: "10"
    },
    {
        name: "Tropical Garden Villa",
        address: {
            state: "Koh Samui",
            city: "Surat Thani",
            country: "Thailand"
        },
        rating: 4.80,
        category: ["Garden", "Free Parking", "Self Checkin"],
        price: 2750,
        offers: {
            bed: "3",
            shower: "3",
            occupants: "5-6"
        },
        image: "/assets/images/listing-8.png",
        discount: "25"
    },
    {
        name: "Urban Loft",
        address: {
            state: "Berlin",
            city: "Berlin",
            country: "Germany"
        },
        rating: 4.60,
        category: ["City Center", "Free WiFi", "24h Checkin"],
        price: 2000,
        offers: {
            bed: "2",
            shower: "1",
            occupants: "2-3"
        },
        image: "/assets/images/listing-9.png",
        discount: ""
    },
    {
        name: "Secluded Forest Cabin",
        address: {
            state: "Whistler",
            city: "British Columbia",
            country: "Canada"
        },
        rating: 4.72,
        category: ["Secluded", "Hot Tub", "Self Checkin"],
        price: 2600,
        offers: {
            bed: "4",
            shower: "2",
            occupants: "5-7"
        },
        image: "/assets/images/listing-10.png",
        discount: "40"
    },
    {
        name: "Cliffside Villa",
        address: {
            state: "Amalfi",
            city: "Salerno",
            country: "Italy"
        },
        rating: 4.93,
        category: ["Cliffside", "Infinity Pool", "Sea View"],
        price: 6000,
        offers: {
            bed: "4",
            shower: "4",
            occupants: "6-8"
        },
        image: "/assets/images/listing-11.png",
        discount: "50"
    },
    {
        name: "Coastal Escape Villa",
        address: {
            state: "Noosa",
            city: "Queensland",
            country: "Australia"
        },
        rating: 4.83,
        category: ["Beachfront", "Pet Friendly", "Free Parking"],
        price: 3400,
        offers: {
            bed: "3",
            shower: "3",
            occupants: "4-6"
        },
        image: "/assets/images/listing-12.png",
        discount: ""
    },
    {
        name: "Historical Villa",
        address: {
            state: "Florence",
            city: "Tuscany",
            country: "Italy"
        },
        rating: 4.67,
        category: ["Historical", "Free Breakfast", "Self Checkin"],
        price: 2700,
        offers: {
            bed: "2",
            shower: "2",
            occupants: "2-4"
        },
        image: "/assets/images/listing-13.png",
        discount: "35"
    },
    {
        name: "Downtown Apartment",
        address: {
            state: "Tokyo",
            city: "Tokyo",
            country: "Japan"
        },
        rating: 4.81,
        category: ["City Center", "Free WiFi", "Public Transport"],
        price: 2200,
        offers: {
            bed: "1",
            shower: "1",
            occupants: "2"
        },
        image: "/assets/images/listing-14.png",
        discount: ""
    },
    {
        name: "Luxury Safari Lodge",
        address: {
            state: "Serengeti",
            city: "Mara",
            country: "Tanzania"
        },
        rating: 4.97,
        category: ["Safari", "Guided Tours", "Free Breakfast"],
        price: 4500,
        offers: {
            bed: "4",
            shower: "4",
            occupants: "6-8"
        },
        image: "/assets/images/listing-1.png",
        discount: "20"
    },
    {
        name: "Countryside Cottage",
        address: {
            state: "Cotswolds",
            city: "Gloucestershire",
            country: "UK"
        },
        rating: 4.58,
        category: ["Countryside", "Fireplace", "Self Checkin"],
        price: 1800,
        offers: {
            bed: "2",
            shower: "1",
            occupants: "2-4"
        },
        image: "/assets/images/listing-2.png",
        discount: "25"
    },
    {
        name: "Riverfront Mansion",
        address: {
            state: "Paris",
            city: "Île-de-France",
            country: "France"
        },
        rating: 4.86,
        category: ["Riverfront", "Private Garden", "Self Checkin"],
        price: 5000,
        offers: {
            bed: "4",
            shower: "3",
            occupants: "6-8"
        },
        image: "/assets/images/listing-3.png",
        discount: "30"
    },
    {
        name: "Ski Chalet",
        address: {
            state: "Zermatt",
            city: "Valais",
            country: "Switzerland"
        },
        rating: 4.75,
        category: ["Mountain View", "Ski Access", "Fireplace"],
        price: 3900,
        offers: {
            bed: "3",
            shower: "3",
            occupants: "4-5"
        },
        image: "/assets/images/listing-4.png",
        discount: ""
    },
    {
        name: "Island Paradise Villa",
        address: {
            state: "Mahe",
            city: "Victoria",
            country: "Seychelles"
        },
        rating: 4.98,
        category: ["Beachfront", "Private Pool", "Chef Service"],
        price: 6500,
        offers: {
            bed: "5",
            shower: "5",
            occupants: "8-10"
        },
        image: "/assets/images/listing-5.png",
        discount: "60"
    },
    {
        name: "Clifftop Retreat",
        address: {
            state: "Cape Town",
            city: "Western Cape",
            country: "South Africa"
        },
        rating: 4.78,
        category: ["Ocean View", "Private Pool", "Self Checkin"],
        price: 4100,
        offers: {
            bed: "3",
            shower: "3",
            occupants: "4-5"
        },
        image: "/assets/images/listing-6.png",
        discount: ""
    }
];

// Give every listing an id (used in /property/[id]) and a short description
export const PROPERTYLISTINGSAMPLE: PropertyProps[] = RAW_LISTINGS.map((listing, index) => ({
  ...listing,
  id: index + 1,
  description: `${listing.name} is a ${listing.category[0].toLowerCase()} stay in ${listing.address.state}, ${listing.address.city}. It sleeps ${listing.offers.occupants} guests with ${listing.offers.bed} bedrooms and ${listing.offers.shower} bathrooms.`,
}));

const REVIEWERS = ["Amara N.", "Lucas P.", "Sipho D.", "Mei L.", "Grace O."];
const COMMENTS = [
  "Spotless and exactly like the photos. We'd stay again.",
  "Great location and a very responsive host.",
  "Lovely place, though the Wi-Fi was a little slow.",
  "Perfect for a family weekend away.",
  "Beautiful views and very comfortable beds.",
];

export const reviewsFor = (id: number): ReviewProps[] =>
  Array.from({ length: 2 + (id % 2) }, (_, i) => ({
    name: REVIEWERS[(id + i) % REVIEWERS.length],
    rating: 4 + ((id + i) % 2),
    comment: COMMENTS[(id * 3 + i) % COMMENTS.length],
  }));
