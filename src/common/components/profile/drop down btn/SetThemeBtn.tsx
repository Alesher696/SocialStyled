import React from 'react';
import {Button, Dropdown} from "antd";
import type { MenuProps } from 'antd';
import styled from "styled-components";
import {EditOutlined} from "@ant-design/icons";


const items: MenuProps['items'] = [
    {
        key: '1',
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
                1st menu item
            </a>
        ),
    },
    {
        key: '3',
        danger: true,
        label: (
            <a target="_blank" rel="noopener noreferrer" href="https://www.luohanacademy.com">
                3rd menu item
            </a>
        ),
    },
];

export const SetThemeBtn = () => {
    return (
        <>
            <DropDownStyled menu={{ items }} placement="bottomRight" arrow>
                <Button><EditOutlined rev color={'white'}/></Button>
            </DropDownStyled>
        </>
    );
};

const DropDownStyled = styled(Dropdown)`
      background-color: rgba(40, 44, 52, 0.66);
      border: none;
      color: white;
      border-radius: 5px 15px 0 5px;
`

