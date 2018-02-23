import React, { Component } from 'react';
//import axios from 'axios';
//import axios from '../../axios';
import './Blog.css';
import Posts from './Posts/Posts';
import asyncComponent from '../../hoc/asyncComponent';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';

//import NewPost from './NewPost/NewPost';
const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
});


class Blog extends Component {

    state = {
        auth: true
    }

    //exact mowi ze sciezka musi sie dokladnie zgadzac
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            {/*//NavLink to taki Link do ktorego mozna dodac klase*/}
                            <li><NavLink 
                                to="/posts" 
                                exact
                                //activeClassName="my-active" mozna tak stylowac zamiast domyslnego active
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
{/*             <Route path="/" exact render={() => <h1>Home</h1>}/>
                <Route path="/" render={() => <h1>Home 2</h1>}/>  */}
                {/*Switch jesli chcemy renderowac zawsze tylko jeden Route - pierwszy ktory pasuje*/}
                <Switch> 
                    {this.state.auth ? <Route path="/new-post" component={AsyncNewPost} /> : null}  //to jest guard-starznik, jesli nie ma autentykacji to uzytkownik nie dostanie sie do NewPost
                    <Route path="/posts" component={Posts} />
                    <Route render={() => <h1>Not found</h1>} />
                    {/*<Route path="/" component={Posts} /> lub..*/}
                    {/*<Redirect from="/" to="/posts" />*/}
                </Switch>
            </div>
        );
    }
}


export default Blog;