import React, {FC} from 'react';
import { ReactComponent as WorldIconSVG } from '@fortawesome/fontawesome-free/svgs/solid/globe-americas.svg';
import Icon, { IconStyle } from './index';

interface WorldIconProps extends IconStyle {

}

const WorldIcon: FC<WorldIconProps> = props => {
    return (
        <Icon Icon={WorldIconSVG} {...props} />
    );
};

export default WorldIcon;
