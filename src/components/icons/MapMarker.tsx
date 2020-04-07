import React, {FC} from 'react';
import { ReactComponent as MapMarkerSVG } from '@fortawesome/fontawesome-free/svgs/solid/map-marker-alt.svg';
import Icon, { IconStyle } from './index';

interface MapMarkerProps extends IconStyle {

}

const MapMarker: FC<MapMarkerProps> = props => {
    return (
        <Icon Icon={MapMarkerSVG} {...props} />
    );
};

export default MapMarker;
