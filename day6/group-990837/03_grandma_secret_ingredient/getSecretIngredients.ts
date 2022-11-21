const axios = require('axios');

function getSecretIngredients(path: string) {
  axios.get(path).then((resp) => {
    for (let i = 0; i < resp.data.length; i += 1) {
      console.log(`- ${resp.data[i].name}`);
    }
  });
}

export default getSecretIngredients;
