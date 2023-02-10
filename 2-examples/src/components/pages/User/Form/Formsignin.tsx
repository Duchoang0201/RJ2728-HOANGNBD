import React, { useEffect, useState } from 'react'

type Props = {}
interface IUser {
    name: string;
    age: number;
    id: number;
}
function Formsignin(props: Props) {
    const [getName, setGetName] = useState('');
    const [getAge, setGetAge] = useState('');

    const [users, setUsers] = useState<IUser[]>([]);
    const [error, setError] = useState('');
    
    useEffect(() => {
        fetch('https://636b8f56ad62451f9fb53c68.mockapi.io/Users')
          .then(res => res.json())
          .then(data => setUsers(data))
          .catch(err => console.error(err));
      }, []);
      
      console.log({users})
    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        const user = users.find(user => user.name === getName && user.age === Number(getAge));
        if (user) {
          // successful login logic
          console.log('Login successful')
          alert('Login sucess')
          
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
                                    <label className="form-label">Age</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="exampleInputAge"
                                        onChange={(event) => setGetAge(event.target.value)}
                                        value={getAge}
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

export default Formsignin