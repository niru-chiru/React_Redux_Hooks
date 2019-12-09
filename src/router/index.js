import Login from '../Login/LoginContainer';
import Home from '../Home/HomePage';

export default [
{ path: "/", component: Login, exact: true},
{ path: "/home", component: Home}
];