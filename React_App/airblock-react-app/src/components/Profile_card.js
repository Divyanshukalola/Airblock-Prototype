import React from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsFillStarFill } from "react-icons/bs";

const Profile_card = (props) => {
    const openDetails = (elmnt, item) => {
        console.log(item)
        let element = document.getElementById(item);
        element.style.textDecoration = 'underline';

    }
  return (
    <div>
            <div className="card mx-3 my-3 bg-white shadow" style={{borderRadius: '20px', border: 'transparent'}}>
                
        
                <div className="card-header" style={{ backgroundImage: "url('https://www.cashadvance6online.com/data/archive/img/1457688761.jpeg')", borderRadius: '20px 20px 0 0', height: '230px'}}>
                    <img src="https://www.w3schools.com/howto/img_avatar.png" alt="avatar" style={{borderRadius: '50%', border: '2px solid white', marginTop: '10%'}} width="150"/>
                </div>
               
                <div className="card-body mx-3 my-3" style={{height: 'auto'}}> 
                    <div className="row text-right ">
                        <div className="col text-right">
                            <Row style={{ textAlign: 'right'}}>
    
                                <Col className='mt-1'>
                                    <p style={{color: '#adadadad'}}>Airblock Ratings: </p>
                                </Col>
                                <Col className="col-2" style={{ textAlign: 'left'}}>
                                <BsFillStarFill className='checked' style={{ marginRight: '5px'}}></BsFillStarFill>
                                <BsFillStarFill className='checked ' style={{ marginRight: '5px'}}></BsFillStarFill>
                                <BsFillStarFill className='checked' style={{ marginRight: '5px'}}></BsFillStarFill>
                                <BsFillStarFill className='unchecked' style={{ marginRight: '5px'}}></BsFillStarFill>
                                <BsFillStarFill className='unchecked' style={{ marginRight: '5px'}}></BsFillStarFill>
                                
                                </Col>
                            </Row>
                            
                          
                        </div>
                    </div>

                   <div className="row">
                        <div className="col-2 text-left ml-2">
                            <h4 style={{fontWeight: 'bolder'}}>Jack Ryan</h4>
                            
                        </div>
                        <div className="col">
                            <p style={{color: '#adadadad'}}>New York, NY, United States</p>
                        </div>
                   </div>

                   <div className="row ">
                    <div className="col ml-2">
                        <p>We have all the learjets.</p>
                    </div>
                   </div>

                   <div className="row ">
                    <div className="col ml-2">
                        <p style={{color: '#adadadad'}}>Status: Public</p>
                    </div>
                   </div>
                  

                </div>
                <hr/>
                <div className="row mb-0">
                    <div className="col">

                    </div>
                    <div className="col-9 text-center">
                        <ul style={{listStyleType: 'none'}}>
                        <div className="row">
                       
                            <div className="col mt-2">
                                <li style={{listStyle: 'none'}}><a href="javascript:void(0)" className="tags" onClick={() => openDetails(this,'About')} style={{color: 'black',textDecoration:'none'}}>About</a></li>
                            </div>
                            <div className="col mt-2">
                                <li style={{listStyle: 'none'}}><a href="javascript:void(0)" className="tags" onClick={() => openDetails(this,'Servicer')} style={{color: 'black',textDecoration:'none'}}>Servicer</a></li>
                            </div>
                            <div className="col mt-2">
                                <li style={{listStyle: 'none'}}><a href="javascript:void(0)" className="tags" onClick={ () =>openDetails(this,'RFQs')} style={{color: 'black',textDecoration:'none'}}>My RFQs</a></li>
                            </div>
                          
                            <div className="col-3">
                                <li style={{listStyle: 'none'}}><a href="javascript:void(0)"><button className="btn btn-primary" onClick={ () => openDetails(this,'WRO')} style={{color: 'white',textDecoration:'none'}}>Create New RFQ</button></a></li>

                            </div>
                        </div>
                    </ul>
                
                    </div>
                    <div className="col">

                    </div>
                </div>
      
            </div>


    </div>
  )
}

    



export default Profile_card