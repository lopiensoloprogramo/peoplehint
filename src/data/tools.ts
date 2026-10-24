export type ToolCategory =
  | "calculadoras"
  | "tests"
  | "relaciones"
  | "herramientas";

export interface Tool {
  id: string;
  title: string;
  description: string;
  icon: string;
  path: string;
  category: ToolCategory;
  popular?: boolean;
}

export const tools: Tool[] = [
  // ==========================================
  // CALCULADORAS
  // ==========================================

  {
    id: "porcentaje",
    title: "Calculadora de Porcentaje",
    description: "Calcula porcentajes de forma rápida y sencilla.",
    icon: "🧮",
    path: "/calculadoras/porcentaje",
    category: "calculadoras",
    popular: true,
  },

  {
    id: "edad",
    title: "Calculadora de Edad",
    description: "Calcula tu edad exacta a partir de tu fecha de nacimiento.",
    icon: "🎂",
    path: "/calculadoras/edad",
    category: "calculadoras",
    popular: true,
  },

  {
    id: "descuento",
    title: "Calculadora de Descuentos",
    description: "Calcula cuánto pagarás después de aplicar un descuento.",
    icon: "🏷️",
    path: "/calculadoras/descuento",
    category: "calculadoras",
    popular: true,
  },

  {
    id: "imc",
    title: "Calculadora de IMC",
    description: "Calcula tu índice de masa corporal.",
    icon: "⚖️",
    path: "/calculadoras/imc",
    category: "calculadoras",
  },
  
{
  id: "cts",
  title: "Calculadora de CTS",
  description: "Calcula tu Compensación por Tiempo de Servicios en Perú según tu sueldo, fecha de ingreso y régimen laboral.",
  icon: "💰",
  path: "/calculadoras/cts",
  category: "calculadoras",
  popular: true,
},


  // ==========================================
  // TESTS
  // ==========================================

  {
    id: "test-ci",
    title: "Test de Inteligencia",
    description: "Pon a prueba tu razonamiento y capacidad lógica.",
    icon: "🧠",
    path: "/test-ci",
    category: "tests",
    popular: true,
  },

  {
    id: "percepcion-social",
    title: "Percepción Social",
    description: "Descubre cómo podrías ser percibido por otras personas.",
    icon: "👥",
    path: "/percepcion-social",
    category: "tests",
  },

  // ==========================================
  // RELACIONES
  // ==========================================

  {
    id: "quien-piensa",
    title: "¿Quién piensa en ti?",
    description: "Una experiencia divertida para descubrir quién podría pensar en ti.",
    icon: "💖",
    path: "/quien-piensa",
    category: "relaciones",
    popular: true,
  },

  {
    id: "quien-observa",
    title: "¿Quién te observa?",
    description: "Descubre quién podría estar pendiente de ti.",
    icon: "👁️",
    path: "/quien-observa",
    category: "relaciones",
  },

  {
    id: "nivel-atractivo",
    title: "Nivel de Atractivo",
    description: "Descubre tu nivel de atractivo de forma divertida.",
    icon: "🧲",
    path: "/nivel-atractivo",
    category: "relaciones",
    popular: true,
  },

  {
    id: "detector-infidelidad",
    title: "Detector de Infidelidad",
    description: "Una herramienta de entretenimiento relacionada con las relaciones.",
    icon: "🔍",
    path: "/detector-infidelidad",
    category: "relaciones",
    popular: true,
  },

  // ==========================================
  // HERRAMIENTAS
  // ==========================================

  {
    id: "insta-vistos",
    title: "¿Quién ve tu perfil de Instagram?",
    description: "Una experiencia de entretenimiento relacionada con Instagram.",
    icon: "📱",
    path: "/insta-vistos",
    category: "herramientas",
    popular: true,
  },
];