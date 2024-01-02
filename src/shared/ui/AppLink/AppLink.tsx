import { classNames } from 'shared/lib/classnames/classnames'
import cls from './AppLink.module.scss'
import { Link, type LinkProps } from 'react-router-dom'
import { type FC } from 'react'
import React from 'react'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

type AppLinkProps = {
  className?: string
  theme?: AppLinkTheme
} & LinkProps

export const AppLink: FC<AppLinkProps> = props => {
  const {
    to,
    className,
    theme = AppLinkTheme.PRIMARY,
    children,
    ...other
  } = props
  return (
		<Link
			to={to}
			className={classNames(cls.AppLink, {}, [className, cls[theme]])}
			{ ...other }
		>
			{children}
		</Link>
  )
}
