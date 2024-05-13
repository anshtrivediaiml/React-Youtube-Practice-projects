import React from 'react'

export default function SideBar(props) {
    const {handleToggleModal,data} = props;
  return (
    <div className='SideBar'>
        <div className="bgOverlay"></div>
      <div className='sideBarContents'>
      <h2>{data?.title}</h2>
      <div className='description'>
        <p className='descriptionTitle'>Description</p>
        <p>{data?.explanation}</p>
        </div>
        <button onClick={handleToggleModal}>
        <i className="fa-solid fa-right-long"></i>
        </button>
    </div>
      </div>
  )
}
