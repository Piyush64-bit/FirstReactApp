import React from 'react';
import { Button } from 'react-bootstrap';
import NavbarComponent from '../components/NavbarComponent';
import FooterComponent from '../components/FooterComponent';
import CardComponent from '../components/CardComponent';

const Home = ({ goToDisplay }) => {
  return (
    <>
      <NavbarComponent />
      <div className="text-center mt-4">
        <h1>Groot Academy - Best course in jaipur</h1>
        <div className="mainsection">
          <img className='grootimage' src="https://media.licdn.com/dms/image/v2/D4D22AQFKs3JzSVssdQ/feedshare-shrink_800/B4DZZdvOBCG8As-/0/1745329384596?e=1748476800&v=beta&t=CsSNrfWe90m7iKcUUSOiMb_HjNZIxmy-6ulWmHJc25k" alt="" />
          <div className="ptag"> <p>🌱 Groot Academy: Best Full Stack Dev Courses in Jaipur

            Welcome to Groot Academy – where code meets confidence.

            Based in the heart of Jaipur, this is where dev dreams come to life.

            Not just a course – it’s a movement for future engineers.

            From zero to deploy 🚀 – you’ll build full apps that actually work.

            Learn from real developers, not boring textbook robots.

            Think Java, JavaScript, React, SQL, Spring Boot – all the 🔥 tech.

            Hands-on projects? Oh yeah, you’ll be shipping code weekly.

            Tired of theory overload? Groot is all about practical dev.

            Got bugs? Mentors here debug with you, not just tell you “figure it out.”

            You’ll be building stuff that you can show off on your resume and GitHub.

            Need frontend? HTML, CSS, Bootstrap, Tailwind – all covered.

            Backend? Say hello to Java, JDBC, Spring Core, Spring MVC, Spring Boot.

            Databases? MySQL, Oracle, PostgreSQL, MongoDB – boom.

            And yes, you’ll use Git & GitHub like a pro by the end.

            Live coding sessions make sure you’re actually learning.

            Instructors explain every concept like they’re your coding BFF.

            The vibe? Super supportive. Ask anything, no judgment.

            Weekly tasks and assignments to keep you sharp.

            Group projects? ✅ Pair programming? ✅

            Real-world problems? You’ll be solving those too.

            It’s not just coding – it’s developer mindset they teach.

            Learn how to think like a software engineer.

            Want to crack interviews? They’ve got mock rounds & prep sessions.

            Soft skills? Covered. You’ll be communication-ready.

            Portfolio? You’ll leave with a killer dev portfolio that turns heads.

            Certifications? Yup, you get official proof you crushed the course.

            Internships? Many students land them during the course.

            Job-ready? Oh, you bet.

            Alumni are now working at top startups and MNCs.

            Your LinkedIn glow-up starts right here.</p></div>
        </div>
        <div className="mainsection">
          <div className="ptag">
          <p>Want live feedback on your code? They give it in real-time.

            Prefer late-night coding? Recordings are always available.

            Stuck on something? WhatsApp, Discord, even in-person help.

            Regular hackathons and contests to flex your skills.

            Course structure is tight – no fluff, just essentials.

            Classes are interactive, not lecture-style boredom.

            You’ll write real code from Day 1, not just watch.

            Attendance? You’ll want to show up, it’s that good.

            No prior experience? They’ll guide you from scratch.

            Already know the basics? They’ll level you up fast.

            Modules are industry-aligned – what companies actually want.

            Mini projects every few weeks – to build confidence.

            Final capstone project? Chef’s kiss.

            Students build clones of real apps – Amazon, Netflix, etc.

            You’ll learn to read and write clean, scalable code.

            Error handling, API calls, authentication – all taught.

            Responsive design? Mobile-first? Yup.

            Even UI/UX basics are sprinkled in.

            Feeling stuck? One-on-one mentoring is available.

            Doubt-clearing sessions are built into the curriculum.

            You’ll vibe with the community – students, devs, mentors.

            Networking sessions to connect with the tech industry.

            Got a GitHub account? It’ll be full of awesome projects.</p> </div>
          <img className='grootimage' src="https://media.licdn.com/dms/image/v2/D4D22AQHVCdRrVYkpeA/feedshare-shrink_1280/B4DZZdvOBJGgAk-/0/1745329385557?e=1748476800&v=beta&t=TQhupqLorzlY9-tnv47cH6IOUdTN3hL3hneGInopHC8" alt="" />
        </div>
      </div>
      <div className="button">
        <Button className='button' variant="primary" onClick={goToDisplay}>
          Go to Display Page
        </Button>
      </div>
      <FooterComponent />
    </>
  );
};

export default Home;
