import React from 'react';
import { Humidity } from 'react-environment-chart';

import { Widget } from './Widget';

export const HumidityWidget = (props) => {

    return (
        <React.Fragment>
            <Widget title="Humidity">
                <Humidity height={100} tips={['Dry', 'Comfort', 'Wet']} value={props.value} />
            </Widget>
        </React.Fragment>
    )
}
