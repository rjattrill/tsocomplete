// @flow
import * as React from 'react'
import '../styles/eol.scss'
import eolLogo from './../assets/eol-logo.png'

type Props = {

}

export function EolHeader(props: Props) {
    return (
        <div className="eol-header">
            <a href="https://www.energyone.com">
                <img src={eolLogo} height={40} className='logo' alt='EOL' />
            </a>
        </div>
    )
}