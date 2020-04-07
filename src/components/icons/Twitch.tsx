import React, {FC} from 'react';
import { ReactComponent as TwitchSVG } from '@fortawesome/fontawesome-free/svgs/brands/twitch.svg';
import Icon, { IconStyle } from './index';

interface TwitchProps extends IconStyle {

}

const Twitch: FC<TwitchProps> = props => {
    return (
        <Icon Icon={TwitchSVG} {...props} />
    );
};

export default Twitch;
