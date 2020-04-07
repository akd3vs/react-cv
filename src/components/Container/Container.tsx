import React, {FC} from 'react';

type ContainerProps = {
    rowClasses?: string,
    colClasses?: string,
};

const Container: FC<ContainerProps> = ({ children, rowClasses, colClasses }) => {
    return (
        <div className={`row${rowClasses ? ` ${rowClasses}` : ''}`}>
            <div className={`col-12${colClasses ? ` ${colClasses}` : ''}`}>
                {children}
            </div>
        </div>
    );
};

export default Container;
