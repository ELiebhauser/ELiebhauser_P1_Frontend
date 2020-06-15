import React, { useState } from 'react';
import { Reimb } from './../../../models/Reimbursement'
// import { ReimbCardComponent } from '../reimbursement-card-component/reimbursement-card.component';
// import { ReimbListComponent } from '../reimbursement-list-component/reimbursement-list.component';
import { ReimbList } from '../../../remotes/reimb.remote';

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

interface EditComponentProps {
    setView: (str: 'EDIT' | 'EMPLOYEE') => void;
}

export const EditComponent: React.FC<EditComponentProps> = (props) => {

    // const [view, setView] = useState<'REIMBURSEMENT_LIST' | 'EMPLOYEE' | 'SUBMISSION'>('REIMBURSEMENT_LIST');

    const [reimbs, setReimbs] = useState(initialReimb)

    const handleClick = async () => {
        // this unused function has somehow become integral to the component
    }

        const getCurrentView = () => {

        return (
            <div>
                <h1>Edit Menu</h1>
                <button onClick={() => props.setView('EMPLOYEE')}>Back</button>
                {/* <ReimbListComponent setView={setView} reimbs={reimbs}  /> */}
                <ReimbList />
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