import {
  CodeXmlIcon,
  DraftingCompassIcon,
  GraduationCapIcon,
  LightbulbIcon,
  StarIcon,
  UserStar,
  WarehouseIcon,
} from "lucide-react"

import type { Experience } from "../types/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "feathermark",
    companyName: "Feathermark.io",
    companyLogo: "https://assets.jaydingulley.me/images/companies/feathermark.svg",
    companyWebsite: "https://feathermark.io",
    positions: [
      {
        id: "2",
        title: "Director of Technology",
        employmentPeriod: {
          start: "05.2023",
        },
        employmentType: "Part-time",
        icon: <CodeXmlIcon />,
        description: `- Created Feathermark Brand Identity.
- Created the Feathermark Design System to standardize design practices and accelerate development.

In-house Project: [Feathermark Website](https://www.feathermark.io)
- Designed the UI/UX for Feathermark Website, delivering a seamless experience.
- Developed online Demo scheduling to streamline bookings.
- Designed a scroll-interactive layers section for main topics Feathermark focuses on.

Client Project: [NOFA Jeep Army](https://nofajeeparmy.org)
- Build and maintain NOFA Jeepy Army's website with Next.js, integrating Stripe for donations.
- Develop a system that allows registrations from hikers, tracking donations in for a real-time view, small prize system for hikers (Hike-A-Thon Event)
- Develop and maintain the Sponsor management web application for board members to manage displayed sponsors on the website.`,
        skills: [
          "Next.js",
          "Strapi",
          "Better Auth",
          "Supabase",
          "Docker",
          "NGINX",
          "Amazon Web Services",
          "Stripe",
          "UI/UX Design",
          "UX Writing",
          "Design System",
          "Brand Design",
          "Search Engine Optimization",
        ],
      },
      {
        id: "1",
        title: "Founder",
        employmentPeriod: {
          start: "05.2023",
        },
        employmentType: "Part-time",
        icon: <LightbulbIcon />,
        skills: ["Business Ownership", "Business Law", "Business Tax"],
      },
    ],
    isCurrentEmployer: true,
  },
  {
    id: "hotshots",
    companyName: "HotShots",
    companyLogo: "https://assets.jaydingulley.me/images/companies/hotshots.svg",
    positions: [
      {
        id: "1",
        title: "Assistant Manager",
        employmentPeriod: {
          start: "8.2025",
          end: "9.2025",
        },
        employmentType: "Full-time",
        icon: <UserStar />,
        description: `As Assistant Manager, I was frontline help to staff, managed money, opens / closes, marketing, and promos.
- Trainee for a month at Hotshots in St. Louis before moving to Decatur, IL to manage a franchise location. 
- Truck orders and inventory checks, daily deposits and staff tip payouts, promo callouts. 
- Customer Service: Establishing a helpful presence, handling complaints, gauging guest engagement. 
- Frontline Help for Staff: Stepping in when staff needs me, handing food out, doing dishes, making drinks.`,
        skills: [
          "Customer Service",
          "Management",
          "Inventory",
          "Closing / Opening Store",
        ],
      },
    ],
  },
  {
    id: "totalqualitylogistics",
    companyName: "Total Quality Logistics (TQL)",
    companyLogo: "https://assets.jaydingulley.me/images/companies/tql.svg",
    positions: [
      {
        id: "2",
        title: "Warehousing Associate",
        employmentPeriod: {
          start: "2023",
          end: "2023",
        },
        employmentType: "Full-time",
        description: `- Working with sales teams to find warehouses for their clients needs.
- Sourcing warehouses that support different commodities (e.g. Dry, Cold, HazMat).
- Cross-Docking / Transloads.`,
        icon: <WarehouseIcon />,
        skills: [
          "Warehousing",
          "Commodity Types",
          "Cross-Docking & Transload Operations",
        ],
      },
      {
        id: "1",
        title: "Logistics Account Executive (LAE)",
        employmentPeriod: {
          start: "2023",
          end: "2023",
        },
        employmentType: "Full-time",
        description: `- Prospecting and outbound calls, providing dispatch for trucks, supply chain management for clients.
- Posing as the main point of contact for incoming calls for help from trucks and clients. 
- Learning different modes of transportation: Domestic, Cross-Border, International, Drayage, etc.)
- Urgent help on problems with trucks over the road: Transloads and finding new trucks due to breakdowns.
- Warehousing: Finding warehouses of different types to store commodities for clients.`,
        icon: <StarIcon />,
        skills: ["Sales", "Customer Service", "Supply Chain", "Modes of Transportation", "Dispatching"],
      },
    ],
  },
//   {
//     id: "freelance",
//     companyName: "Freelance",
//     positions: [
//       {
//         id: "2",
//         title: "Full-stack Developer",
//         employmentPeriod: {
//           start: "2018",
//           end: "2020",
//         },
//         employmentType: "Part-time",
//         description: `- Built an order management website with real-time delivery tracking.
// - Developed an e-commerce site for bird’s nest products.
// - Created a map to display monitoring station data.
// - Designed a customizable WordPress landing page.`,
//         icon: <CodeXmlIcon />,
//         skills: [
//           "Laravel",
//           "React",
//           "Express.js",
//           "Socket.IO",
//           "MongoDB",
//           "Firebase",
//           "WordPress",
//           "Docker",
//           "NGINX",
//         ],
//       },
//       {
//         id: "1",
//         title: "Graphic & UI/UX Designer",
//         employmentPeriod: {
//           start: "2018",
//           end: "2019",
//         },
//         employmentType: "Part-time",
//         description: "Designed logos, posters, ads, and UI.",
//         icon: <DraftingCompassIcon />,
//         skills: [
//           "Creativity",
//           "UI/UX Design",
//           "Graphic Design",
//           "Sketch",
//           "Adobe Photoshop",
//           "Adobe Illustrator",
//         ],
//       },
//     ],
//   },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "1",
        title: "Columbia High School - Columbia, IL",
        employmentPeriod: {
          start: "08.2018",
          end: "05.2022",
        },
        icon: <GraduationCapIcon />,
        description: `- Student of the Columbia High School.
- Computer class covering topics such as Microsoft Office, HTML / CSS / JavaScript.
- Played on the Columbia High School Hockey Team.`,
        skills: [
          "Welding",
          "CAD",
          "Microsoft Office",
          "HTML",
          "CSS",
          "JavaScript",
        ],
      },
    ],
  },
]
