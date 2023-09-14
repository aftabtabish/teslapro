import React from 'react';

export default function Ban(props) {
  const { title, subtitle, description, buttonText1, buttonText2, note, linkText,hideButton2 } = props;

  return (
    <div>
      <div className='ban'>
        <h1 className='name'>{title}</h1>
        <h2 className='price'>{subtitle}</h2>
        <h3 className='desc'>{description}</h3>
        <div className='buttons'>
        <button id='singbtn' className="btn1">{buttonText1}</button>
         {hideButton2 &&<button className='btn2'>{buttonText2}</button>}
        </div>
        <h4 className='note'>{note}</h4>
        <h5 className='lining'><a href='#'>{linkText}</a></h5>
      </div>
    </div>
  );
}
