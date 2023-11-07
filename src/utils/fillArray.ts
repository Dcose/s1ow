const fillArray = <T>(arr: T[], length: number): T[] => {
  const result: T[] = []
  while (result.length < length) {
    result.push(...arr)
  }
  return result.concat(result)
}

export default fillArray
