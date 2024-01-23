import { useTranslation } from "react-i18next"
import { useUserStore } from "../stores/useUserStore"

const AboutPage = () => {
    const { t } = useTranslation()
    const downloadPdfApi = useUserStore((state) => state.downloadPdfApi)

    const downloadPdf = () => {
        downloadPdfApi()
    }

    return (
        <>
            <section className="container mx-auto px-4 mt-8">
                <h2 className="text-black font-[600] text-xl">{t('info.title')}</h2>
                <p className="text-sm sm:text-[18px]">{t('info.desc')}</p>
                <img className="my-4" src="/images/about-page-image.png" />
                {/* <iframe className="w-full h-[400px]" src="https://disk.gozle.com.tm/api/v1/file-entries/189702?shareable_link=9199&password=null&thumbnail="></iframe> */}
                <h2 className="text-black font-[600] text-xl mb-4">{t('info.secondTitle')}</h2>
                <div className="flex flex-col gap-y-4 mb-4">
                    <div>
                        {/* <h3 className="text-lg font-[600] mb-4">General Mental Health Competencies</h3> */}
                        <ul className="flex flex-col gap-y-4">
                            <li className="text-sm sm:text-[18px] font-[500]">{t('info.courseFor')}:</li>
                            {Array.from({ length: 7 }).map((_, index) => {
                                return (
                                    <li className="text-sm sm:text-[15px]">{`${index + 1}. ` + t(`info.courseFor${index + 1}`)}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-y-4">
                    <div>
                        {/* <h3 className="text-lg font-[600] mb-4">General Mental Health Competencies</h3> */}
                        <ul className="flex flex-col gap-y-4">
                            <li className="text-sm sm:text-[18px] font-[500]">{t('info.target')}:</li>
                            {Array.from({ length: 4 }).map((_, index) => {
                                return (
                                    <li className="text-sm sm:text-[15px]">{`${index + 1}. ` + t(`info.target${index + 1}`)}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>

                {/*  */}

                <div className="flex flex-col gap-y-4 my-4">
                    <div className="flex items-center gap-x-4">
                        <img className="w-[24px]" src="/images/download-icon.svg" alt="" />
                        <div>
                            <h4 className="text-primary text-sm font-[600] cursor-pointer">Specialized MHPSS Competencies</h4>
                            <p onClick={downloadPdf} className="text-lightDark text-[10px]">Click to download</p>
                        </div>
                    </div>

                    {/*  */}

                    <div className="flex items-center gap-x-4">
                        <img className="w-[24px]" src="/images/download-icon.svg" alt="" />
                        <div>
                            <h4 className="text-primary text-sm font-[600] cursor-pointer">General Mental Health Competencies</h4>
                            <p onClick={downloadPdf} className="text-lightDark text-[10px] cursor-pointer">Click to download</p>
                        </div>
                    </div>

                    {/*  */}

                    <div className="flex items-center gap-x-4">
                        <img className="w-[24px]" src="/images/download-icon.svg" alt="" />
                        <div>
                            <h4 className="text-primary text-sm font-[600] cursor-pointer">Teaching and Training Competencies</h4>
                            <p onClick={downloadPdf} className="text-lightDark text-[10px]">Click to download</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutPage