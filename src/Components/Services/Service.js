import React from 'react'
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { BsFillSuitHeartFill,BsBasketFill ,BsHandThumbsUpFill,BsGrid1X2Fill,BsPaletteFill,BsFillVinylFill} from "react-icons/bs";
import "./service.css";

const Service = () => {
  return (
    <>
      <div className="service-wrapper">
        <div className="service-head">
            <div className="service-title">
              <h1>  Our Services <MdOutlineMiscellaneousServices/></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos cupiditate excepturi ab magni beatae nisi maiores fugit accusantium totam laboriosam quibusdam distinctio deserunt similique ex odit aut vero, voluptate rerum.</p>
            </div>
        </div>
        <div className="service-body">
            <div className="service-items">
                <div className="sevice-row1">
                    <div className="first-box">
                      <div className="service-icon">
                      <  BsFillSuitHeartFill className='icon'/>
                      </div>
                      <div className="service-text">
                       <h3 className="s-head">Concept Design</h3>      
                       <p className="s-para"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, culpa.
</p>                </div>
                    </div>
                    <div className="first-box">
                      <div className="service-icon">
                      <  BsBasketFill className='icon'/>
                      </div>
                      <div className="service-text">
                       <h3 className="s-head">Luxuriour Product</h3>      
                       <p className="s-para"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, culpa.
</p>                </div>
                    </div>
                    <div className="first-box">
                      <div className="service-icon">
                      <  BsHandThumbsUpFill className='icon'/>
                      </div>
                      <div className="service-text">
                       <h3 className="s-head">Wow Factors</h3>      
                       <p className="s-para"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, culpa.
</p>                </div>
                    </div>

                    <div className="first-box">
                      <div className="service-icon">
                      <  BsGrid1X2Fill className='icon'/>
                      </div>
                      <div className="service-text">
                       <h3 className="s-head">Amazing Concept</h3>      
                       <p className="s-para"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, culpa.
</p>                </div>
                    </div>
   
                    <div className="first-box">
                      <div className="service-icon">
                      <  BsPaletteFill className='icon'/>
                      </div>
                      <div className="service-text">
                       <h3 className="s-head">Beauty colors</h3>      
                       <p className="s-para"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, culpa.
</p>                </div>
                    </div>

                    <div className="first-box">
                      <div className="service-icon">
                      <  BsFillVinylFill className='icon'/>
                      </div>
                      <div className="service-text">
                       <h3 className="s-head">Cool Items</h3>      
                       <p className="s-para"> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt, culpa.
</p>                </div>
                    </div>
                </div>
                {/* <div className="sevice-row2">
                   
                  
                   
                </div> */}
            </div>
        </div>
      </div>
    </>
  )
}

export default Service;
