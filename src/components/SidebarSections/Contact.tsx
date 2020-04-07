import React, {FC} from 'react';
import Section from "../Section";
import PhoneIcon from "../icons/PhoneIcon";
import WorldIcon from "../icons/WorldIcon";
import MapMarker from "../icons/MapMarker";

type ContactProps = {};

const Contact: FC<ContactProps> = () => {
    return (
        <Section title="contact">
            <ul className="list-unstyled">
                <li className="mt-3 d-flex align-items-center"><PhoneIcon withRoundBorder size={40} />+52 1 449 387 7244</li>
                <li className="mt-3 d-flex align-items-center">
                    <div className="d-flex">
                        <WorldIcon withRoundBorder size={40} wrapperClassName="col-auto" />
                        <div className="d-flex flex-wrap flex-column line-height-reset">
                            andre@karell.email
                            <a href="https://karell.dev" target="_blank" rel="noopener noreferrer">karell.dev</a>
                        </div>
                    </div>
                </li>
                <li className="mt-3 d-flex align-items-center"><MapMarker withRoundBorder size={40} />Aguascalientes, Ags, Mexico.</li>
            </ul>
        </Section>
    );
};

export default Contact;
