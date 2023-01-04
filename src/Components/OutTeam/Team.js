import React from 'react'
import "./team.css";
import { BsPeopleFill ,BsFacebook,BsTwitter,BsGoogle,BsLinkedin,BsStarFill} from "react-icons/bs";
import CO from "../img/co-founder.webp";
import CE from "../img/CEO.jpg";
import D1 from "../img/Designer.jpg";
import D2 from "../img/design.webp";
import C1 from "../img/client1.jpg";
import C2 from "../img/client2.jpeg";
import C3 from "../img/client3.jpg";

const Team = () => {
  return (
    <>
    <div className="team-wrapper">
        <div className="design-text">
            <p className="main-text">We Design Awesome things for You</p>
            <p className="d-text">Louis Vuitton is on a perpetual mission to explore new horizons </p>
            <p className="lower-text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel quaerat dolor nostrum modi. Aliquid voluptates est, tenetur quisquam cum asperiores!</p>

        </div>
        <div className="team-box">
        <div className="team-head">
            <div className="team-title">
              <h1>  Our Team <BsPeopleFill/> </h1>
                <p>Louis, Georges and Gaston-Louis Vuitton  pose with factory workers in front of a horse-drawn delivery van. Asnières, 1888. </p>
            </div>
            <div className="team-card">
                <div className="t-card">
                    <div className="card-img">
                        <img className='cimg' src={CO} alt="" />
                    </div>
                    <div className="card-text">
                        <p className="name">Bernard Arnault</p>
                        <p className="post">Co-founder</p>
                        <div className="socials">
                            <BsFacebook/>
                            <BsTwitter/>
                            <BsGoogle/>
                            <BsLinkedin/>
                        </div>
                    </div>
                </div>

                <div className="t-card">
                    <div className="card-img">
                        <img className='cimg' src={CE} alt="" />
                    </div>
                    <div className="card-text">
                        <p className="name">Michael Burke</p>
                        <p className="post">CEO</p>
                        <div className="socials">
                            <BsFacebook/>
                            <BsTwitter/>
                            <BsGoogle/>
                            <BsLinkedin/>
                        </div>
                    </div>
                </div>

                <div className="t-card">
                    <div className="card-img">
                        <img className='cimg' src={D1} alt="" />
                    </div>
                    <div className="card-text">
                        <p className="name">Virgil Abloh</p>
                        <p className="post">Designer</p>
                        <div className="socials">
                            <BsFacebook/>
                            <BsTwitter/>
                            <BsGoogle/>
                            <BsLinkedin/>
                        </div>
                    </div>
                </div>

                <div className="t-card">
                    <div className="card-img">
                        <img  className='cimg' src={D2} alt="" />
                    </div>
                    <div className="card-text">
                        <p className="name">Nicolas Ghesquière</p>
                        <p className="post">Designer</p>
                        <div className="socials">
                            <BsFacebook/>
                            <BsTwitter/>
                            <BsGoogle/>
                            <BsLinkedin/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <div className="clients-box">
        <div className="clients-head">
            <div className="clients-title">
              <h1>  What our clients says  
                <span className="c-icon">
                <BsStarFill/> <BsStarFill/> <BsStarFill/> </span> </h1>
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur delectus et exercitationem animi eligendi, totam velit voluptatem obcaecati dolores magnam, fuga maiores, est nihil dolorum? </p>
            </div>
        </div> 

        <div className="client-cardbox">
            <div className="client-card">
                <div className="review">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nulla id nobis aut assumenda totam inventore excepturi nesciunt quam temporibus?</p>
                </div>
                <div className="client-data">
                    <img src={C1} alt="" className="client-img" />
                    <div className="c-name">
                        <p className='cl-name'>Cade Meyer</p>
                        <p className='cl-text'>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div className="client-card">
                <div className="review">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nulla id nobis aut assumenda totam inventore excepturi nesciunt quam temporibus?</p>
                </div>
                <div className="client-data">
                    <img src={C2} alt="" className="client-img" />
                    <div className="c-name">
                        <p className='cl-name'>Joselyn Mitchell</p>
                        <p className='cl-text'>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>
            <div className="client-card">
                <div className="review">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem nulla id nobis aut assumenda totam inventore excepturi nesciunt quam temporibus?</p>
                </div>
                <div className="client-data">
                    <img src={C3} alt="" className="client-img" />
                    <div className="c-name">
                        <p className='cl-name'>Darren Russo</p>
                        <p className='cl-text'>Lorem ipsum dolor sit amet.</p>
                    </div>
                </div>
            </div>

        </div>
        </div>
    </div>
      
    </>
  )
}

export default Team;
