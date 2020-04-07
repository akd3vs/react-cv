import React, {FC} from 'react';
import styled from 'styled-components';
import { COLOURS_ENUM } from "../../theme/theme";

import { IconStyle } from '../icons';

type ButtonWrapperProps = {};

interface ButtonProps extends ButtonWrapperProps {
    label: string,
    Icon?: FC<IconStyle>,
    iconProps?: IconStyle,
    onClick?: () => void,
}

const ButtonStyled = styled.button`
  background-color: ${({ theme }) => theme.colours[COLOURS_ENUM.primary]};
  border: none;
`;

function Button(props: ButtonProps) {
    const { label, Icon, iconProps, onClick } = props;
    return (
        <ButtonStyled onClick={onClick}>{Icon ? <Icon {...iconProps} /> : label}</ButtonStyled>
    );
}

export default Button;
