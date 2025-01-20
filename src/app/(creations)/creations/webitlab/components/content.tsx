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
                        subHeading="Webitlab"
                        H1="Custom Landing Page Development to Enhance User Experience and Engagement"
                    />
                    <ImageCard
                        alttitle="Beautiful Landscape"
                        imageUrl="/images/webitlab.png"
                        altText="A beautiful landscape"
                        className="relative mt-[3vh] w-[100%] h-[60vh] rounded-[10px] shadow-xl"                  
                    />
                </div>
                <div className="">
                    <HeadPara
                        H2="Introduction"
                        Para="The project involved redesigning the landing page for Webitlab (​https://webitlab.com/​) from the ground up. The primary focus was to address the challenges of the previous landing page, which struggled to attract users and capture their attention effectively. Using some of the website's old material to maintain thematic consistency, the new landing page was designed to be visually engaging and user-focused, incorporating animations to create a more interactive experience."
                    />

                    <List
                        H2="Scope of Work"
                    
                        b1="Landing Page Redesign"
                        l1="The landing page was completely redesigned to improve user engagement and create a lasting impression. By utilizing some of the existing website material, the new design retained the brand’s identity while introducing modern aesthetics and usability enhancements. The layout was structured to guide users effortlessly through key sections, ensuring clear and compelling calls to action."
                    
                        b2="Integration of Animations"
                        l2="Animations were strategically added to the landing page to make it more dynamic and interesting for users. These included interactive hover effects, subtle transitions, and engaging visual elements to capture user attention and encourage interaction without overwhelming the experience."
                        
                        b3="Theme and Material Alignment"
                        l3="Careful attention was given to ensure that the new landing page aligned with the overall theme of the existing website. Colors, fonts, and design elements were harmonized with the brand’s established aesthetic, ensuring consistency while introducing new, fresh elements."
                    />

                    <HeadingList
                        H2='Challenges Faced'
                        l1="Addressing the shortcomings of the old landing page in terms of user engagement and attention retention."
                        l2="Balancing the addition of animations with maintaining fast loading times and overall page performance."
                        l3="Incorporating old website material into the new design while ensuring a cohesive and modern look." 
                    />

                    <List
                        H2="Contributions and Achievements"

                        b1="Landing Page Overhaul"
                        l1="Redesigned the landing page from scratch, focusing on user engagement and visual appeal. Delivered a layout that effectively communicates the brand’s message and encourages user action."
                        
                        b2="Enhanced Interactivity"
                        l2="Incorporated animations and dynamic elements, making the landing page more engaging and interactive without compromising usability"
                        
                        b3="Thematic Consistency"
                        l3="Successfully blended new design elements with existing website material, ensuring a cohesive and professional aesthetic."
                    />

                    <HeadPara
                        H2="Project Status"
                        Para="The redesigned landing page for Webitlab is now live, offering a visually compelling and user-friendly experience. With the integration of engaging animations and a refreshed layout, the landing page effectively captures user attention and enhances brand perception. Continuous monitoring and updates will ensure that the page remains effective and aligned with evolving user expectations."
                    />

                    <LiveLink
                        H6="Live Link to the Figma File: "
                        LinkText= "Webitlab Landing Page"
                        Url= "https://www.figma.com/proto/pOkeWXiGc636w8VMG0G0D7/Website-redesign-Vimal?node-id=1-1921&t=qwCSRMfsV5CMft4x-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=242%3A872"
                    />

                </div>
            </div>
        </main>
    )
}
