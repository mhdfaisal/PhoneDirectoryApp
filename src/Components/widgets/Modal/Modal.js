import React from 'react';
import ReactDOM from 'react-dom';

class Modal extends React.Component{
    

    render(){
        return (
            ReactDOM.createPortal(
                <div className="modal" style={{display:"block"}}>
                    <div className="modal-dialog" onClick={this.props.handleClose}>
                    <div className="modal-content" onClick={(e)=> e.stopPropagation()}>
                        <div className="modal-header">
                            <h4>{this.props.header}</h4>
                        </div>
                    <div className="modal-body">
                        {this.props.content}
                    </div>
                    <div className="modal-footer">
                        {this.props.action}
                    </div>
                    </div>
                    </div> 
                </div>
            , document.querySelector("#modal"))
        )
    }
}
export default Modal;
