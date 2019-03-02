import React from 'react';
import FormField from '../../widgets/FormField/FormField';
import uuidv1 from 'uuid/v1';
import {Link} from 'react-router-dom';

import './ContactCreate.css';
class ContactCreate extends React.Component{

    state={
        formData:{
                name:{
                        element:"input",
                        label:false,
                        labelText:'',
                        value:'',
                        config:{
                            type:"text",
                            placeholder:'Enter Name',
                        },
                        validation:{
                            required:true
                        },
                        valid:false,
                        touched:false,
                        errorMessage:''
                },
                phone:{
                    element:"input",
                    label:false,
                    labelText:'',
                    value:'',
                    config:{
                        type:"text",
                        placeholder:'Enter Phone Number',
                    },
                    validation:{
                        required:true
                    },
                    valid:false,
                    touched:false,
                    errorMessage:''
                }
        }
    }

    setUniqueContactID=(dataToSubmit)=>{
        let contactId = uuidv1();
        dataToSubmit = {...dataToSubmit, id:contactId}
        return dataToSubmit;
    }

    addDataToLocalStorage=(dataToSubmit)=>{
        let data=[];
        if(localStorage.getItem('contactList')){
            data = JSON.parse(localStorage.getItem('contactList'));
            let finalDataToSubmit = this.setUniqueContactID(dataToSubmit);
            data.push(finalDataToSubmit);
            localStorage.setItem('contactList', JSON.stringify(data));
        }
        else{
            dataToSubmit = {...dataToSubmit, id:uuidv1()}
            data.push(dataToSubmit);
            localStorage.setItem('contactList', JSON.stringify(data));
        }
    }

    onChangehandler= ({event, id, blur})=>{
        const updatedElement = {};
        updatedElement[id]={...this.state.formData[id], value:event.target.value}
        this.setState({formData: {...this.state.formData, ...updatedElement}})
    }

    onFormSubmit = (e)=>{
        let contactData ={}
        for(let key in this.state.formData){

            if(this.state.formData[key].value!==''){
                contactData = {...contactData, [key]: this.state.formData[key].value}
            }
        }

        if(!(Object.keys(contactData).length === 0 && contactData.constructor === Object)){
            this.addDataToLocalStorage(contactData);
            this.props.history.push('/');
        }
        e.preventDefault();
    }

    renderContactPreview = ()=>{
        const preview=[];
        for(let control in this.state.formData){
            let previewData = <div key={control}>
                                <label className="text-light">
                                 {control.toUpperCase()} : {this.state.formData[control].value}
                                </label>
                            </div>
            preview.push(previewData)
        }
        return preview;
    }

    renderMetaData(){
        return(
            <React.Fragment>
                <Link to={'/'} className="btn btn-primary"><i className="fa fa-arrow-left"></i> Back</Link>
                <h2 className="mb-4 mt-3 text-center text-white font-weight-light">Add Subscriber</h2>
            </React.Fragment>
        )
    }

    render(){
        return(

            <div className="create-contact-container my-5">
                {this.renderMetaData()}

                <form onSubmit={(e)=>this.onFormSubmit(e)} className="mb-3 contact-form">
                    <div className="form-group">
                        <FormField formData={this.state.formData.name} id="name"
                            change = {(element)=> this.onChangehandler(element)}
                        />
                    </div>
                    <div className="form-group">
                        <FormField formData={this.state.formData.phone} id="phone"
                            change = {(element)=> this.onChangehandler(element)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success btn-block">Add <i className="fa fa-paper-plane ml-2"></i></button>
                </form>

                <div className="contact-preview mt-4">
                    <h4 className="text-light font-weight-light">Subscriber to be added -</h4>
                    {this.renderContactPreview()}
                </div>
            </div>
        )
    }
}

export default ContactCreate;