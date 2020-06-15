import React, { useState } from 'react';
import { Reimb } from './../../../models/Reimbursement'
// import { ReimbCardComponent } from '../reimbursement-card-component/reimbursement-card.component';
// import { ReimbListComponent } from '../reimbursement-list-component/reimbursement-list.component';
import { UserReimbs, getReimbsByUserId } from '../../../remotes/reimb.remote';

const initialReimb: Reimb[] = [{
    REIMB_ID: 5,
    REIMB_AMOUNT: 1000,
    REIMB_SUBMITTED: "2020-06-12T23:48:43.218Z",
    REIMB_RESOLVED: "2020-06-12T23:48:43.218Z",
    REIMB_DESCRIPTION: "test",
    REIMB_RECEIPT: "test",
    REIMB_AUTHOR: 2,
    REIMB_RESOLVER: 0,
    REIMB_STATUS_ID: 1,
    REIMB_TYPE_ID: 1,
}]

interface ReviewComponentProps {
    setView: (str: 'REVIEW' | 'EMPLOYEE') => void;
}

export const ReviewComponent: React.FC<ReviewComponentProps> = (props) => {

    // const [view, setView] = useState<'REIMBURSEMENT_LIST' | 'EMPLOYEE' | 'SUBMISSION'>('REIMBURSEMENT_LIST');

    const [reimbs, setReimbs] = useState(initialReimb);
    const [userId, setUserId] = useState(0);

    const handleClick = async () => {
        getReimbsByUserId(userId);
    }

        const getCurrentView = () => {

        return (
            <div>
                <h1>Review Menu</h1>
                <button onClick={() => props.setView('EMPLOYEE')}>Back</button>
                {/* <ReimbListComponent setView={setView} reimbs={reimbs}  /> */}
                <input value={userId} 
                    onChange={(e) => setUserId(e.target.valueAsNumber)}
                    type="number" />
                <button onClick={() => handleClick()}>Submit User ID</button>
                <UserReimbs />
                <button onClick={() => props.setView('EMPLOYEE')}>Back</button>
            </div>
        )
    }

    return (
        <main>
            {getCurrentView()}
        </main>
    )
}