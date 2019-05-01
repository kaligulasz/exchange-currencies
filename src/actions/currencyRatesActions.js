export const UPDATE_CURRENCY_RATES_REQUESTED = 'UPDATE_CURRENCY_RATES_REQUESTED';
export const UPDATE_CURRENCY_RATES_FAILED = 'UPDATE_CURRENCY_RATES_FAILED';
export const UPDATE_CURRENCY_RATES_SUCCESSFUL = 'UPDATE_CURRENCY_RATES_SUCCESSFUL';
export const UPDATE_CURRENCY_RATES_CANCELLED = 'UPDATE_CURRENCY_RATES_CANCELLED';
export const CANCEL_UPDATE_CURRENCY_RATES = 'CANCEL_UPDATE_CURRENCY_RATES';

export const requestUpdateCurrencyRates = () => ({
  type: UPDATE_CURRENCY_RATES_REQUESTED,
});

export const cancelUpdateCurrencyRates = () => ({
  type: CANCEL_UPDATE_CURRENCY_RATES,
});

export const updateCurrencyRatesFailed = () => ({
  type: UPDATE_CURRENCY_RATES_FAILED,
});

export const updateCurrencyRatesSuccessful = payload => ({
  type: UPDATE_CURRENCY_RATES_SUCCESSFUL,
  payload,
});

export const updateCurrencyRatesCancelled = () => ({
  type: UPDATE_CURRENCY_RATES_CANCELLED,
});
