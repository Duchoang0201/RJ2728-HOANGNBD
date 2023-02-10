import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styles from './UserDetailD.module.css'

type Props = {}
interface IUser {
  name: string,
  age: number,
  id: string | number
}

function UserDetail(props: Props) {
  const params = useParams()
  const [user, setUser] = useState<IUser | undefined>();
  const [idUser, setIdUser] = useState('');

  useEffect(() => {
    console.log("name")
    console.log(idUser)
    getUser()
  }, []);


  function getUser(ID = '') {
    
    const userID = params.id
    console.log(userID)
    let url = `https://636b8f56ad62451f9fb53c68.mockapi.io/Users/` + userID;
    fetch(url, {
      method: 'GET'
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        console.log(data)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <>
      <div className='container'>
        <div className='warraper'>
          <div className='card mb-3'>
            <div className='row g-0'>
              <div className='col-md-4'>
                <img src='http://localhost:3000/static/media/GALLERY1.f9fb3fb9eee61e5f8706.jpg' className='img-fluid rounded-start' alt='' />
              </div>
              <div className='col-md-8'>
                <div className='card-body'>
                  <h5 className={`${styles.Name__UD} card-title`}>Name: {user?.name}</h5>
                  <p className={`${styles.Age__UD} card-text py-4`}>Age: {user?.age}</p>
                  <p className='card-text'><small className='text-muted'>Number ID: <span className={`${styles.IDD__UD}`}>{user?.id}</span></small></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserDetail;
