import React from 'react';
import { useState } from "react";
import styles from './BlockUI1.module.css'


interface IProps {
    title: string,
    bgTitle: string,
    percent: number,
    bgProcess: string,
}
const BlockUI1: React.FC<IProps> = (props) => {
    const { title, bgTitle, percent, bgProcess } = props;
    const [percentState, setPercentState] = useState<number>(0)

    const PlusPercent = () => {

        if (percentState < 10) {
            setPercentState(percentState + 1);
        }
        console.log('Plus');
    }
    const MinusPercent = () => {

        if (percentState > 0) {
            setPercentState(percentState - 1);
        }
        console.log('Minus');
    }

    return (
        <div className="d-flex m-auto border mt-2 " style={{width: 650}}>
            <div className={`p-2 ${styles.brightness__Background} `} style={{ width: 150, backgroundColor: bgTitle, textAlign: "right",  }}>{title}</div>
            
            <div className='' style={{ width: 500 }}>
                <div className="p-2 " style={{ width: `${percent}%`, backgroundColor: bgProcess }}>{percent}%</div>
            </div>
        </div>
    )
}

export default BlockUI1