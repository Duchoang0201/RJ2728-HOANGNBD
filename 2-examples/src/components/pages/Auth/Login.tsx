import React, { useEffect, useState } from 'react'

type Props = {
    setIsLogin: (value: boolean) => void; //setIsLogin(true)
}
interface IUser {
    name: string;
    age: number;
    id: number;
}
function Login(props: Props) {
    const { setIsLogin } = props; // const setIsLogin = props.SetIsLogin
    const [getName, setGetName] = useState('');
    const [getPassWork, setGetPassWord] = useState('');

    const [users, setUsers] = useState<IUser[]>([]);
    const [error, setError] = useState('');


    console.log({ users })
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (getName === 'aptech' && getPassWork === 'aptech') {
            // successful login logic
            console.log('Login successful')
            
            setIsLogin(true)
                ;
        } else {
            setError('Incorrect username or password');
            alert('Login error')
        }
    };
    return (
        <>
            Login form
            <div className="container">
                <div className="wrapper">
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputName"
                                        aria-describedby="nameHelp"
                                        onChange={(event) => setGetName(event.target.value)}
                                        value={getName}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Password</label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputAge"
                                        onChange={(event) => setGetPassWord(event.target.value)}
                                        value={getPassWork}
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login