import React from 'react';
import ReactDOM from 'react-dom';
import CssBaseline from '@material-ui/core/CssBaseline';

import { Dashboard } from './layouts/dashboard';

function App() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Dashboard />
        </React.Fragment>
    );
}

ReactDOM.render(<App />, document.getElementById('root'))