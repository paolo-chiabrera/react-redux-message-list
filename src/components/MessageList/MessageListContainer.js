import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { compose, lifecycle } from 'recompose';
import moment from 'moment';

import getMessages from '../../actions/getMessages';

import MessageList from './MessageList.jsx';

export const remapMessages = (messages = [], members = {}) => {
    return messages
        .map(message => {
            const M = moment(message.timestamp);

            return Object.assign({
                humanReadableTimestamp: M.format('Do MMMM YYYY, HH:mm'),
                unix: M.unix()
            }, message, {
                member: members[message.userId]
            });
        })
        .sort((prev, next) => next.unix - prev.unix);
};

export const mapStateToProps = state => {
    const { members, messages } = state;

    return {
        messages: remapMessages(messages, members)
    }
};

export const mapDispatchToProps = dispatch => bindActionCreators({ getMessages }, dispatch);

export const lifecycleMethods = {
    componentDidMount() {
        this.props.getMessages();
    }
};

export default compose(
    connect(
        mapStateToProps,
        mapDispatchToProps
    ),
    lifecycle(lifecycleMethods)
)(MessageList);