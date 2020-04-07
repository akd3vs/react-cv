import React, {FC} from 'react';
import { ReactComponent as CogsSVG } from '@fortawesome/fontawesome-free/svgs/solid/cogs.svg';
import Icon, { IconStyle } from './index';

interface CogsProps extends IconStyle {

}

const Cogs: FC<CogsProps> = props => {
    return (
        <Icon Icon={CogsSVG} {...props} />
    );
};

export default Cogs;
