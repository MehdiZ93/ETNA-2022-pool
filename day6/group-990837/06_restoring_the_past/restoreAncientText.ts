import { readFileSync, writeFile } from 'fs';

const axios = require('axios');

async function restoreAncientText(ancienTxtUrl: string, vocabularyUrl: string, newTxtUrl: string) {
  const file = readFileSync(ancienTxtUrl, 'utf-8').replace(/\r?\n|\r/g, '');
  axios.get(vocabularyUrl).then((resp) => {
    const ancienTxtTab = file.split(' ');
    const newTxtTab: string[] = [];
    let word: string = '';
    for (let i = 0; i < ancienTxtTab.length; i += 1) {
      word = ancienTxtTab[i];
      if (word.includes('*')) {
        const reg = new RegExp(word.replace(/\*/g, '.'));
        [word] = resp.data.match(reg);
      }
      newTxtTab.push(word);
    }
    writeFile(newTxtUrl, newTxtTab.join(' '), (err) => {
      if (err) {
        console.log(err);
      }
    });
  });
}

export default restoreAncientText;
