// Client films get added here when ready. `src` stays null until a file exists.
export type Film = { src: string | null; poster?: string };
export const clientFilms: Film[] = [{ src: null }, { src: null }, { src: null }, { src: null }];

// Published on the Valeo Health YouTube channel (youtube.com/@valeohealth).
export type YouTubeFilm = { id: string; title: string; by: string };
export const doctorFilms: YouTubeFilm[] = [
  { id: "sBZe5Irtm8g", title: "Your complete guide to peptides", by: "Dr. Anant Vinjamoori" },
  { id: "kR2XfTsfkrg", title: "Peptides in precision practice: a clinical framework", by: "Dr. Anant Vinjamoori" },
  { id: "iqkLehsVT2I", title: "The correct way to use a peptide pen", by: "Valeo Health" },
];
