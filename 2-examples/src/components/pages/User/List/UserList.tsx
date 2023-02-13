import { Console, log } from 'console'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
type Props = {}
interface IUser {
    name: 'string',
    age: number,
    id: string | number,
    cityname: string,
    descripts: string
}
function UserList(props: Props) {
    const navigate = useNavigate()
    const [listUsers, setListUsers] = useState<Array<IUser>>()

    useEffect(() => {
        getListUsers()
        console.log(getListUsers())
    }, [])

    const getListUsers = () => {
        const URL = 'https://636b8f56ad62451f9fb53c68.mockapi.io/Users'
        fetch(URL, {
            method: 'GET',
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                setListUsers(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    const handleDetail = (UserId: string | number) => {
        console.log(" handleDetail", UserId)
        navigate('/detail/' + UserId)
    }
    const handleUpdate = (UserId: string | number) => {
        console.log(" handleUpdate", UserId)
        navigate('/form/' + UserId)
    }

    const handleDelete = (UserId: string | number) => {
        deleteListUsers(UserId)
    }
    const deleteListUsers = (UserId: string | number) => {
        const URL = "https://636b8f56ad62451f9fb53c68.mockapi.io/Users/" + UserId;
        fetch(URL, {
            method: 'DELETE', // or 'PUT'
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
                getListUsers()
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    return (
        <>
            <div className='container'>Registered tour list
                <table className="table table-striped table-hover">
                    <thead>
                        <tr >
                            <th scope="col">ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Age</th>
                            <th scope="col">City of tuor</th>
                            <th scope="col">Function</th>

                        </tr>
                    </thead>
                    <tbody>
                        {listUsers?.map((item, index) =>
                        (
                            <tr key={`${item.id}-${index}`}>
                                <th scope="row">{item.id}</th>
                                <td>{item.name}</td>
                                <td>{item.age}</td>
                                <td>
                                    {item.cityname}
                                    
                                </td>
                                <td>
                                    <button className='btn btn-outline-success'
                                        onClick={() => handleDetail(item.id)}
                                    > Detail</button>
                                    <button className='btn btn-outline-success'
                                        onClick={() => handleUpdate(item.id)}
                                    > Update</button>
                                    <button className='btn btn-outline-success'
                                        onClick={() => handleDelete(item.id)}
                                    > Delete</button>
                                </td>
                            </tr>
                        )
                        )}


                    </tbody>
                </table>


            </div>

        </>
    )
}

export default UserList