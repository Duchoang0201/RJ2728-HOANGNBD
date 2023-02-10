import React from 'react';
import { useState } from "react";

interface IProps {
    title: string,
    bgTitle: string,
    percent: number,
    bgProcess: string,
}
const Componentsession01Class: React.FC<IProps> = (props) => {
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
        <div className="d-flex w-50 m-auto border mt-2 ">
            <div className="p-2 " style={{ width: 100, backgroundColor: bgTitle, textAlign: "right" }}>{title}</div>
            <div className="p-2 " style={{ width: 100, backgroundColor: bgTitle, textAlign: "right" }}>
                <button onClick={PlusPercent}>Plus</button>
                <button onClick={MinusPercent}>Minus</button>

            </div>
            <div style={{ width: 500 }}>
                <div className="p-2" style={{ width: `${percentState}%`, backgroundColor: bgProcess }}>{percentState}%</div>
            </div>
        </div>
    )
}

export default Componentsession01Class