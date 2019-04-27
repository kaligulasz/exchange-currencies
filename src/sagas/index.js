import { all } from 'redux-saga/effects';

import { watchUpdateCurrencyRates } from './currencyRatesSaga';

export default function* rootSaga() {
  yield all([
    watchUpdateCurrencyRates(),
  ]);
}
