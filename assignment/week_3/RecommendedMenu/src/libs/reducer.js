const initialState = {
  time: 3,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // 타이머 시간이 줄어들게 하는 동작
    case "SET_TIME":
      return {
        ...state,
        time: state.time - action.payload,
      };

    default:
      throw new Error("Unhandled action");
  }
};
