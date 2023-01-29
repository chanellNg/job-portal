import { Card, Badge, Row, Col } from 'react-bootstrap'
import { JOBS } from '../constants'
import React, { useState } from "react";
import { FaStar, FaMapMarker } from 'react-icons/fa'

export default function Job() {
  let [jobs, setJobs] = useState(JOBS)
  let [title, setTitle] = useState("Select a Job!")

  return (
    <Row className="mt-3 row">
      <Col className="job-column">
      {jobs.map((job)=>{
          return (
            <Card className="mb-3" onClick={()=> setTitle(job.title)}>
              <Card.Body>
                <div className="d-flex">
                  <div className="flex-shrink-1 logo-container mx-2">
                    <img className="logo" src={job.image_url} alt="Govtech logo" />
                  </div>
                
                  <div className="flex-grow-1">
                    <div className="d-flex header">
                        <Card.Text className="text-muted mx-1">
                          {job.company}
                        </Card.Text>
                        <Card.Text className="text-muted mx-1">
                          {job.rating}
                        </Card.Text>
                        <Card.Text>
                        { job.rating != "" &&
                          <FaStar className="mb-1"/>
                        }
                        </Card.Text>
                        <div className="ms-auto role-tag-div">
                          {job.role_tags.map(tag=> <Badge className="mx-1 role-tag">{tag}</Badge> )}
                        </div>
                    </div>
                    <Card.Text className="fw-bold my-0 job-title">
                      {job.title}
                    </Card.Text>
                    <div className="d-flex subtitle">  
                      <Card.Text className="posting-age fw-bold" >
                        {job.posting_age}
                      </Card.Text>
                      <Card.Text className="location text-muted mx-2" >
                        {job.location} <FaMapMarker className="mb-1"/>
                      </Card.Text>
                    </div>
                  </div>
                </div>

                <hr className="mb-1 mt-0"></hr>
                <div className="last-row">
                  {job.skill_tags.map(tag=> <Badge className="mx-1" bg="secondary">{tag}</Badge> )}
                </div>   
              </Card.Body>
            </Card>
          )
      })}

      </Col>
      <Col className="job-details">
          <h4 className="mt-2">{title}</h4>
      </Col>
    </Row>
  );
}