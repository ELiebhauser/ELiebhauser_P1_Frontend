import React from 'react';
import './reimbursement-card.component.css';
import { Reimb } from './../../../models/Reimbursement'
// import { getReimb } from '../../../remotes/reimb.remote'

interface ReimbursementCardProps {
    reimb: Reimb
}


export const ReimbCardComponent: React.FC<ReimbursementCardProps> = ({reimb}) => {
    

    return (
        <div className="reimbursement-card">
            <div className="reimbursement-id"><span className="muted">ID: </span>{reimb.REIMB_ID}</div>
            <div className="reimbursement-users">{reimb.REIMB_AUTHOR} {reimb.REIMB_RESOLVER}</div>
            <div className="reimbursement-receipt">{reimb.REIMB_RECEIPT}</div>
            <div className="reimbursement-times">{reimb.REIMB_SUBMITTED} {reimb.REIMB_RESOLVED}</div>
            <div className="reimbursement-details">{reimb.REIMB_AMOUNT} {reimb.REIMB_DESCRIPTION} {reimb.REIMB_STATUS_ID} {reimb.REIMB_TYPE_ID}</div>
        </div>
    )
}
