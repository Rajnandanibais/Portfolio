import React from 'react'

function Header() {
  return (
    <div className="heade-main">
    <div className="header">
    <div className="info">
    <h5>Hello , I'm</h5>
    <h2> Rajnandani Bais</h2>
        <h6>  Full Stack Developer </h6>
        <div className="info-link">
       <a href="https://www.linkedin.com/in/rajnandani-bais-197a99184/" className="link">
       <img src="https://cdn.iconscout.com/icon/free/png-256/linkedin-182-675325.png" alt="" width="40px" height="40px" /></a>
       <a href="https://github.com/Rajnandanibais" className="linkk"><img src="https://image.flaticon.com/icons/png/512/25/25231.png" alt=""
       width="40px" height="40px" 
       /></a>
       <a href="https://www.instagram.com/nandani.singh/"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Black_Instagram_icon.svg/1024px-Black_Instagram_icon.svg.png"
        alt=""   width="35px" height="35px" /></a>
         <section>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgGebn9GQB-lxUm3ALHiQKXpVpA_YAdD2n4Q&usqp=CAU"
   alt="" width="20" height="20px" /><h6>rajnandanisinghbais@gmail.com</h6></section>
        </div></div>
    <div className="imagee">
    <img src="image\imag.JPG"alt="img" width="250px"
  height="250px"/>
    </div>
    
    </div>
    </div>
      
    
  )
}

export default Header;