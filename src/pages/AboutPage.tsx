const AboutPage = () => {
    return (
        <>
            <section className="container mx-auto px-4 mt-8">
                <h2 className="font-[700] text-xl">Competencies to be developed in the training participants (intended learning objectives)</h2>
                <img className="my-4" src="/images/about-page-image.png" />
                <div className="flex flex-col gap-y-4">
                    <div>
                        <h3 className="text-lg font-[600] mb-4">General Mental Health Competencies</h3>
                        <ul className="flex flex-col gap-y-1">
                            <li className="text-sm sm:text-[15px]">1. Understanding the mental health continuum, mental health disorders and factors that impact mental health in the context of the lifespan approach.</li>
                            <li className="text-sm sm:text-[15px]">2. Understanding the role of supporting individuals` mental health and well-being in peacebuilding, preventing conflict, strengthening social cohesion, and strengthening community resilience to violent extremism and conflict (especially supporting vulnerable youth, women and girls).</li>
                            <li className="text-sm sm:text-[15px]">3. Knowledge of mental health services and tailoring them to the needs of vulnerable populations: mental health promotion, mental health disorders prevention, support and treatment, rehabilitation and inclusion.</li>
                            <li className="text-sm sm:text-[15px]">4. Understanding the MHPSS intervention pyramid and ability to match mental health services with the needs of vulnerable people, prioritising youth-at-risk and women at the community level.</li>
                            <li className="text-sm sm:text-[15px]">5. Knowledge of the range of evidence-based scalable mental health and psychosocial community-based interventions.</li>
                        </ul>
                    </div>

                    {/*  */}

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
                    </div>

                    {/*  */}

                    <div>
                        <h3 className="text-lg font-[600] mb-4">Teaching and Training Competencies</h3>
                        <ul className="flex flex-col gap-y-1">
                            <li className="text-sm sm:text-[15px]">1. Assess the needs of the training participants.</li>
                            <li className="text-sm sm:text-[15px]">2. Tailor the pre-developed training content and materials to the needs of the training participants.</li>
                            <li className="text-sm sm:text-[15px]">3. Deliver training to the target audience, using interactive techniques and managing the participants' attention.</li>
                            <li className="text-sm sm:text-[15px]">4. Change the content, teaching style and other training elements, taking into account participants` feedback.</li>
                        </ul>
                    </div>
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
                            <p className="text-lightDark text-[10px]">Click to download</p>
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