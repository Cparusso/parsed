import React, { Component, Fragment} from 'react';

const CheckBox = ({data}) => {
  return (
    <Fragment>
      <input className='checkbox' id={data} type='checkbox' value={data.split('_').join(' ')} />
      <label for={data}>{data.split('_').join(' ')}</label>
    </Fragment>
  )
}

export default CheckBox;
