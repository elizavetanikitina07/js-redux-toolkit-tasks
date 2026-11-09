import omit from "lodash/omit";
import { legacy_createStore as createStore } from "redux";

// BEGIN (write your solution here)
const reducer = (state = {}, action) => {
  const { type, payload } = action;

  switch (type) {
    case "TASK_ADD": {
      const { task } = payload;
      return {
        ...state,
        [task.id]: task,
      };
    }

    case "TASK_REMOVE": {
      const { id } = payload;
      return omit(state, id);
    }

    case "TASK_UPDATE": {
      const { task } = payload;
      return {
        ...state,
        [task.id]: {
          ...state[task.id],
          ...task,
        },
      };
    }

    default:
      return state;
  }
};

const initializeStore = (initialState) => createStore(reducer, initialState);

export default initializeStore;
// END
