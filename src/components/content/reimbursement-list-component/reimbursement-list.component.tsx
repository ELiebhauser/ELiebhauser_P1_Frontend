import React from 'react';
import { ReimbCardComponent } from '../reimbursement-card-component/reimbursement-card.component';
import './reimbursement-list.component.css'
import { Reimb } from '../../../models/Reimbursement'

interface ReimbListProps {
    setView: (str: 'REIMBURSEMENT_LIST' | 'EMPLOYEE' | 'SUBMISSION') => void;
    reimbs: Reimb[];
}



export const ReimbListComponent: React.FC<ReimbListProps> = (props) => {
    
    // Maps our array of reimbursements to an array of ReimbursementCardComponents
    // React can then iteratively render these components

    const renderReimbComponents = () => {
        return props.reimbs.map(reimb => {
            return (<ReimbCardComponent key={reimb.REIMB_ID} reimb={reimb}></ReimbCardComponent>)
        })
    }

    return (
        <section id="reimb-list-component">
            <header>
                <h2>Reimbursement List</h2>
            </header>
            <div>
                <button onClick={() => props.setView('SUBMISSION')}>Register New Reimbursement</button>
            </div>
            <section id="reimb-list-container">
                {renderReimbComponents()}
            </section>

        </section>
    );
}

// const [id, setid] = useState(0)

