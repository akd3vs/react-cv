import React, {FC} from 'react';
import { ReactComponent as GraduationSVG } from '@fortawesome/fontawesome-free/svgs/solid/graduation-cap.svg';
import Icon, { IconStyle } from './index';

interface GraduationProps extends IconStyle {

}

const Graduation: FC<GraduationProps> = props => {
    return (
        <Icon Icon={GraduationSVG} {...props} />
    );
};

export default Graduation;
