import React, {FC} from 'react';
import { ReactComponent as UserSVG } from '@fortawesome/fontawesome-free/svgs/regular/user.svg';
import Icon, { IconStyle } from './index';

export interface UserProps extends IconStyle {

}

const User: FC<UserProps> = props => {
    return (
        <Icon Icon={UserSVG} {...props} />
    );
};

export default User;
