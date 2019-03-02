import React from 'react';

const FormField = (props)=>{

    return(
        <input {...props.formData.config} value={props.formData.value} className="form-control" id={props.id}
        onChange={(e)=> props.change({event:e, id:props.id, blur:false})} />
    )
}

export default FormField;

// 