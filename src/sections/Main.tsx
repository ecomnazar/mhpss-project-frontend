import Button from "../components/Button";

const Main = () => {
  return (
    <section className='bg-[#004D86] bg-[url("/images/background-map.png")] bg-contain bg-center w-screen py-16'>
      <div className="container mx-auto px-4 flex flex-col gap-y-4">
        <h2 className="text-[35px] sm:text-[54px] sm:leading-[64px] text-white text-center font-[600] max-w-[600px] mx-auto">
          Mental Health & Psychosocial Support Online Course
        </h2>
        <p className="text-[14px] sm:text-[16px] max-w-[770px] text-center mx-auto text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <Button
          className="!bg-white !text-primary font-[600] mx-auto block"
          title={"Start course"}
        />
      </div>
    </section>
  );
};

export default Main;
