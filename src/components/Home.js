import React from 'react';
class Home extends React.Component{
    render(){
        return(
    <div> 
            <div class="main">
        <div class="navbar">
            <div class="icon">
                <h2 class="logo"> Gym </h2>
            </div>
            <div class="menu">
                <ul>
                    <li><a href="#">USER</a></li>
                    <li><a href="#">SUBSCRIPTION</a></li>
                    <li><a href="#">MEDICAL RECORD</a></li>
                    <li><a href="#">TRAINER DETAILS</a></li>
                    <li><a href="#">PAYMENT</a></li>
                </ul>
            </div>

            <div class="search">
                <input class="srch" type="Search" name="" placeholder="Click here to Type"/>
                <a href="#"> <button class="btn">Search</button></a>
            </div>
        </div>
        <div class="content">
           <h1>HUSTLE<br/><span>for that</span><br/>MUSCLE</h1> 
           <p class="par">Finally! You gave up on Zomato and Swiggy and instead came to our website<br/> Its time to give you that dream Bod!<br/> Till then, DONT GIVE UP!</p>
           <button class="cn"><a href="#">JOIN US</a></button>

           <div class="form">
               <h2>Login Here!</h2>
               <input type="email" name="email" placeholder="Enter Email Here"/>
               <input type="password" name="" placeholder="Enter the Password Here"/>
               <button class="btnn"><a href="#">Login</a></button>

               <p class="link">Dont have an account?<br/>
               <a href="#">Sign up </a> here </p>
            </div>
                    
        </div>
        </div>
      </div>
            
    

        );
    }
}

export default Home;