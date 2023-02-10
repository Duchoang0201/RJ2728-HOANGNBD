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
  const [numbertabClick, setNumberTabclick] = useState<number>(0)
  //State nay dung de check tab da click dua tren ID
  const handleClick = (index: number) => {
    const numberArray = index + 1
    setNumberTabclick(numberArray - 1)
    //Dua INDEX vao State numbertabClick
    // handleContent(numberArray)
    //Dua ID vao function handleContent
  }

  //Sau khi lay duoc ID, tab da Click thi  render content tuong ung title dua theo ID

  // const [renderContent, setRenderContent] = useState<string>()
  // // State renderContent voi kieu du lieu la STRING ( content )
  // function handleContent(id: number) {
  //   console.log(id);
  //   //Nhan bien ID tu function handleClick ( check ID da nhan)
  //   const elm = listState?.objects.find(
  //     item => item.id === id
  //   )
  //   // Luu gia tri object vao bien elm
  //   // find out object tuong ung voi moi ID
  //   console.log(elm);
  //   const content = elm?.content
  //   setRenderContent(content)

  // }


  const abc = listState.objects.map((item, index) => {
    if (numbertabClick === index) {
      return <div key={index} 
      className="text-center p-3">
        {item.content}</div>
    }
    return null
  })


  const renderTitle = listState.objects.map((item, index) => (
    <button
      key={index}
      onClick={() => {
        handleClick(index)
      }}
      className={`${numbertabClick === index ? styles.active : styles.unactive} `}
    >
      {item.title}
    </button>
  )
  )

  return (
    <>
      <div className="container">
        <div className="warraper nav justify-content-center d-flex flex-row">
          {renderTitle}
        </div>
        <div className="warraper justify-content-center d-flex flex-row text-center p-3">
          {/* {renderContent} */}
          {abc}
        </div>
      </div>


    </>
  )
}

export default TAB