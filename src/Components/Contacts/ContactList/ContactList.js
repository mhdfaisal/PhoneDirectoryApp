import React from 'react';
import {Link} from 'react-router-dom';

import SearchBox from '../../widgets/SearchBox/SearchBox';
import ContactListItem from './ContactListItem';
import './ContactList.css';

class ContactList extends React.Component{

    state={contactList:[], searchItem:''}

    componentDidMount(){
        this.fetchContactList();
    }


    fetchContactList = ()=>{
        const contacts = JSON.parse(localStorage.getItem('contactList'));
        if(contacts){
            this.setState({contactList:[...this.state.contactList, ...contacts]})
        }
    }

    renderContactList = ()=>{
        if(this.state.contactList.length>0){
            let list=[]
            switch(this.state.searchItem){
                case '': list = this.state.contactList.map((item, index)=>{
                            return(
                                <div key={index} className="list-group">
                                    <ContactListItem item={item} />
                                </div>
                            )
                        });
                        return list;

                default:    list = this.state.contactList.map((item, index)=>{
                               if(item.name.includes(this.state.searchItem)){
                                return(
                                    <div key={index} className="list-group">
                                        <ContactListItem item={item} />
                                    </div>
                                )
                               }
                            });
                            return list;
            }
        }
        else{
            return <div> Nothing found !!</div>
        }

    }

    filterContactList= (searchItem)=>{
        this.setState({searchItem:searchItem});
    }


    render(){
        return(
            <div className="contactList">
                <div className="contactList-content">
                    <div className="pt-5">
                    <SearchBox onsearch={(searchItem)=> this.filterContactList(searchItem)}/>
                    </div>

                    <Link to="/create" className="btn btn-primary mt-4">
                            Add Contact <i className="fa fa-plus ml-2"></i>
                    </Link>
                    <div className="my-5">{this.renderContactList()}</div>
                    <div className="text-right">
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactList;


