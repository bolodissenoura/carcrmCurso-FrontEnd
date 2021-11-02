import React from 'react'
import { change, login } from '../../store/actions/auth.action'
import { Typography, TextField, Button } from '@material-ui/core'
import { Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

export default function Auth() {
    const dispatch = useDispatch();
    const { credentials, success } = useSelector(state => state.authReducer)
    return (
        <div className="d-flex bg-white min-vh-100">
            <div className="container mt-5">
                <div className="row justify-content-center">
                    <div className="form-goup text-center">
                        <img src="/banner-logo.png" alt="LOGO VRUM" height="88"/>
                        <Typography className="mt-3" variant="h6" component="h1">Plataforma para Revenda de veiculos</Typography>
                    </div>
                    <TextField
                        label="E-mail"
                        type="email"
                        margin="normal"
                        autoComplete="email"
                        value={credentials.email}
                        onChange={text => dispatch( change({email: text.target.value }) ) }
                    />
                    <TextField
                        label="Senha"
                        margin="normal"
                        type="password"
                        value={credentials.password}
                        onChange={text => dispatch( change({password: text.target.value }) ) }
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        fullWidth
                        size="large"
                        className="mt-4 mb-4"
                        onClick={() => dispatch( login(credentials) )}
                    >
                        Entrar

                    </Button>

                    {(success) && 
                        <Redirect to="/vehicles"/>
                    }
                </div>
            </div>
        </div>
    )
}
