import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


type Props = {}
interface IUser {
  name: 'string',
  age: number,
  id: string | number,
  cityname: string,
  imagecity: string,
  descripts:string,
  avatar:string
}


  const listCityDump = [
    {
      imagecity: 'https://images.unsplash.com/photo-1525576998318-b4736ddba6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1508&q=80',
      descripts: 'The Football Is Good For Training And Recreational Purposes'
    },
    {
      imagecity: 'https://images.unsplash.com/photo-1525576998318-b4736ddba6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1508&q=80',
      descripts: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J'
    },
    {
      imagecity: 'https://images.unsplash.com/photo-1525576998318-b4736ddba6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1508&q=80',
      descripts: 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive'
    },
    {
      imagecity: 'https://images.unsplash.com/photo-1525576998318-b4736ddba6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1508&q=80',
      descripts: 'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients'
    },
  ]
function Home() {


  useEffect(() => {
    
    getListCity()
    console.log(getListCity())
  }, [])

  const [listCity, setListCity] = useState<Array<IUser>>()
  const getListCity = () => {
    const URL = 'https://636b8f56ad62451f9fb53c68.mockapi.io/Users'
    fetch(URL, {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
        setListCity(data)
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }




  return (
    <>
      <div className="container">
        <div className="warraper">
          
          <div className="row py-2 px-2 ">
          <span className='text-center text-uppercase'>List of tourist attractions</span>
            {listCity?.map((item, index) => (

              <div className="card w-25 py-2 px-2 " key={index} >
                <img src={item.descripts} className="card-img-top" alt="..." />
                <div className="card-body h-75">
                  <h5 className="card-title">{item.cityname}</h5>
                  <p className="card-text">{item.imagecity}</p>
                  
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </>

  )
}

export default Home