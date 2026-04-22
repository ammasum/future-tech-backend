export const contactOverview = {
  office: {
    name: "X-prox Telecom Ltd.",
    address: "Sylhet, Bangladesh",
    mapLabel: "Main office and deployment coordination point",
    phone: "+880 1712 000 000",
    phoneHref: "tel:+8801712000000",
    email: "hello@xproxtelecom.com",
  },
  inquiryTopics: [
    "Corporate & Business",
    "Apartment & Standard",
    "Contractual",
    "Equipment bundle",
    "General consultation",
  ],
  certificates: [
    "Registered infrastructure operations profile",
    "Deployment safety and quality review checklist",
    "Service handover and acceptance documentation workflow",
  ],
  partners: [
    "Fiber Access Alliance",
    "Metro Business Facilities Group",
    "GPON Distribution Network Partner",
    "Structured Cabling Supply Network",
  ],
  reviews: [
    {
      client: "Sylhet Commerce Tower",
      role: "Corporate deployment client",
      quote:
        "The team kept the rollout visible and the handover process felt more structured than our previous network refresh projects.",
    },
    {
      client: "Lakeview Residences",
      role: "Apartment operations team",
      quote:
        "Coverage tuning and final QA updates were clear enough for our management team to follow without technical confusion.",
    },
    {
      client: "Metro Build Expo",
      role: "Contractual event client",
      quote:
        "Temporary deployment was handled quickly and the staged updates made on-site coordination much easier.",
    },
  ],
  gallery: [
    "Server room rack preparation and structured cabling finish",
    "Apartment corridor distribution and fiber endpoint staging",
    "Temporary field deployment for event networking coverage",
    "Client handover review after final revision and QA",
  ],
};

export type ContactInquiry = {
  id: string;
  name: string;
  email: string;
  phone: string;
  topic: string;
  message: string;
  createdAt: string;
};

export const contactInquiries: ContactInquiry[] = [];
