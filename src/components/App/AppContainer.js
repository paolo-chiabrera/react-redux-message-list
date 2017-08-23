import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, lifecycle } from 'recompose';

import getMembers from '../../actions/getMembers';

import App from './App';

export const mapStateToProps = state => {
    const { members } = state;

    return {
        members
    }
};

export const mapDispatchToProps = dispatch => bindActionCreators({ getMembers }, dispatch);

export const lifecycleMethods = {
    componentDidMount() {
        this.props.getMembers();
    }
};

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    lifecycle(lifecycleMethods)
)(App);