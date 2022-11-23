import React from 'react';
import './DD4.css';
import Content from './DD4content';
import Background from './../DASHBOARD_COMPONENT/dashboardcomp';

function Destopfour() {
  return (
    <div>
      <Background
        content={<Content />}
      />
    </div>
  )
}

export default Destopfour
