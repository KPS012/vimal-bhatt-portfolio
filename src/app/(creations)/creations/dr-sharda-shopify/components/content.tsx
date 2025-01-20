import React from 'react';
import H1Card from '@/components/workCompo/heading'
import HeadPara from '@/components/workCompo/highLights'
import ImageCard from '@/components/workCompo/imgCard'
import List from '@/components/workCompo/list'
import LiveLink from '@/components/workCompo/liveLink';
import HeadingList from '@/components/workCompo/headingList';


export default function ContentPage(){

    return(
        <main className="mt-[10vw] mb-[5vh] flex justify-center items-center overflow-y-auto">
            <div className="w-[1200px] flex flex-col">
                <div className="flex flex-col justify-center">
                    <H1Card
                        subHeading="Dr. Sharda Ayurveda"
                        H1="Creating a New Design for an Enhanced User Experience and Seamless E-Commerce"
                    />
                    <ImageCard
                        alttitle="Beautiful Landscape"
                        imageUrl="/images/dr-sharda-com.png"
                        altText="A beautiful landscape"
                        className="relative mt-[3vh] w-[100%] h-[60vh] rounded-[10px] shadow-xl"                  
                    />
                </div>
                <div className="">
                    <HeadPara
                        H2="Introduction"
                        Para="The project involved transitioning Dr. Sharda Ayurveda into a Shopify-based platform, specifically designed for e-commerce, while focusing on enhancing user experience (UX) and improving design aesthetics. This upgrade aimed to modernize the existing website (DrShardaayurveda.com) and provide a seamless shopping experience for users."
                    />

                    <List
                        H2="Scope of Work"
                    
                        b1="User Experience (UX) Enhancement"
                        l1="Conducted comprehensive usability assessments to identify areas for improvement. Designed and implemented a more intuitive and visually appealing interface. Optimized navigation and ensured accessibility compliance to enhance user satisfaction."
                    
                        b2="Shopify Integration"
                        l2="Migrated the website to Shopify, leveraging its robust e-commerce features. Customized Shopify themes to align with the brand’s identity and provide a cohesive shopping experience. Integrated essential e-commerce functionalities, including product categorization, secure payment gateways, and an optimized checkout process."
                        
                        b3="Design Improvements"
                        l3="Revamped the design for a more modern and engaging look, emphasizing clarity and user-friendliness. Ensured responsive design compatibility across all devices and browsers. Applied consistent branding elements throughout the website to strengthen brand recognition."
                    />

                    <HeadingList
                        H2='Challenges Faced'
                        l1="Ensuring a smooth transition from the older platform to Shopify without losing existing data or disrupting user experience."
                        l2="Balancing the enhanced design elements with Shopify’s platform constraints while maintaining optimal performance."
                        l3="Integrating advanced e-commerce features without over-complicating the user interface." 
                    />

                    <List
                        H2="Contributions and Achievements"

                        b1="Improved User Experience"
                        l1="Enhanced usability through refined navigation, improved accessibility, and modernized design elements."
                        
                        b2="Shopify Migration"
                        l2="Successfully transitioned the website to Shopify, incorporating robust e-commerce features tailored to the brand's needs."
                        
                        b3="Design Overhaul"
                        l3="Delivered a visually appealing and functional website that significantly improved user engagement and satisfaction."
                    />

                    <HeadPara
                        H2="Project Status"
                        Para="The Shopify-based version of Dr. Sharda Ayurveda is now live and operational, serving as a dedicated e-commerce platform. The website features an improved design and enhanced user experience, aligning with the brand’s goals of providing a seamless and enjoyable shopping journey. Ongoing monitoring and refinement will ensure the platform continues to meet evolving user expectations and business requirements."
                    />

                    <LiveLink
                        H6="Live Link to the Website: "
                        LinkText= "Dr. Sharda Ayurveda"
                        Url= "https://www.drshardaayurveda.com/"
                    />

                </div>
            </div>
        </main>
    )
}
