import { classNames } from 'shared/lib/classnames/classnames'
import cls from './ThemeSwitcher.module.scss'
import React from 'react'
import { useTheme } from 'app/providers/ThemeProviders/lib/useTheme'
import LightIcon from 'shared/assets/icons/light.svg'
import DarkIcon from 'shared/assets/icons/dark.svg'
import { Theme } from 'app/providers/ThemeProviders/lib/ThemeContext'
import { Button, ThemeButton } from 'shared/ui/Button/Button'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme()
  return (
		<Button
			theme={ThemeButton.CLEAR}
			className={classNames(cls.ThemeSwitcher, {}, [className || ''])}
			onClick={toggleTheme}
		>
			{ theme === Theme.LIGHT
			  ? <LightIcon width={'40px'} height={'40px'}/>
			  : <DarkIcon width={'40px'} height={'40px'}/>
			}
		</Button>
  )
}
