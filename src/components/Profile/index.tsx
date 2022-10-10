import React from "react";
import Navbar from "../Navbar";
import HeroBanner from "../HeroBanner";
import logo from '../../images/Slogan.png';
import 'bootstrap/dist/css/bootstrap.css';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import avtar from '../../images//avtar_2.png';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import user from '../../images/user.jpg';
import edit from '../../images/Edit.png';
import { Link } from "react-router-dom";
import { ProgressBar } from "react-bootstrap";


function index() {
  return (
    <body>
      <Navbar />
       <div className="profile_page">
        {/* <div className="inner_page_hero_section">
         <div className="container">
         <h2>
         Player Profile
          </h2>
         </div>
        </div> */}
       <div className="container">
       <Row>
        <Col xs={4} className="p-0">
          <div className="avtar_block">
          <img src={avtar}/>
          <Link to="/"  className="total_scrore">Personality Test</Link>
          </div>
          <div>
          <div className="section_progress">
            <div className="progress_block">
              <label>Speed</label>
              <ProgressBar variant="speed" now={40} />
            </div>
            <div className="progress_block">
              <label>Communication</label>
              <ProgressBar variant="communication" now={20} />
            </div>
            <div className="progress_block">
              <label>Attitude</label>
              <ProgressBar variant="attitude" now={60} />
            </div>
            <div className="progress_block">
              <label>Performance</label>
              <ProgressBar variant="performance" now={80} />
            </div>
            <div className="progress_block">
              <label>Punctuality</label>
              <ProgressBar variant="punctuality" now={40} />
            </div>
          </div>
    </div>
        </Col>
        <Col xs={8} className="p-0">
          <div className="profile_right position-relative">
            <Link to="/" className="profile_edit">
            <img src={edit} />
            </Link>
          <Tabs defaultActiveKey="first">
            <Tab eventKey="first" title="Personal information">
              <div className="tab_content mt-5 px-5">
                <div className="personal_info mb-5" >
                  <div className="profile_photo d-flex align-items-center">
                    <div className="profile_photo_img">
                      <img src={user} />
                    </div>
                    <div className="profile_content m-4">
                      <h3>Divya Vadher</h3>
                      <span>@divya</span>
                    </div>
                  </div>  
                </div>
                <Row>
                  <Col xs={6}>
                    <div className="form_group">
                      <label className="d-block">First Name</label>
                      <input type="text" placeholder="first name"  />
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="form_group">
                      <label className="d-block">Last Name</label>
                      <input type="text" placeholder="Last name"  />
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="form_group">
                      <label className="d-block">Email Address</label>
                      <input type="email" placeholder="Email Address"  />
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="form_group">
                      <label className="d-block">Mobile Number</label>
                      <input type="number" placeholder="Mobile Number"  />
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="form_group">
                      <label className="d-block">Country</label>
                      <input type="text" placeholder="Country"  />
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="form_group">
                      <label className="d-block">Location</label>
                      <input type="text" placeholder="Location"  />
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="form_group">
                      <label className="d-block">Address</label>
                      <textarea placeholder="Address" />
                    </div>
                  </Col>
                  <Col xs={12}>
                    <div className="form_group">
                      <label className="d-block">About</label>
                      <textarea placeholder="About" />
                    </div>
                  </Col>
                </Row>
              </div>
            </Tab>
            <Tab eventKey="second" title="Employment Details">
              <div className="tab_content my-5 px-5">
              <Row>
                  <Col xs={6}>
                    <div className="form_group">
                      <label className="d-block">Industries</label>
                      <input type="text" placeholder="Industries"  />
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="form_group">
                      <label className="d-block">Job Titles</label>
                      <input type="text" placeholder="Job Titles"  />
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="form_group">
                      <label className="d-block">Qualifications/Licences/Certificates</label>
                      <input type="email" placeholder="Qualifications/Licences/Certificates"  />
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="form_group">
                      <label className="d-block">Education</label>
                      <input type="number" placeholder="Education"  />
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="form_group">
                      <label className="d-block">Resume</label>
                      <input type="text" placeholder="Resume"  />
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="form_group">
                      <label className="d-block">Cover Letter</label>
                      <input type="text" placeholder="Cover Letter"  />
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="form_group">
                      <label className="d-block">Job History</label>
                      <input type="text" placeholder="Job History"  />
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="form_group">
                      <label className="d-block">Tax file number</label>
                      <input type="text" placeholder="Tax file number"  />
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="form_group">
                      <label className="d-block">Super Fund name</label>
                      <input type="text" placeholder="Super Fund name"  />
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="form_group">
                      <label className="d-block">Super Fund number</label>
                      <input type="text" placeholder="Super Fund number"  />
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="form_group">
                      <label className="d-block">Bank name</label>
                      <input type="text" placeholder="Bank name"  />
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="form_group">
                      <label className="d-block">Account number</label>
                      <input type="text" placeholder="Account number"  />
                    </div>
                  </Col>
                  <Col xs={6}>
                    <div className="form_group">
                      <label className="d-block">BSB</label>
                      <input type="text" placeholder="BSB"  />
                    </div>
                  </Col>
                </Row>
              </div>
            </Tab>
         </Tabs>
          </div>
        </Col>
       </Row>
      
       </div>
       </div>

      <footer className="footer">
        <div className="footer_logo">
        <img src={logo}/>
        </div>
      </footer>
    </body>
  );
}

export default index;
