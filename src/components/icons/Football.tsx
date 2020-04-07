import React, {FC} from 'react';
import { ReactComponent as FootballSVG } from '@fortawesome/fontawesome-free/svgs/solid/futbol.svg';
import Icon, { IconStyle } from './index';

interface FootballProps extends IconStyle {

}

const Football: FC<FootballProps> = props => {
    return (
        <Icon Icon={FootballSVG} {...props} />
    );
};

export default Football;
