import {
  updateMainPocket,
  UPDATE_MAIN_POCKET,
} from '../mainPocketActions';

describe('mainPocketActions', () => {
  it('should create an action to update main pocket', () => {
    expect(updateMainPocket()).toHaveProperty('type', UPDATE_MAIN_POCKET);
  });
});
