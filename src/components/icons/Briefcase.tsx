import React, {FC} from 'react';
import { ReactComponent as BriefcaseSVG } from '@fortawesome/fontawesome-free/svgs/solid/briefcase.svg';
import Icon, { IconStyle } from './index';

interface BriefcaseProps extends IconStyle {

}

const Briefcase: FC<BriefcaseProps> = props => {
    return (
        <Icon Icon={BriefcaseSVG} {...props} />
    );
};

export default Briefcase;
