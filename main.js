document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.getElementById('homeLink');
    // const eventLink = document.getElementById('eventLink');
    const aboutLink = document.getElementById('aboutLink');
    const contactLink = document.getElementById('contactLink');
    const mainContent = document.getElementById('mainContent');

    homeLink.addEventListener('click', (e) => {
        e.preventDefault();
        mainContent.innerHTML = `
            <section>
                <h1>So, What is Service Squad?</h1>
                <p>Welcome to Service Squad, your premier destination for connecting passionate volunteers with impactful events! At Service Squad, we believe in the power of community and the importance of giving back. Our mission is to bridge the gap between enthusiastic volunteers and organizations in need of dedicated support. Whether you’re planning a large-scale event or a small community gathering, Service Squad is here to help you find the perfect volunteers to ensure your event’s success.</p>
            </section>
            <section class="flex-container">
                <div class="flex-item">
                    <h1>Our Vision</h1>
                    <p>To create a world where every event has the support it needs, and every volunteer finds a cause they are passionate about.</p>
                </div>
                <div class="flex-item">
                    <h1>Our Mission</h1>
                    <p>To empower organizations by providing a reliable platform for recruiting volunteers and to inspire individuals to engage in meaningful community service.</p>
                </div>
                <div class="flex-item">
                    <h1>What We Do?</h1>
                    <p>Event Support: We help event organizers recruit volunteers for various roles, ensuring smooth and successful events. Volunteer Opportunities: We offer a wide range of volunteer opportunities for individuals looking to make a difference in their communities. Community Building: We foster a community of like-minded individuals committed to making a positive impact.</p>
                </div>
            </section>
            <section>
            <h1>Why Choose Service Squad?</h1>
            <ul class="benefits-list">
                <li><u>User-Friendly Platform:</u> Our easy-to-use website allows organizers to post events and recruit volunteers effortlessly.</li>
                <li><u>Diverse Opportunities:</u>From charity runs to community clean-ups, we have volunteer opportunities to suit every interest and skill set.</li>
                <li><u>Trusted Network:</u> We vet our volunteers to ensure they are dedicated and reliable, giving you peace of mind for your event.</u></li>
            </ul>
            <p>Join Service Squad today and become part of a movement dedicated to making a difference. Whether you’re looking to lend a hand or need helping hands, Service Squad is your go-to source for all things volunteer-related. Together, we can create impactful events and build stronger communities.</p>
        </section>

        <section class="flex-container">
            <div class="flex-item1">
                <h1 style="color:rgb(0, 42, 255)">Benefits</h1>
                <h2>Skill Development</h2>
                <p>Volunteering helps you develop various skills such as communication, teamwork, problem-solving, and time management. It also allows you to learn new skills specific to the event or industry.</p>
                <h2>Networking Opportunities</h2>
                <p>Events often bring together a diverse group of people, providing a great opportunity to expand your network.</p>
                <h2>Sense of Purpose</h2>
                <p>Volunteering can provide a strong sense of fulfillment and purpose.</p>
            </div>
            <div class="flex-item1">
                <h2>Community Involvement</h2>
                <p>Being involved in community events allows you to give back and make a positive impact on your local area.</p>
                <h2>Health Benefits</h2>
                <p>Engaging in volunteer activities can improve mental health by reducing stress, combating depression, and providing a sense of accomplishment.</p>
            </div>
            <div class="flex-item1">
                <h2>Professional Benefits</h2>
                <p>Volunteering adds valuable experience to your resume and shows potential employers that you are proactive, community-minded, and have practical experience.</p>
                <h2>Career Exploration</h2>
                <p>Volunteering allows you to explore different fields and industries without a long-term commitment.</p>
                <h2>Leadership Opportunities</h2>
                <p>Many volunteer roles offer the chance to take on leadership positions, which can further develop your leadership and management skills.</p>
            </div>
        </section>
    </div>
        `;
    });
    // eventLink.addEventListener('click', (e) => {
    //     e.preventDefault();
    //     mainContent.innerHTML = `
            
    //     `;
    // });


    aboutLink.addEventListener('click', (e) => {
        e.preventDefault();
        mainContent.innerHTML = `
            <section>
            <img src="logo.png" height="125px",width="125px" ></body>

                <h1>About Us</h1>
                <p>At Service Squad, our mission is to bring communities together through the power of volunteerism. We strive to create a positive impact by connecting passionate individuals with meaningful service opportunities that address critical needs in our society.</p>
            <p> Developers:<br> Aravind.Pulluri--Tejashwini.Pilli--Sneha.Uppula
                </section>
            <body>
        `;
    });

    contactLink.addEventListener('click', (e) => {
        e.preventDefault();
        mainContent.innerHTML = `
            <section>
                <h1>Contact Us</h1>
                <p>If you have any questions or would like to get in touch with us, please email us at contact@servicesquad.com or call us at +91 8886113839. We look forward to hearing from you!</p>
            </section>
            
<a href="https://www.instagram.com/aravindpulluri/" target=_blank>@aravindpulluri</a>  
<a href="https://www.instagram.com/tejashwini_pilli/" target=_blank>@tejashwinipilli</a>  
<a href="https://www.instagram.com/sneha.uppula_23/" target=_blank>@snehauppula</a>  


          
        `;
        
    });
});