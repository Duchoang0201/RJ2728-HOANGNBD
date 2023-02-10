// Cu phap viet tat tsrfce
// Dau component di tu index.tsx ( de nguyen ) ->>
// ->> app.tsx ( dieu chinh cac property) ->>component ( thuc hien o day)
import React, { useEffect, useState } from 'react'

type Props = {}
interface IsUer {
    name: string,
    age: number,
}
// function ChangeColor({} (De object ko ngan gon): Props) { ->>> chuyen thanh
//UI ma minh thiet ke bo vao khu vuc ( return )
function ChangeColor(props: Props) {
    // DAY LA KHU VUC VIET CAC FUNCTION

    const [listUser, setListUser] = useState([
        {

            name: 'user object1', // string
            age: 18, // number
            number: 1
        },
        {
            name: 'user object3', // string
            age: 19, // number
            number: 2
        },
        {
            name: 'user object3', // string
            age: 20, // number
            number: 3
        },
    ]
    )

    const [user, setUser] = useState(
        {
            name: 'user object', // string
            age: 18, // number 
        }
    )

    useEffect(() => {
        getListerUser()
    }, [])

    const getListerUser = () => {
        const URL = 'https://636b8f56ad62451f9fb53c68.mockapi.io/users'
        fetch('https://example.com/profile', {
            method: 'GET', // or 'PUT'  
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Success:', data);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    const listItem = listUser.map((item, index) => (

        <tr key={index}>
            {/* Khi dung map, vong lap phai su dung key de co dinh so luong vong lap, vi du 3 oject thi render ra 3 object thoi,  */}
            {/* tranh truong hop co UI nhung hong hien object ra */}
            <th scope="row">{item.number}</th>
            <td>{item.name}</td>
            <td>{item.age}</td>
        </tr>

    )


    )
    const [colorState, setcolorState] = useState<String>('red')
    //useState<O day la dinh nghia kieu du lieu> (Gia tri mac dinh)
    const [disabled, setdisabled] = useState<String>('false')
    const isChange = true
    //Trong EVENT ( VD nhu onClick ) thi phai co 1 action
    const handleChangeRed = () => {
        console.log("red");
        setcolorState("red")

    };

    const handleChangeBlue = () => {
        console.log("blue");
        setcolorState("blue")

    };
    // handleChangeRed, handleChangeBlue la mot action
    return (
        <>
            <div style={{ color: `${disabled ? colorState : '150'}`, }}>ChangeColor</div>
            {/* Trong style la mot object */}

            <button onClick={handleChangeRed} disabled={colorState === 'red' ? true : false}>RED</button>
            {/* hoac co the viet: <button onClick={handleChangeRed} disabled={colorState === "red"}>RED</button> */}


            <button onClick={handleChangeBlue} disabled={colorState !== 'red' ? true : false}>BLUE</button>

            {/* KHONG KHUYEN KHICH VIET FUNTION INLINE, CO NGHIA LA VIET LEN MOT BUTTON LUON */}


            <div>{user.name}</div>
            <div>{user.age}</div>


            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">NAME</th>
                        <th scope="col">AGE</th>

                    </tr>
                </thead>
                <tbody>
                    {listItem}
                </tbody>
            </table>
        </>

        // O day chi duoc tra ve 1 phan tu, co nghia la chi co 1 div
        // Neu su dung nhieu phan tu thi them <> div, div .... </>
    )
}

export default ChangeColor



