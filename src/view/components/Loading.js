import React from 'react'
import {  Modal } from '@material-ui/core'
import { changeLoading } from '../../store/actions/loading.action'
import { useSelector,useDispatch } from 'react-redux'


export default function Loading() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.loadingReducer);
    return (
        <div>
            <Modal 
            open={loading.open}
            onClose={() => dispatch( changeLoading({ open: false }) )}
            >
                <h1>Danuiel MIodal</h1>
            </Modal>
        </div>
    )
}
