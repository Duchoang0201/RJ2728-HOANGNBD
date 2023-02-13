import { create } from 'domain';
import React, { useEffect, useState } from 'react';
// import { useLocation } from 'react-router-dom';
import { useParams } from 'react-router-dom';
type Props = {};
interface IUser {
    name: string;
    age: number;
    id: number;
    imagecity: string,
    descripts: string,
    cityname: string,
}

function FormSignup(props: Props) {


    const listCityDump = [
        {
            imagecity: 'https://images.unsplash.com/photo-1525576998318-b4736ddba6c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1508&q=80',
            descripts: 'The Football Is Good For Training And Recreational Purposes'
        },
        {
            imagecity: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aG9jaGltaW5oJTIwY2l0eXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=2000&q=60',
            descripts: 'The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J'
        },
        {
            imagecity: 'https://images.unsplash.com/photo-1597307932023-38eeb19069ff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
            descripts: 'The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive'
        },
        {
            imagecity: 'https://images.unsplash.com/photo-1580835267732-2d232d3d2655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80',
            descripts: 'The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients'
        },
    ]



    //   useEffect(() => {
    //     listCityDump.map(item => {
    //         createUser(item.descripts,item.imagecity)
    //     })
    //  },[])



    const [getName, setGetName] = useState<string>();
    const [getCity, setGetCity] = useState<string>();
    const [getAge, setGetAge] = useState<number | undefined>();
    const [getPicture, setGetPicture] = useState<string>();
    const [showInfor, getShowInfor] = useState<IUser>()



    // const [checked, setChecked] = useState<number>();
    // const [sex, getSex] = useState([
    //     {
    //         id: 0,
    //         sex: 'Man'
    //     }
    //     , {
    //         id: 1,
    //         sex: 'Women'
    //     }
    // ])
    // const [checkedLived, setCheckedLived] = useState<number[]>([])
    // const [lived, setLived] = useState([
    //     {
    //         id: 0,
    //         name: 'Ha Noi'
    //     }
    //     , {
    //         id: 1,
    //         name: 'Da Nang'
    //     },
    //     {
    //         id: 2,
    //         name: 'Ho Chi Minh'
    //     }

    // ])
    // console.log(checkedLived)
    // console.log(...checkedLived)
    // const handleCheckLived = (id: number) => {
    //     // setCheckedLived(prev => {
    //     //     const isChecked = checkedLived?.includes(id)
    //     //     if(isChecked) {
    //     //         return ( checkedLived?.filter( item => item !== id))
    //     //     }else{
    //     //         return( [...prev,id])
    //     //     }
    //     // })
    //     const isChecked = checkedLived?.includes(id)
    //     if(isChecked){
    //         setCheckedLived(checkedLived.filter( item => item !== id))
    //     }else{
    //         setCheckedLived([...checkedLived,id])
    //     }
    // };


    useEffect(() => {
        if(params.id){
            getUser()
        }
    },[])
       


    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (params.id) {
            console.log("update")

            updateUser(getName, getAge)
        } else {
            console.log("create")
            createUser()
        }
    };


    const updateUser = (Name: string | undefined, Age: number | undefined) => {

        let url = `https://636b8f56ad62451f9fb53c68.mockapi.io/Users/` + params.id;
        const data = {
            name: getName,
            age: Number(getAge),
            cityname: getCity
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


    const params = useParams()
    function getUser(ID = '') {

        const userID = params.id
        console.log(userID)
        let url = `https://636b8f56ad62451f9fb53c68.mockapi.io/Users/` + userID;
        fetch(url, {
            method: 'GET'
        })
            .then((response) => response.json())
            .then((data) => {
                getShowInfor(data);
                console.log(data)
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }

    // // Dom du lieu
    // const createUser = (img: string, des : string ) => {
    //     const data = {
    //         // name: getName,
    //         // age: Number(getAge),
    //         imagecity: img,
    //         descripts: des
    //     };
    //     let url = `https://636b8f56ad62451f9fb53c68.mockapi.io/Users/`;
    //     fetch(url, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json',
    //         },
    //         body: JSON.stringify(data),
    //     })
    //         .then((response) => response.json())
    //         .then((data) => {
    //             console.log('Success:', data);

    //         })
    //         .catch((error) => {
    //             console.error('Error:', error);
    //         });
    // };

    const createUser = () => {
        const data = {
            name: getName,
            age: Number(getAge),
            cityname: getCity,
            descripts: getPicture
        };
        let url = `https://636b8f56ad62451f9fb53c68.mockapi.io/Users/`;
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
                                        value={showInfor?.name}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Age</label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="exampleInputAge"
                                        onChange={(e) => setGetAge(Number(e.target.value))}
                                        defaultValue={showInfor?.age}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">City of tuor</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={(e) => setGetCity((e.target.value))}
                                        defaultValue={showInfor?.name}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Picture of City</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        onChange={(e) => setGetPicture((e.target.value))}
                                        defaultValue={showInfor?.name}
                                    />
                                </div>
                                {/* <div className="">
                                    Gioi tinh:
                                    {sex.map((item, index) =>
                                    (<div key={index}>
                                        <input type="radio"
                                            checked={checked === item.id}
                                            onChange={() => { setChecked(item.id) }} />
                                        <label >{item.sex}</label>
                                    </div>)
                                    )}</div>
                                <div className="">
                                    Da sinh song tai:
                                    {lived.map((item, index) =>
                                    (<div key={index}>
                                        <input type="checkbox"
                                            checked={checkedLived?.includes(index)}
                                            onChange={() => { handleCheckLived(index) }} />
                                        <label >{item.name}</label>
                                    </div>)
                                    )}</div> */}

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
