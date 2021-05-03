main();

function main() {
    //var body = document.body;//
    var theForm = document.getElementById("form");
    theForm.createResume.addEventListener("click", createResume);
}

function createResumeWindow(height, width)
{
    var size = "height=" + height + ", width=" + width;
    return window.open("", "", size);
}

function createResume() {
    var theDoc = createResumeWindow(900, 900).document;

    theDoc.write("<html>");
    theDoc.write("<head>");
    theDoc.write(`<link rel="stylesheet" type="text/css" href="final_css.css">`);
    theDoc.write('<link rel="preconnect" href="https://fonts.gstatic.com">');
    theDoc.write('<link href="https://fonts.googleapis.com/css2?family=Open+Sans&family=Quicksand:wght@300&display=swap" rel="stylesheet">')

    theDoc.write("</head>");
    theDoc.write("<body>");
    // HEADER //
    theDoc.write("<header>");
    writeResumeHeader(theDoc);
    theDoc.write("</header>");
    // EDUCATION //
    theDoc.write("<div class=edu>")
    writeEducation(theDoc);
    theDoc.write("</div>")
    // PROFESSIONAL SUMMARY //
    theDoc.write("<div class=sum>")
    writeSummary(theDoc);
    theDoc.write("</div>");
    // TECH SKILLS / SKILLS //
    theDoc.write("<div>");
    writeSkills(theDoc);
    theDoc.write("</div>");
    // WORK HISTORY //
    theDoc.write("<div>");
    writeWorkHistory(theDoc);
    theDoc.write("</div>");
    // BUSINESS REFERENCES //
    theDoc.write("<div");
    theDoc.write("<h3>" + 'Business References' + "</h3>");
    writeReference(theDoc);
    theDoc.write("</div>");

    writeResumeBody(theDoc);

    theDoc.write("</body>");
    theDoc.write("</html>");
}

// WRITES HEADER TO DOCUMENT //
function writeResumeHeader(theDoc)
{
    var theForm = document.getElementById("form");

    var name1 = theForm.name.value;
    theDoc.write("<h1>" + name1.toUpperCase() + "</h1>");

    var phone1 = theForm.phone.value;
    var email1 = theForm.email.value;

    var instagram = theForm.instagram.value;
    var twitter = theForm.twitter.value;
    var linked = theForm.linked.value;

    var state = theForm.state.value;
    var city = theForm.city.value;

    // Writes to the actual documents header, personal information
    theDoc.write("<p>" + "Personal Contacts: " + phone1 + " | " + email1 + "</p>");
    theDoc.write("<p>" + "State: " + state + " City: " + city + "</p>");
    theDoc.write("<p>" + "Instagram: " + instagram + " Twitter: " + twitter + "</b>" + "LinkedIn" + linked + "</p>");

    theDoc.write("<hr>");
}

// WRITES EDUCATION TO DOCUMENT //
function writeEducation(theDoc) 
{
    var theForm = document.getElementById("form");

    var hi1 = theForm.highschool.value;
    var year1 = theForm.year1.value;


    var col1 = theForm.college.value;
    var year2 = theForm.year.value;
    var deg1 = theForm.degree.value;
    
    theDoc.write("<h3>" + 'Education Background' + "</h3>");
    theDoc.write("Highschool");
    theDoc.write("<p>" + hi1 + "-" + year1 + "</p>");
    theDoc.write("College Experience");
    theDoc.write("<p>" + col1 + "-" + year2 + "-" + " deg1" + "</p>");
}

// WRITES PROFESSIONAL SUMMARY TO DOCUMENT //
function writeSummary(theDoc) 
{
    var theForm = document.getElementById("form");

    var sum1 = theForm.summary.value;
    theDoc.write("<h3>" + 'Professional Summary' +"</h3>");
    theDoc.write("<p>" + sum1 + "</p>");
}

// WRITES TECHNICAL SKILLS AND SKILLS TO DOCUMENT //
function writeSkills(theDoc) 
{
    var theForm = document.getElementById("form");

    var ts1 = theForm.tskill1.value;
    var ts2 = theForm.tskill2.value;
    theDoc.write("<div class='one'>");
    theDoc.write("<h3>" + 'Technical Skills' + "</h3>");
    theDoc.write("<ul>");
    theDoc.write("<li>" + ts1 + "</li>");
    theDoc.write("<li>" + ts2  + "</li>");
    theDoc.write("</div>");

    var s1 = theForm.skill1.value;
    var s2 = theForm.skill2.value;
    var s3 = theForm.skill3.value;
    theDoc.write("<div class='two'>");
    theDoc.write("<h3>" + 'Skills' + "</h3>");
    theDoc.write("<ul>");
    theDoc.write("<li>" + s1 + "</li>");
    theDoc.write("<li>" + s2 + "</li>");
    theDoc.write("<li>" + s3 + "</li>");
    theDoc.write("</div>");
}

// WRITES WORK HISTORY TO DOCUMENT //
function writeWorkHistory(theDoc) 
{
    var theForm = document.getElementById("form");
    theDoc.write("<h3>" + 'Work History' +"</h3>");
    
    // Work 1 //
    var w1 = theForm.work1.value;
    var j1 = theForm.job1.value;
    var desc1 = theForm.desc1.value;
    var ds1 = theForm.dateStart1.value;
    var de1= theForm.dateEnd1.value;

    theDoc.write("<div class='one1'>");
    theDoc.write("<p>" + "<b>" + w1 + "</b>" + " - " + ds1 + ' - ' + de1 + "</p>");
    theDoc.write("<p>" + "<i>" + j1 + "</i>" + "</p>");
    theDoc.write("<p>" + desc1 + "</p>");
    theDoc.write("</div>");
    theDoc.write("<hr>");

    // Work 2 //
    var w2 = theForm.work2.value;
    var j2 = theForm.job2.value;
    var desc2 = theForm.desc2.value;
    var ds2 = theForm.dateStart2.value;
    var de2= theForm.dateEnd2.value;

    theDoc.write("<div class='two1'>");
    theDoc.write("<p>" + "<b>" + w2 + "</b>" + " - " + ds2 + ' - ' + de2 + "</p>");
    theDoc.write("<p>" + "<i>" + j2 + "</i>" + "</p>");
    theDoc.write("<p>" + desc2 + "</p>");
    theDoc.write("</div>");
    theDoc.write("<hr>");

    // Work 3 //
    var w3 = theForm.work3.value;
    var j3 = theForm.job3.value;
    var desc3 = theForm.desc3.value;
    var ds3 = theForm.dateStart3.value;
    var de3 = theForm.dateEnd3.value;

    theDoc.write("<div class='three1'>");
    theDoc.write("<p>" + "<b>" + w3 + "</b>" + " - " + ds3 + ' - ' + de3 + "</p>");
    theDoc.write("<p>" + "<i>" + j3 + "</i>" + "</p>");
    theDoc.write("<p>" + desc3 + "</p>");
    theDoc.write("</div>");
}

// BUSINESS REFERENCES //
function writeReference(theDoc) 
{
    var theForm = document.getElementById("form");

    var r1 = theForm.ref1.value;
    var p1 = theForm.phone1.value;
    theDoc.write("<div class='one2'>");
    theDoc.write("<p>" + "<b>" + r1 + "</b>" + "</p>");
    theDoc.write("<p>" + "<i>" + p1 + "</i>" + "</p>");
    theDoc.write("</div>");

    var r2 = theForm.ref2.value;
    var p2 = theForm.phone2.value;
    theDoc.write("<div class='two2'>");
    theDoc.write("<p>" + "<b>" + r2 + "</b>" + "</p>");
    theDoc.write("<p>" + "<i>" + p2 + "</i>" + "</p>");
    theDoc.write("</div>");

    var r3 = theForm.ref3.value;
    var p3 = theForm.phone3.value;
    theDoc.write("<div class='three2'>");
    theDoc.write("<p>" + "<b>" + r3 + "</b>" + "</p>");
    theDoc.write("<p>" + "<i>" + p3 + "</i>" + "</p>");
    theDoc.write("</div>");
}