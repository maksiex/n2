import { classNames } from 'shared/lib/classnames/classnames'
import cls from './Button.module.scss'
import { type ButtonHTMLAttributes, type FC } from 'react'
import React from 'react'

export enum ThemeButton {
  CLEAR = 'clear',
}

type ButtonProps = {
  className?: string
  theme?: ThemeButton
} & ButtonHTMLAttributes<HTMLButtonElement>

export const Button: FC<ButtonProps> = props => {
  const { className, children, theme, ...otherProps } = props
  return (
		<button
            type="button"
			className={classNames(cls.Button, { [cls[theme]]: true }, [className ?? ''])}
			{...otherProps}
		>
			{children}
		</button>
  )
}
