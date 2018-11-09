import React, { Component, Fragment} from 'react';

const CheckBox = ({data}) => {
  return (
    <Fragment>
      <input type='checkbox' checked='true' value={data.split('_').join(' ')} />{data.split('_').join(' ')}
    </Fragment>
  )
}

export default CheckBox;
