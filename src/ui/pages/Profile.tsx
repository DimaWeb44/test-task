import {Avatar, Grid, IconButton} from "@mui/material";
import {useDispatch} from "react-redux";
import {PhotoCamera} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import React from "react";
import {
    addNewPostAC,
    PostType,
    setNewAvatarAC,
    setNewEmailAC,
    setNewNameAC,
    setNewPhoneAC
} from "../../bll/profileReducer";
import {useAppSelector} from "../../bll/store";
import {EditableSpan} from "../components/common/EditableSpan";
import {AddItemForm} from "../components/common/AddItemForm";
import {Post} from "../components/Post";
import {convertToBase64} from "../../utils/convertToBase64";
import {DeletePostDialogs} from "../components/DeletePostDialogs";

export const Profile = () => {
    const dispatch = useDispatch()
    const profile = useAppSelector(state => state.profile.profile)
    const posts = useAppSelector(state => state.profile.posts)

    const handleFileUpload = async (e: any) => {
        const file = e.target.files[0]
        const base64 = await convertToBase64(file)
        dispatch(setNewAvatarAC(base64))
    }

    return <Grid container
                 direction="row"
                 justifyContent="flex-start"
                 alignItems="center">
        <Grid marginRight={'70px'}>
            <div style={{position: 'relative'}}>
                <Avatar variant="rounded" style={{backgroundColor: '#1976d2'}} src={profile.avatar as string}
                        sx={{width: 210, height: 210,}}/>
                <div style={{position: 'absolute', top: '175px', left: '175px'}}>
                    <Avatar sx={{width: 35, height: 35,}}>
                        <IconButton style={{color: 'white'}} aria-label="upload picture" component="label">
                            <input hidden accept="image/*" type="file" onChange={e => handleFileUpload(e)}/>
                            <PhotoCamera/>
                        </IconButton>
                    </Avatar>
                </div>
            </div>
        </Grid>
        <Grid>
            <Typography component={'div'} style={{fontSize: '26px', marginBottom: '40px'}}>
                <b><EditableSpan value={profile.name} onChange={(title) => dispatch(setNewNameAC(title))}/></b>
            </Typography>
            <hr/>
            <Typography component={'div'} style={{fontSize: '14px'}}>
                email: <b><EditableSpan value={profile.email}
                                        onChange={(title) => dispatch(setNewEmailAC(title))}/></b>
            </Typography>
            <Typography component={'div'} style={{fontSize: '14px'}}>
                phone: <b><EditableSpan value={profile.phone}
                                        onChange={(title) => dispatch(setNewPhoneAC(title))}/></b>
            </Typography>
        </Grid>
        <AddItemForm addItem={(title) => dispatch(addNewPostAC(title))}/>
        {posts.map((item: PostType) => <Post
            name={profile.name}
            key={item.id}
            id={item.id}
            text={item.text}
            smallPhoto={profile.avatar as string}
            date={item.date}/>)}
        <DeletePostDialogs/>
    </Grid>
}