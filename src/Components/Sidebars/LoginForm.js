import React, { useState } from 'react'

const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const emailOnChange = (e) => {
        setEmail(e.target.value);
    }


    return (
        <>
            {/* Right Sidebar Column Start */}
            {/* Form */}


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
                            <p className="text-primary">{email.includes('@') ? <span className="text-success">Email Valid</span> : <span className="text-danger">Email Invalid</span>}</p>
                            <input type="text" className="form-control" id="uid" name="uid" placeholder="Enter your Name" onChange={emailOnChange} />
                        </div>
                        <div className="form-group">
                            <p className="text-primary">{password.length < 6 ? <span className="text-danger">Minimum 6 characters password is required</span> : (<span className="text-success">Password {password}</span>)}</p>
                            <input type="password" className="form-control" id="pwd" name="pwd" placeholder="Enter your Password" onChange={(e) => { setPassword(e.target.value) }} />
                        </div>
                        <button type="submit" className="btn btn-default">Log In</button>
                    </form>
                </div>
            </div>

        </>
    )
}

export default LoginForm
