import React, {MutableRefObject, useCallback, useRef, useState} from 'react';
// @ts-ignore
import ReactToPdf from 'react-to-pdf';
import styled from "styled-components";
import Button from "../Button/Button";

import DownloadIcon from "../icons/Download";
import EmailIcon from "../icons/Email";

type HelperButtonsProps = {
    pdfRef: MutableRefObject<HTMLDivElement | null>
};

const HelperButtonsWrapper = styled.div`
  position: fixed;
  top: 50px;
  
  > div {
    position: relative;
    left: -30px;
    display: flex;
    flex-direction: column;
    
    button {
      margin-bottom: 10px;
    }
  }
`;

function HelperButtons(props: HelperButtonsProps) {
    const wrapperRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
    const { pdfRef } = props;
    const toPdfRef: MutableRefObject<() => void> = useRef(() => {});
    const [pdfOptions] = useState({
        orientation: 'landscape',
        unit: 'in',
        format: [4,2]
    });

    const onDownload = useCallback(() => {
        if (wrapperRef.current !== null) {
            wrapperRef.current.style.display = 'none';
            toPdfRef.current();
            wrapperRef.current.style.display = 'block';
        }
    }, []);

    return (
        <HelperButtonsWrapper ref={wrapperRef}>
            <div>
                {/* @todo: fix click to pdf */}
                <ReactToPdf targetRef={pdfRef} filename="Andre Contreras CV.pdf" options={pdfOptions}>
                    {/*
                        // @ts-ignore */}
                    {({ toPdf }) => {
                        toPdfRef.current = toPdf;
                        return (
                            <Button label="Download" Icon={DownloadIcon} iconProps={{ size: 40, margin: '0' }} onClick={onDownload} />
                        )
                    }}
                </ReactToPdf>
                <Button label="Download" Icon={EmailIcon} iconProps={{ size: 40, margin: '0' }} />
            </div>
        </HelperButtonsWrapper>
    );
}

export default HelperButtons;
