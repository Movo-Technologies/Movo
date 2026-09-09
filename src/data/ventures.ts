import type { IconName } from "@/lib/icons";
import { PRODUCT_LINKS } from "@/data/products";
export type Venture = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  focus: string;
  icon: IconName;
  status: "Active" | "Building" | "Future" | "Early Access / Beta";
  paragraphs?: string[];
  capabilities?: [string, string][];
  capabilitiesHeading?: string;
  primary: [string, string];
  secondary?: [string, string];
  email?: string;
};
export const VENTURES: Venture[] = [
  {
    slug: "movo-labs",
    name: "Movo Labs",
    focus: "Technology & Product Development",
    icon: "flask",
    status: "Active",
    tagline: "We build the technology behind ambitious ideas.",
    description:
      "Movo Labs works with businesses, founders and organizations to design and build digital products that solve real problems.",
    paragraphs: [
      "From a company’s first website to custom platforms, internal systems, mobile applications and full software products, Labs turns requirements into functional technology.",
      "We are interested in more than simply shipping code. We work to understand what needs to work, why it needs to work, and build the most appropriate system around it.",
    ],
    capabilities: [
      [
        "Websites",
        "Corporate websites, product websites, campaign platforms, portals and digital experiences built around clarity, performance, usability and business objectives.",
      ],
      [
        "Web Applications",
        "Interactive platforms designed around specific workflows, users and business requirements.",
      ],
      [
        "Mobile Applications",
        "Mobile experiences developed around a defined product, service or operational need.",
      ],
      [
        "Custom Software",
        "Software for processes that cannot be adequately handled by generic off-the-shelf tools.",
      ],
      [
        "Internal Business Systems",
        "Dashboards, administrative systems, workflow tools, portals, reporting systems and operational software.",
      ],
      [
        "Product Development",
        "Support from concept and requirements through interface, engineering, testing and deployment.",
      ],
    ],
    capabilitiesHeading: "What we can build.",
    primary: ["Start a Project", "/contact?intent=labs"],
    secondary: ["Talk to Movo Labs", "mailto:labs@movotechnologies.com"],
    email: "labs@movotechnologies.com",
  },
  {
    slug: "movo-studios",
    name: "Movo Studios",
    focus: "Music & Creative Services",
    icon: "clapperboard",
    status: "Active",
    tagline: "Sound is only part of the story.",
    description:
      "Movo Studios works with artists and creative projects across the process of creating, refining, packaging and releasing music.",
    paragraphs: [
      "We help creators move from an idea or recording toward a body of work that sounds intentional, looks intentional and reaches audiences as a complete product.",
    ],
    capabilities: [
      [
        "Music Production",
        "Production built around the identity of the artist and the direction of the record, from developing an idea to shaping arrangements, sound and overall production direction.",
      ],
      [
        "Mixing",
        "Turning individual recordings and production elements into a balanced, cohesive record.",
      ],
      [
        "Mastering",
        "Preparing the final mix for release with attention to translation, consistency and playback across platforms and environments.",
      ],
      [
        "Branding & Identity Curation",
        "Visual direction, project identity, release aesthetics and broader artist presentation that help the work look, feel and communicate with intention.",
      ],
      [
        "Music Distribution",
        "Supporting artists through preparing and distributing releases to major digital streaming platforms. Tell us about your release so we can discuss the support required.",
      ],
    ],
    capabilitiesHeading: "From the first idea to the release.",
    primary: ["Book a Project", "/contact?intent=studios"],
    secondary: ["Plan a Release", "/contact?intent=release"],
    email: "studio@movotechnologies.com",
  },
  {
    slug: "movo-systems",
    name: "Movo Systems",
    focus: "Software Products & Systems",
    icon: "network",
    status: "Building",
    tagline: "Software designed to keep working.",
    description:
      "Movo Systems develops software products designed around recurring operational and business problems.",
    paragraphs: [
      "Where Movo Labs builds solutions for individual clients and projects, Movo Systems focuses on products that can serve many organizations through a repeatable software platform.",
      "Atlas leads this work: an ERP platform that connects day-to-day business operations and gives providers a foundation for serving their own clients.",
    ],
    primary: ["Explore Atlas", "/ecosystem/atlas"],
    secondary: ["Request a Demo", "/contact?intent=atlas"],
  },
  {
    slug: "giveaway-app",
    name: "Giveaway App",
    focus: "Interactive Giveaways",
    icon: "rocket",
    status: "Early Access / Beta",
    tagline: "Giveaways people actually participate in.",
    description:
      "Giveaway App is exploring a more interactive way to run online giveaways. Participation goes beyond a simple entry and random draw, with experiences designed to engage participants and be useful for hosts.",
    paragraphs: [
      "The product is currently entering early access. We are inviting an initial group of users to test the platform, participate in test giveaways, host giveaways, report friction and help shape the experience before public launch.",
    ],
    primary: ["Join the Whitelist", "/ecosystem/giveaway-app#whitelist"],
    secondary: [
      "I’m Interested in Hosting Giveaways",
      "/ecosystem/giveaway-app?host=yes#whitelist",
    ],
    email: "support@movotechnologies.com",
  },
  {
    slug: "movo-ventures",
    name: "Movo Ventures",
    focus: "Products & New Ventures",
    icon: "rocket",
    status: "Building",
    tagline: "Some ideas deserve to become companies.",
    description:
      "Movo Ventures develops businesses that extend beyond traditional software and services.",
    paragraphs: [
      "It gives Movo room to explore products, markets and ideas that deserve an identity and operating model of their own.",
      "Its current directions include El Patron, an emerging thermal wear brand, and Encapsul, an early-stage air-delivery concept built around unused baggage capacity on scheduled flights.",
    ],
    capabilities: [
      [
        "El Patron",
        "A thermal wear brand approaching cold-weather clothing through utility, material and identity.",
      ],
      [
        "Encapsul",
        "A planned Nigerian delivery service exploring how confirmed spare baggage capacity can help urgent parcels move between cities.",
      ],
    ],
    capabilitiesHeading: "Two ventures taking shape.",
    primary: ["Explore Encapsul", "/ecosystem/encapsul"],
    secondary: ["Explore El Patron", "/ecosystem/el-patron"],
  },
  {
    slug: "atlas",
    name: "Atlas",
    focus: "A Movo Systems Product",
    icon: "network",
    status: "Building",
    tagline: "Your operations. One connected workspace.",
    description:
      "Atlas is an open-core ERP platform for organizations and software providers, bringing finance, sales, inventory and people operations into a shared system.",
    paragraphs: [
      "Teams can connect the records and workflows that usually sit across separate departments. Providers can use the same foundation to deliver branded, separate workspaces for their clients.",
      "Explore the product site for a closer look, or request a demonstration around the way your organization works.",
    ],
    capabilities: [
      [
        "Run your organization",
        "Bring departments together around business records, reporting and workflows, with modules spanning finance, CRM, procurement, projects and more.",
      ],
      [
        "Serve your clients",
        "Offer an ERP under your own brand, with a provider portal to manage client workspaces, branding and module access.",
      ],
    ],
    capabilitiesHeading: "Two ways to put Atlas to work.",
    primary: ["Request a Demo", "/contact?intent=atlas"],
    secondary: ["Visit Atlas", PRODUCT_LINKS.atlas],
    email: "support@movotechnologies.com",
  },
  {
    slug: "el-patron",
    name: "El Patron",
    focus: "A Movo Venture",
    icon: "infinity",
    status: "Building",
    tagline: "Designed for warmth. Built with character.",
    description:
      "El Patron is a thermal wear brand being developed under Movo Ventures.",
    paragraphs: [
      "It approaches cold-weather clothing as both utility and identity, creating pieces intended to provide warmth without treating functional clothing as an afterthought.",
      "An emerging brand with its own identity and a place in the wider Movo ecosystem. Contact us for product and commercial enquiries as the venture develops.",
    ],
    primary: ["Product Enquiries", "/contact?intent=el-patron"],
    secondary: ["Explore Movo Ventures", "/ecosystem/movo-ventures"],
  },
  {
    slug: "encapsul",
    name: "Encapsul",
    focus: "Air Delivery & Logistics",
    icon: "plane",
    status: "Early Access / Beta",
    tagline: "Empty kilos. Full potential.",
    description:
      "Encapsul is exploring a new way to move urgent items between Nigerian cities by making better use of confirmed spare baggage capacity on scheduled passenger flights.",
    paragraphs: [
      "Travellers can pledge baggage allowance they do not need and earn from capacity confirmed with the airline. Encapsul handles parcels separately, so travellers do not carry or manage another person’s item.",
      "For senders, the service is being designed around screened, tracked delivery for documents, small business parts and other items that cannot wait. The planned first corridor is Lagos to Abuja.",
      "Encapsul is still in development. Launch depends on the required approvals, airline agreements and a successful pilot.",
    ],
    capabilities: [
      [
        "For travellers",
        "Pledge unused allowance while keeping the trip itself unchanged. Earnings are tied to spare capacity confirmed with the airline.",
      ],
      [
        "For senders",
        "Access a service being designed for screened, tracked delivery between cities on scheduled passenger flights.",
      ],
      [
        "The first corridor",
        "Begin with a planned Lagos-to-Abuja pilot, learn from one route and expand only after the model is proven.",
      ],
    ],
    capabilitiesHeading: "One flight. Two ways to get more.",
    primary: ["Join Early Access", "/contact?intent=encapsul"],
    secondary: ["Explore Movo Ventures", "/ecosystem/movo-ventures"],
    email: "support@movotechnologies.com",
  },
  {
    slug: "future-ventures",
    name: "Future Ventures",
    focus: "What Comes Next",
    icon: "infinity",
    status: "Future",
    tagline: "What comes next is already in motion.",
    description:
      "The ecosystem is never finished. This space is reserved for ideas still taking shape, as Movo explores what to build next.",
    primary: ["Explore Movo Ventures", "/ecosystem/movo-ventures"],
  },
];
export const ECOSYSTEM = VENTURES.slice(0, 5);
export function getVentureBySlug(slug: string) {
  return VENTURES.find((v) => v.slug === slug);
}
