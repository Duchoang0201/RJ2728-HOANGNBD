import React from 'react';
import BlockUI1 from './BlockUI1/BockUI1'
import BlockUI2 from './BlockUI2/BlockUI2';

function Sesion02() {
  
  return (
    <React.Fragment>

    <BlockUI1 title={'BANDWIDTH'} bgTitle={'#e45f5a'} percent={20} bgProcess={'#e45f5a'} />
    <BlockUI1 title={'STORAGE'} bgTitle={'#17ade2'} percent={50} bgProcess={'#17ade2'} />
    <BlockUI1 title={'USERS'} bgTitle={'#3faf64'} percent={70} bgProcess={'#3faf64'} />
    <BlockUI1 title={'VISITORS'} bgTitle={'#ffc90e'} percent={30} bgProcess={'#ffc90e'} />
    <BlockUI1 title={'EMAILS'} bgTitle={'#d993eb'} percent={45} bgProcess={'#d993eb'} />
    <BlockUI1 title={'BASIC'} bgTitle={'#ff8bef'} percent={80} bgProcess={'#ff8bef'} />
    <BlockUI1 title={'OTHERS'} bgTitle={'#5898f0'} percent={37} bgProcess={'#5898f0'} />
    
    dddddddddddddddddddddddddd
    dddddddddddddddddddddddddd
    dddddddddddddddddddddddddd
    dddddddddddddddddddddddddd
    
    <BlockUI2 icon={'a'} title={'HTML'} bgTitle={'#77d273'} percent={70}  />
    </React.Fragment>
  );
}

export default Sesion02;