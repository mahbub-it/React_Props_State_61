import React, { useState } from 'react'

const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginSubmit, setLoginSubmit] = useState(false);

    const emailOnChange = (e) => {
        setEmail(e.target.value);
        setLoginSubmit(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoginSubmit(true);
    }

    return (
        <>
            <div className="panel panel-default">
                <div className="panel-heading">
                    <h3 className="panel-title">
                        <span className="glyphicon glyphicon-log-in"></span>
                        Log In
                    </h3>
                </div>
                <div className="panel-body">
                    <form>
                        <div className="form-group">
                            {loginSubmit && !email.includes('@') && (<div className="text-danger">Email ID is Invalid</div>)}
                            <input type="text" className="form-control" id="uid" name="uid" placeholder="Enter your email" onChange={emailOnChange} />
                        </div>
                        <div className="form-group">
                            {loginSubmit && password.length < 6 && (<div className="text-danger">Minimum 6 characters password is required</div>)}
                            <input type="password" className="form-control" id="pwd" name="pwd" placeholder="Enter your Password" onChange={(e) => { setPassword(e.target.value); setLoginSubmit(false); }} />
                        </div>
                        <button onClick={handleSubmit} type="submit" className="btn btn-default">Log In</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default LoginForm
