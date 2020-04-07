import React, {FC} from 'react';
import { ReactComponent as FacebookSVG } from '@fortawesome/fontawesome-free/svgs/brands/facebook-f.svg';
import Icon, { IconStyle } from './index';

interface FacebookProps extends IconStyle {

}

const Facebook: FC<FacebookProps> = props => {
    return (
        <Icon Icon={FacebookSVG} {...props} />
    );
};

export default Facebook;
