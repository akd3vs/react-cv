import React, {FC} from 'react';
import styled, {css} from "styled-components";

export interface IconStyle extends React.PropsWithoutRef<JSX.IntrinsicElements["a"]> {
    readonly as?: any,
    readonly size?: number,
    readonly border?: string,
    readonly withRoundBorder?: boolean,
    readonly padding?: string,
    readonly margin?: string,
    readonly colour?: string,
    readonly wrapperClassName?: string,
    readonly inline?: boolean,
}

const defaultProps = {
    size: 40,
    margin: '0 10px 0 0',
    colour: '#fff',
};

interface IconProps extends IconStyle {
    Icon: FC<{ className?: string }>,
}

const IconWrapper = styled.div<IconStyle>`
  display: ${({ inline }) => inline ? 'inline-flex' : 'flex'};
  ${props => props.size && css`
    width: ${props.size}px;
    height: ${props.size}px;
  `};
  svg {
    max-height: 100%;
    max-width: 100%;
    min-width: min-content;
    min-height: min-content;
  }
  ${props => props.withRoundBorder && css`
    border-radius: 50%;
    border: 1px solid #fff;
  `};
  ${props => props.border && !props.withRoundBorder && css`
    border: ${props.border};
  `};
  padding: ${props => props.padding ?? '10px'};
  margin ${props => props.margin};
  
  fill: ${props => props.colour};
`;

IconWrapper.defaultProps = defaultProps;

const Icon: FC<IconProps> = props => {
    const {as, Icon, className, wrapperClassName, ...rest} = props;
    return (
        <IconWrapper as={as} className={wrapperClassName} size {...rest}>
            <Icon className={className} />
        </IconWrapper>
    );
};

export default React.memo(Icon);
