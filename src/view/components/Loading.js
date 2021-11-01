import React from 'react'
import {  Modal, CircularProgress, Typography } from '@material-ui/core'
import { changeLoading } from '../../store/actions/loading.action'
import { useSelector,useDispatch } from 'react-redux'


export default function Loading() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.loadingReducer);
    return (
        
            <Modal 
            open={loading.open}
            onClose={() => dispatch( changeLoading({ open: false }) )}
            className="d-flex justify-content-center align-items-center h-100"
            >
                <div className="d-flex bg-white rounded-pill p-3 align-itens-center">
                    <CircularProgress size={20} className="mr-3"/>
                    <Typography variant="subtitle1">{loading.msg}</Typography>
                </div>
            </Modal>
       
    )
}
