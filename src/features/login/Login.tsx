import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {SubmitHandler, useForm} from "react-hook-form";
import {authLogInTC} from "features/login/auth-reducer";
import {Navigate} from "react-router-dom";
import {RootState} from "app/store";


    type LoginFormInputs = {
        email?: string
        password?: string
        rememberMe?: boolean
    }

    export const Login = () => {

        const auth = useSelector((state:RootState)=>state.auth)
        const dispatch = useDispatch()


        const {register, handleSubmit, watch, formState: {errors}} = useForm<LoginFormInputs>();

        const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
            dispatch(authLogInTC(data.email!, data.password!))
        };

        if (auth.isLoggedIn) {
            return <Navigate to={'/SocialStyled'}/>
        }

        return (
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    {...register('email', {
                        required: true,
                        pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i
                    })}
                />
                {errors.email && errors.email.type === 'required' && <div>Required</div>}
                {errors.email && errors.email.type === 'pattern' && <div>Invalid email address</div>}
                <input type="password"
                       {...register('password', {
                           required: true,
                           minLength: 4
                       })}
                />
                {errors.password && errors.password.type === 'required' && <div>Required</div>}
                {errors.password && errors.password.type === 'minLength' && <div>Password is invalid</div>}
                <button type={'submit'}>
                    Log In
                </button>
            </form>
        )
    }
