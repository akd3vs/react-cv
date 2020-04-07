import React, {FC} from 'react';
import { ReactComponent as LinkedInSVG } from '@fortawesome/fontawesome-free/svgs/brands/linkedin-in.svg';
import Icon, { IconStyle } from './index';

interface LinkedInProps extends IconStyle {

}

const LinkedIn: FC<LinkedInProps> = props => {
    return (
        <Icon Icon={LinkedInSVG} {...props} />
    );
};

export default LinkedIn;
