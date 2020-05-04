import actionType from '../constants/actionType';

const initialState = {};

const sample = (state = initialState, action) => {
    switch (action.type) {
      case actionType.SAMPLE_ACTION:
        return {
          ...state
        }
      default:
        return state
    }
  }
  
  export default sample