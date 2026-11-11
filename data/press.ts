// Coverage of Valeo Health. Each link was checked on 2026-11-11.
export type PressItem = { outlet: string; date?: string; headline: string; url: string };

// Articles where our doctors are quoted. Quotes are copied from the articles.
export type FeaturedPress = PressItem & { quote: string; who: string; role: string };
export const featuredPress: FeaturedPress[] = [
  {
    outlet: "Gulf News",
    date: "May 2026",
    headline: "Inside the peptide craze: UAE experts explain the risky injectable wellness trend",
    url: "https://gulfnews.com/lifestyle/decoding-the-peptide-craze-uae-experts-explain-the-risky-injectable-wellness-trend-and-what-science-says-1.500535828",
    quote: "The question is not whether peptides can work. They clearly can. The question is which newer peptides deserve broader clinical use, and what evidence we need to guide that responsibly.",
    who: "Dr. Anant Vinjamoori",
    role: "Chief Medical Officer, Valeo Health",
  },
  {
    outlet: "GRAZIA Middle East",
    date: "May 2026",
    headline: "Beyond aesthetics: the science of a total life reset",
    url: "https://graziamagazine.com/me/articles/the-science-of-a-total-life-reset-grazia-aesthetics-live/",
    quote: "People are more aware of what their data means. They want to know how they can improve their sleep, their strength, their health.",
    who: "Dr. Mahmoud Musa",
    role: "Valeo Health, speaking at GRAZIA Aesthetics Live",
  },
];
export const press: PressItem[] = [
  { outlet: "Zawya", date: "Sep 2026", headline: "Valeo Health redefines GLP-1 weight management with a digital doctor-led care model", url: "https://www.zawya.com/en/press-release/companies-news/valeo-health-redefines-glp-1-weight-management-with-a-digital-doctor-led-care-model-1202435" },
  { outlet: "Emirates 24|7", date: "Jul 2026", headline: "Valeo Health expands longevity and new mother care offering, backed by Clemenceau Medical Center Dubai", url: "https://www.emirates247.com/health/valeo-health-expands-longevity-and-new-mother-care-offering-backed-by-clemenceau-medical-center-dubai/3931" },
  { outlet: "My Startup World", date: "Jun 2026", headline: "Valeo Health hits 1 million orders on 5th anniversary", url: "https://mystartupworld.com/valeo-health-hits-1-million-orders-on-5th-anniversary/" },
  { outlet: "Wamda", date: "Mar 2025", headline: "Valeo Health raises $12 million Series B, bringing total investment to $20 million", url: "https://www.wamda.com/2025/03/valeo-health-raises-12-million-series-b-bringing-total-investment-20-million" },
  { outlet: "Gulf Economist", headline: "How Valeo Health founders used first-hand experience to find a gap in the health-tech sector", url: "https://gulfeconomist.ae/valeo-health/" },
];
