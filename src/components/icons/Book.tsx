import React, {FC} from 'react';
import { ReactComponent as BookSVG } from '@fortawesome/fontawesome-free/svgs/solid/book.svg';
import Icon, { IconStyle } from './index';

interface BookProps extends IconStyle {

}

const Book: FC<BookProps> = props => {
    return (
        <Icon Icon={BookSVG} {...props} />
    );
};

export default Book;
