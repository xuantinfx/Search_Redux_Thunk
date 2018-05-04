import App from '../components/App'
import { connect } from 'react-redux'
import { fetchDataMore } from '../actions/actions'

const mapStateToProps = (state) => {
    return {
        keyWord: state.keyWord,
        searched: state.searched,
        hasMore: state.hasMore
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadMore: (keyWord, page) => {
            dispatch(fetchDataMore(keyWord, page))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)