import React from 'react';

import styles from './BlockUI2.module.css'


interface IProps {
    icon: string,
    title: string,
    bgTitle: string,
    percent: number,
}
const BlockUI2: React.FC<IProps> = (props) => {
    const { icon, title, bgTitle, percent,  } = props;


    return (
        <div className="d-flex m-auto" style={{width: 650, height: 24,}}>
            <div style={{width: 150,}}>
                <div style={{paddingLeft: 20}}>{icon} {title}</div>
                <div></div>
            </div>
            <div className='br-50 border rounded-3' style={{width: 500}}>
                <div className='rounded-start' style={{backgroundColor: bgTitle, width: `${percent}%`}} >d</div>
            </div>
        </div>
    )
}

export default BlockUI2