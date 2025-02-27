import { v4 as uuidv4 } from "uuid";

const generateSlug = (name) =>
  name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

const womenPlayerEntries = [
  // GOALKEEPERS
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369648/manuela-zinsberger_rrho2g.avif",
    name: "Manuela Zinsberger",
    firstName: "Manuela",
    lastName: "Zinsberger",
    slug: generateSlug("Manuela Zinsberger"),
    dob: "October 19, 1995",
    pob: "Stockerau, Austria",
    positions: ["Goalkeeper"],
    preferredFoot: "Right",
    squadNumber: 1,
    height: 1.77,
    weight: 70,
    nationalities: ["Austria"],
    marketValue: 0.07,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369646/daphne-van-domselaar_gn69h7.avif",
    name: "Daphne van Domselaar",
    firstName: "Daphne",
    lastName: "van Domselaar",
    slug: generateSlug("Daphne van Domselaar"),
    dob: "March 6, 2000",
    pob: "Beverwijk, Netherlands",
    positions: ["Goalkeeper"],
    preferredFoot: "Right",
    squadNumber: 14,
    height: 1.76,
    weight: 59,
    nationalities: ["Netherlands"],
    marketValue: 0.13,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369650/naomi-williams_e42ogs.avif",
    name: "Naomi Williams",
    firstName: "Naomi",
    lastName: "Williams",
    slug: generateSlug("Naomi Williams"),
    dob: "October 24, 2004",
    pob: "London, England",
    positions: ["Goalkeeper"],
    preferredFoot: "Right",
    squadNumber: 40,
    height: 1.75,
    weight: 69,
    nationalities: ["England"],
    marketValue: 0.375,
  },

  // DEFENDERS
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369669/emily-fox_nqjngg.avif",
    name: "Emily Fox",
    firstName: "Emily",
    lastName: "Fox",
    slug: generateSlug("Emily Fox"),
    dob: "July 5, 1998",
    pob: "Ashburn, Virginia, United States",
    positions: ["Right Back"],
    preferredFoot: "Right",
    squadNumber: 2,
    height: 1.65,
    weight: 56,
    nationalities: ["USA"],
    marketValue: 0.22,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369685/lotte-wubben-moy_ufjf7j.avif",
    name: "Lotte Wubben-Moy",
    firstName: "Lotte",
    lastName: "Wubben-Moy",
    slug: generateSlug("Lotte Wubben-Moy"),
    dob: "January 11, 1999",
    pob: "London, England",
    positions: ["Centre Back"],
    preferredFoot: "Right",
    squadNumber: 3,
    height: 1.78,
    weight: 67,
    nationalities: ["England"],
    marketValue: 0.175,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369679/laia-codina_wcevuy.avif",
    name: "Laia Codina",
    firstName: "Laia",
    lastName: "Codina",
    slug: generateSlug("Laia Codina"),
    dob: "January 22, 2000",
    pob: "Campllong, Spain",
    positions: ["Centre Back"],
    preferredFoot: "Right",
    squadNumber: 5,
    height: 1.7,
    weight: 55,
    nationalities: ["Spain"],
    marketValue: 0.13,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369682/leah-williamson_b3y5bk.avif",
    name: "Leah Williamson",
    firstName: "Leah",
    lastName: "Williamson",
    slug: generateSlug("Leah Williamson"),
    dob: "March 29, 1997",
    pob: "Milton Keynes, England",
    positions: ["Centre Back", "Central Midfield"],
    preferredFoot: "Right",
    squadNumber: 6,
    height: 1.7,
    weight: 63,
    nationalities: ["England"],
    marketValue: 0.27,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369687/steph-catley_g4t6gg.avif",
    name: "Steph Catley",
    firstName: "Steph",
    lastName: "Catley",
    slug: generateSlug("Steph Catley"),
    dob: "January 26, 1994",
    pob: "Melbourne, Australia",
    positions: ["Left Back", "Centre Back"],
    preferredFoot: "Left",
    squadNumber: 12,
    height: 1.71,
    weight: 57,
    nationalities: ["Australia"],
    marketValue: 0.125,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369674/katie-mccabe_asaa3e.avif",
    name: "Katie McCabe",
    firstName: "Katie",
    lastName: "McCabe",
    slug: generateSlug("Katie McCabe"),
    dob: "September 21, 1995",
    pob: "Kilnamanagh, Ireland",
    positions: ["Left Back", "Right Back", "Left Winger", "Right Winger"],
    preferredFoot: "Left",
    squadNumber: 15,
    height: 1.65,
    weight: 56,
    nationalities: ["Ireland"],
    marketValue: 0.225,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369672/jenna-nighswonger_cicsem.avif",
    name: "Jenna Nighswonger",
    firstName: "Jenna",
    lastName: "Nighswonger",
    slug: generateSlug("Jenna Nighswonger"),
    dob: "November 28, 2000",
    pob: "California, United States",
    positions: ["Left Back"],
    preferredFoot: "Left",
    squadNumber: 22,
    height: 1.63,
    weight: 60,
    nationalities: ["USA"],
    marketValue: 0.096,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369667/amanda-ilestedt_bi7xpw.avif",
    name: "Amanda Ilestedt",
    firstName: "Amanda",
    lastName: "Ilestedt",
    slug: generateSlug("Amanda Ilestedt"),
    dob: "January 17, 1993",
    pob: "Sölvesborg, Sweden",
    positions: ["Centre Back", "Right Back"],
    preferredFoot: "Right",
    squadNumber: 28,
    height: 1.78,
    weight: 65,
    nationalities: ["Sweden"],
    marketValue: 0.15,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369677/katie-reid_tmh2ka.avif",
    name: "Katie Reid",
    firstName: "Katie",
    lastName: "Reid",
    slug: generateSlug("Katie Reid"),
    dob: "September 25, 2006",
    pob: "England",
    positions: ["Centre Back"],
    preferredFoot: "Right",
    squadNumber: 62,
    height: 1.75,
    weight: 62,
    nationalities: ["England"],
    marketValue: 0.02,
  },

  // MIDFIELDERS
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369749/mariona-caldentey_qefmao.avif",
    name: "Mariona Caldentey",
    firstName: "Mariona",
    lastName: "Caldentey",
    slug: generateSlug("Mariona Caldentey"),
    dob: "March 19, 1996",
    pob: "Felanitx, Spain",
    positions: ["Attacking Midfield"],
    preferredFoot: "Right",
    squadNumber: 8,
    height: 1.64,
    weight: 62,
    nationalities: ["Spain"],
    marketValue: 0.3,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369742/kim-little_jxpsid.avif",
    name: "Kim Little",
    firstName: "Kim",
    lastName: "Little",
    slug: generateSlug("Kim Little"),
    dob: "June 29, 1990",
    pob: "Mintlaw, Scotland",
    positions: ["Defensive Midfield", "Central Midfield", "Attacking Midfield"],
    preferredFoot: "Right",
    squadNumber: 10,
    height: 1.63,
    weight: 60,
    nationalities: ["Scotland"],
    marketValue: 0.1,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369739/frida-maanum_klos6o.avif",
    name: "Frida Maanum",
    firstName: "Frida",
    lastName: "Maanum",
    slug: generateSlug("Frida Maanum"),
    dob: "July 16, 1999",
    pob: "Norway",
    positions: ["Central Midfield", "Attacking Midfield"],
    preferredFoot: "Right",
    squadNumber: 12,
    height: 1.73,
    weight: 58,
    nationalities: ["Norway"],
    marketValue: 0.185,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369746/lia-walti_xfqdkg.avif",
    name: "Lia Walti",
    firstName: "Lia",
    lastName: "Walti",
    slug: generateSlug("Lia Walti"),
    dob: "April 19, 1993",
    pob: "Langnau im Emmental, Switzerland",
    positions: ["Defensive Midfield", "Central Midfield"],
    preferredFoot: "Right",
    squadNumber: 13,
    height: 1.67,
    weight: 56,
    nationalities: ["Switzerland"],
    marketValue: 0.175,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369752/victoria-pelova_nhmex8.avif",
    name: "Victoria Pelova",
    firstName: "Victoria",
    lastName: "Pelova",
    slug: generateSlug("Victoria Pelova"),
    dob: "June 3, 1999",
    pob: "Delft, Netherlands",
    positions: ["Attacking Midfield", "Central Midfield", "Right Winger"],
    preferredFoot: "Right",
    squadNumber: 21,
    height: 1.63,
    weight: 55,
    nationalities: ["Netherlands"],
    marketValue: 0.15,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369744/kyra-cooney-cross_sffqce.avif",
    name: "Kyra Cooney-Cross",
    firstName: "Kyra",
    lastName: "Cooney-Cross",
    slug: generateSlug("Kyra Cooney-Cross"),
    dob: "February 15, 2002",
    pob: "Herston, Queensland, Australia",
    positions: ["Defensive Midfield", "Central Midfield"],
    preferredFoot: "Right",
    squadNumber: 32,
    height: 1.65,
    weight: 55,
    nationalities: ["Australia"],
    marketValue: 0.13,
  },

  // FORWARDS
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369776/beth-mead_umk68s.avif",
    name: "Beth Mead",
    firstName: "Beth",
    lastName: "Mead",
    slug: generateSlug("Beth Mead"),
    dob: "May 9, 1995",
    pob: "Whitby, England",
    positions: ["Right Winger"],
    preferredFoot: "Right",
    squadNumber: 9,
    height: 1.63,
    weight: 58,
    nationalities: ["England"],
    marketValue: 0.28,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369784/rosa-kafaji_nu67b1.avif",
    name: "Rosa Kafaji",
    firstName: "Rosa",
    lastName: "Kafaji",
    slug: generateSlug("Rosa Kafaji"),
    dob: "July 5, 2003",
    pob: "Solna, Sweden",
    positions: ["Left Winger", "Attacking Midfield", "Central Midfield"],
    preferredFoot: "Right",
    squadNumber: 16,
    height: 1.69,
    weight: 63,
    nationalities: ["Sweden", "Iraq"],
    marketValue: 0.15,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369782/lina-hurtig_stxwfc.avif",
    name: "Lina Hurtig",
    firstName: "Lina",
    lastName: "Hurtig",
    slug: generateSlug("Lina Hurtig"),
    dob: "September 5, 1995",
    pob: "Avesta, Sweden",
    positions: ["Left Winger"],
    preferredFoot: "Right",
    squadNumber: 17,
    height: 1.78,
    weight: 51,
    nationalities: ["Sweden"],
    marketValue: 0.075,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369779/caitlin-foord_vypgst.avif",
    name: "Caitlin Foord",
    firstName: "Caitlin",
    lastName: "Foord",
    slug: generateSlug("Caitlin Foord"),
    dob: "November 11, 1994",
    pob: "Mt Warrigal, Australia",
    positions: ["Left Winger", "Left Midfielder", "Right Winger"],
    preferredFoot: "Right",
    squadNumber: 19,
    height: 1.69,
    weight: 59,
    nationalities: ["Australia"],
    marketValue: 0.22,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369774/alessia-russo_vfx9ks.avif",
    name: "Alessia Russo",
    firstName: "Alessia",
    lastName: "Russo",
    slug: generateSlug("Alessia Russo"),
    dob: "February 8, 1999",
    pob: "Maidstone, England",
    positions: ["Centre Forward", "Attacking Midfield", "Left Winger"],
    preferredFoot: "Right",
    squadNumber: 23,
    height: 1.73,
    weight: 64,
    nationalities: ["England"],
    marketValue: 0.375,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369787/stina-blackstenius_oj1bbk.avif",
    name: "Stina Blackstenius",
    firstName: "Stina",
    lastName: "Blackstenius",
    slug: generateSlug("Stina Blackstenius"),
    dob: "February 5, 1996",
    pob: "Vadstena, Sweden",
    positions: ["Centre Forward"],
    preferredFoot: "Right",
    squadNumber: 25,
    height: 1.74,
    weight: 72,
    nationalities: ["Sweden"],
    marketValue: 0.21,
  },
];

export default womenPlayerEntries;
