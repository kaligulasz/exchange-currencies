import {
  put,
  take,
  call,
  delay,
  cancelled,
  cancel,
  fork,
} from 'redux-saga/effects';

// Services
import { getData } from '../services/requestService';

// Actions
import {
  UPDATE_CURRENCY_RATES_REQUESTED,
  CANCEL_UPDATE_CURRENCY_RATES,
  updateCurrencyRatesSuccessful,
  updateCurrencyRatesFailed,
  updateCurrencyRatesCancelled,
} from '../actions/currencyRatesActions';

function* updateCurrencyRates() {
  try {
    while (true) {
      const currenciesData = yield call(
        getData,
        ['GBP', 'EUR', 'USD'],
      );

      yield put(updateCurrencyRatesSuccessful(currenciesData));

      yield delay(1000000);
    }
  } catch (error) {
    yield put(updateCurrencyRatesFailed(error));
  } finally {
    if (yield cancelled()) {
      yield put(updateCurrencyRatesCancelled());
    }
  }
}

export function* watchUpdateCurrencyRates() {
  while (yield take(UPDATE_CURRENCY_RATES_REQUESTED)) {
    const updateCurrencyRatesTask = yield fork(updateCurrencyRates);

    yield take(CANCEL_UPDATE_CURRENCY_RATES);
    yield cancel(updateCurrencyRatesTask);
  }
}
