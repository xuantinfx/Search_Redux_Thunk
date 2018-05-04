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
        hasMore: false,
        err: undefined,
        message: undefined
      };
    case actions.LOADED_DATA:
      return {
        ...state,
        listTopic: action.listTopic,
        dataFetched: true,
        isFetching: false,
        searched: true,
        hasMore: true,
        err: undefined,
        message: undefined
      };
    case actions.LOAD_MORE:
      return {
        ...state,
        dataFetched: false,
        isFetching: true,
        searched: true,
        err: undefined,
        message: undefined
      };
    case actions.LOAD_MORE_SUCESS:
      if (action.listTopic.length === 0) {
        return {
          ...state,
          dataFetched: true,
          isFetching: false,
          searched: false,
          hasMore: false,
          err: undefined,
          message: undefined
        };
      }
      return {
        ...state,
        listTopic: state.listTopic.concat(action.listTopic),
        dataFetched: true,
        isFetching: false,
        searched: true,
        hasMore: true,
        err: undefined,
        message: undefined
      };
    case actions.LOAD_FALSE:
      return {
        ...state,
        dataFetched: true,
        isFetching: false,
        searched: true,
        hasMore: false,
        err: 'Không thể load nội dung!',
        message: undefined
      }
    case actions.LOAD_NO_DATA:
      return {
        ...state,
        dataFetched: true,
        isFetching: false,
        searched: true,
        hasMore: false,
        message: 'Không tìm thấy kết quả ứng với từ khoá của bạn',
        err: undefined
      }
    default:
      return state;
  }
};

export default reducer;