import { callApi, Params } from '../utils/callApi';

const endpoint = '/payments';

class CurrencyServices {
  static callApi(params: Params): Promise<any> {
    return callApi(endpoint, params);
  }

  static async fetchAllCurrencies(): Promise<string[]> {
    const response = await this.callApi({ method: 'fetchAllCurrencies', payload: {} });
    return response;
  }
}

export default CurrencyServices;
