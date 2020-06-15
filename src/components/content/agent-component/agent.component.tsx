import React, { useState } from 'react';

interface AgentComponentProps {
    setView: (str: 'USER_LIST' | 'LOGIN') => void;
}

export const AgentComponent: React.FC<AgentComponentProps> = (props) => {

    const [username, setUsername] = useState('');

    return (
        <h1>Agent Menu</h1>
    )
}