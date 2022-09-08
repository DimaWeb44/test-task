import React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Grid} from '@mui/material';
import {CustomizedDialogs} from "./common/CustomizedDialogs";
import {useDispatch} from "react-redux";
import {removePostAC} from "../../bll/profileReducer";
import {setAppOpenDiologsAC} from "../../bll/appReducer";
import {useAppSelector} from "../../bll/store";


export function DeletePostDialogs() {
    const dispatch = useDispatch()
    const post = useAppSelector(state => state.profile.post)

    const removePost = () => {
        dispatch(removePostAC(post.id))
        dispatch(setAppOpenDiologsAC('close'))
    }

    return (
        <div>
            <CustomizedDialogs diologsName={'openDeletePostDialogs'} title={'Delete Post'}>
                <Grid>
                    <Typography sx={{margin: '14px 0 30px 0'}}>
                        Do you really want to remove <b>{post.text && post.text.length > 10
                        ? `${post.text.substring(0, 10)}...`
                        : post.text}</b>?
                    </Typography>
                    <Button sx={{borderRadius: '30px', marginBottom: '30px'}}
                            type={'submit'}
                            variant={'contained'}
                            color={'error'}
                            onClick={removePost}
                            fullWidth>Delete</Button>
                </Grid>
            </CustomizedDialogs>
        </div>
    );
}
