import React, { useState } from 'react';
import { SaveReimbComponent, ReimbList } from '../../../remotes/reimb.remote';



interface SubmissionComponentProps {
    setView: (str: 'SUBMIT' | 'REVIEW' | 'HOME' | 'EMPLOYEE') => void;
}

export const SubmissionComponent: React.FC<SubmissionComponentProps> = (props) => {

    // const addReimb = (reimb: Reimb) => {
    //     setReimb([...reimbs, reimb])
    // }

    const [username, setUsername] = useState('');

    return (
        <div>
            <h1>Submission Menu</h1>
            <button onClick={() => props.setView('EMPLOYEE')}>Back</button>
            <br />
            <SaveReimbComponent setView={props.setView} />
        </div>
    )
}