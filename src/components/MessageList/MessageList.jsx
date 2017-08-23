import React from 'react';

import './MessageList.css';

const MessageList = ({ messages = [] }) => {
    const _messages = messages.map(item => {
        const { member } = item;
        const initials = member.firstName[0].toUpperCase() + member.lastName[0].toUpperCase();

        return (
            <li key={item.id} className="message-item">
                <div className="row">
                    <div className="column column-20">
                        <img src={member.avatar} alt={initials}/>
                    </div>
                    <div className="column column-50">
                        <p title={member.email} >{item.message}</p>
                    </div>
                    <div className="column column-30">
                        <p className="date">{item.humanReadableTimestamp}</p>
                    </div>
                </div>
            </li>
        );
    });

    return (
        <ul className="message-list">
            {_messages}
        </ul>
    );
};

export default MessageList;