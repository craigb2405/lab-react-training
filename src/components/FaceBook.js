import profiles from '../data/berlin.json'

function FaceBook() {
    

const profile = profiles.map((indProfile) => {
  return (
    <div className="container">
    <div className='profile'>
        <div className="imageIt7"><img src={indProfile.img} alt={indProfile.firstName}/></div>
        <div className="textIt1">
        <b>First Name:</b> {indProfile.firstName}
        <b>Last Name:</b> {indProfile.lastName}
        <b>Country:</b> {indProfile.country}
        <b>Type:</b> {indProfile.isStudent}
        </div>
    </div>

    </div>
  )
}
)
return (
    <div>{profile}</div>
)
}
export default FaceBook
