import { Link, useNavigate } from "react-router-dom";
import Button from "../components/Button";
import CourseProgressLine from "../components/CourseProgressLine";

const Info = () => {
  const navigate = useNavigate()
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="md:h-[500px] flex items-start justify-between flex-wrap">
        <div className="flex flex-col gap-y-4 basis-[100%] md:basis-[43%]">
          <h2 className="text-black text-3xl mb-6 font-[600]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
            consequuntur qui impedit.
          </h2>
          <p className="text-lightDark text-md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
            molestias recusandae, quaerat esse adipisci excepturi magnam
            officia. Error voluptatibus consequuntur neque, rem velit
            exercitationem deleniti natus architecto eligendi officiis vero
            veniam, corrupti numquam a recusandae non sit debitis, incidunt
            odit? Distinctio similique neque laborum magnam ipsum sunt, nostrum
            eos exercitationem?
          </p>
          {/* <p className="text-lightDark text-md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis
            molestias recusandae, quaerat esse adipisci excepturi magnam
            officia. Error voluptatibus consequuntur neque, rem velit
            exercitationem deleniti natus architecto eligendi officiis vero
            veniam, corrupti numquam a recusandae non sit debitis, incidunt
            odit? Distinctio similique neque laborum magnam ipsum sunt, nostrum
            eos exercitationem?
          </p> */}
          <Link to={'/about'} className="text-primary" >
            More about Mental Health
          </Link>
        </div>
        <div className="h-full basis-[100%] mt-4 md:mt-0 md:basis-[53%]">
          <img
            className="w-full h-full object-fit object-cover rounded-md"
            src="/images/image-1.png"
          />
        </div>
      </div>
      <div className="md:h-[500px] flex flex-col md:flex-row items-start justify-between flex-wrap mt-12">
        <div className="basis-[100%] md:basis-[53%] h-full">
          <img
            className="w-full h-full object-fit object-cover rounded-md"
            src="/images/image-2.png"
            alt=""
          />
        </div>
        <div className="basis-[100%] md:basis-[43%] h-full">
          <h2 className="text-black text-2xl mb-6 font-[600] mt-4 md:mt-0">
            Mental Health & Psychosocial Support Online Course
          </h2>

          <CourseProgressLine />

          <div className="flex flex-col gap-y-3 mb-4">
            <div>
              <h3 className="font-[600] text-[15px]">Duration:</h3>
              <div className="flex items-center gap-x-2 mt-1">
                <img className="w-[17px]" src="/images/tick.svg" alt="" />
                <p className="text-[14px] text-lightDark">
                  No more than 60 minutes
                </p>
              </div>
            </div>
            <div>
              <h3 className="font-[600] text-[15px]">Pace:</h3>
              <div className="flex items-center gap-x-2 mt-1">
                <img className="w-[17px]" src="/images/tick.svg" alt="" />
                <p className="text-[14px] text-lightDark">Self paced</p>
              </div>
            </div>
            <div>
              <h3 className="font-[600] text-[15px]">Lorem:</h3>
              <div className="flex items-center gap-x-2 mt-1">
                <img className="w-[17px]" src="/images/tick.svg" alt="" />
                <p className="text-[14px] text-lightDark">Certificate available on completion</p>
              </div>
            </div>
            <div>
              <h3 className="font-[600] text-[15px]">You will learn:</h3>
              <div className="flex items-start gap-x-2 mt-1">
                <img className="w-[17px]" src="/images/tick.svg" alt="" />
                <p className="text-[14px] text-lightDark">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
              </div>
            </div>
          </div>
          <Button onClick={() => navigate('/course')} className="!bg-primary" title={"Start course"} />

        </div>
      </div>
    </section>
  );
};

export default Info;
