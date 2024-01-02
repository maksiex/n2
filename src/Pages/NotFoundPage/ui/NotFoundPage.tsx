import React from 'react'
import { useTranslation } from 'react-i18next'
interface NotFoundPageProps {
  className?: string
}
export const NotFoundPage = ({ className }: NotFoundPageProps) => {
  const { t } = useTranslation()
  return (
        <div className={className}>
            {t('Страница не найдена')}
        </div>
  )
}
