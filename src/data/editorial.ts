export type EditorialImage = {
  src: string;
  alt: string;
  caption: string;
  detailCaption: string;
};
export const EDITORIAL_IMAGES: Record<string, EditorialImage> = {
  about: {
    src: "/images/company-worktable.webp",
    alt: "Monochrome editorial still life of tools for software, music and material design on a shared worktable.",
    caption: "Different tools. A common purpose.",
    detailCaption: "A study in the disciplines behind Movo.",
  },
  ecosystem: {
    src: "/images/ecosystem-structure.webp",
    alt: "Black-and-white architectural study of walkways connecting several levels.",
    caption: "Independent paths, connected structure.",
    detailCaption: "Connection gives each discipline more room to work.",
  },
  philosophy: {
    src: "/images/philosophy-stair.webp",
    alt: "A concrete staircase rising toward daylight in a monochrome architectural study.",
    caption: "Progress is made one deliberate step at a time.",
    detailCaption: "Small decisions give direction to the larger work.",
  },
  contact: {
    src: "/images/contact-conversation.webp",
    alt: "Two chairs arranged around a small table with a notebook, in an illustrative monochrome interior.",
    caption: "Make room for the next conversation.",
    detailCaption:
      "Start with the problem. We’ll work through the possibilities.",
  },
  "movo-labs": {
    src: "/images/labs-workbench.webp",
    alt: "Black-and-white editorial scene of a laptop, keyboard and paper interface sketches.",
    caption: "From requirements to something people can use.",
    detailCaption: "Planning the interface before building the system.",
  },
  "movo-studios": {
    src: "/images/studios-recording.webp",
    alt: "Black-and-white editorial scene of a studio microphone, pop filter and mixing console.",
    caption: "A record takes shape in the details.",
    detailCaption: "Listening, balancing and refining the work.",
  },
  "movo-ventures": {
    src: "/images/ventures-materials.webp",
    alt: "Editorial still life of material samples, a paper pattern and a ruler on a work surface.",
    caption: "From a material to a market.",
    detailCaption: "Exploring what an idea could become beyond the screen.",
  },
  "el-patron": {
    src: "/images/ventures-textile.webp",
    alt: "Monochrome material study of folded knit fabric; a visual direction study, not a finished El Patron product.",
    caption: "Material, form and everyday purpose.",
    detailCaption: "A textile study for a brand still taking shape.",
  },
  "future-ventures": {
    src: "/images/ventures-materials.webp",
    alt: "Unbranded materials and early paper patterns arranged for a product-development study.",
    caption: "Possibilities still taking shape.",
    detailCaption: "Before a new venture, there is a question worth exploring.",
  },
};
export const HOME_STORIES: Record<string, { headline: string; body: string }> =
  {
    "giveaway-app": {
      headline: "Be part of the first round.",
      body: "A giveaway can be more than a name in a draw. Join early access to try interactive participation, test hosting and help us discover what makes people return.",
    },
    "movo-labs": {
      headline: "Your next tool starts with the right question.",
      body: "What should your website, app or internal system make easier? Bring Labs the workflow, the obstacle or the idea. We’ll help turn it into a clear brief and working software.",
    },
    "movo-studios": {
      headline: "Give your sound a considered finish.",
      body: "A strong release brings the recording, production and visual direction together. Studios connects music production, mixing, mastering, artist identity and distribution around the work you want to put out.",
    },
    "movo-systems": {
      headline: "A shared problem can become a product.",
      body: "Atlas brings business departments into an ERP workspace. Organizations can run it for themselves; providers can deliver branded workspaces to clients. Explore the product that leads Movo Systems.",
    },
    "movo-ventures": {
      headline: "Ideas you can hold, wear and live with.",
      body: "Our interests reach beyond the screen. Ventures gives new businesses an identity of their own, beginning with El Patron, a thermal wear brand in development.",
    },
  };
export const DIRECTORY_SUMMARIES: Record<string, string> = {
  "movo-labs":
    "The client development team for websites, applications and custom systems. Start here when your organization needs technology built around a specific brief.",
  "movo-studios":
    "The creative home for artists shaping a record and its release. Connect the sound, presentation and distribution support your project needs.",
  "movo-systems":
    "The product business behind Atlas. Its focus is repeatable software, distinct from the individual projects delivered by Labs.",
  "giveaway-app":
    "A product entering beta with both participants and hosts in the feedback loop. Early access is an invitation to test and influence the experience before launch.",
  "movo-ventures":
    "The space for businesses with their own market and identity. El Patron introduces its first featured direction: thermal wear.",
};
