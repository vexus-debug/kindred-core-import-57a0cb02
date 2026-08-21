/**
 * Plain-language guide for the public website settings screen.
 * Drives the section navigation, the "what am I editing" header and the
 * step-by-step tour dialog shown on every section.
 */

export type GuideStep = {
  title: string;
  body: string;
};

export type GuideSection = {
  /** Tab value used by the settings page */
  id: string;
  /** Short nav label */
  label: string;
  /** One-line nav description */
  navHint: string;
  /** Full title shown above the section */
  title: string;
  /** What this section controls, in plain words */
  blurb: string;
  /** Where the change shows up on the public website */
  appears: string;
  steps: GuideStep[];
};

export const websiteGuideSections: GuideSection[] = [
  {
    id: "templates",
    label: "Design template",
    navHint: "Pick the overall look",
    title: "Design template",
    blurb:
      "Choose a ready-made design for your public website. The template sets the layout, hero style, fonts and default colours.",
    appears: "Changes the entire look of your public site instantly.",
    steps: [
      {
        title: "1. Browse the designs",
        body: "Each card is a complete website design. The small picture shows roughly how the top of your page will look.",
      },
      {
        title: "2. Click to apply",
        body: "Clicking a template saves it straight away — there is no separate save button here.",
      },
      {
        title: "3. Colours follow the template",
        body: "Applying a template also resets your brand colours to that design's palette. You can change them afterwards in Brand colours.",
      },
    ],
  },
  {
    id: "identity",
    label: "Homepage headline",
    navHint: "Main title, tagline and background photo",
    title: "Homepage headline & main photo",
    blurb:
      "The very first thing a visitor sees: the big headline, the line under it, and the large background photo behind them.",
    appears: "Top of your homepage (the hero banner).",
    steps: [
      {
        title: "Short description",
        body: "One or two sentences describing your clinic. Used in page previews and search results.",
      },
      {
        title: "Main headline",
        body: "The biggest text on your homepage, e.g. \"Your Smile, Our Priority\".",
      },
      {
        title: "Sub-headline",
        body: "The smaller supporting line directly under the headline.",
      },
      {
        title: "Background photo",
        body: "A wide photo sitting behind the headline. Use a bright, uncluttered image at about 1920×800 pixels.",
      },
      {
        title: "Remember to save",
        body: "Text changes only go live after you press Save changes at the bottom of the section.",
      },
    ],
  },
  {
    id: "pagecontent",
    label: "Page section wording",
    navHint: "Text for each band down the page",
    title: "Wording for each part of the page",
    blurb:
      "Your site is one long scrolling page. Here you write the small heading, title and paragraph for each band on that page.",
    appears: "Hero → About → Services & booking → Reviews → Visit → Footer, in that order.",
    steps: [
      {
        title: "What is an eyebrow?",
        body: "The tiny label above a section title, e.g. \"About us\". It is optional — leave it blank to hide it.",
      },
      {
        title: "Titles and paragraphs",
        body: "Each band has a title and, where relevant, one or two paragraphs of body text.",
      },
      {
        title: "Services are automatic",
        body: "The list of treatments inside the services band comes from your Treatments page — you only edit the heading text here.",
      },
      {
        title: "Save once at the end",
        body: "One Save page wording button at the bottom saves every band on this section.",
      },
    ],
  },
  {
    id: "gallery",
    label: "Photo gallery",
    navHint: "Clinic and before/after photos",
    title: "Photo gallery",
    blurb: "Upload photos of your clinic, team or treatment results. Each photo can have a caption.",
    appears: "Gallery grid on your public site.",
    steps: [
      {
        title: "1. Add a caption first",
        body: "Type a title and short description before uploading — they are attached to the photo you upload next.",
      },
      {
        title: "2. Upload the photo",
        body: "Press Upload & add. The photo is saved immediately and appears in the grid below.",
      },
      {
        title: "3. Remove a photo",
        body: "Hover a photo and click the bin icon, then press Save gallery to confirm the removal.",
      },
    ],
  },
  {
    id: "hours",
    label: "Opening hours",
    navHint: "Days and times you are open",
    title: "Opening hours",
    blurb: "Set the times you open and close on each day, or mark a day as closed.",
    appears: "Visit section and footer of your public site; also shown when patients book.",
    steps: [
      {
        title: "Turn a day on or off",
        body: "The switch marks the day as open or closed. Switched off shows \"Closed\" to visitors.",
      },
      {
        title: "Set the times",
        body: "Use the two time boxes for opening and closing time on that day.",
      },
      {
        title: "Save",
        body: "Press Save hours when you are done — nothing changes on the site until you do.",
      },
    ],
  },
  {
    id: "appearance",
    label: "Brand colours",
    navHint: "Your primary and accent colour",
    title: "Brand colours",
    blurb:
      "Fine-tune the two main colours of your site. These override the colours that came with your template.",
    appears: "Buttons, links, highlights and headings across the public site.",
    steps: [
      {
        title: "Primary colour",
        body: "Used for main buttons like Book now, and for key headings.",
      },
      {
        title: "Accent colour",
        body: "Used for smaller highlights, badges and icons.",
      },
      {
        title: "Check the preview",
        body: "The preview strip shows how the two colours look together before you save.",
      },
      {
        title: "Go back",
        body: "Reset to template colours restores the palette from your chosen design.",
      },
    ],
  },
  {
    id: "social",
    label: "Contact & social",
    navHint: "WhatsApp, Instagram, Facebook, reviews",
    title: "Contact & social links",
    blurb: "Where patients reach you. Leave any field blank to hide that link from the site.",
    appears: "Footer, contact buttons and the floating WhatsApp button.",
    steps: [
      {
        title: "WhatsApp number",
        body: "Digits only, starting with your country code and no plus sign — e.g. 2348012345678.",
      },
      {
        title: "Social profiles",
        body: "Paste the full web address of your page, starting with https://.",
      },
      {
        title: "Google review link",
        body: "The link that opens the review box for your clinic on Google. Used by the \"Leave a review\" button.",
      },
    ],
  },
  {
    id: "trust",
    label: "Credentials",
    navHint: "Licences and certifications",
    title: "Licences & certifications",
    blurb: "List the registrations and certificates that reassure new patients.",
    appears: "Trust badges section of your public site.",
    steps: [
      {
        title: "1. Type the credential",
        body: "For example: Licensed by the Nigerian Medical & Dental Council.",
      },
      {
        title: "2. Add it to the list",
        body: "Press Add (or Enter). It appears in the list underneath.",
      },
      {
        title: "3. Save",
        body: "Press Save credentials so the list goes live.",
      },
    ],
  },
  {
    id: "booking",
    label: "Booking messages",
    navHint: "Welcome and confirmation text",
    title: "Booking messages",
    blurb: "The wording patients read before and after they book an appointment online.",
    appears: "Booking form header and the confirmation screen after booking.",
    steps: [
      {
        title: "Welcome text",
        body: "A short greeting shown above the booking form.",
      },
      {
        title: "Confirmation message",
        body: "What the patient sees immediately after submitting a booking. Set expectations, e.g. how you will confirm.",
      },
    ],
  },
];

export const getGuideSection = (id: string) =>
  websiteGuideSections.find((s) => s.id === id) ?? websiteGuideSections[0];
