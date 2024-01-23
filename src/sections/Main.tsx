import { useTranslation } from "react-i18next";
import StartCourseButton from "../components/StartCourseButton";

const Main = () => {
  const { t } = useTranslation()
  return (
    <section className='bg-[#004D86] bg-[url("/images/background-map.png")] bg-contain bg-center w-screen py-16'>
      <div className="container mx-auto px-4 flex flex-col gap-y-4">
        <h2 className="text-[25px] sm:text-[34px] md:text-[40px] sm:leading-[64px] text-white text-center font-[600] max-w-[600px] mx-auto">
          {t('mainPage.mainText')}
        </h2>
        <p className="text-[13px] sm:text-[16px] max-w-[770px] text-center mx-auto text-white">
          {t('mainPage.mainTextDesc')}
        </p>
        {/* <Button
          onClick={() => navigate('/course')}
          className="!bg-white !text-primary font-[600] mx-auto block"
          title={"Start course"}
        /> */}
        <div className="mx-auto">
          <StartCourseButton />
        </div>
      </div>
    </section>
  );
};

export default Main;
