export const fillArray = <T>(arr: T[], length: number): T[] => {
  return Array.from({ length }, () => arr).flat()
}
