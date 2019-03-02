import React from 'react';
import {Router, Route, Switch} from 'react-router-dom';

import Layout from '../hoc/Layout/Layout';
import history from '../history';
import ContactList from '../Contacts/ContactList/ContactList';
import ContactCreate from '../Contacts/ContactCreate/ContactCreate';
import ContactDelete from '../Contacts/ContactDelete/ContactDelete';
import NotFound from '../NotFound/NotFound';


class App extends React.Component{

    render(){
        return(
            <Router history={history}>
                    <Layout>
                        <Switch>
                            <Route path="/" exact component={ContactList} />
                            <Route path="/create" exact component={ContactCreate} />
                            <Route path="/delete/:id" exact component={ContactDelete} />
                            <Route component={NotFound} />
                        </Switch>
                    </Layout>
            </Router>
        )
    }
}
export default App;