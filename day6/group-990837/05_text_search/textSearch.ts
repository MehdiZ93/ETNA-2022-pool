export function getSecretRegex() {
  const reg = /[a-zA-Z]{8,}[s]/m;
  return reg;
}
export function getSecretWord(regex: RegExp, text: string) {
  const res = text.match(regex);
  return res[0];
}
