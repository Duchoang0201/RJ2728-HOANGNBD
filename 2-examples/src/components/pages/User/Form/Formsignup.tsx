import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
type Props = {};
interface IUser {
    name: string;
    age: number;
    id: number;
}

function FormSignup(props: Props) {

    const params = useParams()
    const [getName, setGetName] = useState<string>();
    const [getAge, setGetAge] = useState<number | undefined>();


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (params.id) {
            console.log("update")
            updateUser(getName, getAge)
        } else {
            console.log("create")
            createUser();
        }
    };


    const updateUser = (Name: string | undefined, Age: number | undefined) => {

        let url = `https://636b8f56ad62451f9fb53c68.mockapi.io/Users/` + params.id;
        const data = {
            name: Name,
            age: Age,
        };
        fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };


    const createUser = () => {
        const data = {
            name: getName,
            age: Number(getAge)
        };
        let url = `https://636b8f56ad62451f9fb53c68.mockapi.io/Users/` + params.id;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);

            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <> 
            <div className="container">
                <div className="wrapper">
                    <div className="row">
                        <div className="col-4"></div>
                        <div className="col-4">
                        sign up or update account
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Name</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleInputName"
                                        aria-describedby="nameHelp"
                                        onChange={(e) => setGetName(e.target.value)}
                                        defaultValue={getName}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Age</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="exampleInputAge"
                                        onChange={(e) => setGetAge(Number(e.target.value))}
                                        defaultValue={getAge}
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
    );
}

export default FormSignup;
