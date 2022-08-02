import React from 'react';



//-=-=-=-=-=-=-=-Style-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=||
import style from './header.module.scss';

function Header() {
    return (
        <div className={style.headerContainer}>
            <div className={style.headerDiv}>
                <h1>
                    Ease your digital transformation.
                    <p> Flexibly and cost-efficiently.</p>
                </h1>
            </div>
            <div className={style.headerDiv}>
                <h1>
                    Your port towards a smooth digital <br /> transformation with
                    latesed technologies out there.
                </h1>
            </div>
        </div>
    )
}

export default Header;