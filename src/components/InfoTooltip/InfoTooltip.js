import React from "react";
import tooltipImageSuccess from '../../images/popup__tooltip-image_success.svg'

import tooltipImageFailed from '../../images/popup__tooltip-image_failed.svg'

import './InfoTooltip.css'

export default function InfoTooltip({isOpen, onClose, serverCallbackStatus, infoToolTipMassage}) {

    return (
        <div className={`popup ${isOpen && "popup_opened"}`} id={`popup__info-tooltip`}>
            <div className="popup__container">
                <button className="popup__close-btn" type="button" onClick={onClose}/>
                <img
                    className="popup__tooltip-image"
                    src={serverCallbackStatus ? tooltipImageSuccess : tooltipImageFailed}
                    alt="Вы успешно зарегистрировалить!"
                />
                <h2 className="popup__tooltip-header">
                    {infoToolTipMassage}
                </h2>
            </div>
        </div>
    )
}