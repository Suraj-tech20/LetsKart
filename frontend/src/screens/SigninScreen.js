import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function SigninScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const submitHandler = (e) => {
        e.preventDafault();
        // ToDo: singin action
    }
    return (
        <div>
            <form action="" className="form" onSubmit={submitHandler}>
                <div>
                    <h1>Sign In</h1>
                </div>
                <div className="">
                    <label htmlFor="email">Email address</label>
                    <input type="email" id="email"
                        placeholder="Enter email"
                        required onChange={e => setEmail(e.target.value)}
                    />
                </div>
                <div className="">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password"
                        placeholder="Enter password"
                        required onChange={e => setPassword(e.target.value)}
                    />
                </div>
                <div>
                    <label />
                    <button className="primary" type="submit">Sign In</button>

                </div>
                <div>
                    <label />
                    <div>
                        New costomer? <Link to="/register">Create your account</Link>
                    </div>
                </div>
            </form>
        </div>
    )
}
