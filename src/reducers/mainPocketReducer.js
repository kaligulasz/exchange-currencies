import {
  CHANGE_AMOUNT,
} from '../actions/mainPocketActions';

const mainPocket = (state = {
  pockets: [
    {
      currency: 'usd',
      amount: 30,
    },
    {
      currency: 'euro',
      amount: 20,
    },
    {
      currency: 'pound',
      amount: 25,
    },
  ],
}, action) => {
  switch (action.type) {
    case CHANGE_AMOUNT:
      return {
        ...state,
        pockets: [],
      };
    default:
      return state;
  }
};

export const getMainPocket = state => state.mainPocket.pockets;

export default mainPocket;
