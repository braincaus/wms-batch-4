import React from 'react';

import withAuthorization from './withAuthorization';

const TodoPage = () =>
    <div>
        <h1>To Do Page</h1>
        <p>The To Do Page is accessible by every signed in user.</p>
    </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(TodoPage);