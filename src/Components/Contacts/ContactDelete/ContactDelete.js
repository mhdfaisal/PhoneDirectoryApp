import React from 'react';
import {Link} from 'react-router-dom';
import Modal from '../../widgets/Modal/Modal';

class ContactDelete extends React.Component{

    state={contact: {}, contactList:[]}

    componentDidMount(){
        const contactList = JSON.parse(localStorage.getItem('contactList'));
        const contact = contactList.find((item)=>{
            return item.id === this.props.match.params.id;

        })
        this.setState({contact:contact, contactList:[...this.state.contactList, ...contactList]});
    }

    handleDeleteContact = ()=>{
        const updatedContactList = this.state.contactList.filter((item)=>{
            return (
                item.id !== this.state.contact.id
            )
        });

        localStorage.setItem('contactList', JSON.stringify(updatedContactList));
        this.props.history.push('/');
    }

    createActions(){
        return(
            <React.Fragment>
                <Link to="/" className="btn btn-primary">Cancel <i className="fa fa-close ml-2"></i></Link>
                <button className="btn btn-danger" onClick={()=> this.handleDeleteContact()}>Delete <i className="fa fa-trash ml-2"></i></button>
            </React.Fragment>
        );
    }

    createContent(){
        if(!this.state.contact){
            return <div>Are you sure you want to delete this contact ?</div>
        }
        return <div>{`Are you sure you want to delete this contact : ${this.state.contact.name} ?`}</div>
    }


    render(){

        return(
            <Modal header="Delete Contact" content={this.createContent()} action={this.createActions()} handleClose = {()=> this.props.history.push('/')}/>
        )
    }
}

export default ContactDelete;