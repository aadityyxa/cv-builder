/* eslint-disable react/prop-types */
import Icon from '@mdi/react';
import { mdiEmailOutline, mdiPhone, mdiMapMarker } from '@mdi/js';

function Cv({personal, education, work}) {

    const educationList = education.map((college) => {
        return (
                <div className="cv-list-item" key={college.id}>
                    <div className="top-left">{college.yog && <span>Class of {college.yog} </span>}</div>
                    <div className="bottom-left">{college.location}</div>
                    <div className="top-right"><strong>{college.name}</strong></div>
                    <div className="bottom-right">{college.degree}</div>
                </div>
        )
    })

    const workList = work.map((job) => {
        return (
                <div className="cv-list-item" key={job.id}>
                    <div className="top-left">{job.start} - {job.end}</div>
                    <div className="bottom-left">{job.location}</div>
                    <div className="top-right"><strong>{job.position}</strong></div>
                    <div className="bottom-right">{job.name}</div>
                    <div className="job-description">{job.description}</div>

                </div>
        )
    })

    return (
        <div className="container">
            <div className="cv">
                <div className="header">
                        <h1>{personal.name}</h1>
                        <span>
                        <Icon path={mdiEmailOutline} size={0.8} /> {personal.email} 
                        <Icon path={mdiPhone} size={1} /> {personal.phone} 
                        <Icon path={mdiMapMarker} size={1} /> {personal.address}
                        </span>
                </div>

                <div className="content">
                    <div className="education-details">

                        {education.length > 0 && <h3 className='cv-section-heading'>Education</h3>}
                        <div className="list">
                            {educationList}
                        </div>
                        
                        
                    </div>

                    <div className="work-details">
                        {work.length > 0 && <h3 className='cv-section-heading'>Work Experience</h3>}
                        <div className="list">
                            {workList}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export {Cv}; 