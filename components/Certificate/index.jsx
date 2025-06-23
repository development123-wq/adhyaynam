import React from 'react';
import './certificate.css'

function CertificateComponent() {
  return (
    <div className="container pm-certificate-container">
      <div className="outer-border" />
      <div className="inner-border" />
      <div className="pm-certificate-border ">
        <div className="row pm-certificate-header">
          <div className="pm-certificate-title cursive  text-center">
            <h2>Adhyayanamacademy</h2>
          </div>
        </div>
        <div className="row pm-certificate-body">
          <div className="pm-certificate-block">
            <div className=""> 
                <div className="pm-certificate-name underline margin-0  text-center">
                  <span className="pm-name-text bold">CA , CS , CUET</span>
                </div> 
            </div>
            <div className="">
              <div className=" ">
                <div className="grid grid-cols-6">{/* LEAVE EMPTY */}</div>
                <div className="pm-earned grid grid-cols-3 text-center">
                  <span className="pm-earned-text padding-0 block cursive">has earned</span>
                  <span className="pm-credits-text block font-bold sans">PD175: 1.0 Credit Hours</span>
                </div>
                <div className="grid grid-cols-6">{/* LEAVE EMPTY */}</div>
                <div className="" />
              </div>
            </div>
            <div className="">
              <div className="">
                <div className="grid grid-cols-6">{/* LEAVE EMPTY */}</div>
                <div className="pm-course-title   text-center">
                  <span className="pm-earned-text block cursive">while completing the training course entitled</span>
                </div>
                <div className="grid grid-cols-6">{/* LEAVE EMPTY */}</div>
              </div>
            </div>
            <div className="">
              <div className=" ">
                <div className="grid grid-cols-6 ">{/* LEAVE EMPTY */}</div>
                <div className="pm-course-title underline  text-center">
                  <span className="pm-credits-text block bold sans">BPS PGS Initial PLO for Principals at Cluster Meetings</span>
                </div>
                <div className="grid grid-cols-6">{/* LEAVE EMPTY */}</div>
              </div>
            </div>
          </div>
          <div className="">
            <div className="">
              <div className="pm-certificate-footer">
                <div className="grid grid-cols-3  pm-certified   text-center">
                  <span className="pm-credits-text block sans">Buffalo City School District</span>
                  <span className="pm-empty-space block underline" />
                  <span className="bold block">Crystal Benton Instructional Specialist II, Staff Development</span>
                </div>
                <div className="grid grid-cols-3 ">
                  {/* LEAVE EMPTY */}
                </div>
                <div className="grid grid-cols-3   pm-certified   text-center">
                  <span className="pm-credits-text block sans">Date Completed</span>
                  <span className="pm-empty-space block underline" />
                  <span className="bold block">DOB: </span>
                  <span className="bold block">Social Security # (last 4 digits)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default CertificateComponent;
