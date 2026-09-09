export const INTENTS = {
  labs: {
    label: "Build software",
    email: "projects@movotechnologies.com",
    action: "Send Project Brief",
  },
  studios: {
    label: "Work with Movo Studios",
    email: "bookings@movotechnologies.com",
    action: "Send Booking Enquiry",
  },
  release: {
    label: "Plan a music release",
    email: "releases@movotechnologies.com",
    action: "Plan a Release",
  },
  atlas: {
    label: "Explore Atlas / Request a Demo",
    email: "sales@movotechnologies.com",
    action: "Request a Demo",
  },
  "el-patron": {
    label: "Explore El Patron",
    email: "sales@movotechnologies.com",
    action: "Send Product Enquiry",
  },
  encapsul: {
    label: "Join Encapsul early access",
    email: "support@movotechnologies.com",
    action: "Register Interest",
  },
  support: {
    label: "Get help with an existing product or service",
    email: "support@movotechnologies.com",
    action: "Request Support",
  },
  general: {
    label: "Something else",
    email: "info@movotechnologies.com",
    action: "Send Enquiry",
  },
  whitelist: {
    label: "Join Giveaway App early access",
    email: "support@movotechnologies.com",
    action: "Join the Whitelist",
  },
} as const;
export type Intent = keyof typeof INTENTS;
export type FormField = {
  name: string;
  label: string;
  type?: string;
  options?: string[];
  optional?: boolean;
};
export function fieldsFor(intent: Intent): FormField[] {
  const common: FormField[] = [
    {
      name: "name",
      label:
        intent === "studios" || intent === "release"
          ? "Artist / Client name"
          : "Name",
    },
    { name: "email", label: "Email", type: "email" },
  ];
  if (intent === "whitelist")
    return [
      ...common,
      { name: "username", label: "Username / display name" },
      { name: "country", label: "Country" },
      {
        name: "role",
        label: "How would you primarily take part?",
        options: [
          "Creator",
          "Brand",
          "Community manager",
          "Giveaway participant",
          "Other",
        ],
      },
      {
        name: "host",
        label: "Would you like to host test giveaways?",
        options: ["Yes", "No"],
      },
      { name: "discord", label: "Discord username", optional: true },
      { name: "source", label: "How did you hear about us?", optional: true },
    ];
  if (intent === "labs")
    return [
      ...common,
      { name: "organization", label: "Organization", optional: true },
      { name: "phone", label: "Phone", type: "tel" },
      { name: "project", label: "What do you want to build?" },
      {
        name: "service",
        label: "Project type",
        options: ["Website", "Web App", "Mobile App", "Software", "Other"],
      },
      { name: "message", label: "Brief project description", type: "textarea" },
      { name: "timeline", label: "Desired timeline" },
      { name: "budget", label: "Budget range", optional: true },
      {
        name: "attachment",
        label: "Attachment (PDF, TXT, PNG or JPG; up to 5 MB)",
        type: "file",
        optional: true,
      },
    ];
  if (intent === "encapsul")
    return [
      ...common,
      {
        name: "interest",
        label: "I’m interested in",
        options: ["Sending", "Travelling", "Both"],
      },
      {
        name: "beta",
        label: "Would you also like to test the beta?",
        options: ["Yes", "No"],
      },
      {
        name: "message",
        label: "Anything you would like us to know?",
        type: "textarea",
        optional: true,
      },
    ];
  if (intent === "studios" || intent === "release")
    return [
      ...common,
      { name: "phone", label: "Phone", type: "tel", optional: true },
      {
        name: "service",
        label: "Service required",
        options: [
          "Production",
          "Mixing",
          "Mastering",
          "Branding",
          "Distribution",
          "Multiple services",
        ],
      },
      {
        name: "tracks",
        label: "Number of tracks, where relevant",
        type: "number",
        optional: true,
      },
      {
        name: "releaseDate",
        label: "Target release date",
        type: "date",
        optional: true,
      },
      { name: "message", label: "Project description", type: "textarea" },
      {
        name: "links",
        label: "Link to demos / files",
        type: "url",
        optional: true,
      },
    ];
  return [
    ...common,
    { name: "organization", label: "Organization", optional: true },
    {
      name: "message",
      label:
        intent === "atlas"
          ? "Tell us about your organization and what you would like to see in a demo"
          : "What are you trying to move forward?",
      type: "textarea",
    },
  ];
}
