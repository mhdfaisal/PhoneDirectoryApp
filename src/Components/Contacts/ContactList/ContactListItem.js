import React from 'react';
import {Link} from 'react-router-dom';
const ContactListItem = (props)=>{

    return(
        <div className="list-group-item">
                <div className="row">
                    <div className=" col-md-3 my-1">{props.item.name}</div>
                    <div className=" col-md-3 my-1">{props.item.phone}</div>           
                    <div className="col-md-6">
                        <div className="row">
                            <div className="col-6 offset-md-6 my-1"><Link to={`delete/${props.item.id}`} className="btn btn-danger btn-sm badge-pill">Delete <i className="fa fa-trash ml-2"></i></Link></div>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default ContactListItem;