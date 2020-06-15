import React, { useState } from 'react';

interface EmployeeComponentProps {
    setView: (str: 'HOME' | 'LOGIN'| 'SUBMISSION' | 'EDIT' | 'REVIEW') => void;
}

export const EmployeeComponent: React.FC<EmployeeComponentProps> = (props) => {

    const [username, setUsername] = useState('');

    return (
        <div>
            <h2>Employee Menu</h2>
        <div>
            <button onClick={() => props.setView('SUBMISSION')}>Submit New Ticket</button>
            <button onClick={() => props.setView('REVIEW')}> Review Past Tickets</button>
        </div>
            <h2>Finance Manager Menu</h2>
            <button onClick={() => props.setView('EDIT')}>Review and Edit Pending Tickets</button>
            
        </div>
    )
}