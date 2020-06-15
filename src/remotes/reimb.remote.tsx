import Axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Reimb } from '../models/Reimbursement';
import { render } from '@testing-library/react';

const api = Axios.create({
    baseURL: 'http://localhost:3000'
  })

interface reimbRow {
    reimb_id: number;
    reimb_amount: number;
    reimb_submitted: string;
    reimb_resolved: string;
    reimb_description: string;
    reimb_receipt: string;
    reimb_author: number;
    reimb_resolver: number;
    reimb_status_id: number;
    reimb_type_id: number;
}

interface ReimbComponentProps {
    setView: (str: 'SUBMIT' | 'EMPLOYEE') => void;
    // addReimb: (reimb: reimbRow) => void;
}

export const SaveReimbComponent: React.FC<ReimbComponentProps> = (props) => {
    const [REIMB_ID, set_reimb_id] = useState(0);
    const [REIMB_AMOUNT, set_reimb_amount] = useState(100);
    const [REIMB_SUBMITTED, set_reimb_submitted] = useState('');
    const [REIMB_RESOLVED, set_reimb_resolved] = useState('');
    const [REIMB_DESCRIPTION, set_reimb_description] = useState('');
    const [REIMB_RECEIPT, set_reimb_receipt] = useState('');
    const [REIMB_AUTHOR, set_reimb_author] = useState(2);
    const [REIMB_RESOLVER, set_reimb_resolver] = useState(0);
    const REIMB_STATUS_ID = 1;
    const [REIMB_TYPE_ID, set_reimb_type_id] = useState(1);

    const saveReimb = () =>{
        const reimb = {

        };
        // props.addReimb(reimb);
        props.setView('EMPLOYEE');
        console.log(reimb)
        Axios.post<reimbRow>(`http://localhost:3000/reimbursements`, {
        // REIMB_ID,
        REIMB_AMOUNT,
        REIMB_SUBMITTED,
        // REIMB_RESOLVED,
        REIMB_DESCRIPTION,
        REIMB_RECEIPT,
        REIMB_AUTHOR,
        // REIMB_RESOLVER,
        REIMB_STATUS_ID,
        REIMB_TYPE_ID })
            .then(res => {
                console.log(res);
                console.log(res.data);
            });

    }


    return (
        <section id="register-container">
        <header>
            <h2>New Reimbursement</h2>
        </header>

        <form>

            <div>
                <label><div>Total Amount</div>
                <input 
                    value={REIMB_AMOUNT} 
                    onChange={(e) => set_reimb_amount(e.target.valueAsNumber)} 
                    type="number" />
                </label>
            </div>

            <div>
                <label><div>Expense Description</div>
                <input value={REIMB_DESCRIPTION} 
                    onChange={(e) => set_reimb_description(e.target.value)}
                    type="text" />
                </label>
            </div>

            <div>
                <label><div>Receipt Image</div>
                <input value={REIMB_RECEIPT} 
                    onChange={(e) => set_reimb_receipt(e.target.value)}
                    type="text" />
                </label>
            </div>

            <div>
                <label><div>Reimbursement Type Code</div>
                <input value={REIMB_TYPE_ID} 
                    onChange={(e) => set_reimb_type_id(e.target.valueAsNumber)}
                    type="number" />
                </label>
            </div>

        <div>
            <button onClick={() => props.setView('EMPLOYEE')}>Back
            </button>
        </div>

        </form>
            <button onClick={() => saveReimb()}>Submit</button>

    </section>
        );

}



    // render() {
    //     return (
    //         <form onSubmit={this.handleSubmit}>
    //             <label>
    //                 Reimbursement Description:
    //                 <input type='text' name="description" onChange={this.handleChange} />
    //             </label>
    //             <button type="submit">Submit</button>
    //         </form>
    //     )
    // }


export const getReimbById = async (id: number) => {
    const response = await Axios.get<reimbRow>(`http://localhost:3000/reimbursements/${id}`)
    const reimb: Reimb = {
        REIMB_ID: response.data.reimb_id,
        REIMB_AMOUNT: response.data.reimb_amount,
        REIMB_SUBMITTED: response.data.reimb_submitted,
        REIMB_RESOLVED: response.data.reimb_resolved,
        REIMB_DESCRIPTION: response.data.reimb_description,
        REIMB_RECEIPT: response.data.reimb_receipt,
        REIMB_AUTHOR: response.data.reimb_author,
        REIMB_RESOLVER: response.data.reimb_resolver,
        REIMB_STATUS_ID: response.data.reimb_status_id,
        REIMB_TYPE_ID: response.data.reimb_type_id
    }
    return reimb;
}


// export const getReimbByUserId = async (id: number) => {
//     const response = await Axios.get<reimbRow[]>(`http://localhost:3000/reimbursements/user/${id}`)
//         .then(res => {
//             const reimbs = res.data;
//             this.setState({ reimbs });
//         })
// }

// export class UserReimbs extends React.Component<any> {
//     state: {reimbs: reimbRow[] } = {
//         reimbs: [],
//     };
//     componentDidMount() {
//         const { match: { params } } = this.props;
//         // getReimbsByUserId(id: number) {
//         Axios.get<reimbRow[]>(`http://localhost:3000/reimbursements/${params.userID}`)
//             .then(({ data: result }) => {
//                 console.log(result)
//                 this.setState({ reimbs: result })
//         })
//     }
//     render() {
//         return <ul>{this.state.reimbs.map(reimb => <li key={reimb.reimb_id}>
//             Reimbursement ID: {reimb.reimb_id}<br />
//             Reimbursement Amount: {reimb.reimb_amount}<br />
//             Reimbursement Submitted At: {reimb.reimb_submitted}<br /> 
//             Reimbursement Resolved At: {reimb.reimb_resolved}<br />
//             Reimbursement Details: {reimb.reimb_description}<br />
//             Reimbursement Author: {reimb.reimb_author}<br />
//             Reimbursement Resolver: {reimb.reimb_resolver}<br />
//             Reimbursement Status ID: {reimb.reimb_status_id}<br />
//             Reimbursement Type ID: {reimb.reimb_type_id}<br />
//             Reimbursement Receipt Image (placeholder): {reimb.reimb_receipt}<br />
//             <br /></li>)}
//         </ul>;
//     }
// } 

// interface UserReimbComponentProps {
//     setView: (str: 'SUBMIT' | 'EMPLOYEE') => void;
//     // addReimb: (reimb: reimbRow) => void;
// }

// export const UserReimbs: React.FC<UserReimbComponentProps> = () => {
//     const [userID, setUserID] = useState(0);
//     const [reimbs, setReimbs] = useState([]);

//     useEffect(() => {
//         const getReimbsByUserId = async  () =>  {
//             const result = await api.get<reimbRow[]>(
//                 `/reimbursements/${userID}`, {
//                     params: {
//                         userID: 'userID',
//                     }
//                 })
//         .then(res => {
//             console.log(res);
//             console.log(res.data);
//         });
//         setReimbs(result.data);
//     };
//     getReimbsByUserId();
//     }, []);

//         return (
//             <div>
//             <input type="number" name="userId" value={} />
//             <button>Submit</button>
//             <ul>{reimbs.map(reimb => <li key={reimb.reimb_id}>
//             Reimbursement ID: {reimb.reimb_id}<br />
//             Reimbursement Amount: {reimb.reimb_amount}<br />
//             Reimbursement Submitted At: {reimb.reimb_submitted}<br /> 
//             Reimbursement Resolved At: {reimb.reimb_resolved}<br />
//             Reimbursement Details: {reimb.reimb_description}<br />
//             Reimbursement Author: {reimb.reimb_author}<br />
//             Reimbursement Resolver: {reimb.reimb_resolver}<br />
//             Reimbursement Status ID: {reimb.reimb_status_id}<br />
//             Reimbursement Type ID: {reimb.reimb_type_id}<br />
//             Reimbursement Receipt Image (placeholder): {reimb.reimb_receipt}<br />
//             <br /></li>)}
//         </ul>;
//             </div>
//     )
// } 

export class UserReimbs extends React.Component<any> {
    state: {reimbs: reimbRow[] } = {
        reimbs: [],
    };


    getReimbsByUserId = async (userID: number) => {
        api.get<reimbRow[]>(`/reimbursements/user/${userID}`).then(res => {
            this.setState({ reimbs: res.data })
        })
    }

    render() {
        return (
            <ul>{this.state.reimbs.map(reimb => <li key={reimb.reimb_id}>
            Reimbursement ID: {reimb.reimb_id}<br />
            Reimbursement Amount: {reimb.reimb_amount}<br />
            Reimbursement Submitted At: {reimb.reimb_submitted}<br /> 
            Reimbursement Resolved At: {reimb.reimb_resolved}<br />
            Reimbursement Details: {reimb.reimb_description}<br />
            Reimbursement Author: {reimb.reimb_author}<br />
            Reimbursement Resolver: {reimb.reimb_resolver}<br />
            Reimbursement Status ID: {reimb.reimb_status_id}<br />
            Reimbursement Type ID: {reimb.reimb_type_id}<br />
            Reimbursement Receipt Image (placeholder): {reimb.reimb_receipt}<br />
            <br /></li>)}
            </ul>);
    }
}


export class ReimbList extends React.Component<any> {
    state: {reimbs: reimbRow[] } = {
        reimbs: [],
    };

    componentDidMount() {
        api.get<reimbRow[]>(`/reimbursements`).then(res => {
            this.setState({ reimbs: res.data })
            console.log(res.data)
        })
    }

    render() {
        return <ul>{this.state.reimbs.map(reimb => <li key={reimb.reimb_id}>
            Reimbursement ID: {reimb.reimb_id}<br />
            Reimbursement Amount: {reimb.reimb_amount}<br />
            Reimbursement Submitted At: {reimb.reimb_submitted}<br /> 
            Reimbursement Resolved At: {reimb.reimb_resolved}<br />
            Reimbursement Details: {reimb.reimb_description}<br />
            Reimbursement Author: {reimb.reimb_author}<br />
            Reimbursement Resolver: {reimb.reimb_resolver}<br />
            Reimbursement Status ID: {reimb.reimb_status_id}<br />
            Reimbursement Type ID: {reimb.reimb_type_id}<br />
            Reimbursement Receipt Image (placeholder): {reimb.reimb_receipt}<br />
            <br /></li>)}
        </ul>;
    }
} 

export async function getReimbsByUserId(userID: number) {
    const data = await api.get<reimbRow[]>(`/reimbursements/user/${userID}`).then(({data}) => data);
    console.log(data);
    return <ul>{data.map(reimb => <li key={reimb.reimb_id}>
        Reimbursement ID: {reimb.reimb_id}<br />
        Reimbursement Amount: {reimb.reimb_amount}<br />
        Reimbursement Submitted At: {reimb.reimb_submitted}<br /> 
        Reimbursement Resolved At: {reimb.reimb_resolved}<br />
        Reimbursement Details: {reimb.reimb_description}<br />
        Reimbursement Author: {reimb.reimb_author}<br />
        Reimbursement Resolver: {reimb.reimb_resolver}<br />
        Reimbursement Status ID: {reimb.reimb_status_id}<br />
        Reimbursement Type ID: {reimb.reimb_type_id}<br />
        Reimbursement Receipt Image (placeholder): {reimb.reimb_receipt}<br />
        <br /></li>)}
    </ul>;
}
