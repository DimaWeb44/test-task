import React, {ChangeEvent, useState} from 'react';
import {TextField} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';

type EditableSpanPropsType = {
    value: string
    onChange: (newValue: string) => void
}

export const EditableSpan = React.memo(function (props: EditableSpanPropsType) {
    let [editMode, setEditMode] = useState(false)
    let [title, setTitle] = useState(props.value)
    let [error, setError] = useState<string | null>(null)

    const activateEditMode = () => {
        setError(null)
        setEditMode(true)
        setTitle(props.value)
    }
    const activateViewMode = () => {
        if (title.trim() !== "") {
            props.onChange(title)
            setEditMode(false)
            setTitle("");
        } else {
            setError("Title is required")
        }
    }

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {setTitle(e.currentTarget.value)}

    return editMode
        ? <TextField variant="standard"
                     value={title}
                     onChange={changeTitle}
                     autoFocus
                     onBlur={activateViewMode}
                     helperText={error}/>
        :
        <span onDoubleClick={activateEditMode}>{props.value}<EditIcon style={{fontSize: '15px', paddingLeft: '10px'}}/></span>
})
