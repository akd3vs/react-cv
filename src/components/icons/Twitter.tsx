import React, {FC} from 'react';
import { ReactComponent as TwitterSVG } from '@fortawesome/fontawesome-free/svgs/brands/twitter.svg';
import Icon, { IconStyle } from './index';

interface TwitterProps extends IconStyle {

}

const Twitter: FC<TwitterProps> = props => {
    return (
        <Icon Icon={TwitterSVG} {...props} />
    );
};

export default Twitter;
