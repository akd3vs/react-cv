import React, {FC} from 'react';
import { ReactComponent as TvSVG } from '@fortawesome/fontawesome-free/svgs/solid/tv.svg';
import Icon, { IconStyle } from './index';

interface TvProps extends IconStyle {

}

const Tv: FC<TvProps> = props => {
    return (
        <Icon Icon={TvSVG} {...props} />
    );
};

export default Tv;
