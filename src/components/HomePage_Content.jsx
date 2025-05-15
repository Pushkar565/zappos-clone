import HERO from "/src/assets/Homepage/HERO1.jpg"

const HomePage_Content = () => {
  return (
    
    <>
    <div className='ParentDiv'>

      <div className='banner'>
       <picture>
        <img src={HERO} alt="bannerImg" />
       </picture>
      </div>

    </div>
    </>
  )
}

export default HomePage_Content