export interface Params {
  method: string;
  payload: any;
}

export const callApi = async (endpoint: string, params: Params) => {
  const { method, payload } = params;
  return ['EUR', 'PLN', 'GEL', 'DKK', 'CZK', 'GBP', 'SEK', 'USD', 'RUB'];
};
