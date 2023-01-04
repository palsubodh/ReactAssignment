import React from 'react'

const Google = () => {
  return (
    <div>
         <div id="container">
        <div id="nav">
        <div class="nav">Gmail</div>
        <div class="nav">images</div>
        <div class="nav">Apps</div>
        <button id="signin">Sign In</button>
        </div>

        <div id="second-container">
            <img  width="25%"  src="https://cdn.telanganatoday.com/wp-content/uploads/2021/11/Google-Hyderabad-is-looking-to-hire-for-multiple-roles.jpg" alt="#"/>
            <input type="text" placeholder="Search your google or type a URL"/> 
        </div>

        <div id="button">
            <button class="button">Google Search</button>
            <button class="button">I'm Feeling Lucky</button>
        </div>

        
        

        <nav >
            <a href="" id="final">
            <div class="final">About</div>
            <div class="final">Advertising</div>
            <div class="final">Business</div>
            <div class="final">How Search Works</div>
        </a>
        </nav>
        <nav >
            <a id="final1" href="">
            <div class="final1">Policy</div>
            <div class="final1">Terms</div>
            <div class="final1">Settings</div>
            </a>
        </nav>
    </div>
    </div>
  )
}

export default Google