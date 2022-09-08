import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Button, makeStyles, TextField} from "@mui/material";

type AddItemFormPropsType = {
    addItem: (title: string) => void
    disabled?: boolean
}


export const AddItemForm = React.memo(function ({addItem, disabled = false}: AddItemFormPropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addItemHandler = () => {
        if (title.trim() !== "") {
            addItem(title);
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (error !== null) {
            setError(null);
        }
        if (e.charCode === 13) {
            addItemHandler();
        }
    }

    return <div style={{width: '100%', textAlign: 'right'}}>
        <TextField
            sx={{
                '& .MuiOutlinedInput-root': {
                    marginTop: '30px',
                    '& fieldset': {
                        borderRadius: `20px`,
                    },
                },
            }}
            placeholder="Enter post"
            multiline
            fullWidth
            rows={2}
            disabled={disabled}
            error={!!error}
            value={title}
            onChange={onChangeHandler}
            onKeyPress={onKeyPressHandler}
            helperText={error}
        />
        <Button sx={{margin: '10px 0 0 0', borderRadius: '30px'}}
                variant={'contained'}
                color={'primary'}
                onClick={addItemHandler}>Add post</Button>
    </div>
})
