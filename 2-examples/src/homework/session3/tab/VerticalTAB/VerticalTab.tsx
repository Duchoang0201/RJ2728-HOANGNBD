import React, { useState } from 'react'
import styles from './VerticalTab.module.css'
type Props = {}

function VerticalTab(props: Props) {


    const [listState, setListState] = useState([
        {
            id: 1,
            title: 'HISTORY',
            title2: "LET'S TALK TABS",
            content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.'
        },
        {
            id: 2,
            title: 'APPROACH',
            title2: "COOL TABS",
            content: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'
        },
        {
            id: 3,
            title: 'CULTURE',
            title2: "SHORTER TABS",
            content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est.'
        },
        {
            id: 4,
            title: 'METHOD',
            title2: "LONGER TABS",
            content: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.'
        },

    ])

    const [checkTab, setCheckTab] = useState(0)
    const handleClick = (index: number) => {
        setCheckTab(index)
    }


    const renderTitle = listState.map((item, index) => {
        if (checkTab === index) {
            return (
                <div className='p-2'
                    key={index}

                >
                    {item.title2}
                </div>
            )
        }
    })
    const renderContent = listState.map((item, index) => {
        if (checkTab === index) {
            return (
                <div className='p-2'
                    key={index}

                >
                    {item.content}
                </div>
            )
        }
    })


    const renderButton = listState.map((item, index) => (
        <button
            key={index}
            onClick={() => handleClick(index)}
            className={`${checkTab === index ? styles.active : styles.unactive} border-0 mt-2  `}
        >
            {item.title}
        </button>
    ))

    return (
        <>
            <div>VerticalTab

                <div className="container">
                    <div className="warraper">

                        <div className="row">
                            <div className="col-4 d-flex flex-column ">

                                {renderButton}

                            </div>
                            <div className="col-8">
                                {renderTitle}

                                <hr />
                                {renderContent}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default VerticalTab