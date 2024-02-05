import { useTranslation } from "react-i18next"
// import { useUserStore } from "../stores/useUserStore"
import DownloadPdf from "../components/DownloadPdf"
import { pdfDownloader } from "../lib/pdfDownloader"

const AboutPage = () => {
    const { i18n, t } = useTranslation()

    return (
        <>
            <section className="container mx-auto px-4 mt-4 md:mt-10">
                <h2 className="text-black font-[600] text-xl">{t('info.title')}</h2>
                <p className="text-sm sm:text-[15px] mt-4">{t('info.desc')}</p>
                <div className="flex flex-col xl:flex-row-reverse items-start gap-x-8 mt-0 xl:mt-12">
                    <video className="mb-4 mx-auto w-full mt-4 sm:h-[300px] xl:h-[500px]" controls poster="/images/about-page-video-thumbnail.jpeg" src="/videos/about-page-video.mp4" />
                    {/* <iframe className="w-full h-[400px]" src="https://disk.gozle.com.tm/api/v1/file-entries/189702?shareable_link=9199&password=null&thumbnail="></iframe> */}
                    {/* <h2 className="text-black font-[600] text-xl mb-4">{t('info.secondTitle')}</h2> */}
                    <div>
                        <div className="flex flex-col gap-y-4 mb-4">
                            <div>
                                {/* <h3 className="text-lg font-[600] mb-4">General Mental Health Competencies</h3> */}
                                <ul className="flex flex-col gap-y-4">
                                    <li className="text-md sm:text-[18px] font-[700]">{t('info.courseFor')}:</li>
                                    {Array.from({ length: 7 }).map((_, index) => {
                                        return (
                                            <li key={index} className="text-sm sm:text-[15px] ml-4 md:ml-8">- {t(`info.courseFor${index + 1}`)}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col gap-y-4">
                            <div>
                                {/* <h3 className="text-lg font-[600] mb-4">General Mental Health Competencies</h3> */}
                                <ul className="flex flex-col gap-y-4">
                                    <li className="text-md sm:text-[18px] font-[700]">{t('info.target')}:</li>
                                    {Array.from({ length: 4 }).map((_, index) => {
                                        return (
                                            <li key={index} className="text-sm sm:text-[15px] ml-4 md:ml-8">- {t(`info.target${index + 1}`).charAt(0).toLowerCase() + t(`info.target${index + 1}`).slice(1)}</li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>



                {/*  */}

                <div className="flex flex-col gap-y-4 my-8">
                    <div>
                        {/* <h3 className="text-lg font-[600] mb-4">General Mental Health Competencies</h3> */}
                        <ul className="flex flex-col gap-y-4">
                            <li className="text-md sm:text-[18px] font-[700]">{t('pdfText.theme')}</li>
                            {/* Ýerli derejede okuw geçirmek üçin materialla */}
                            {/* Материалы для индивидуального обучения */}
                            <li className="text-sm sm:text-[15px] ml-4 md:ml-8 flex flex-col gap-y-2">
                                <div onClick={() => pdfDownloader(`/pdf-files/about-page/${i18n.language}/1.pdf`)}>
                                    <DownloadPdf title={t('pdfText.first')} />
                                    {/* MHPSS Training Guideline */}
                                    {/* PSPSG bermek boýunça okuw gollanmasy */}
                                    {/* Руководство по обучению ПЗПСП */}
                                </div>
                                <div onClick={() => pdfDownloader(`/pdf-files/about-page/${i18n.language}/2.pdf`)}>
                                    <DownloadPdf title={t('pdfText.second')} />
                                    {/* MHPSS Training Manual */}
                                    {/* PSPSG bermek boýunça amaly gollanma */}
                                    {/* Учебное пособие по ПЗПСП */}
                                </div>


                                <div onClick={() => pdfDownloader(`/pdf-files/about-page/${i18n.language}/3.pdf`)}>
                                    <DownloadPdf title={t('pdfText.third')} />
                                    {/* MHPSS Training Participants Workbook */}
                                    {/* PSPSG bermek boýunça okuwa gatnaşyjylaryň iş depderi */}
                                    {/* Рабочая тетрадь участников тренинга по ПЗПСП */}
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

            </section>
        </>
    )
}

export default AboutPage