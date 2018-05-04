import InputSearch from '../components/InputSearch'
import { connect } from 'react-redux'
import { fetchData } from '../actions/actions'

const mapDispatchToProps = dispatch => {
    return {
        handleSubmit: keyWord => {
            dispatch(fetchData(keyWord));
        }
    }
}

export default connect(null, mapDispatchToProps)(InputSearch);