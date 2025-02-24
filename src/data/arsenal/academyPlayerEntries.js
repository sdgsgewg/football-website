import { v4 as uuidv4 } from "uuid";

const generateSlug = (name) =>
  name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");

const academyPlayerEntries = [
  // GOALKEEPERS
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369901/tommy-setford_dsbqpa.avif",
    name: "Tommy Setford",
    firstName: "Tommy",
    lastName: "Setford",
    slug: generateSlug("Tommy Setford"),
    dob: "March 13, 2006",
    pob: "Haarlem, Netherlands",
    positions: ["Goalkeeper"],
    preferredFoot: "Right",
    squadNumber: 36,
    height: 1.85,
    weight: 73,
    nationalities: ["England"],
    marketValue: 0.9,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369898/lucas-nygaard_eme7xm.avif",
    name: "Lucas Martin Nygaard",
    firstName: "Lucas",
    lastName: "Nygaard",
    slug: generateSlug("Lucas Martin Nygaard"),
    dob: "June 26, 2006",
    pob: "Rudersal, Denmark",
    positions: ["Goalkeeper"],
    preferredFoot: "Right",
    squadNumber: 54,
    height: 1.85,
    weight: 73,
    nationalities: ["Denmark"],
    marketValue: 0.029,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369890/alexei-rojas_hagqqy.avif",
    name: "Alexei Rojas",
    firstName: "Alexei",
    lastName: "Rojas",
    slug: generateSlug("Alexei Rojas"),
    dob: "September 28, 2005",
    pob: "Essex, UK",
    positions: ["Goalkeeper"],
    preferredFoot: "Right",
    squadNumber: 62,
    height: 1.87,
    weight: 73,
    nationalities: ["Colombia"],
    marketValue: 0.3,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369892/jack-porter_b4di9r.avif",
    name: "Jack Porter",
    firstName: "Jack",
    lastName: "Porter",
    slug: generateSlug("Jack Porter"),
    dob: "July 15, 2008",
    pob: "Chelmsford, UK",
    positions: ["Goalkeeper"],
    preferredFoot: "Right",
    squadNumber: 92,
    height: 1.87,
    weight: 73,
    nationalities: ["England"],
    marketValue: 0.4,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369895/khari-ranson_asvfoo.avif",
    name: "Khari Ranson",
    firstName: "Khari",
    lastName: "Ranson",
    slug: generateSlug("Khari Ranson"),
    dob: "September 13, 2007",
    pob: "London, UK",
    positions: ["Goalkeeper"],
    preferredFoot: "Right",
    squadNumber: 93,
    height: 1.85,
    weight: 73, // unknown
    nationalities: ["England", "Nigeria"],
    marketValue: 0.5, // unknown
  },

  // DEFENDERS
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369957/zane-monlouis_yplftq.avif",
    name: "Zane Monlouis",
    firstName: "Zane",
    lastName: "Monlouis",
    slug: generateSlug("Zane Monlouis"),
    dob: "October 16, 2003",
    pob: "Lewisham, UK",
    positions: ["Centre Back"],
    preferredFoot: "Right",
    squadNumber: 50,
    height: 1.86,
    weight: 73,
    nationalities: ["Jamaica", "England"],
    marketValue: 0.6,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369935/josh-nichols_httuig.avif",
    name: "Josh Nichols",
    firstName: "Josh",
    lastName: "Nichols",
    slug: generateSlug("Josh Nichols"),
    dob: "July 26, 2006",
    pob: "Plaistow, UK",
    positions: ["Right Back", "Right Midfield", "Left Back"],
    preferredFoot: "Right",
    squadNumber: 51,
    height: 1.65,
    weight: 73,
    nationalities: ["England"],
    marketValue: 0.4,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369933/elian-quesada-thorn_epwqgy.avif",
    name: "Elian Quesada-Thorn",
    firstName: "Elian",
    lastName: "Quesada-Thorn",
    slug: generateSlug("Elian Quesada-Thorn"),
    dob: "February 2, 2005",
    pob: "London, UK",
    positions: ["Left Back"],
    preferredFoot: "Left",
    squadNumber: 59,
    height: 1.78,
    weight: 73,
    nationalities: ["Costa Rica", "England"],
    marketValue: 0.33,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369927/brayden-clarke_safjaf.avif",
    name: "Brayden Clarke",
    firstName: "Brayden",
    lastName: "Clarke",
    slug: generateSlug("Brayden Clarke"),
    dob: "July 3, 2007",
    pob: "Oldbury, UK",
    positions: ["Centre Back", "Right Back"],
    preferredFoot: "Right",
    squadNumber: 74,
    height: 1.86,
    weight: 73,
    nationalities: ["Wales"],
    marketValue: 0.012, //unknown
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369930/cam_ron-ismail_y2gyjs.avif",
    name: "Cam'ron Ismail",
    firstName: "Cam'ron",
    lastName: "Ismail",
    slug: generateSlug("Cam'ron Ismail"),
    dob: "November 22, 2006",
    pob: "London, UK",
    positions: ["Left Back", "Left Winger"],
    preferredFoot: "Left",
    squadNumber: 77,
    height: 1.84,
    weight: 73,
    nationalities: ["Egypt", "England"],
    marketValue: 0.372,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369942/max-kuczynski_hxhzjg.avif",
    name: "Max Kuczynski",
    firstName: "Max",
    lastName: "Kuczynski",
    slug: generateSlug("Max Kuczynski"),
    dob: "September 27, 2006",
    pob: "London, UK",
    positions: ["Left Back", "Centre Back"],
    preferredFoot: "Right",
    squadNumber: 78,
    height: 1.75,
    weight: 73, // unknown
    nationalities: ["Poland", "England"],
    marketValue: 0.05, // unknown
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369954/william-sweet_ok6acd.avif",
    name: "William Sweet",
    firstName: "William",
    lastName: "Sweet",
    slug: generateSlug("William Sweet"),
    dob: "October 2, 2006",
    pob: "Tooting, UK",
    positions: ["Centre Back", "Left Back"],
    preferredFoot: "Left",
    squadNumber: 81,
    height: 1.8,
    weight: 73, // unknown
    nationalities: ["Wales", "England"],
    marketValue: 0.05, // unknown
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369944/samuel-chapman_uec9tb.avif",
    name: "Samuel Chapman",
    firstName: "Samuel",
    lastName: "Chapman",
    slug: generateSlug("Samuel Chapman"),
    dob: "October 10, 2007",
    pob: "Harlow, UK",
    positions: ["Centre Back", "Left Back"],
    preferredFoot: "Left",
    squadNumber: 84,
    height: 1.8,
    weight: 73, // unknown
    nationalities: ["England"],
    marketValue: 0.05, // unknown
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369951/theo-julienne_xt4puf.avif",
    name: "Theo Julienne",
    firstName: "Theo",
    lastName: "Julienne",
    slug: generateSlug("Theo Julienne"),
    dob: "January 11, 2008",
    pob: "Hillingdon, UK",
    positions: ["Right Back", "Central Midfield", "Defensive Midfield"],
    preferredFoot: "Right",
    squadNumber: 86,
    height: 1.78,
    weight: 73, // unknown
    nationalities: ["England"],
    marketValue: 0.05, // unknown
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369938/josh-ogunnaike_vbkcdr.avif",
    name: "Josh Ogunnaike",
    firstName: "Josh",
    lastName: "Ogunnaike",
    slug: generateSlug("Josh Ogunnaike"),
    dob: "April 8, 2008",
    pob: "London, UK",
    positions: ["Left Back"],
    preferredFoot: "Left",
    squadNumber: 89,
    height: 1.8,
    weight: 73, // unknown
    nationalities: ["England"],
    marketValue: 0.05, // unknown
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369948/samuel-onyekachukwu_dv4qjf.avif",
    name: "Samuel Onyekachukwu",
    firstName: "Samuel",
    lastName: "Onyekachukwu",
    slug: generateSlug("Samuel Onyekachukwu"),
    dob: "December 14, 2007",
    pob: "London, UK",
    positions: ["Centre Back"],
    preferredFoot: "Right",
    squadNumber: 91,
    height: 1.75,
    weight: 73, // unknown
    nationalities: ["England"],
    marketValue: 0.05, // unknown
  },

  // MIDFIELDERS
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740370008/harrison-dudziak_lasr7w.avif",
    name: "Harrison Dudziak",
    firstName: "Harrison",
    lastName: "Dudziak",
    slug: generateSlug("Harrison Dudziak"),
    dob: "January 9, 2006",
    pob: "Westminster, UK",
    positions: ["Attacking Midfield", "Central Midfield"],
    preferredFoot: "Right",
    squadNumber: 39,
    height: 1.8,
    weight: 73,
    nationalities: ["England", "Poland"],
    marketValue: 0.1,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740370024/jimi-gower_r2o7k8.avif",
    name: "Jimi Gower",
    firstName: "Jimi",
    lastName: "Gower",
    slug: generateSlug("Jimi Gower"),
    dob: "October 10, 2004",
    pob: "Harold Wood, UK",
    positions: ["Central Midfield", "Attacking Midfield", "Defensive Midfield"],
    preferredFoot: "Right",
    squadNumber: 44,
    height: 1.81,
    weight: 73,
    nationalities: ["England"],
    marketValue: 0.08,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740370018/jack-henry-francis_xw9ama.avif",
    name: "Jack Henry-Francis",
    firstName: "Jack",
    lastName: "Henry-Francis",
    slug: generateSlug("Jack Henry-Francis"),
    dob: "September 23, 2003",
    pob: "London, UK",
    positions: ["Defensive Midfield", "Central Midfield"],
    preferredFoot: "Right",
    squadNumber: 53,
    height: 1.81,
    weight: 73,
    nationalities: ["Ireland", "England"],
    marketValue: 0.175,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740370034/salah-eddine-oulad-m_hand_nxj2d0.avif",
    name: "Salah-Eddine Oulad M'Hand",
    firstName: "Salah-Eddine",
    lastName: "Oulad M'Hand",
    slug: generateSlug("Salah-Eddine Oulad M'Hand"),
    dob: "August 20, 2003",
    pob: "Den Haag, Netherlands",
    positions: ["Central Midfield", "Attacking Midfield"],
    preferredFoot: "Right",
    squadNumber: 56,
    height: 1.77,
    weight: 73,
    nationalities: ["Netherlands", "Morocco"],
    marketValue: 0.4,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740370014/ismail-oulad-m_hand_mnblwc.avif",
    name: "Ismail Oulad M'Hand",
    firstName: "Ismail",
    lastName: "Oulad M'Hand",
    slug: generateSlug("Ismail Oulad M'Hand"),
    dob: "January 11, 2005",
    pob: "Den Haag, Netherlands",
    positions: ["Central Midfield", "Defensive Midfield", "Attacking Midfield"],
    preferredFoot: "Right",
    squadNumber: 57,
    height: 1.78,
    weight: 73,
    nationalities: ["Morocco", "Netherlands"],
    marketValue: 0.2,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740370031/michal-rosiak_fixmyv.avif",
    name: "Michal Rosiak",
    firstName: "Michal",
    lastName: "Rosiak",
    slug: generateSlug("Michal Rosiak"),
    dob: "October 12, 2005",
    pob: "Bialogard, Poland",
    positions: ["Defensive Midfield", "Central Midfield", "Right Back"],
    preferredFoot: "Right",
    squadNumber: 63,
    height: 1.8,
    weight: 73,
    nationalities: ["Poland", "England"],
    marketValue: 0.6,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369999/bless-akolbire_tvnpvq.avif",
    name: "Bless Akolbire",
    firstName: "Bless",
    lastName: "Akolbire",
    slug: generateSlug("Bless Akolbire"),
    dob: "January 25, 2007",
    pob: "London, UK",
    positions: ["Central Midfield", "Attacking Midfield", "Defensive Midfield"],
    preferredFoot: "Left",
    squadNumber: 70,
    height: 1.77,
    weight: 73,
    nationalities: ["England", "Ghana"],
    marketValue: 0.05, // unknown
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740370005/dan-casey_m0am5b.avif",
    name: "Dan Casey",
    firstName: "Dan",
    lastName: "Casey",
    slug: generateSlug("Dan Casey"),
    dob: "August 30, 2007",
    pob: "Edgware, UK",
    positions: ["Attacking Midfield", "Centre Forward", "Right Winger"],
    preferredFoot: "Right",
    squadNumber: 63,
    height: 1.79,
    weight: 73,
    nationalities: ["England"],
    marketValue: 0.05, // unknown
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740370028/louie-copley_uoklcb.avif",
    name: "Louie Copley",
    firstName: "Louie",
    lastName: "Copley",
    slug: generateSlug("Louie Copley"),
    dob: "October 20, 2006",
    pob: "Southend, UK",
    positions: ["Central Midfield", "Attacking Midfield"],
    preferredFoot: "Right",
    squadNumber: 75,
    height: 1.75,
    weight: 73,
    nationalities: ["England"],
    marketValue: 0.05,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740370037/zacariah-shuaib_q3y31s.avif",
    name: "Zacariah Shuaib",
    firstName: "Zacariah",
    lastName: "Shuaib",
    slug: generateSlug("Zacariah Shuaib"),
    dob: "March 17, 2007",
    pob: "London, UK",
    positions: ["Central Midfield"],
    preferredFoot: "Right",
    squadNumber: 80,
    height: 1.89,
    weight: 73,
    nationalities: ["Poland", "England"],
    marketValue: 0.05, // unknown
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740370011/ife-ibrahim_fdlbxl.avif",
    name: "Ife Ibrahim",
    firstName: "Ife",
    lastName: "Ibrahim",
    slug: generateSlug("Ife Ibrahim"),
    dob: "January 20, 2008",
    pob: "Newham, UK",
    positions: ["Defensive Midfield", "Right Back", "Centre Back"],
    preferredFoot: "Right",
    squadNumber: 85,
    height: 1.8,
    weight: 73, // unknown
    nationalities: ["England", "Nigeria"],
    marketValue: 0.05, // unknown
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740369996/alex-marciniak_nqwr9u.avif",
    name: "Alex Marciniak",
    firstName: "Alex",
    lastName: "Marciniak",
    slug: generateSlug("Alex Marciniak"),
    dob: "January 18, 2008",
    pob: "Cardiff, UK",
    positions: ["Attacking Midfield", "Central Midfield"],
    preferredFoot: "Right",
    squadNumber: 87,
    height: 1.8,
    weight: 73, // unknown
    nationalities: ["Wales", "Poland"],
    marketValue: 0.05, // unknown
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740370002/ceadach-o_neill_zckauq.avif",
    name: "Ceadach O'Neill",
    firstName: "Ceadach",
    lastName: "O'Neill",
    slug: generateSlug("Ceadach O'Neill"),
    dob: "April 10, 2008",
    pob: "Coleraine, UK",
    positions: ["Attacking Midfield", "Right Winger", "Left Winger"],
    preferredFoot: "Right",
    squadNumber: 90,
    height: 1.75,
    weight: 73,
    nationalities: ["Northern Ireland"],
    marketValue: 0.4,
  },

  // FORWARDS
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740382374/nathan-butler-oyedeji_fdpm30.avif",
    name: "Nathan Butler-Oyedeji",
    firstName: "Nathan",
    lastName: "Butler-Oyedeji",
    slug: generateSlug("Nathan Butler-Oyedeji"),
    dob: "January 4, 2003",
    pob: "London, UK",
    positions: ["Centre Forward"],
    preferredFoot: "Right",
    squadNumber: 37,
    height: 1.77,
    weight: 74,
    nationalities: ["England"],
    marketValue: 0.1,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740382365/khayon-edwards_yqkzkn.avif",
    name: "Khayon Edwards",
    firstName: "Khayon",
    lastName: "Edwards",
    slug: generateSlug("Khayon Edwards"),
    dob: "September 12, 2003",
    pob: "Islington, London, UK",
    positions: ["Centre Forward", "Attacking Midfield"],
    preferredFoot: "Right",
    squadNumber: 40,
    height: 1.8,
    weight: 75,
    nationalities: ["Jamaica", "England"],
    marketValue: 0.35,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740382438/sebastian-ferdinand_xjaknd.avif",
    name: "Sebastian Ferdinand",
    firstName: "Sebastian",
    lastName: "Sebastian Ferdinand",
    slug: generateSlug("Sebastian Ferdinand"),
    dob: "January 12, 2006",
    pob: "Watford, UK",
    positions: ["Right Winger", "Left Winger", "Right Back"],
    preferredFoot: "Right",
    squadNumber: 42,
    height: 1.75,
    weight: 65,
    nationalities: ["England"],
    marketValue: 0.05, // unknown
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740385673/romari-forde_edbbfr.avif",
    name: "Romari Forde",
    firstName: "Romari",
    lastName: "Forde",
    slug: generateSlug("Romari Forde"),
    dob: "March 26, 2006",
    pob: "Watford, UK",
    positions: ["Right Winger", "Left Winger"],
    preferredFoot: "Right",
    squadNumber: 43,
    height: 1.75,
    weight: 73,
    nationalities: ["England", "Barbados"],
    marketValue: 0.3,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740385672/ismeal-kabia_av9v4f.avif",
    name: "Ismeal Kabia",
    firstName: "Ismeal",
    lastName: "Kabia",
    slug: generateSlug("Ismeal Kabia"),
    dob: "December 10, 2005",
    pob: "Hengelo, Netherlands",
    positions: ["Right Winger", "Left Winger"],
    preferredFoot: "Right",
    squadNumber: 46,
    height: 1.75,
    weight: 73,
    nationalities: ["Netherlands", "Sierra Leone"],
    marketValue: 0.2,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740382442/osman-kamara_kyn1vo.avif",
    name: "Osman Kamara",
    firstName: "Osman",
    lastName: "Kamara",
    slug: generateSlug("Osman Kamara"),
    dob: "August 6, 2006",
    pob: "London, UK",
    positions: ["Left Winger", "Centre Forward"],
    preferredFoot: "Right",
    squadNumber: 48,
    height: 1.81,
    weight: 73,
    nationalities: ["England", "Sierra Leone"],
    marketValue: 0.5, // unknown
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740382328/charles-sagoe-jr_odqtxp.avif",
    name: "Charles Sagoe Jr",
    firstName: "Charles",
    lastName: "Sagoe Jr",
    slug: generateSlug("Charles Sagoe Jr"),
    dob: "July 24, 2004",
    pob: "Kingston-Upon-Thames, UK",
    positions: ["Left Winger", "Right Winger", "Attacking Midfield"],
    preferredFoot: "Right",
    squadNumber: 71,
    height: 1.79,
    weight: 73,
    nationalities: ["England", "Ghana"],
    marketValue: 0.6,
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740382351/jakai-fisher_du1sgb.avif",
    name: "Jakai Fisher",
    firstName: "Jakai",
    lastName: "Fisher",
    slug: generateSlug("Jakai Fisher"),
    dob: "November 27, 2006",
    pob: "Leytonstone, UK",
    positions: ["Centre Forward", "Right Winger", "Left Winger"],
    preferredFoot: "Left",
    squadNumber: 71,
    height: 1.85,
    weight: 73,
    nationalities: ["England"],
    marketValue: 0.1, // unknown
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740382431/reece-clairmont_eotmet.avif",
    name: "Reece Clairmont",
    firstName: "Reece",
    lastName: "Clairmont",
    slug: generateSlug("Reece Clairmont"),
    dob: "December 14, 2006",
    pob: "Leytonstone, UK",
    positions: ["Left Winger", "Left Back"],
    preferredFoot: "Left",
    squadNumber: 73,
    height: 1.69,
    weight: 73,
    nationalities: ["England"],
    marketValue: 0.1, // unknown
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740382337/daniel-oyetunde_bv5vck.avif",
    name: "Daniel Oyetunde",
    firstName: "Daniel",
    lastName: "Oyetunde",
    slug: generateSlug("Daniel Oyetunde"),
    dob: "November 26, 2006",
    pob: "London, UK",
    positions: ["Centre Forward", "Right Winger", "Left Winger"],
    preferredFoot: "Right",
    squadNumber: 79,
    height: 1.78,
    weight: 73,
    nationalities: ["England", "Nigeria"],
    marketValue: 0.1, // unknown
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740382325/andre-harriman-annous_ia8xdt.avif",
    name: "Andre Harriman-Annous",
    firstName: "Andre",
    lastName: "Harriman-Annous",
    slug: generateSlug("Andre Harriman-Annous"),
    dob: "December 28, 2007",
    pob: "London, UK",
    positions: ["Centre Forward", "Left Winger", "Right Winger"],
    preferredFoot: "Right",
    squadNumber: 82,
    height: 1.81,
    weight: 73,
    nationalities: ["England"],
    marketValue: 0.1, // unknown
  },
  {
    id: uuidv4(),
    image:
      "https://res.cloudinary.com/db9uk6mya/image/upload/v1740385673/louis-zecevic-john_a7fozj.avif",
    name: "Louis Zecevic-John",
    firstName: "Louis",
    lastName: "Zecevic-John",
    slug: generateSlug("Louis Zecevic-John"),
    dob: "January 20, 2008",
    pob: "London, UK",
    positions: ["Right Winger", "Right Back"],
    preferredFoot: "Right",
    squadNumber: 94,
    height: 1.75,
    weight: 73, // unknown
    nationalities: ["Serbia", "England"],
    marketValue: 0.1, // unknown
  },
];

export default academyPlayerEntries;
