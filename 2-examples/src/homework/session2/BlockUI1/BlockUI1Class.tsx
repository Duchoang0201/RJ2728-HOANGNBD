import React, { Component } from 'react'
import styles from './BlockUI1.module.css'
interface Props  {
    title: string,
    bgTitle: string,
    percent: number,
    bgProcess: string,
}



class BlockUI1Class extends Component<Props> {

  render() {
    return (
        <div className="d-flex m-auto border mt-2 " style={{width: 650}}>
        <div className={`p-2 ${styles.brightness__Background} `} style={{ width: 150, backgroundColor: this.props.bgTitle, textAlign: "right",  }}>{this.props.title}</div>
        
        <div className='' style={{ width: 500 }}>
            <div className="p-2 " style={{ width: `${this.props.percent}%`, backgroundColor: this.props.bgProcess }}>{this.props.percent}%</div>
        </div>
    </div>
    )
  }
}

export default BlockUI1Class