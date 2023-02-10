import React, { useState } from 'react';

type Props = {};

const ABCD = (props: Props) => {
  const [tabs, setTabs] = useState([
    { id: 1, title: 'Tab 1', content: require('./IMG/GALLERY1.jpg') },
    { id: 2, title: 'Tab 2', content: require('./IMG/GALLERY2.jpg') },
    { id: 3, title: 'Tab 3', content: require('./IMG/GALLERY3.jpg') },
  ]);
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (index: number) => {
    setActiveTab(index);
  };

  return (
    <div className="container">
    <div className='warraper'>
      <div className="tab-content">
        <img style={{ width: 900}}  src={tabs[activeTab].content} alt="" />
     
      </div>
      <div className="tabs d-flex flex-row">
        {tabs.map((tab, index) => (
          <div className="SHOW__ALL">
            <button className='border-0 px-0 py-0' key={tab.id} onClick={() => handleTabClick(index)}>
              
              <img style={{ width: 300}} src={tab.content} alt="" />
            </button>
          </div>
        ))}
      </div>
      
    </div>
    </div>
  );
};

export default ABCD;
