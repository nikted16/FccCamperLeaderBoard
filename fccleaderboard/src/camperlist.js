import React from 'react';
import CamperListItem from './list';

const CamperList = ({campers}) => {

  const Items = campers.map((camper,index) => {
    return <CamperListItem key={index} camper ={camper} number ={index+1} />
  });
  return(
    <div>
     <table className ="table table-bordered">
      <thead>
        <tr>
          <th>#</th>
          <th>UserName</th>
          <th>Last 30 days</th>
          <th>All Time</th>
        </tr>
      </thead>
       <tbody>
         {Items}
       </tbody>
     </table>
     </div>
  );
}

export default CamperList;
