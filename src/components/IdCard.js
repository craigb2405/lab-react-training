
function IdCard({lastName, firstName, gender, height, birth, picture}) {
   return (
    <div className="container">
        <div className="imageIt1"><img src={picture} alt={firstName}/></div>
        <div className="textIt1">
        <b>First Name:</b> {firstName}
        <b>Last Name:</b> {lastName}
        <b>Gender:</b> {gender}
        <b>Height:</b> {height}
        <b>Birth:</b> {birth.toString()}
        </div>
    </div>
  )
}

export default IdCard
