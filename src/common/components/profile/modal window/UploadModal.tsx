import React, {ChangeEvent, useState} from 'react';
import { Modal, Button, Input } from 'antd';
import styled, {StyleSheetManager} from "styled-components";



export const TextUploadModal = () => {

    const [text, setText] = useState('');
    const [open, setOpen] = useState(false);


    const showModal = () => {
        setOpen(true);
    };

    const handleTextChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.currentTarget.value);
    };
const onCancel = ()=>{
    setOpen(false);
}
    const handleUpload = () => {
        // onUpload(text);
        setText('');
        onCancel();
    };

    return (
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'text'}>
        <UploadModalWrapper>
            <StyledButtonOpen type="primary" onClick={showModal}>
                Ph
            </StyledButtonOpen>
        <StyledModal

            open={open}
            title="Загрузка URL картинки"
            onCancel={onCancel}
            footer={[
                <Button key="cancel" onClick={onCancel}>
                    Отмена
                </Button>,
                <StyledButtonUpload text={text} key="upload" type="primary" onClick={handleUpload}>
                    Загрузить
                </StyledButtonUpload>,
            ]}
        >
            <StyledInput
                placeholder="Введите текст здесь..."
                value={text}
                onChange={handleTextChange}
                rows={1}
            />
        </StyledModal>
            </UploadModalWrapper>
            </StyleSheetManager>
    );
};

const UploadModalWrapper = styled.div`
  display: block;
  position: absolute;
  
`
const StyledModal = styled(Modal)`
  .ant-modal-content {
    background-color: #1a1a21;
   
  }
  .ant-modal-title {
    color: white;
  }
  .ant-modal-header {
    background-color: #1a1a21;
    color: white;
  }
`
const StyledButtonOpen = styled(Button)`
  background-color: #3D50FA;
  .ant-btn-primary:hover {
    background: black;
    border-color: black;
  }
`

const StyledButtonUpload = styled(Button)<{text:string}>`
  background-color: ${props => props.text ? '#3D50FA' : 'rgba(61, 80, 250, 0.6)'};
  -webkit-box-shadow: ${props => props.text ? '0px 1px 19px 4px #3D50FA' : 'none'};
  -moz-box-shadow: ${props => props.text ? '0px 1px 19px 4px #3D50FA' : 'none'};
  box-shadow: ${props => props.text ? '0px 1px 19px 4px #3D50FA' : 'none'};
  transition: background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
`

const StyledInput = styled(Input.TextArea)`
  
  background-color: #282c34;
  color: white;
  resize: none;
  outline: none;
  border: none;
  &::placeholder {
    color: rgba(127, 127, 145, 0.47);
  }
 
`