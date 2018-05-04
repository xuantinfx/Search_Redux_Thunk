import Loading from '../components/Loading'
import { connect } from 'react-redux'

const mapStateToProps = (state, owrProps) => {
    return {
        isFetching: state.isFetching
    }
}

export default connect(mapStateToProps)(Loading)