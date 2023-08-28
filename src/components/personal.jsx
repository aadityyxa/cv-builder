/* eslint-disable react/prop-types */
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

export {PersonalDetails}; 


