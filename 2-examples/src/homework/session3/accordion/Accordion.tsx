import React, { useEffect, useState } from 'react'
import styles from './Accordion.module.css'
type Props = {}

function Accordion(props: Props) {

    const [listState, setListState] = useState([
        {
            id: 1,
            title: 'SIMPLE PANELS',
            content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.'
        },
        {
            id: 2,
            title: 'TOGGLE INFORMATION',
            content: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'
        },
        {
            id: 3,
            title: 'NICE TOUNCH',
            content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est.'
        },

    ])
    const [checktab, setCheckTab] = useState(0)
    const handleClick = (index: number) => {
        console.log(index);
        setCheckTab(index)
    }
    const renderTitle = listState.map((item, index) => (
        <div className={`card border-grey mb-3 border-1`}  >
            <div
                style={{ cursor: 'pointer' }}
                key={index}
                className={`${checktab === index ? styles.active : styles.unactive} card-header d-flex justify-content-between`}
                onClick={() => { handleClick(index) }}
            >
                {item.title}
                <span >{checktab === index ? '+' : '-'}</span>
            </div>
            <div

                className={`${checktab === index ? styles.content__show : styles.content} ${styles.accordion}  px-3`}>
                {item.content}
            </div>


        </div>
    ))


    const [checktabMT, setCheckTabMT] = useState<number>()
    const handleClickMT = (index: number) => {
        setCheckTabMT(index)
    }



    // const renderContent = listState.map( (item, index) => {
    //     if(checktabMT === index){
    //     return(
    //         <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
    //                 <div className="accordion-body">
    //                     {item.content}
    //                 </div>
    //             </div>
    //     )
    // }}
    // )

    const renderMTTT = listState.map((item, index) => (

        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                    <button
                        key={index}
                        onClick={() => handleClickMT(index)}
                        className={ `accordion-button`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne">
                        {item.title}
                    </button>
                </h2>
                <div className={`${checktabMT === index ? styles.content__show : styles.content} ${styles.accordion}  px-3`}
                >{checktabMT === index ? item.content : null}</div> 
            </div>

        </div>
    ))



    return (
        <>
            <div>Accordion</div>
            <div className="container">
                <div className="warraper">
                    <div className="row">
                        <div className="col-6">
                            ONE AT A TIME
                            {renderTitle}


                        </div>
                        <div className="col-6">
                        ONE AT A TIME - method 2
                            {renderMTTT}


                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Accordion