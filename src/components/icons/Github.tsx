import React, {FC} from 'react';
import { ReactComponent as GithubSVG } from '@fortawesome/fontawesome-free/svgs/brands/github.svg';
import Icon, { IconStyle } from './index';

interface GithubProps extends IconStyle {

}

const Github: FC<GithubProps> = props => {
    return (
        <Icon Icon={GithubSVG} {...props} />
    );
};

export default Github;
