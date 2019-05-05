import {
  requestUpdateCurrencyRates,
  UPDATE_CURRENCY_RATES_REQUESTED,
  cancelUpdateCurrencyRates,
  CANCEL_UPDATE_CURRENCY_RATES,
  updateCurrencyRatesFailed,
  UPDATE_CURRENCY_RATES_FAILED,
  updateCurrencyRatesSuccessful,
  UPDATE_CURRENCY_RATES_SUCCESSFUL,
  updateCurrencyRatesCancelled,
  UPDATE_CURRENCY_RATES_CANCELLED,
} from '../currencyRatesActions';

describe('currencyRatesActions', () => {
  it('should create an action to request update currency rates', () => {
    expect(requestUpdateCurrencyRates()).toHaveProperty('type', UPDATE_CURRENCY_RATES_REQUESTED);
  });

  it('should create an action to cancel update currency rates', () => {
    expect(cancelUpdateCurrencyRates()).toHaveProperty('type', CANCEL_UPDATE_CURRENCY_RATES);
  });

  it('should create an action to update currency rates failed', () => {
    expect(updateCurrencyRatesFailed()).toHaveProperty('type', UPDATE_CURRENCY_RATES_FAILED);
  });

  it('should create an action to update currency rates successful', () => {
    expect(updateCurrencyRatesSuccessful()).toHaveProperty('type', UPDATE_CURRENCY_RATES_SUCCESSFUL);
  });

  it('should create an action to update currency rates cancelled', () => {
    expect(updateCurrencyRatesCancelled()).toHaveProperty('type', UPDATE_CURRENCY_RATES_CANCELLED);
  });
});
