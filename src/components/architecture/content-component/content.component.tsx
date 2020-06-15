import React, { useState } from 'react';
import { LoginComponent } from '../../content/login-component/login.component';
import { AgentComponent } from '../../content/agent-component/agent.component';
import { EmployeeComponent } from '../../content/employee-component/employee.component';
import { SubmissionComponent } from '../../content/submission-component/submission.component';
import { EditComponent } from '../../content/edit-component/edit.component';
import { ReviewComponent } from '../../content/review-component/review.component';

export const childViews = {
    login: 'LOGIN',
    agent: 'AGENT',
    employee: 'EMPLOYEE',
    submission: 'SUBMISSION',
    edit: 'EDIT',
    review: 'REVIEW'
};
 
/*
    ! Using Props (properties)
    Props are data passed from component to another. The 
    setView function is owned by the ContentComponent but
    needs to accessible to child components.  In this
    scenario we need to pass this value as a prop to the 
    children.  From the parents perspective, this is as 
    simple as passing it to the component tag as you would
    an attribute in HTML.

    The child component then receives a prop object which
    contains any props passed to it. In TypeScript we have
    the opportunity to provide typing information regarding
    passed props on the React.FC typing declaration.
*/

export const ContentComponent: React.FC = () => {

    const [view, setView] =
        useState('LOGIN');

    // const [students, setStudents] = useState<Student[]>(initialStudents);

    // Stateless component - or a functional component
    const getCurrentView = () => {

        // Returning a view based on the value of the state 'view'
        switch (view) {
            case childViews.employee: return <EmployeeComponent setView={setView} />;
            case childViews.login: return <LoginComponent setView={setView} />
            case childViews.agent: return <AgentComponent setView={setView} />
            case childViews.edit: return <EditComponent setView={setView} />
            case childViews.submission: return <SubmissionComponent setView={setView} />
            case childViews.review: return <ReviewComponent setView={setView} />
            default: return <React.Fragment />
        }
    }

    return (
        <main>
            {getCurrentView()}
        </main>
    );
}