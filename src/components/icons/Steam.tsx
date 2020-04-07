import React, {FC} from 'react';
import { ReactComponent as SteamSVG } from '@fortawesome/fontawesome-free/svgs/brands/steam.svg';
import Icon, { IconStyle } from './index';

interface SteamProps extends IconStyle {

}

const Steam: FC<SteamProps> = props => {
    return (
        <Icon Icon={SteamSVG} {...props} />
    );
};

export default Steam;
