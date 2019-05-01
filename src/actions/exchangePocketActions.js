export const SYNC_WITH_MAIN_POCKET = 'SYNC_WITH_MAIN_POCKET';

export const syncWithMainPocket = pockets => ({
  type: SYNC_WITH_MAIN_POCKET,
  pockets,
});
