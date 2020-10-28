import React from 'react';
import { Humidity } from 'react-environment-chart';

import { Widget } from './Widget';

export const AirPressureWidget = (props) => {

    return (
        <React.Fragment>
            <Widget title="Air pressure">
                <Humidity height={100} tips={['Low', 'Normal', 'High']} value={props.value} />
            </Widget>
        </React.Fragment>
    )
}
