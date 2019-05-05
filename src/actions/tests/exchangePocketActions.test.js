import {
  syncWithMainPocket,
  SYNC_WITH_MAIN_POCKET,
  setCurrencyAmount,
  SET_CURRENCY_AMOUNT,
} from '../exchangePocketActions';

describe('exchangePocketActions', () => {
  it('should create an action to sync exchange pocket with main pocket', () => {
    expect(syncWithMainPocket()).toHaveProperty('type', SYNC_WITH_MAIN_POCKET);
  });

  it('should create an action to set currency amount', () => {
    expect(setCurrencyAmount()).toHaveProperty('type', SET_CURRENCY_AMOUNT);
  });
});
