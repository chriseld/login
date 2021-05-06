import React from 'react'
import { LoginForm } from './LoginForm';


import './modal.css';

function LoginModal(props) {
    return (
        <div className={`modal ${props.show ? 'show' : ''}`} onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">Login</h4>
                </div>
                <div className="modal-body">
                    <LoginForm />
                </div>
                <div className="modal-footer">
                    <button className="button" onClick={props.onClose}>close</button>
                </div>
            </div>
        </div>
    )}

export {LoginModal}
