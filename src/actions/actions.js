import axios from 'axios'

const actions = {
    BEGIN_SEARCH: 'BEGIN_SEARCH',
    LOADED_DATA: 'LOADED_DATA',
    LOAD_MORE: 'LOAD_MORE',
    LOAD_MORE_SUCESS: 'LOAD_MORE_SUCCESS'
}

export default actions;

export const beginSearch = keyWord => {
    return {
        type: actions.BEGIN_SEARCH,
        keyWord
    }
}

export const loadedData = (listTopic) => {
    return {
        type: actions.LOADED_DATA,
        listTopic
    }
}

export const loadMore = () => {
    return {
        type: actions.LOAD_MORE
    }
}

export const loadMoreSuccess = listTopic => {
    return {
        type: actions.LOAD_MORE_SUCESS,
        listTopic
    }
}

export const fetchData = keyWord => {
    debugger;
    return (dispatch) => {
        dispatch(beginSearch(keyWord))
        axios.post('https://be.gofyit.wbest1.com/api/gfi-search/v1/topic',{ topic: keyWord, page: 1 })
        .then(data => {
            const listTopic = data.data.data.data.map(item => {
                return item.topic;
            });
            dispatch(loadedData(listTopic))
        })
        .catch(err => {
            console.log(err+'')
        })
    }
}

export const fetchDataMore = (keyWord, page) => {
    debugger;
    return (dispatch) => {
        dispatch(loadMore())
        axios.post('https://be.gofyit.wbest1.com/api/gfi-search/v1/topic',{ topic: keyWord, page: page })
        .then(data => {
            const listTopic = data.data.data.data.map(item => {
                return item.topic;
            });
            debugger;
            dispatch(loadMoreSuccess(listTopic))
        })
        .catch(err => {
            console.log(err+'')
        })
    }
}