import { Link } from "react-router-dom";
import CourseProgressLine from "../components/CourseProgressLine";
import StartCourseButton from "../components/StartCourseButton";
import { useTranslation } from "react-i18next";

const Info = () => {
  const { t } = useTranslation()
  return (
    <section className="container mx-auto px-4 py-8 !pt-0 md:!pt-8">
      <div className="flex items-start justify-between flex-wrap flex-col-reverse md:flex-row">
        <div className="flex flex-col gap-y-4 basis-[100%] md:basis-[43%]">
          <h2 className="text-black text-xl md:mb-6 font-[600]">{t('info.title')}</h2>
          <p className="text-md">{t('info.desc')}</p>
          <div className="flex flex-col gap-y-4">
            <div>
              {/* <h3 className="text-lg font-[600] mb-4">General Mental Health Competencies</h3> */}
              <ul className="flex flex-col gap-y-4">
                <li className="text-md text-xl font-[700]">{t('info.target')}:</li>
                {Array.from({ length: 4 }).map((_, index) => {
                  return (
                    <li key={index} className="text-sm sm:text-[15px] ml-4 md:ml-8">- {t(`info.target${index + 1}`).charAt(0).toLowerCase() + t(`info.target${index + 1}`).slice(1)}</li>
                  )
                })}
              </ul>
            </div>
          </div>
          <Link to={'/about'} className="text-primary mt-auto">{t('info.secondTitle')}</Link>
        </div>
        <div className="h-full basis-[100%] mt-4 md:mt-0 md:basis-[53%]">
          <img
            className="w-screen h-[200px] sm:h-[500px] mb-4 object-cover rounded-md"
            src="/images/main-page-about-image.jpeg"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start justify-between flex-wrap mt-6 md:mt-12">
        <div className="basis-[100%] md:basis-[53%] h-full">
          <img
            className="w-screen h-[200px] sm:h-[300px] md:h-[600px] object-cover object-center rounded-md"
            src="/images/image-2.png"
          />
        </div>
        <div className="basis-[100%] md:basis-[43%] h-full">
          <h2 className="text-black text-xl mb-4 font-[600] mt-4 md:mt-0">
            {t('mainPage.mainText')}
          </h2>
          <CourseProgressLine />
          <div id="info" className="flex flex-col gap-y-3 mb-4">
            <div>
              <h3 className="font-[600] text-[15px]">{t('duration')}:</h3>
              <div className="flex items-center gap-x-2 mt-1">
                <img className="w-[17px]" src="/images/tick.svg" alt="" />
                <p className="text-[14px] text-lightDark">
                  20 {t('hours')}
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-[600] text-[15px]">{t('pace')}</h3>
              <div className="flex items-center gap-x-2 mt-1">
                <img className="w-[17px]" src="/images/tick.svg" alt="" />
                <p className="text-[14px] text-lightDark">{t('paceType')}</p>
              </div>
            </div>
            <div>
              <h3 className="font-[600] text-[15px]">{t('certification')}</h3>
              <div className="flex items-center gap-x-2 mt-1">
                <img className="w-[17px]" src="/images/tick.svg" alt="" />
                <p className="text-[14px] text-lightDark">{t('downloadCertificate')}</p>
              </div>
            </div>
            <div>
              <h3 className="font-[600] text-[15px]">{t('youWillLearn')}</h3>
              <div className="flex items-start gap-x-2 mt-1">
                {/* <img className="w-[17px]" src="/images/tick.svg" alt="" /> */}
                <ul className="flex flex-col gap-y-2">
                  {Array.from({ length: 5 }).map((_, index) => {
                    return (
                      <li key={index} className="text-[14px] text-lightDark">{t(`youWillLearn${index + 1}`)}</li>
                    )
                  })}
                </ul>
              </div>
            </div>
          </div>
          <StartCourseButton />
        </div>
      </div>
    </section>
  );
};

export default Info;
