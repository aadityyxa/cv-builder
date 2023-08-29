/* eslint-disable react/prop-types */
import { useState } from "react";
import Icon from '@mdi/react';
import { mdiTrashCanOutline } from '@mdi/js';


function FormItem({typeAttr, nameAttr, idAttr, text, change}) {

    return(
        <li>
            <label htmlFor={idAttr}>{text}</label>
            <input type={typeAttr} name={nameAttr} id={idAttr} onChange={change} />    
        </li>
    )
}

function PersonalDetails({handleChange}) {

    return (
        <div className="details">
            <form>
                <h3 className="heading">Personal Details</h3>
                <FormItem typeAttr="text" nameAttr='name' idAttr='name' text='Name' change={handleChange} />
                <FormItem typeAttr='email' nameAttr='email' idAttr='email' text='Email' change={handleChange} />
                <FormItem typeAttr='tel' nameAttr='phone' idAttr='phone' text='Phone' change={handleChange}/>
                <FormItem typeAttr='text' nameAttr='address' idAttr='address' text='Address' change={handleChange}/>
            </form>
        </div>
    ) 
}

function List({list, klasse, onAdd, heading}) {
    return (
            <div className={klasse}>
                <h3>{heading}</h3>
                {list}
                <div className="button-container">
                    <button className="add" onClick={onAdd}>+ Add {heading}</button>
                </div>
            </div>
    )

}

function Education({array, onChange, onDelete}) {
    const [formOpen, setFormOpen] = useState(true);
    
    function toggleForm() {
        if(formOpen === true) {
            setFormOpen(false);
        }else{
            setFormOpen(true);     
        }
    }

    const listItems = array.map((education) => {
    return (    
        <div className="form-list-item" key={education.id}>
            <h4>{education.name}, Class Of {education.yog}</h4>
            <div className="icon" onClick={() => {
                onDelete(education.id);
            }}>
                <Icon path={mdiTrashCanOutline} size={1} />
            </div>
        </div>
    )}); 

    return(
        <div className="details">
            {formOpen? 
            <List list={listItems} klasse='education' onAdd={toggleForm} heading='Education' />
            :<form>
                <FormItem typeAttr='text' nameAttr='school' idAttr='school' text='School' />
                <FormItem typeAttr='text' nameAttr='degree' idAttr='degree' text='Degree' />
                <FormItem typeAttr='text' nameAttr='yog' idAttr='yog' text='Year Of Graduation' />
                <FormItem typeAttr='text' nameAttr='location' idAttr='location' text='Location' />
                <button type="submit" onClick={(e) => {
                    onChange();
                    e.preventDefault();
                    toggleForm(); 
                    
                }}>Save</button>
            </form>}
        </div>

    )

}

function WorkExperience({array, onChange, onDelete}) {
    const [formOpen, setFormOpen] = useState(true);

    
    function toggleForm() {
        if(formOpen === true) {
            setFormOpen(false);
        }else{
            setFormOpen(true);     
        }
    }

    const listItems = array.map((work) => {
        return(
            <div className="form-list-item" key={work.id}>
                <h4 key={work.id}>{work.name}</h4>
                <div className="icon" onClick={onDelete}>
                <Icon path={mdiTrashCanOutline} size={1} />
                </div>
            </div>
        )}); 

    return(
        <div className="details">
            {formOpen?
            <List list={listItems} klasse='work' onAdd={toggleForm} heading='Work Experience'/>
            :
            <form>
                <FormItem typeAttr='text' nameAttr='company' idAttr='company' text='Company' />
                <FormItem typeAttr='text' nameAttr='job' idAttr='job' text='Job Title' />
                <FormItem typeAttr='text' nameAttr='start' idAttr='start' text='Start Year' />
                <FormItem typeAttr='text' nameAttr='end' idAttr='end' text='End Year' />
                <FormItem typeAttr='text' nameAttr='location' idAttr='area' text='Location' />
                <label htmlFor="job-desc">Description</label>
                <textarea name="job-desc" id="job-desc" cols="30" rows="5"></textarea>
                <button type="submit" onClick={(e) => {
                    onChange(); 
                    e.preventDefault();
                    toggleForm(); 
                    
                }}>Save</button>
            </form>}
        </div>

    )

}


export {PersonalDetails, Education, WorkExperience}; 


