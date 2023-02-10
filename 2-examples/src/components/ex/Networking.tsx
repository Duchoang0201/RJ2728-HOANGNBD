import { Console, log } from 'console'
import React, { useEffect, useState } from 'react'

type Props = {}
interface IUser {
  name: 'string',
  age: number,
  id: string | number
}
function Networking(props: Props) {

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
      <div>Networking
        <table className="table">
          <thead>
            <tr >
              <th scope="col">ID</th>
              <th scope="col">Name</th>
              <th scope="col">Age</th>
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
                  <button
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

export default Networking