export const workTrackingStatuses = [
  "On-site",
  "Progressing",
  "Revision",
  "Success",
] as const;

export type WorkTrackingStatus = (typeof workTrackingStatuses)[number];

export type WorkTicket = {
  ticketId: string;
  clientName: string;
  projectType: string;
  serviceLane: string;
  location: string;
  status: WorkTrackingStatus;
  assignedTeam: string;
  startedAt: string;
  updatedAt: string;
  latestUpdate: string;
  notes: string[];
};

export const workTickets: WorkTicket[] = [
  {
    ticketId: "XP-24017",
    clientName: "Sylhet Commerce Tower",
    projectType: "Corporate office deployment",
    serviceLane: "Corporate & Business",
    location: "Zindabazar, Sylhet",
    status: "Progressing",
    assignedTeam: "Core Install Team A",
    startedAt: "2026-04-18T09:30:00.000Z",
    updatedAt: "2026-04-22T07:15:00.000Z",
    latestUpdate:
      "Switch staging is complete and floor-by-floor access point configuration is in progress.",
    notes: [
      "Fiber backbone already terminated in the server room.",
      "Access switching for levels 3 through 6 is now being configured.",
      "Final client walkthrough will happen after revision and acceptance testing.",
    ],
  },
  {
    ticketId: "XP-24023",
    clientName: "Lakeview Residences",
    projectType: "Apartment fiber and ONU handoff",
    serviceLane: "Apartment & Standard",
    location: "Subhanighat, Sylhet",
    status: "Revision",
    assignedTeam: "Residential Coverage Team",
    startedAt: "2026-04-16T08:00:00.000Z",
    updatedAt: "2026-04-22T04:40:00.000Z",
    latestUpdate:
      "Signal quality and floor coverage are under final QA review before handover.",
    notes: [
      "Primary GPON distribution is active across all targeted floors.",
      "Mesh signal dead-zone tuning is being checked in shared corridors.",
      "The client is waiting on final acceptance and signoff.",
    ],
  },
  {
    ticketId: "XP-24031",
    clientName: "Metro Build Expo",
    projectType: "Event networking package",
    serviceLane: "Contractual",
    location: "Amberkhana, Sylhet",
    status: "On-site",
    assignedTeam: "Rapid Deployment Crew",
    startedAt: "2026-04-22T02:30:00.000Z",
    updatedAt: "2026-04-22T06:10:00.000Z",
    latestUpdate:
      "The field team is on location and backbone positioning is underway for temporary coverage.",
    notes: [
      "Temporary rack and routing kit have reached the site.",
      "Venue access mapping is being finalized before full switch and ONU staging.",
      "The next update will confirm when active configuration begins.",
    ],
  },
  {
    ticketId: "XP-23988",
    clientName: "Northern Link Holdings",
    projectType: "Managed branch network refresh",
    serviceLane: "Corporate & Business",
    location: "Kumarpara, Sylhet",
    status: "Success",
    assignedTeam: "Infrastructure Delivery Unit",
    startedAt: "2026-04-10T06:45:00.000Z",
    updatedAt: "2026-04-20T10:30:00.000Z",
    latestUpdate:
      "Deployment has been completed and the branch handover is confirmed by the client.",
    notes: [
      "Edge routing and aggregation switching are fully active.",
      "Monitoring handoff has been transferred to the support workflow.",
      "No blocking issues remain on the completed scope.",
    ],
  },
];
