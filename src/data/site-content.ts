export const siteMeta = {
  siteConfig: {
    name: "X-prox Telecom",
    tagline: "Network design, setup, and maintenance for modern spaces.",
    summary:
      "A multi-page telecom platform for services, equipment visibility, and live project transparency.",
    contact: {
      address: "Sylhet, Bangladesh",
      email: "hello@xproxtelecom.com",
      phoneLabel: "+880 1712 000 000",
      phoneHref: "tel:+8801712000000",
    },
  },
  primaryRoutes: [
    {
      href: "/",
      label: "Home",
      eyebrow: "Brand entry",
      title: "Home Page",
      description:
        "The digital front door for the company, combining trust signals, service previews, and conversion paths.",
      foundationNote:
        "This route should introduce the brand quickly, then direct visitors toward services, equipment, or client access.",
      sections: [
        {
          title: "Hero and company positioning",
          description:
            "Concise value proposition with telecom-focused visual identity.",
        },
        {
          title: "Who We Are",
          description:
            "Short trust-building overview of expertise and operating focus.",
        },
        {
          title: "Services preview",
          description:
            "Three snapshots that point visitors toward the full services page.",
        },
        {
          title: "Primary calls to action",
          description:
            "Quote request, equipment view, and existing client access entry.",
        },
      ],
    },
    {
      href: "/services",
      label: "Services",
      eyebrow: "Offer structure",
      title: "Services Page",
      description:
        "A clear breakdown of the company's networking solutions by client type and deployment context.",
      foundationNote:
        "This route will later expand into detailed content blocks, use cases, and inquiry prompts.",
      sections: [
        {
          title: "Corporate and Business",
          description:
            "Enterprise support, uptime, server-room care, and managed network operations.",
        },
        {
          title: "Apartment and Standard",
          description:
            "Residential fiber, mesh Wi-Fi planning, and installation packages.",
        },
        {
          title: "Contractual",
          description:
            "Short-term, event-based, or project-phase deployments with rapid setup.",
        },
      ],
    },
    {
      href: "/equipment",
      label: "Equipment",
      eyebrow: "Catalog planning",
      title: "Equipment Page",
      description:
        "A hardware-focused route for showcasing the infrastructure behind the company's network delivery.",
      foundationNote:
        "This page should be driven by structured data so the initial mock catalog can later be replaced with API responses.",
      sections: [
        {
          title: "Core hardware",
          description:
            "Routers, switches, OLTs, and server hardware used in production setups.",
        },
        {
          title: "Connectivity layer",
          description:
            "ONUs, cables, and accessories grouped by category and purpose.",
        },
        {
          title: "Offer spotlight",
          description:
            "Promotional pricing or bundled installation packages displayed prominently.",
        },
      ],
    },
    {
      href: "/track-work",
      label: "Track Work",
      eyebrow: "Custom feature",
      title: "Track Work Page",
      description:
        "A client-facing status tool where users search by ticket ID to monitor active networking projects.",
      foundationNote:
        "This is the highest-value custom workflow in the proposal and should be structured for an eventual API-backed ticket lookup.",
      sections: [
        {
          title: "Ticket lookup",
          description:
            "Single input for ticket ID with empty, error, and success states.",
        },
        {
          title: "Status timeline",
          description:
            "Progress states: On-site, Progressing, Revision, and Success.",
        },
        {
          title: "Project snapshot",
          description:
            "Useful context such as project type, latest update, and assigned notes.",
        },
      ],
    },
    {
      href: "/contact",
      label: "Contact & Review",
      eyebrow: "Trust layer",
      title: "Contact and Review Page",
      description:
        "The credibility-focused route combining contact details, location, certificates, partner logos, and client feedback.",
      foundationNote:
        "This page should balance conversion and authority by bringing logistics, proof, and social validation into one place.",
      sections: [
        {
          title: "Location and communication",
          description: "Map area, office address, phone, and email touchpoints.",
        },
        {
          title: "Authority signals",
          description:
            "Certificates, affiliations, and partner logos displayed cleanly.",
        },
        {
          title: "Reviews and gallery",
          description:
            "Client comments, recommendations, and images from past work.",
        },
      ],
    },
  ],
};

export const homePageContent = {
  siteConfig: siteMeta.siteConfig,
  heroHighlights: [
    {
      title: "Enterprise-ready planning",
      description:
        "Structured network design, server room coordination, and uptime-focused rollout planning.",
    },
    {
      title: "Residential fiber delivery",
      description:
        "Apartment, tower, and premium home connectivity with practical mesh Wi-Fi coverage.",
    },
    {
      title: "Visible project progress",
      description:
        "Clients get a cleaner path into delivery status through ticket-based work tracking.",
    },
  ],
  serviceLanes: [
    {
      label: "Corporate",
      summary: "Business networking, maintenance, and server room care.",
    },
    {
      label: "Apartment",
      summary: "Fiber and mesh Wi-Fi setups for modern residential sites.",
    },
    {
      label: "Contractual",
      summary: "Short-term high-capacity deployments for project-based work.",
    },
  ],
  expertiseAreas: [
    "Network design and site planning",
    "Fiber rollout and structured cabling",
    "Mesh Wi-Fi and access distribution",
    "Equipment selection and deployment staging",
    "Maintenance coordination and service follow-up",
    "Ticket visibility for active client work",
  ],
  operatingModel: [
    {
      title: "Plan",
      description:
        "We map the technical scope, hardware fit, and field workflow before installation begins.",
    },
    {
      title: "Deploy",
      description:
        "Teams move from infrastructure setup to configuration with clearer service alignment.",
    },
    {
      title: "Maintain",
      description:
        "Ongoing support stays tied to equipment visibility and a trackable service process.",
    },
  ],
  serviceHighlights: [
    {
      eyebrow: "Corporate & Business",
      title: "Networks designed for uptime-critical environments",
      description:
        "For offices, campuses, and managed business spaces that need structured deployment and dependable maintenance.",
      points: [
        "Enterprise maintenance workflows",
        "Server room and backbone coordination",
        "Operational continuity support",
      ],
    },
    {
      eyebrow: "Apartment & Standard",
      title: "Reliable fiber and Wi-Fi for residential properties",
      description:
        "For apartments, towers, and premium home users who need stronger in-building connectivity.",
      points: [
        "Fiber-ready access planning",
        "Mesh Wi-Fi coverage strategies",
        "Practical setup for multi-unit environments",
      ],
    },
    {
      eyebrow: "Contractual",
      title: "Flexible deployments for fast-moving project sites",
      description:
        "For events, temporary operations, and phased projects that need high-capacity network delivery on a tighter timeline.",
      points: [
        "Short-term deployment planning",
        "Fast installation coordination",
        "Temporary but dependable network coverage",
      ],
    },
  ],
  deliveryFlow: [
    {
      step: "01",
      title: "Define the scope",
      description:
        "Start with the service context, technical needs, and the kind of environment being served.",
    },
    {
      step: "02",
      title: "Match the hardware",
      description:
        "Review the equipment stack and align infrastructure choices to the deployment plan.",
    },
    {
      step: "03",
      title: "Track delivery",
      description:
        "Monitor active work with ticket-based updates as installation and configuration move forward.",
    },
    {
      step: "04",
      title: "Access support",
      description:
        "Clients return through the portal to review status, history, and the next support action.",
    },
  ],
};

export const servicesPageContent = {
  siteConfig: siteMeta.siteConfig,
  serviceCategories: [
    {
      eyebrow: "Corporate & Business",
      title: "Enterprise networking for uptime-sensitive operations",
      description:
        "Structured support for offices, managed business environments, campuses, and operational floors where downtime disrupts real work.",
      audience:
        "Best for offices, shared workspaces, institutions, and managed commercial sites.",
      benefits: [
        "Enterprise maintenance planning and service continuity support",
        "Server room, backbone, and access-layer coordination",
        "Practical escalation paths for performance and stability issues",
      ],
      useCases: [
        "Business internet distribution across multiple departments",
        "Server room setup tied to managed switching and routing",
        "Operational networks that need stronger maintenance discipline",
      ],
    },
    {
      eyebrow: "Apartment & Standard",
      title: "Residential fiber and Wi-Fi coverage built for modern living",
      description:
        "Connectivity packages for apartment buildings, towers, gated properties, and high-end residential users who need stable coverage across real layouts.",
      audience:
        "Best for multi-unit buildings, premium homes, and apartment operators.",
      benefits: [
        "Fiber-ready setup and in-building distribution planning",
        "Mesh Wi-Fi coverage strategies for dead-zone reduction",
        "Installation patterns designed for daily residential usage",
      ],
      useCases: [
        "Apartment-wide connectivity with floor-by-floor access planning",
        "Home and villa Wi-Fi optimization with mesh coverage",
        "Residential retrofits where signal quality is inconsistent",
      ],
    },
    {
      eyebrow: "Contractual",
      title: "Fast deployment for short-term and project-phase networking",
      description:
        "Flexible network delivery for event operations, temporary work sites, and construction or project phases where time and adaptability matter most.",
      audience:
        "Best for events, temporary operations, pop-up sites, and phased projects.",
      benefits: [
        "Rapid deployment planning for changing field conditions",
        "High-capacity temporary networking with controlled scope",
        "Clearer coordination between setup, revision, and handover",
      ],
      useCases: [
        "Event connectivity with temporary backbone and access coverage",
        "Construction-phase network support for site operations",
        "Short-duration technical setups that still need dependable delivery",
      ],
    },
  ],
  deliveryPrinciples: [
    {
      title: "Scope first",
      description:
        "We start with the operating environment, capacity need, and physical layout before choosing how the network should be delivered.",
    },
    {
      title: "Hardware aligned",
      description:
        "Service design stays connected to the equipment layer so routers, switches, fiber endpoints, and accessories match the actual deployment.",
    },
    {
      title: "Trackable execution",
      description:
        "Active work is positioned to move through status-based tracking instead of leaving clients blind during installation and revision.",
    },
  ],
  inquiryOptions: [
    {
      title: "Need a service quote?",
      description:
        "Start with your environment type, expected scale, and the deployment timeline so the inquiry stays specific.",
      href: "/contact",
      label: "Request a quote",
    },
    {
      title: "Review the hardware stack",
      description:
        "Browse the equipment direction behind the service offering before moving into deployment planning.",
      href: "/equipment",
      label: "View equipment",
    },
    {
      title: "Already an active client?",
      description:
        "Return through the portal or jump into work tracking for live installations and follow-up.",
      href: "/login",
      label: "Client access",
    },
  ],
};

export const equipmentPageContent = {
  siteConfig: siteMeta.siteConfig,
  categories: [
    {
      slug: "routers",
      title: "Routers",
      description:
        "Edge routing, traffic control, and managed gateway equipment for business and residential deployments.",
    },
    {
      slug: "switches",
      title: "Switches",
      description:
        "Access and aggregation switching for floor distribution, PoE delivery, and backbone coordination.",
    },
    {
      slug: "olts",
      title: "OLTs",
      description:
        "Optical line terminal hardware for structured fiber distribution and GPON delivery.",
    },
    {
      slug: "servers",
      title: "Servers",
      description:
        "Core compute infrastructure for monitoring, service control, and internal network operations.",
    },
    {
      slug: "onus",
      title: "ONUs",
      description:
        "Optical network units used at the client edge for fiber handoff and wireless access extension.",
    },
    {
      slug: "cables",
      title: "Cables",
      description:
        "Fiber and structured cabling used for distribution, backbone runs, and last-mile installation.",
    },
    {
      slug: "accessories",
      title: "Accessories",
      description:
        "Rack, power, and installation accessories that complete the deployment environment.",
    },
  ],
  items: [
    {
      id: "router-xr5400",
      name: "XR-5400 Edge Router",
      category: "routers",
      specSummary:
        "Multi-site edge routing for managed business links and high-priority traffic shaping.",
      deploymentFit:
        "Corporate branches, managed offices, and central gateway handoff.",
      imageLabel: "XR",
      specs: ["Dual WAN uplinks", "VPN-ready", "Advanced traffic policies"],
    },
    {
      id: "router-gx320",
      name: "GX-320 Business Gateway",
      category: "routers",
      specSummary:
        "Compact gateway router for residential towers, mixed-use buildings, and smaller branch environments.",
      deploymentFit:
        "Apartment installations and small-to-mid business environments.",
      imageLabel: "GX",
      specs: ["Gigabit routing", "Low-latency handling", "Remote admin ready"],
    },
    {
      id: "switch-sw48g",
      name: "SW-48G Aggregation Switch",
      category: "switches",
      specSummary:
        "High-density switching for floor aggregation, server uplinks, and traffic consolidation.",
      deploymentFit:
        "Commercial floors, server rooms, and core distribution layers.",
      imageLabel: "SW",
      specs: ["48-port Gigabit", "VLAN support", "SFP uplink slots"],
    },
    {
      id: "switch-poe24",
      name: "POE-24 Access Switch",
      category: "switches",
      specSummary:
        "Power-over-Ethernet switching for access points, CPE hardware, and distributed endpoint devices.",
      deploymentFit:
        "Apartment access layers, Wi-Fi rollouts, and compact field cabinets.",
      imageLabel: "PO",
      specs: ["24-port PoE", "Managed switching", "Fan-efficient chassis"],
    },
    {
      id: "olt-gpon8",
      name: "GPON OLT 8P",
      category: "olts",
      specSummary:
        "Fiber distribution hardware for structured GPON service delivery across multi-unit environments.",
      deploymentFit:
        "Apartment buildings, towers, and fiber-focused residential networks.",
      imageLabel: "OL",
      specs: ["8 PON ports", "Rack-mount chassis", "Subscriber scaling support"],
    },
    {
      id: "server-nms1",
      name: "NMS-1 Monitoring Server",
      category: "servers",
      specSummary:
        "Centralized monitoring and operations server for visibility, diagnostics, and internal service control.",
      deploymentFit:
        "Core operations, service monitoring, and internal management environments.",
      imageLabel: "NM",
      specs: ["Redundant storage", "Monitoring-ready OS", "Remote access capable"],
    },
    {
      id: "onu-ax1800",
      name: "AX1800 Wi-Fi ONU",
      category: "onus",
      specSummary:
        "Fiber edge ONU with integrated Wi-Fi for high-quality indoor connectivity and cleaner handoff.",
      deploymentFit:
        "Apartments, premium homes, and small managed client spaces.",
      imageLabel: "AX",
      specs: ["Dual-band Wi-Fi", "GPON compatible", "In-home coverage support"],
    },
    {
      id: "onu-bridge1000",
      name: "Bridge-1000 ONU",
      category: "onus",
      specSummary:
        "Simple fiber handoff unit for installations that need stable access without onboard Wi-Fi complexity.",
      deploymentFit:
        "Standard residential handoff and contractor-managed client endpoints.",
      imageLabel: "BR",
      specs: ["Single-user bridge mode", "Compact enclosure", "Low-power operation"],
    },
    {
      id: "cable-fiber12",
      name: "12-Core Outdoor Fiber Cable",
      category: "cables",
      specSummary:
        "Outdoor fiber run cable for backbone extension, building-to-building links, and resilient routing.",
      deploymentFit:
        "Backbone runs, distribution paths, and exposed installation routes.",
      imageLabel: "12",
      specs: ["Outdoor-rated sheath", "12-core layout", "Long-run deployment fit"],
    },
    {
      id: "accessory-rackkit",
      name: "Rack and Power Kit",
      category: "accessories",
      specSummary:
        "Deployment accessories for structured rack mounting, cable control, and protected power organization.",
      deploymentFit:
        "Server rooms, equipment cabinets, and organized installation finishing.",
      imageLabel: "RK",
      specs: ["Rack tray set", "Power distribution kit", "Cable management bundle"],
    },
  ],
  promotionalOffer: {
    title: "Deployment bundle for new site launches",
    description:
      "A bundled starter stack for new office floors, apartment blocks, or temporary project sites that need routing, access switching, ONU handoff, and installation essentials in one procurement path.",
    highlights: [
      "Router, switch, ONU, and accessory bundle guidance",
      "Faster planning for first-time site rollouts",
      "Ideal for quote-led setup discussions and package comparisons",
    ],
  },
};
