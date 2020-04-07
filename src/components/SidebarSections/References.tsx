import React, {FC} from 'react';

import Section from "../Section";
import styled from "styled-components";

type ReferencesProps = {};

const List = styled.ul`
  p {
    line-height: normal;
    margin: 0;
  }
  .reference-name {
    color: #fff;
    font: ${({ theme }) => theme.text.sections.sectionSubtitle};
  }
  .reference {
    &-position, &-contact {
      
    }
  }
`;

const References: FC<ReferencesProps> = () => {
    return (
        <Section title="references">
            <List className="list-unstyled">
                <li className="mt-3">
                    <p className="reference-name">Erik Torres</p>
                    <p className="reference-position">Managing Director</p>
                    <p className="reference-contact">P +52 1 81 8029 5254</p>
                </li>
                <li className="mt-3">
                    <p className="reference-name">Karla Ceballos</p>
                    <p className="reference-position">Delivery Director</p>
                    <p className="reference-contact">P +1 214 603 1015</p>
                </li>
            </List>
        </Section>
    );
};

export default References;
