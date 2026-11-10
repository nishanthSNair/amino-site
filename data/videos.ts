// Add real client and doctor films here. `src` stays null until a file exists.
export type Film = { src: string | null; poster?: string };

export const clientFilms: Film[] = [{ src: null }, { src: null }, { src: null }, { src: null }];
export const doctorFilms: (Film & { doctor: number })[] = [
  { doctor: 0, src: null },
  { doctor: 1, src: null },
  { doctor: 2, src: null },
];
