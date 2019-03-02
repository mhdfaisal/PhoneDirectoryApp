import React from 'react';
import FormField from '../FormField/FormField';

class SearchBox extends React.Component{

    state={
        formData:{
                searchBox:{
                    element:"input",
                    label:false,
                    labelText:'',
                    value:'',
                    config:{
                        type:"text",
                        placeholder:'Search Contacts',
                    },
                    validation:{
                        required:true
                    },
                    valid:false,
                    touched:false,
                    errorMessage:''
                }
        },
        searchTerm: ''
    }

    onChangehandler= ({event, id, blur})=>{

        const updatedElement = {};
        updatedElement[id]={...this.state.formData[id], value:event.target.value}
        this.setState({formData: {...this.state.formData, ...updatedElement}, searchTerm:updatedElement[id].value}, ()=>{
            this.props.onsearch(this.state.searchTerm)
        })
    }

    onFormSubmit = (e)=>{
        
        e.preventDefault();

    }

    render(){

        return(
            <form onSubmit={(e)=>this.onFormSubmit(e)}>
            <div className="input-group">
                <div className="input-group-prepend">
                    <span className="input-group-text"><i className="fa fa-search"></i></span>
                </div>
                <FormField formData={this.state.formData.searchBox} id="searchBox"
                    change = {(element)=> this.onChangehandler(element)}
                />
            </div>
            </form> 
        )
    }
}

export default SearchBox;