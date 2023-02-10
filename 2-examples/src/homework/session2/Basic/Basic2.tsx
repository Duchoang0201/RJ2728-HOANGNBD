import React from 'react';
import { IMAGES } from '../basic-images/images'
interface IProps {
    consumption: number,
    price: number,

}
const Basic2: React.FC<IProps> = (props) => {
    const { price, consumption } = props;

    return (

        <div className="card mb-3 border-0" >
            <div className="row g-0">
                <div className="col-md-2">

                </div>

                <div className="col-md-2 border ">
                    <div className="d-flex flex-column">
                        <img src={IMAGES.LOGO2} alt="" className='center' style={{ width: 275 }} />
                        <div className="card-body d-flex flex-column p-4 " style={{ paddingLeft: 0, }}>
                            <p className="card-text border-bottom ">YOUNG SHOP</p>
                            <p className="card-text" style={{ color: 'blue', }}>Samsung UHD TV 24inch</p>
                            <p className="card-text" style={{ color: 'red', }}>{consumption}</p>
                            <p className="card-text">${price}</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    );
}

export default Basic2;