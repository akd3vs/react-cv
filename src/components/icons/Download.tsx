import React, {FC} from 'react';
import { ReactComponent as DownloadIconSVG } from '@fortawesome/fontawesome-free/svgs/solid/download.svg';
import Icon, { IconStyle } from './index';

interface DownloadIconProps extends IconStyle {

}

const DownloadIcon: FC<DownloadIconProps> = props => {
    return (
        <Icon Icon={DownloadIconSVG} {...props} />
    );
};

export default DownloadIcon;
