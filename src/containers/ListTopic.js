import ListTopic from '../components/ListTopic'
import { connect } from 'react-redux'

const mapStateToProps = (state, owrProps) => {
    return {
        listTopic: state.listTopic
    }
}

export default connect(mapStateToProps)(ListTopic);