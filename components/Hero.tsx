"use client";

import Image from 'next/image';
import CustomButton from './CustomButton';


const Hero = () => {
    const handleScroll = () => {
        const nextSection = document.getElementById("discover");
        if(nextSection){
            nextSection.scrollIntoView({ behavior: "smooth" });
        }
    };
    return (
        <div className="hero">
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">
                Tìm, đặt, thuê xe - nhanh chóng và siêu dễ dàng!
                </h1>
                <p className="hero__subtitle">
                Hợp lý hóa trải nghiệm thuê xe của bạn với quy trình đặt thuê xe dễ dàng của chúng tôi.
                </p>

                <CustomButton
                    title="Khám phá"
                    containerStyles="bg-primary-blue text-white rounded-full mt-10"
                    handleClick={handleScroll}
                />
            </div>
            <div className="hero__image-container">
                <div className="hero__image">
                    <Image src="/hero.png" alt="hero" fill className="object-contain"/>
                </div>
                <div className="hero__image-overlay"/>
            </div>
        </div>
    )
};

export default Hero