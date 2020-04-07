import React, {FC} from 'react';
import { ReactComponent as PhoneIconSVG } from '@fortawesome/fontawesome-free/svgs/solid/phone-alt.svg';
import Icon, { IconStyle } from './index';

interface PhoneIconProps extends IconStyle {

}

const PhoneIcon: FC<PhoneIconProps> = props => {
    return (
        <Icon Icon={PhoneIconSVG} {...props} />
    );
};

export default PhoneIcon;
