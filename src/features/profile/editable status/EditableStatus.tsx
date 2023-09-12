import React, {useState} from 'react';
import styled from "styled-components";

type PropsType = {
    status: string | null
}

export const EditableStatus = (props: PropsType) => {
    const [mode, setMode] = useState(false)

    const ModeHandler = () => {
        setMode(!mode)
    }

    return (
        <div onDoubleClick={ModeHandler}>
            {!props.status ? 'Status is absent' : props.status}
        </div>
    );
};


const StyledInput = styled.input`

`

