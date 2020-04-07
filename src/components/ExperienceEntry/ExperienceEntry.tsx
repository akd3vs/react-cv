import React from 'react';
import styled from "styled-components";

type ExperienceEntryProps = {
    position: string,
    company: string,
    location?: string,
    start?: string,
    end?: string,
    items?: string[],
} & typeof defaultProps;
const defaultProps = {
    companyLocationSeparation: true,
    location: '',
    start: '',
    end: '',
};

const ExperienceEntryWrapper = styled.div`
  margin-bottom: 25px;
  .experience-entry {
    &__position {
      font: ${({ theme }) => theme.text.experience.title.font};
      color: ${({ theme }) => theme.text.experience.title.colour};
      text-transform: uppercase;
    }
    &__date {
      font: ${({ theme }) => theme.text.experience.title.font};
      color: ${({ theme }) => theme.text.experience.title.colour};
    }
    &__company-location {
      font: ${({ theme }) => theme.text.experience.subtitle.font};
      color: ${({ theme }) => theme.text.experience.subtitle.colour};
    }
    &__items {
      font: ${({ theme }) => theme.text.experience.items.font};
      color: ${({ theme }) => theme.text.experience.items.colour};
      
      li {
        margin-top: 10px;
      }
    }
  }
`;

const ExperienceEntry = (props: ExperienceEntryProps) => {
    const { position, company, location, start, end, items, companyLocationSeparation } = props;

    return (
        <ExperienceEntryWrapper>
            <div className="row">
                <div className="col experience-entry__position">
                    {position}
                </div>
                <div className="col-3 experience-entry__date d-flex justify-content-end">{start} {end && `- ${end}`}</div>
            </div>
            <div className="row">
                <div className="col experience-entry__company-location">{company}{companyLocationSeparation && ' /'} {location}</div>
            </div>
            <ul className="experience-entry__items">
                {items && items.map((item, key) => <li key={key} dangerouslySetInnerHTML={{ __html: item }} />)}
            </ul>
        </ExperienceEntryWrapper>
    );
};

ExperienceEntry.defaultProps = defaultProps;

export default ExperienceEntry;
