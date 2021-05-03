/*
Filename:         projectJS.js
    Supporting Javascript file: projectJS.js
    Supporting CSS files: final_css.css and resume_css_doc.css

    Created by: Parker Radcliff
    Date Created: 11/22/2020

    This is the javascript file for the project, which is responsible for the actual producing of the built resume
    Project Description:

    It is time to put your knowledge of JavaScript to work. You’re going to build something useful that you 
    may even use beyond the scope of this course. Your WEB 115 JavaScript Project requires you to create a personal 
    resume building tool.
    Form elements will be used to accept user input which will be assigned to variables. These variable values will 
    make up the content of a new web page that will be generated when a form button named Create Resume is clicked. 
    This is called building a web page "on-the-fly".

    Tasks -- These were removed as the process continued and replaced with brief 1 sentence description. 
    1. Do some research into resumes.
    2. Create a document named finalProject.html. The title should read WEB-115 Final Project.
    3. Create a banner for your HTML form that includes your name, course and section number. 
    4. Create an external JavaScript document (with the .js file extension) named projectJS.js. 
    5. Code the script element after the opening BODY tag that will link to external document: projectJS.js.
    6. Test, then remove the alert() method. All of your JavaScript must appear in your external projectJS.js file.
    7. Create the appropriate labels and text boxes that the user will use to populate their resume. Include a minimum of 8 entry areas.
    8. Create the appropriate labels and text boxes so that the user can enter their skill set. Include a minimum of 3 entry areas for this category. 
    9. Create the appropriate labels and text boxes so that the user can include technical skills such as JavaScript and PHP. Include a minimum of 2 entry areas for this category. 
    10. Use the form textarea element to create a text entry area with the appropriate label so that the user knows to enter their Educational background.
    11. Create a text box with the appropriate label so that the user knows to enter the entry and exit dates of their most recent employment experience. 
    12. Use the form textarea tag to create a text entry area with the appropriate label so that the user knows to enter the details of their most recent employment experience.
    13. Repeat steps 10 and 11 to allow for 2 more prior employment experience data entry areas. 
    14. Use the form textarea tag to create a text entry area with the appropriate label so that the user knows to enter the details of their business references.
    15. Create a form button named Create Resume. When clicked this button should call a function that generates a new web page displaying a resume based on unput.
*/

main();

function main() {
    //var body = document.body;//
    var theForm = document.getElementById("form");
    theForm.submitResume.addEventListener("click", createResume);
}

function createResumeWindow(height, width)
{
    var size = "height=" + height + ", width=" + width;
    return window.open("", "", size);
}

function createResume() {
    var theDoc = createResumeWindow(500, 500).document;

    theDoc.write("<html>");
    theDoc.write("<head>");
    theDoc.write(`<link rel="stylesheet" type="text/css" href="resume_css_doc.css">`);
    theDoc.write("</head>");
    theDoc.write("<body>");


    // Basic contact information and then social media links
    theDoc.write("<header>");
    writepersonalHeader(theDoc);
    theDoc.write("</header>");


    // Highschool and college information
    theDoc.write("<div class='edu'>")
    writeuserEducation(theDoc);
    theDoc.write("</div>")
    

    // Coding languages and skills
    theDoc.write("<div class='all_skills'>");
    writeallSkills(theDoc);
    theDoc.write("</div>");


    // Working history
    theDoc.write("<div class='work_history'>");
    writeWork(theDoc);
    theDoc.write("</div>");


    // Business and personal references
    theDoc.write("<div class='reference_section'>");
    theDoc.write("<h3>" + 'Business References' + "</h3>");
    writeReference(theDoc);
    theDoc.write("</div>");

    writeResumeBody(theDoc);

    theDoc.write("</body>");
    theDoc.write("</html>");
}

// Writes header/personal information to the document 
function writepersonalHeader(theDoc)
{
    var theForm = document.getElementById("form");

    var name1 = theForm.name.value;
    theDoc.write("<h1>" + name1.toUpperCase() + "</h1>");

    // Personal info, all kinds of stuff
    var phone1 = theForm.phone.value;
    var email1 = theForm.email.value;
    var instagram = theForm.instagram.value;
    var twitter = theForm.twitter.value;
    var linked = theForm.linked.value;
    var state = theForm.state.value;
    var city = theForm.city.value;

    theDoc.write("<p>" + "State: " + state + " City: " + city + "</p>");
    theDoc.write("<p>" + phone1 + " || " + email1 + "</p>");
    theDoc.write("<p>" + "Instagram: " + instagram +  "</br>" + " Twitter: " + twitter + "</br>" + "LinkedIn: " + linked + "</p>");
    theDoc.write("<hr>" + "<hr>");
}

// Writes the education information of the user to the resume
function writeuserEducation(theDoc) 
{
    var theForm = document.getElementById("form");

    var high = theForm.highschool.value;
    var year1 = theForm.year1.value;
    var college = theForm.college.value;
    var year2 = theForm.year2.value;
    var degree = theForm.degree.value;
    theDoc.write("<h3>"+'Education' + "</h3>" );
    theDoc.write("<p>" + "<b>" + high + "</b>" + ' - ' + "<i>" + year1 + "</i></p>");
    theDoc.write("<p>" + "<b>" + college + "</b>" + ' - ' + "<i>" + year2 + "</i>" + ' - ' + degree + "</p>");
}

// Technical skills such as coding, and interpersonal skills
function writeallSkills(theDoc) 
{
    var theForm = document.getElementById("form");

    var tech1 = theForm.tech_skill1.value;
    var tech2 = theForm.tech_skill2.value;
    theDoc.write("<div class='tech_skills'>");
    theDoc.write("<h3>" + 'Technical Skills || Coding Languages' + "</h3>");
    theDoc.write("<ul>");
    theDoc.write("<li>" + tech1 + "</li>");
    theDoc.write("<li>" + tech2  + "</li>");
    theDoc.write("</div>");
    theDoc.write("<hr>");

    var skill1 = theForm.skill1.value;
    var skill2 = theForm.skill2.value;
    var skill3 = theForm.skill3.value;
    theDoc.write("<div class='skills'>");
    theDoc.write("<h3>" + 'Skills' + "</h3>");
    theDoc.write("<ul>");
    theDoc.write("<li>" + skill1 + "</li>");
    theDoc.write("<li>" + skill2 + "</li>");
    theDoc.write("<li>" + skill3 + "</li>");
    theDoc.write("</div>");
}

// Work history information
function writeWork(theDoc) 
{
    var theForm = document.getElementById("form");
    theDoc.write("<h3>" + 'Job History' +"</h3>");
    
    // Job #1
    var work = theForm.work1.value;
    var job = theForm.job1.value;
    var desc = theForm.desc1.value;
    var start = theForm.dateStart1.value;
    var end= theForm.dateEnd1.value;

    theDoc.write("<div class='job1'>");
    theDoc.write("<p>" + work + "<br>"  + start + ' to ' + end + "</p>");
    theDoc.write("<p><i>" + job + "</i></p>");
    theDoc.write("<p>" + desc + "</p>");
    theDoc.write("</div>");
    theDoc.write("<hr>");

    // Job #2
    var work1 = theForm.work2.value;
    var job1 = theForm.job2.value;
    var desc1 = theForm.desc2.value;
    var start1 = theForm.dateStart2.value;
    var end1= theForm.dateEnd2.value;

    theDoc.write("<div class='job2'>");
    theDoc.write("<p>" + work1 + "<br>" + start1 + ' to ' + end1 + "</p>");
    theDoc.write("<p><i>" + job1 + "</i></p>");
    theDoc.write("<p>" + desc1 + "</p>");
    theDoc.write("</div>");
    theDoc.write("<hr>");
}

// Business and personal references

function writeReference(theDoc) 
{
    var theForm = document.getElementById("form");

    var ref = theForm.ref1.value;
    var ref_phone = theForm.phone1.value;
    theDoc.write("<div class='ref1'>");
    theDoc.write("<p><b>" + ref + "</b></p>");
    theDoc.write("<p><i>" + ref_phone + "</i></p>");
    theDoc.write("</div>");
    theDoc.write("<hr>");

    var ref1 = theForm.ref2.value;
    var ref_phone1 = theForm.phone2.value;
    theDoc.write("<div class='ref2'>");
    theDoc.write("<p><b>" + ref1 + "</b></p>");
    theDoc.write("<p><i>" + ref_phone1 + "</i></p>");
    theDoc.write("</div>");

}

// sorry it's down here, almost forgot about it

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}