import { useTranslation } from 'react-i18next'
import DownloadPdf from '../components/DownloadPdf'
import JustNextButton from '../components/JustNextButton'

interface Props {
    day: string;
}

const Day1Theme5: React.FC<Props> = ({ day }) => {
    const { t, i18n } = useTranslation()

    return (
        <div>
            <a href={`/pfd-files/day-${day}/${i18n.language}.pdf`} download={`day-${day}-${i18n.language}.pdf`} type="application/pdf" target={'_blank'}>
                <DownloadPdf title={`${t('day') + ' ' + day}`} />
            </a>
            <JustNextButton className='mt-4' />
        </div>
    )
}

export default Day1Theme5