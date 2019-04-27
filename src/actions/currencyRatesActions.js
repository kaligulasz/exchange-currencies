export const UPDATE_RATES = 'UPDATE_RATES';
export const UPDATE_CURRENCY_RATES_REQUESTED = 'UPDATE_CURRENCY_RATES_REQUESTED';
export const UPDATE_CURRENCY_RATES_FAILED = 'UPDATE_CURRENCY_RATES_FAILED';
export const UPDATE_CURRENCY_RATES_SUCCESSFUL = 'UPDATE_CURRENCY_RATES_SUCCESSFUL';
export const UPDATE_CURRENCY_RATES_CANCELLED = 'UPDATE_CURRENCY_RATES_CANCELLED';
export const CANCEL_UPDATE_CURRENCY_RATES = 'CANCEL_UPDATE_CURRENCY_RATES';

export const updateRates = rates => ({
  type: UPDATE_RATES,
  rates,
});

export const updateCurrencyRatesFailed = () => ({
  type: UPDATE_CURRENCY_RATES_FAILED,
});

export const updateCurrencyRatesSuccessful = () => ({
  type: UPDATE_CURRENCY_RATES_SUCCESSFUL,
});

export const updateCurrencyRatesCancelled = () => ({
  type: UPDATE_CURRENCY_RATES_CANCELLED,
});
