import { useUserStore } from "../stores/useUserStore"

const AboutPage = () => {
    const downloadPdfApi = useUserStore((state) => state.downloadPdfApi)

    const downloadPdf = () => {
        downloadPdfApi()
    }

    return (
        <>
            <section className="container mx-auto px-4 mt-8">
                <h2 className="font-[700] text-xl">The aim of the MHPSS training</h2>
                <img className="my-4" src="/images/about-page-image.png" />
                {/* <iframe className="w-full h-[400px]" src="https://disk.gozle.com.tm/api/v1/file-entries/189702?shareable_link=9199&password=null&thumbnail="></iframe> */}
                <div className="flex flex-col gap-y-4">
                    <div>
                        {/* <h3 className="text-lg font-[600] mb-4">General Mental Health Competencies</h3> */}
                        <ul className="flex flex-col gap-y-4">
                            <li className="text-sm sm:text-[15px]">
                                This training is designed for Turkmenistan to support the integration of the MHPSS into the peacebuilding activities promoted by UNDP. The target audience of the training is first-line professionals working with youth and women (people who are at the first line of contact with people – teachers, social workers and social service providers, law enforcement, doctors, civil society activists, etc.).
                                <br />
                                <br />
                                The aim of the training is to build national capacity for providing community-based MHPSS to vulnerable youth and women as a preventive measure.
                                <br />
                                <br />
                                Objectives:
                            </li>
                            <li className="text-sm sm:text-[15px]">1. Build competencies of the participants in the area of mental health promotion, prevention and support.</li>
                            <li className="text-sm sm:text-[15px]">2. Increase knowledge of evidence-based scalable mental health and psychosocial interventions.</li>
                            <li className="text-sm sm:text-[15px]">3. Develop skills to provide basic MHPSS and referrals to vulnerable people, giving priority to youth-at-risk and women at the community level.</li>
                            <li className="text-sm sm:text-[15px]">4. Improve participants' knowledge and skills in delivering the MHPSS training to relevant target audiences.</li>
                            <li className="text-sm sm:text-[15px]">5. To receive participants' input, revise and update the training curriculum based on the feedback received.</li>
                        </ul>
                    </div>

                    {/*  */}
                    {/* 
                    <div>
                        <h3 className="text-lg font-[600] mb-4">Specialized MHPSS Competencies</h3>
                        <ul className="flex flex-col gap-y-1">
                            <li className="text-sm sm:text-[15px]">1. Organizing and delivering mental health promotion activities to people in the communities.</li>
                            <li className="text-sm sm:text-[15px]">2. Identifying signs of stress, trauma and other mental health conditions in individuals.</li>
                            <li className="text-sm sm:text-[15px]">3. Building contact with individuals with signs of mental health conditions, validating their state, and using active listening and mental health competencies.</li>
                            <li className="text-sm sm:text-[15px]">4. Providing basic mental health and psychosocial support for individuals (including women and girls who are victims of GBV) utilizing the evidence-based MHPSS instruments.</li>
                            <li className="text-sm sm:text-[15px]">5. Providing the referral to specialized mental health and other services relevant to individuals' needs.</li>
                            <li className="text-sm sm:text-[15px]">6. Providing follow-up communication with individuals who were provided with support and/or referral.</li>
                            <li className="text-sm sm:text-[15px]">7. Taking care of one's mental health using evidence-based self-help tools and skills.</li>
                        </ul>
                    </div> */}

                    {/*  */}

                    {/* <div>
                        <h3 className="text-lg font-[600] mb-4">Teaching and Training Competencies</h3>
                        <ul className="flex flex-col gap-y-1">
                            <li className="text-sm sm:text-[15px]">1. Assess the needs of the training participants.</li>
                            <li className="text-sm sm:text-[15px]">2. Tailor the pre-developed training content and materials to the needs of the training participants.</li>
                            <li className="text-sm sm:text-[15px]">3. Deliver training to the target audience, using interactive techniques and managing the participants' attention.</li>
                            <li className="text-sm sm:text-[15px]">4. Change the content, teaching style and other training elements, taking into account participants` feedback.</li>
                        </ul>
                    </div> */}
                </div>

                {/*  */}

                <div className="flex flex-col gap-y-4 my-4">
                    <div className="flex items-center gap-x-4">
                        <img className="w-[24px]" src="/images/download-icon.svg" alt="" />
                        <div>
                            <h4 className="text-primary text-sm font-[600] cursor-pointer">Specialized MHPSS Competencies</h4>
                            <p className="text-lightDark text-[10px]">Click to download</p>
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
                            <p className="text-lightDark text-[10px]">Click to download</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutPage