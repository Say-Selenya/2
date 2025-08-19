// Mock data for Zäe Selenya portal
export const mockSubscriptionsData = {
  frikilandia: {
    count: 342,
    recentSubscribers: [
      { email: "otaku_lover@email.com", timestamp: "2025-01-15T10:30:00Z" },
      { email: "gamer_girl@email.com", timestamp: "2025-01-15T09:15:00Z" },
      { email: "manga_fan@email.com", timestamp: "2025-01-14T18:45:00Z" }
    ]
  },
  tragedias: {
    count: 187,
    recentSubscribers: [
      { email: "dark_soul@email.com", timestamp: "2025-01-15T11:20:00Z" },
      { email: "gothic_art@email.com", timestamp: "2025-01-15T08:30:00Z" },
      { email: "mystery_lover@email.com", timestamp: "2025-01-14T20:10:00Z" }
    ]
  },
  humor_kawaii: {
    count: 521,
    recentSubscribers: [
      { email: "kawaii_chan@email.com", timestamp: "2025-01-15T12:00:00Z" },
      { email: "cute_art@email.com", timestamp: "2025-01-15T10:45:00Z" },
      { email: "colorful_world@email.com", timestamp: "2025-01-14T16:30:00Z" }
    ]
  }
};

export const mockPortalSections = [
  {
    id: "frikilandia",
    title: "Frikilandia",
    emoji: "💙",
    color: "cosmic-blue",
    bgColor: "#b7fbff",
    textColor: "#1f47e6",
    description: "Fandom, cultura pop y cosas divertidas",
    features: [
      "Análisis de anime y manga",
      "Reviews de videojuegos",
      "Teorías de series y películas",
      "Arte fan y fanfiction"
    ]
  },
  {
    id: "tragedias",
    title: "Tragedias de Pesadillas", 
    emoji: "🖤",
    color: "cosmic-purple",
    bgColor: "#d987ff",
    textColor: "#470024",
    description: "Arte oscuro, simbólico y misterioso",
    features: [
      "Ilustraciones góticas",
      "Poesía melancólica",
      "Fotografía conceptual",
      "Relatos de terror"
    ]
  },
  {
    id: "humor_kawaii",
    title: "Humor + Arte + Kawaii",
    emoji: "💚", 
    color: "cosmic-mint",
    bgColor: "#78d692",
    textColor: "#a1a500",
    description: "Tierno, colorido y creativo",
    features: [
      "Ilustraciones kawaii",
      "Cómics divertidos",
      "Arte en acuarela",
      "DIY creativos"
    ]
  }
];

// Mock functions to simulate API calls
export const mockSubscribe = async (sectionId, email) => {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Simulate success/error
  if (!email.includes('@')) {
    throw new Error('Email inválido');
  }
  
  // Update mock data
  mockSubscriptionsData[sectionId].count += 1;
  mockSubscriptionsData[sectionId].recentSubscribers.unshift({
    email,
    timestamp: new Date().toISOString()
  });
  
  return {
    success: true,
    message: '¡Bienvenido al portal mágico!',
    newCount: mockSubscriptionsData[sectionId].count
  };
};

export const mockGetSubscriptionStats = async () => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockSubscriptionsData;
};