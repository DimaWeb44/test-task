import {Avatar, Grid, IconButton, Paper, TextField, Typography} from "@mui/material"
import {Delete} from "@mui/icons-material";
import {changePostAC, setTextIdPostAC} from "../../bll/profileReducer";
import {useDispatch} from "react-redux";
import EditIcon from "@mui/icons-material/Edit";
import React, {ChangeEvent, useState} from "react";
import {setAppOpenDiologsAC} from "../../bll/appReducer";

type PostType = {
    text: string
    smallPhoto: string
    date: string
    id: string
    name: string
}

export const Post = ({text, smallPhoto, date, id, name}: PostType) => {
    const dispatch = useDispatch()
    let [editMode, setEditMode] = useState(false)
    let [title, setTitle] = useState(text)

    const activateEditMode = () => {
        setEditMode(true)
        setTitle(title)
    }

    const activateViewMode = () => {
        setEditMode(false)
        dispatch(changePostAC(id, title))
    }

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const deletePost = () => {
        dispatch(setTextIdPostAC(id, text))
        dispatch(setAppOpenDiologsAC('openDeletePostDialogs'))
    }

    return (<Grid sx={{marginTop: '20px', flexWrap: 'nowrap'}}
                  container
                  direction="row"
                  justifyContent="flex-start"
                  alignItems="flex-start">
            <Grid marginRight={'5px'}>
                <Avatar src={smallPhoto} alt=''/>
            </Grid>
            <Grid width={'100%'}>
                <Grid>
                    <Typography style={{color: '#1976d2', marginLeft: '5px'}}>
                        <b>{name}</b>
                        <span style={{color: 'rgba(0, 0, 0, 0.54)', fontSize: '12px', marginLeft: '10px'}}>{date}</span>
                    </Typography>
                </Grid>
                <Grid container width={'100%'}>
                    <Paper elevation={2}
                           sx={{
                               padding: '10px',
                               backgroundColor: "#e0eaff",
                               borderRadius: '0 20px 20px 20px',
                               marginTop: '5px',
                               width: '100%'
                           }}>
                        <Grid>
                            {editMode
                                ? <TextField
                                    fullWidth
                                    multiline
                                    rows={2}
                                    variant="standard"
                                    value={title}
                                    onChange={changeTitle}
                                    autoFocus
                                    onBlur={activateViewMode}
                                />
                                : <Grid>
                                    <Typography variant="body1" component="div">
                                        <div style={{wordBreak: 'break-all'}}>{text}</div>
                                    </Typography>
                                    <IconButton onClick={deletePost}>
                                        <Delete fontSize="small" color="disabled"/>
                                    </IconButton>
                                    <IconButton onClick={activateEditMode}>
                                        <EditIcon fontSize="small" color="disabled"/>
                                    </IconButton>
                                </Grid>
                            }
                        </Grid>
                    </Paper>
                </Grid>
            </Grid>
        </Grid>
    )
}