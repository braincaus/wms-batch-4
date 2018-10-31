import React from 'react';

import withAuthorization from './withAuthorization';
import Counter from "./Counter";

const CounterPage = () =>(
    <div>
        <h1>Counter Page</h1>

        <Counter
            value={0}
        />
    </div>
);

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(CounterPage);