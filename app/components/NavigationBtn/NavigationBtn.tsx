import './navigationbtn.css';

const NavigationLeftButton = () => {
  return (
    <div className='arrow-wrapper'>
      <span className='arrow first-arrow first-arrow-left left-arrow'></span>
      <span className='arrow second-arrow second-arrow-left left-arrow'></span>
      <span className='arrow third-arrow  third-arrow-left left-arrow'></span>
    </div>
  )
};

const NavigationRightButton = () => {
  return (
    <div className='arrow-wrapper'>
      <span className='arrow first-arrow right-arrow first-arrow-right'></span>
      <span className='arrow second-arrow right-arrow second-arrow-right'></span>
      <span className='arrow third-arrow right-arrow third-arrow-right'></span>
    </div>
  )
}

export { NavigationLeftButton, NavigationRightButton };