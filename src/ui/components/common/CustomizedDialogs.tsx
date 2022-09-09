import React from 'react';
import {styled} from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {useAppSelector} from "../../../bll/store";
import {setAppOpenDiologsAC} from "../../../bll/appReducer";
import {useDispatch} from "react-redux";


const BootstrapDialog = styled(Dialog)(({theme}) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

export interface DialogTitleProps {
    children?: React.ReactNode;
    onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
    const {children, onClose, ...other} = props;

    return (<DialogTitle sx={{m: 0, p: 2, width: '395px'}} {...other}>
            {children}
            {onClose ? (
                <IconButton aria-label="close"
                            onClick={onClose}
                            sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[500],
                            }}
                >
                    <CloseIcon/>
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

export interface CustomizedDialogsProps {
    children?: React.ReactNode;
    title: string
    diologsName: string
}

export function CustomizedDialogs(props: CustomizedDialogsProps) {
    const dispatch = useDispatch()
    const isOpenDiologs = useAppSelector(state => state.app.isOpenDiologs)

    const handleClose = () => {
        dispatch(setAppOpenDiologsAC('close'))
    }
    return (
        <div>
            <BootstrapDialog onClose={handleClose}
                             aria-labelledby="customized-dialog-title"
                             open={props.diologsName === isOpenDiologs}
            >
                <BootstrapDialogTitle onClose={handleClose}>
                    {props.title}
                </BootstrapDialogTitle>
                <DialogContent dividers>
                    {props.children}
                </DialogContent>
            </BootstrapDialog>
        </div>
    )
}
