import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore} from 'redux';
import { Router, Route } from 'react-router-dom';
import history from './history';
import { firebaseApp } from './firebase';
import reducer from './reducers';
import { logUser } from './actions';
import './App.css';
import App from './component/App';
import SignIn from './component/SignIn';
import SignUp from './component/SignUp';

firebaseApp.auth().onAuthStateChanged( user => {
    if (user) {
        //console.log('user has signed in or up', user);
        const { email } = user;
        store.dispatch(logUser(email));
        history.push('/');
    } else {
        console.log('user has signed out or still needs to sign in');
        history.replace('./signin');
    }
})

const store = createStore(reducer);

ReactDOM.render(
    <Provider store={store}>
        <Router path="/" history={history} component={App}>
            <div>
                <Route exact path="/" component={App} />
                <Route path="/signin" component={SignIn} />
                <Route path="/signup" component={SignUp} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
)