export default function searchSong(sheetbook: any[], song: string) {
  const findSongs = [];

  for (let i = 0; i < sheetbook.length; i += 1) {
    if (sheetbook[i].sheet.toLowerCase().startsWith(song.toLowerCase())) {
      findSongs.push(sheetbook[i]);
    }
  }
  return findSongs;
}
