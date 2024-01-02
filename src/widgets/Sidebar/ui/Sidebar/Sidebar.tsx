import { classNames } from 'shared/lib/classnames/classnames'
import cls from './Sidebar.module.scss'
import React, { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { LangSwitcher } from 'shared/ui/LangSwitcher/LangSwitcher'
import { useTranslation } from 'react-i18next'

interface SidebarProps {
  className?: string
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const onToggle = () => {
    setCollapsed(prev => !prev)
  }
  const { t } = useTranslation('toggle')

  return (
		<div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className ?? ''])}>
			<button onClick={onToggle}>{t('Переключить')}</button>
			<div className={cls.switchers}>
				<ThemeSwitcher />
				<LangSwitcher className={cls.lang}/>
			</div>
		</div>
  )
}
