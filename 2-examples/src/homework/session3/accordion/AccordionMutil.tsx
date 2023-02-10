import { log } from 'console'
import React, { useEffect, useState } from 'react'
import styles from './AccordionMutil.module.css'
type Props = {}

function AccordionMutil(props: Props) {

    const [tabs, setTabs] = useState([
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

    const [activeTabs, setActiveTabs] = useState<number[]>([])

    const [stateTab, setStateTab] = useState<number>()
    function handleClick(index: number) {
        setStateTab(index)
        if (activeTabs.includes(index)) {
            setActiveTabs(activeTabs.filter((clearTab) => clearTab !== index))
        } else {
            setActiveTabs([...activeTabs, index])
        };

        console.log(activeTabs.includes(index))
        console.log(activeTabs)
    }


    console.log(activeTabs)

    const renderALL =
        (
            <div id="headingOne">
                {tabs.map((tab, index) => (

                    <div className={` card border-grey mb-3 border-1`}  >
                        <button
                            key={tab.id}
                            onClick={() => { handleClick(index); }}
                            className={`${activeTabs.includes(index) ? styles.active : styles.unactive} card-header d-flex justify-content-between`}
                        >
                            {tab.title}
                        </button>
                        <div className={`${activeTabs.includes(index) ? styles.content__show : styles.content}`}
                        >
                            {activeTabs.includes(index) &&
                                <p
                                    className={` ${activeTabs.includes(index) ? styles.content__P__show : styles.content}  px-2 py-2 `}>{tabs[index].content}</p>
                            }

                        </div>

                    </div>

                ))}

            </div>
            // {/* {tabs.map( (item, index) => (
            //     <p>
            //     {activeTabs.includes(index) && item.content}
            //     </p>
            // ))} */}


        )

    return (
        <>
            <div className="container">
                <div className="warraper">
                    <div className="row">
                        <div className="col-6">
                            ONE AT A TIME
                            {renderALL}


                        </div>
                        <div className="col-6">
                            ONE AT A TIME - method 2



                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AccordionMutil