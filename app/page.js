import React from 'react';
import Landing from './home/Landing';
import Company from './CAbout/Company';
import Projects from './Projects/Projects';
import EnquiryForm from './enquiry/EnquiryForm';
import DeveloperSection from './AboutUs/DeveloperSection';

function page() {
  return (
    <>
      <div id='landing'>
        <Landing></Landing>
      </div>
      <div id='company'>
        <Company></Company>
      </div>
      <div id='projects'>
          <Projects></Projects>
      </div>
      <div id='enquiryForm'>
        <EnquiryForm></EnquiryForm>
      </div>
      <div id='developerCard'>
        <DeveloperSection></DeveloperSection>
      </div>
    </>
  )
}

export default page
