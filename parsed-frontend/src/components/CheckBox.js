import React, { Component, Fragment} from 'react';

const CheckBox = ({data}) => {
  return (
    <Fragment>
      <input className='checkbox' type='checkbox' value={data.split('_').join(' ')} />{data.split('_').join(' ')}
    </Fragment>
  )
}

export default CheckBox;
