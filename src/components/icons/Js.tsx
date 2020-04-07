import React, {FC} from 'react';
import { ReactComponent as JsSVG } from '@fortawesome/fontawesome-free/svgs/brands/js.svg';
import Icon, { IconStyle } from './index';

interface JsProps extends IconStyle {

}

const Js: FC<JsProps> = props => {
    return (
        <Icon Icon={JsSVG} {...props} />
    );
};

export default Js;
