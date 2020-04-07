import React, {FC} from 'react';
import { ReactComponent as EmailIconSVG } from '@fortawesome/fontawesome-free/svgs/solid/envelope.svg';
import Icon, { IconStyle } from './index';

interface EmailIconProps extends IconStyle {

}

const EmailIcon: FC<EmailIconProps> = props => {
    return (
        <Icon Icon={EmailIconSVG} {...props} />
    );
};

export default EmailIcon;
