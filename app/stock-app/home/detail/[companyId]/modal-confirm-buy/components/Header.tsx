import { TFunction } from 'i18next';
import React from 'react'

interface IProps{
    t: TFunction<"translation", undefined>;
}

const Header = (props: IProps) => {
    const {t}  = props
  return (
    <div className='header'>{t('homeDetail.modalConfirmBuy.title')}</div>
  )
}

export default Header