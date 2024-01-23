import { useTranslation } from "react-i18next";

const text = ["adaptabilityText", "relevanceText", "certificationText"];
const desc = ['adaptiveDesc', 'relevanceDesc', 'certificationDesc']
const iconSized = [40, 38, 29]

const Guarantee = () => {
  const { t } = useTranslation()
  return (
    <section className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-x-4 py-8">
      {text.map((name, index) => {
        return (
          <div
            key={index}
            className="p-4 text-center flex flex-col gap-y-2 relative"
          >
            <img
              style={{ width: iconSized[index] }}
              className="mx-auto mb-4 relative z-10"
              src={`/images/${name.toLowerCase().substring(0, name.length - 4)}.svg`}
              alt=""
            />
            <h3 className="text-black font-[600] text-2xl">{t(`guarantee.${name}`)}</h3>
            <p className="max-w-[300px] text-lightDark text-center mx-auto">{t(`guarantee.${desc[index]}`)}</p>
          </div>
        );
      })}
    </section>
  );
};

export default Guarantee;
