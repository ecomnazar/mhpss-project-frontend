import { useTranslation } from 'react-i18next'
import DownloadPdf from '../components/DownloadPdf'
import JustNextButton from '../components/JustNextButton'
import { pdfDownloader } from '../lib/pdfDownloader';

interface Props {
    day: string;
}

const Day1Theme5: React.FC<Props> = ({ day }) => {
    const { t, i18n } = useTranslation()



    return (
        <div>
            <div onClick={() => pdfDownloader(`/pdf-files/day-${day}/${i18n.language}.pdf`)}>
                <DownloadPdf title={`${t('day') + ' ' + day}`} />
            </div>
            <JustNextButton className='mt-4' />
        </div>
    )
}

export default Day1Theme5