import React from 'react'

const Header = (props) => {
  return (
    <div>
             <div id="navbar_airblock" class="card mx-3 my-3 shadow sticky-top " style="border-radius: 20px; border: transparent; background-color: rgba(255, 255, 255, 0.863); backdrop-filter: blur(6px);">
                <nav class="navbar navbar-expand-lg navbar-light bg-transparent card"  style="border: transparent;">
                    <div class="container-fluid">
                        <a class="navbar-brand" href="#">
                            <img src="../static/img/tp_background.png" width="150" height="50" alt=""/>
                        </a>

                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item ml-5 mr-3">
                            <a class="nav-link" aria-current="page" href="#">Dashboard</a>
                        </li>
                        <li class="nav-item mr-3">
                            <a class="nav-link" href="#">Tracker</a>
                        </li>
                      
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Find Me
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a class="dropdown-item" href="#">Find Servicer</a></li>
                            <li><a class="dropdown-item" href="#">Find Parts</a></li>
                            </ul>
                        </li>
                    
                        </ul>

                        
                    </div>

                    <div >
                        <a href="../Common/notification.html" class="mx-2"style="text-decoration: none;" >
                            <img src="../static/img/bell.png" width="18" height="20"/>
                        </a>
                        <a href="owner_profile.html" style="text-decoration: none;">
                            <span class="mx-2" style="color: black;">Jack Ryan</span>
                            <img src="https://www.w3schools.com/howto/img_avatar.png" width="50" class="rounded-circle border" height="50"/>
                        </a>
                        
                    </div>
                    </div>
                </nav>
            </div>

    </div>
  )
}

export default Header