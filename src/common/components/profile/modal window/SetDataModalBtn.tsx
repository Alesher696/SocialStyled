import React, {ChangeEvent, useState} from 'react';
import {useDispatch} from "react-redux";
import styled, {StyleSheetManager} from "styled-components";
import {Button, Input, Modal} from "antd";
import {EditOutlined} from "@ant-design/icons";


export const SetDataModalBtn = () => {

    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()

    const showModal = () => {
        setOpen(true);
    };

    const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {

    };

    const onCancel = () => {
        setOpen(false);
    }

    const handleUpload = () => {
        onCancel();
    };

    return (
        <StyleSheetManager shouldForwardProp={(prop) => prop !== 'text'}>
            <UploadModalWrapper>
                <StyledButtonOpen type="primary" onClick={showModal}>
                    <EditOutlined rev color={'white'}/> status
                </StyledButtonOpen>
                <StyledModal
                    open={open}
                    title="Загрузка URL картинки"
                    onCancel={onCancel}
                    footer={[
                        <Button key="cancel" onClick={onCancel}>
                            Отмена
                        </Button>,
                        <StyledButtonUpload key="upload" type="primary" onClick={handleUpload}>
                            Загрузить
                        </StyledButtonUpload>,
                    ]}
                >
                    <StyledInput type='file' onChange={handleTextChange}></StyledInput>
                </StyledModal>
            </UploadModalWrapper>
        </StyleSheetManager>
    );
};

const UploadModalWrapper = styled.div`
  display: block;
  //position: absolute;

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
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #3D50FA;
  height: 24px;

  .ant-btn-primary:hover {
    background: black;
    border-color: black;
  }
`

const StyledButtonUpload = styled(Button)`

  transition: background-color 0.2s ease, color 0.2s ease, box-shadow 0.2s ease;
`

const StyledInput = styled(Input)`

  background-color: #282c34;
  color: white;
  resize: none;
  outline: none;
  border: none;

  &::placeholder {
    color: rgba(127, 127, 145, 0.47);
  }

`