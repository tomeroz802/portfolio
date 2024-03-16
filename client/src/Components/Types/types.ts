import React from 'react'

export type Select = {
    title: string,
    ul: string[],
    icon: React.JSX.Element,
    state: boolean,
    stateFunc: React.Dispatch<React.SetStateAction<boolean>>
}

export type SendData = {
    name: string, 
    phone: string,
    mail: string,
    msg: string
}

export type apiMsgType = {
    show: boolean,
    msg: string
}