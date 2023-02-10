import React from 'react';
import Styles from './components/common/Header.module.css'
import './App.css';
import Header from './components/common/Header';
import JSX from './components/1-JSX/JSX'
import Session02 from './homework/session2/Session02'
import Basic1 from './homework/session2/Basic/Basic1';
import Basic2 from './homework/session2/Basic/Basic2';
import Componentsession01 from './components/componentssession01/Componentsession01';
import CountClassComponent from './components/examples/CountClassComponent';
import CountFunctionalComponent from './components/examples/CountFunctionalComponent';
import ChangeColor from './components/ex/ChangeColor';
import Networking from './components/ex/Networking';
import TAB from './homework/session3/tab/TAB';
import TabMethod2 from './homework/session3/tab/TabMethod2'
import VerticalTab from './homework/session3/tab/VerticalTAB/VerticalTab';
import Accordion from './homework/session3/accordion/Accordion'
import AccordionMutil from './homework/session3/accordion/AccordionMutil'
import ABCD from './homework/session3/accordion/ABCD'
import Gallery from './homework/session3/gallery/Gallery';
import Gallery2 from './homework/session3/gallery/Gallery2';
import Gallery3 from './homework/session3/gallery/Gallery3';
import UserDetail from './components/pages/User/Detail/UserDetailD';
import Formsignup from './components/pages/User/Form/Formsignup';
import Formsignin from './components/pages/User/Form/Formsignin';
import BaseWebRouter from './components/pages/BaseWebRouter';

function App() {

  return (
    <React.Fragment>
      {/* <JSX />
    
    <Basic1 />
    <Basic2 consumption={2} price={599} />
 
    <Session02  />
    <Componentsession01 title={'abc'} bgTitle={'#333'} percent={10} bgProcess={'#333'} />
    <CountClassComponent />
    <CountFunctionalComponent  />
    <ChangeColor />
    <TAB />

    <TabMethod2 />
    <ABCD />
    <VerticalTab />
    <Accordion />
    <AccordionMutil />
    Gallery
    <Gallery />
    Gallery2
    <Gallery2 />
    Gallery3
    <Gallery3 />
     */}
     
      {/* <Networking />
      <UserDetail />
      <Formsignup />
      <Formsignin /> */}
      <BaseWebRouter />
    </React.Fragment>
  );
}

export default App;
