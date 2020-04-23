import React from 'react';
import { ellipsis } from 'react-icons/fa';
import boy from '../src/images/boy.jpg';
import photoupload from '../src/images/07.png';
import tagfriend from '../src/images/08.png';
import activity from '../src/images/09.png';
import userpost1 from '../src/images/p1.jpg';
import userpost2 from '../src/images/p2.jpg';
import userpost3 from '../src/images/p3.jpg';
import user from '../src/images/01.jpg';
import user2 from '../src/images/02.jpg';
import like from '../src/images/01.png';
import '../src/css//style.css';
import '../src/css/bootstrap.min.css';


function App() {
  return (
      <div>
        <div className="container m-5" >
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
              <div className="iq-card iq-card-block iq-card-stretch iq-card-height">
                <div className="iq-card-header d-flex justify-content-between">
                  <div className="iq-header-title">
                    <h4 className="card-title">Create Post</h4>
                  </div>
                </div>
                <div className="iq-card-body" data-toggle="modal" data-target="#post-modal">
                  <div className="d-flex align-items-center">
                    <div className="user-img">
                      <img src={boy} alt="userimg" className="avatar-60 rounded-circle" />
                    </div>
                    <form className="post-text ml-3 w-100" action="#">
                      <input type="text" className="form-control rounded" placeholder="Write something here..." style={{border: 'none', boxShadow: 'none'}} />
                    </form>
                  </div>
                  <hr />
                  <ul className="post-opt-block d-flex align-items-center list-inline m-0 p-0">
                    <li className="iq-bg-primary rounded p-2 pointer mr-3">
                      <a href="#" /><img src={photoupload} alt="icon" className="img-fluid" /> Photo/Video</li>
                    <li className="iq-bg-primary rounded p-2 pointer mr-3">
                      <a href="#" /><img src={tagfriend} alt="icon" className="img-fluid" /> Tag Friend</li>
                    <li className="iq-bg-primary rounded p-2 pointer mr-3">
                      <a href="#" /><img src={activity} alt="icon" className="img-fluid" /> Feeling/Activity</li>
                    <li className="iq-bg-primary rounded p-2 pointer">
                      <div className="iq-card-header-toolbar d-flex align-items-center">
                        <div className="dropdown">
                          <span  id="post-option">
                          <i class="fa fa-ellipsis-h" aria-hidden="true"></i>
                          </span>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>


              <div className="iq-card iq-card-block">
                <div className="iq-card-body" >
                  <div className="newpost-card">
                    <div className="newpost-carduser">
                      <img src={user}/>
                    </div> 
                    <div className="username-status">
                      <div className="d-flex align-items-center">
                        <h5 className="mb-0">
                          <a href="#"> Anna Sthesia </a>
                        </h5>
                        &nbsp;
                        <p className="mb-0" style={{color:"#777d74"}}>Add New Post</p>
                      </div>
                      <p className="mb-0" style={{color:"#50b5ff"}}>Just Now</p>
                    </div>
                  {/* 3 Image Section  */}
                  </div>
                    <div class="mt-3">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nulla dolor, ornare at commodo non, feugiat non nisi. Phasellus faucibus mollis pharetra. Proin blandit ac massa sed rhoncus</p>
                    </div>
                    <div class="user-post">
                      <div class="d-flex">
                        <div class="col-md-6">
                            <a href="#"><img src={userpost2} alt="post-image" class="img-fluid rounded w-100"/></a>
                        </div>
                        <div class="col-md-6 row m-0 p-0">
                            <div class="col-sm-12">
                              <a href="#"><img src={userpost1} alt="post-image" class="img-fluid rounded w-100"/></a>
                            </div>
                            <div class="col-sm-12 mt-3">
                              <a href="#"><img src={userpost3} alt="post-image" class="img-fluid rounded w-100"/></a>
                            </div>
                        </div>
                      </div>
                  </div>
                  {/* Like Section */}
                  <div className=" pt-3 pl-3 d-flex ">
                    <img src={like}  className='pr-3'/>
                    <p className="mb-0 pr-3" style={{color:"#a09e9e"}}>140 Like </p>
                    <p className="mb-0" style={{color:"#a09e9e"}}>20 Comments</p>
                    <p className="mb-0 ml-auto " style={{color:"#a09e9e"}}><i class="fa fa-share-alt pr-1" aria-hidden="true"></i> 99 Share</p>
                  </div>
                  <hr />
                  {/* Comment Session */}
                  <div>
                    <div className="newpost-card">
                      <div className="newpost-cardusers pr-2">
                        <img src={user2} />
                      </div> 
                      <div>
                        <div className="d-flex align-items-center">
                          <h6 className="mb-0">
                            <a href="#">Monty Carlo </a>
                          </h6>
                          &nbsp;
                        </div>
                        <p className="mb-0">Lorem ipsum dolor sit amet</p>
                        <div className="d-flex">
                          <p className="mb-0" style={{color:"#50b5ff"}}>Like </p>
                          <p className="mb-0 pl-2" style={{color:"#50b5ff"}}>Repaly </p>
                          <p className="mb-0 pl-2" style={{color:'#50b5ff'}}>Translate </p>
                          <p className="mb-0 pl-2">5 min </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Input Tag */}
                  <div class="input-group mt-3  ">
                    <input type="text" class="form-control border-right-0" />
                    <span class="input-group-append bg-white border-left-0">
                        <span class="input-group-text bg-transparent">
                          <i class="fa fa-camera" aria-hidden="true"></i>
                        </span>
                    </span>
                </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
  );
}

export default App;
