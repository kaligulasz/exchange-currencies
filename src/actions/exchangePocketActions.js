export const SYNC_WITH_MAIN_POCKET = 'SYNC_WITH_MAIN_POCKET';
export const SET_CURRENCY_AMOUNT = 'SET_CURRENCY_AMOUNT';

export const syncWithMainPocket = pockets => ({
  type: SYNC_WITH_MAIN_POCKET,
  pockets,
});

export const setCurrencyAmount = (currency, amount) => ({
  type: SET_CURRENCY_AMOUNT,
  amount,
  currency,
});
