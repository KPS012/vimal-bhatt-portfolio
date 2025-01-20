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
                        subHeading="Profile Aesthetic Surger"
                        H1="A New Era of Beauty: Revamping Profile Aesthetic Surgery for a Sleeker, More Sophisticated Experience"
                    />
                    <ImageCard
                        alttitle="Beautiful Landscape"
                        imageUrl="/images/pas.png"
                        altText="A beautiful landscape"
                        className="relative mt-[3vh] w-[100%] h-[60vh] rounded-[10px] shadow-xl"                  
                    />
                </div>
                <div className="">
                    <HeadPara
                        H2="Introduction"
                        Para="The project involved developing and designing the website ProfileAestheticSurgery.com from scratch using WordPress. This initiative focused on enhancing user experience (UX), implementing a modern design, and incorporating SEO-friendly elements to improve search engine visibility and rankings."
                    />

                    <List
                        H2="Scope of Work"
                    
                        b1="User Experience (UX) Enhancement"
                        l1="Through detailed usability assessments, the design strategy was tailored to create a user-centric experience. The interface was made visually appealing and intuitive, specifically for the aesthetic surgery niche. Navigation was optimized, and accessibility compliance was ensured to provide a seamless browsing experience."
                    
                        b2="WordPress Development and Customization"
                        l2="The website was developed entirely from scratch using WordPress, taking advantage of its flexibility and scalability. Themes and plugins were customized to align with the brand's identity and functionality requirements. Essential features such as service pages, appointment booking systems, and responsive contact forms were integrated to enhance functionality."
                        
                        b3="Design and SEO Implementation"
                        l3="A modern, engaging design was created with a focus on aesthetic appeal and professionalism. Mobile responsiveness and cross-browser compatibility were ensured for an optimal user experience. Targeted keywords (e.g., aesthetic surgery services, cosmetic surgery clinic, best aesthetic surgeons) were incorporated into meta tags, headings, and content structure to improve search engine rankings."
                    />
                    
                    <HeadingList
                        H2='Challenges Faced'
                        l1="Balancing a visually appealing design with fast-loading pages and seamless functionality."
                        l2="Ensuring the integration of SEO elements without compromising design aesthetics or user experience."
                        l3="Creating a scalable and easily maintainable website that could adapt to future business needs." 
                    />

                    <List
                        H2="Contributions and Achievements"

                        b1="Custom WordPress Website Development"
                        l1="Built the website from scratch, implementing features and designs tailored specifically to the aesthetic surgery industry."
                        
                        b2="Enhanced User Experience"
                        l2="Delivered a user-friendly interface with streamlined navigation and improved accessibility."
                        
                        b3="SEO Optimization"
                        l3="Successfully optimized the website’s structure and content with targeted keywords, improving its search engine rankings and visibility."
                    />

                    <HeadPara
                        H2="Project Status"
                        Para="The WordPress-based version of ProfileAestheticSurgery.com is now live, serving as a modern and SEO-friendly platform. The website’s design and functionality effectively cater to both user needs and business objectives, ensuring a professional and engaging online presence. Ongoing monitoring and updates will ensure continued performance and alignment with evolving market trends."
                    />

                    <LiveLink
                        H6="Live Link to the Website: "
                        LinkText= "Profile Aesthetic Surgery"
                        Url= "https://www.profileaestheticsurgery.com/"
                    />
                </div>
                
            </div>
        </main>
    )
}
