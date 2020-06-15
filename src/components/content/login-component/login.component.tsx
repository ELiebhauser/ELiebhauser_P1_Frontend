import React, { useState } from 'react';
import './login.component.css';
import { getReimbById } from '../../../remotes/reimb.remote';

/* Props represent data that this component is dependent upon */
interface LoginComponentProps {
    setView: (str: 'LOGIN' | 'EMPLOYEE') => void;
    // addUser: (user: User) => void;
}

export const LoginComponent: React.FC<LoginComponentProps> = (props) => {

    class User{
        ERS_USERS_ID: number;
        ERS_USERNAME: string;
        ERS_PASSWORD: string; /* DON'T store password as plaintext in final release */
        USER_FIRST_NAME: string;
        USER_LAST_NAME: string;
        USER_EMAIL: string;
        USER_ROLE_ID: number;
    
        static from(obj: UserRow): User {
            const user = new User(
                obj.ERS_USERS_ID, obj.ERS_USERNAME, obj.ERS_PASSWORD, obj.USER_FIRST_NAME, obj.USER_LAST_NAME, obj.USER_EMAIL, obj.USER_ROLE_ID
            );
            return user;
        }
    
        constructor(ERS_USERS_ID: number, ERS_USERNAME: string, ERS_PASSWORD: string, USER_FIRST_NAME: string, USER_LAST_NAME: string, USER_EMAIL: string, USER_ROLE_ID: number) {
            this.ERS_USERS_ID = ERS_USERS_ID;
            this.ERS_USERNAME = ERS_USERNAME;
            this.ERS_PASSWORD = ERS_PASSWORD;
            this.USER_FIRST_NAME = USER_FIRST_NAME;
            this.USER_LAST_NAME = USER_LAST_NAME;
            this.USER_EMAIL = USER_EMAIL;
            this.USER_ROLE_ID = USER_ROLE_ID;
        }
    }
    
    interface UserRow {
        ERS_USERS_ID: number;
        ERS_USERNAME: string;
        ERS_PASSWORD: string;
        USER_FIRST_NAME: string;
        USER_LAST_NAME: string;
        USER_EMAIL: string;
        USER_ROLE_ID: number;
    }


    const [username, setUsername] = useState('');    
    const [password, setPassword] = useState('');
    const [ERS_USERS_ID, set_ERS_USERS_ID] = useState(0);


    const saveUser = () => {

        props.setView('LOGIN');
    }

    return (
        <section id="login-container">
            <header>
                <h2>Login</h2>
            </header>

            <form>

                <div>
                    <label><div>Username:</div>
                    <input 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        type="text" />
                    </label>
                </div>

                <div>
                    <label><div>Password:</div>
                    <input value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        type="password" />
                    </label>
                </div>

            {/* <div>
                <label>
                    <div>User ID (dev):</div>
                    <input 
                        value={ERS_USERS_ID} 
                        onChange={(e) => set_ERS_USERS_ID(e.target.valueAsNumber)} 
                        type="number" />
                </label>
            </div> */}

            </form>
                <button onClick={() => props.setView('LOGIN')}>Back</button>
                <button onClick={() => props.setView('EMPLOYEE')}>Login</button>
                <button onClick={() => getReimbById(2)}>ping app</button>
        </section>
    );
}