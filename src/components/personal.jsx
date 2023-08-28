/* eslint-disable react/prop-types */
function FormItem({typeAttr, nameAttr, idAttr, text, change}) {

    return(
        <li>
            <label htmlFor={idAttr}>{text}</label>
            <input type={typeAttr} name={nameAttr} id={idAttr} onChange={change} />    
        </li>
    )
}

