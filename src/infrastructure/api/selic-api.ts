import axios from 'axios';

export const fecthSelic = async (): Promise<number> => {
  const response = await axios.get(
    'https://api.bcb.gov.br/dados/serie/bcdata.sgs.4189/dados/ultimos/1?formato=json'
  );
  const value = parseFloat(response.data[0].valor.replace(',', '.'));
  return value;
};
