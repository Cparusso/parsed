import React, { Component, Fragment} from 'react';

const CheckBox = ({data}) => {
  return (
    <Fragment>
      <input className='checkbox' id={data} type='checkbox' value={data.split('_').join(' ')} />
      <label for={data}>
        <span className="checkbox-words">{data.split('_').join(' ')}</span>
        <img className="check-img" src="http://icons.iconarchive.com/icons/paomedia/small-n-flat/1024/sign-check-icon.png"/>
      </label>
    </Fragment>
  )
}

export default CheckBox;
