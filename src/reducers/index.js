import actions from "../actions/actions";

const defaultState = {
  listTopic: [],
  dataFetched: false,
  isFetching: false,
  keyWord: ""
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case actions.BEGIN_SEARCH:
      return {
        ...state,
        dataFetched: false,
        isFetching: true,
        keyWord: action.keyWord,
        listTopic: [],
        searched: false,
        hasMore: false
      };
    case actions.LOADED_DATA:
      return {
        ...state,
        listTopic: action.listTopic,
        dataFetched: true,
        isFetching: false,
        searched: true,
        hasMore: true
      };
    case actions.LOAD_MORE:
      return {
        ...state,
        dataFetched: false,
        isFetching: true,
        searched: true
      };
    case actions.LOAD_MORE_SUCESS:
      if (action.listTopic.length === 0) {
        return {
          ...state,
          dataFetched: true,
          isFetching: false,
          searched: false,
          hasMore: false
        };
      }
      debugger;
      let tempArr = state.listTopic.concat(action.listTopic);
      let tmp = {
        ...state,
        listTopic: tempArr,
        dataFetched: true,
        isFetching: false,
        searched: true,
        hasMore: true
      };
      debugger;
      return tmp;
    default:
      return state;
  }
};

export default reducer;
