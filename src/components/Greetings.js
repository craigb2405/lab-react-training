function Greetings(lang) {
     if (lang.lang==="en"){
        return (
            <div className="container">                Hello {lang.children}
            </div>
          )
    } else if (lang.lang==="fr"){
        return (
            <div className="container">
                Bonjour {lang.children}
            </div>
          )
    } else if (lang.lang==="de"){
        return (
            <div className="container">
                Hallo {lang.children}
            </div>
          )
        }
   
  
}

export default Greetings
