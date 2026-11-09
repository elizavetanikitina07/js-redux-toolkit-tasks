import _ from "lodash";
import { combineReducers } from "redux";

const comments = (state = {}, action) => {
  // BEGIN (write your solution here)
  const { type, payload } = action;

  switch (type) {
    case "TASK_COMMENT_ADD": {
      const { comment } = payload;
      return { ...state, [comment.id]: comment };
    }

    case "TASK_COMMENT_REMOVE": {
      const { id } = payload;
      return _.omit(state, id);
    }

    case "TASK_REMOVE": {
      const { id } = payload;
      return _.omitBy(state, (comment) => comment.taskId === id);
    }

    default:
      return state;
  }
  // END
};

const tasks = (state = {}, action) => {
  // BEGIN (write your solution here)
  const { type, payload } = action;

  switch (type) {
    case "TASK_ADD": {
      const { task } = payload;
      return { ...state, [task.id]: task };
    }

    case "TASK_REMOVE": {
      const { id } = payload;
      return _.omit(state, id);
    }

    default:
      return state;
  }
  // END
};

export default combineReducers({
  comments,
  tasks,
});
