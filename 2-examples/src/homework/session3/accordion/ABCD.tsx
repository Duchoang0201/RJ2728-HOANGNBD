import { log } from 'console';
import React, { useState } from 'react';

type Props = {};

const ABCD = (props: Props) => {
  const [tabs, setTabs] = useState([
    { id: 1, title: 'Tab 1', content: 'Tab 1 content' },
    { id: 2, title: 'Tab 2', content: 'Tab 2 content' },
    { id: 3, title: 'Tab 3', content: 'Tab 3 content' },
  ]);
  const [activeTabs, setActiveTabs] = useState<number[]>([]);
  const handleTabClick = (index: number) => {

    const test = activeTabs.includes(index)
    console.log(test)
    if (activeTabs.includes(index)) {
      setActiveTabs(activeTabs.filter((tabIndex) => tabIndex !== index)
      );
    } else {
      setActiveTabs([...activeTabs, index]);
    }
    console.log(...activeTabs, index)
  };


  return (
    <div>
      <div className="tabs d-flex flex-column">
        {tabs.map((tab, index) => (
          <div className="SHOW__ALL">
            <button key={tab.id} onClick={() => handleTabClick(index)}>
              {tab.title}
            </button>
            {activeTabs.includes(index) && (
              <p>{tabs[index].content}</p>
            )}
            {/* {activeTabs.includes(index) && activeTab === index ? <p>{tab.content}</p> : null} */}
          </div>
        ))}
      </div>
      <div className="tab-content">
        {/* {tabs.map((tab, index) => (
          <div key={tab.id}>
            {activeTabs.includes(index) && <p>{tab.content}</p>}
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default ABCD;
