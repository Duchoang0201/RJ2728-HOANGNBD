import React from 'react'

type Props = {}

interface State {
    userId: string | number ;
    
}
function NetworkingCU(props: Props) {

  
    return (
        <>
            <div>NetworkingCU</div>
            <div className='d-flex flex-column' style={{ width: 100 }}>
                <input type="text" placeholder="Username" aria-label="Username" />
                <input type="text" placeholder="age" aria-label="age" />
                <button ></button>
            </div>
        </>
    )
}

export default NetworkingCU