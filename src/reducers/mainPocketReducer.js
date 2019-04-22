import {
  CHANGE_AMOUNT,
} from '../actions/mainPocketActions';

const mainPocket = (state = {
  pockets: [
    {
      currency: '$',
      description: 'USD - American Dollar',
      amount: 30.31,
      id: 1,
    },
    {
      currency: '€',
      description: 'EUR - Euro',
      amount: 20.10,
      id: 2,
    },
    {
      currency: '£',
      description: 'GBP - British Pound',
      amount: 25.55,
      id: 3,
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
