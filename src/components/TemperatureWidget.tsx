import React from 'react';
import { PM } from 'react-environment-chart';

import { Widget } from './Widget';

export const TemperatureWidget = (props) => {

    return (
        <React.Fragment>
            <Widget title="Temperature">
                <PM height={150} tips={['Freezing', 'Cold', 'Hot']} value={props.value} />
            </Widget>
        </React.Fragment>
    )
}
