import React, { useState } from 'react'
import { idText } from 'typescript'
import styles from './TAB.module.css'
type Props = {}
function TAB(props: Props) {

    const [listState, setListState] = useState({
        activeObject: ``,
        objects: [
            {
                id: 1,
                title: 'HISTORY',
                content: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores.'
            },
            {
                id: 2,
                title: 'APPROACH',
                content: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?'
            },
            {
                id: 3,
                title: 'CULTURE',
                content: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est.'
            },
            {
                id: 4,
                title: 'METHOD',
                content: 'Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.'
            },
        ]
    })
    // const [activeState, setActiveState] = useState(1)
    // const handleActive = (index: number,) => {
    //     //Lay gia tri index tu viec CLICK
    //     setActiveState(index);
    //     // Truyen id da click vao function, sau do truyen ra bien activeState

    //     console.log(activeState +1);
        
    //     // renderContent(activeState + 1)
    //     //Sau khi duoc truyen id da click vao activeState, thi truyen du lieu vao renderContent
    // };

    // const [contentActive, setContentActive] = useState<string>()
    // function renderContent(index: number) {
    //     console.log(index);
    //     //Check id da click xem truyen dc chua
    //     const abc = listState?.objects?.find(
    //         item => item.id === index
            
    //     ) 
    //     //Tim mang tuong ung voi ID
    //     console.log(abc);
    //     const numberSelect = abc
    //     //Dua array da xac dinh tuong ung voi id de loc ra tiep

    //     let content = numberSelect?.content
    //     console.log(content);
    //     setContentActive(content)
      
    // }


    // const renderTitle = listState.objects.map((item, index) => (


    //     <li key={index} className="nav-item">

    //         <div >
    //             <a
    //                 onClick={() =>{
    //                     handleActive(index)
    //                 }}
    //                 className={`${activeState === index ? styles.active : styles.unactive} nav-link text-white`} >
    //                 {item.title}
    //             </a>

    //         </div>

    //     </li>


    // ))
    const [checkTab, setChecktab] = useState<number>()
    const handletabClick = (index: number) => {
        const numberTabClick = index +1
        setChecktab(numberTabClick - 1)
        console.log(numberTabClick);
        renderContent(numberTabClick)
        
    }
    const [listContent, setListContent] = useState<string>()
    function renderContent(index:number) {
        console.log(index);
        const arrayContent = listState?.objects.find(
            item => item.id === index
        )
        console.log(arrayContent);
        const content = arrayContent?.content
        setListContent(content)
    }
    const renderTitle =  listState.objects.map((item, index) => (
        <button
          key={index}
          onClick={ () => {
            handletabClick(index)
          }}
          className={`${checkTab === index ? styles.active : styles.unactive}`}
        >
          {item.title}
        </button>
    )
    )

    return (
        <>
            {/* <div >
                <ul className="nav justify-content-center d-flex flex-row">
                    {renderTitle}

                </ul>
            </div>
            <div className="nav justify-content-center d-flex flex-row text-center p-5" >
               
                
            </div>
            <div>
                
            </div> */}
            <div className="container">
                <div className="warraper">
                    {renderTitle}
                </div>
                <div className="content text-center">

                </div>
            </div>
        </>
    )
}

export default TAB