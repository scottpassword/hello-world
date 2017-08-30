var bio = {
    "name": "Scott Whalen",
    "role": "Kilowatt Hunter",
    "contacts": {
        "mobile": "619-277-4107",
        "email": "sw8921@att.net",
        "github": "scottpassword",
        "location": "San Diego"
    },
    "welcomeMessage": "Taking down kilowatts, one watt at a time.  Happy Hunting!",
    "skills": ["Automation, ", "Energy Management, ", "Project Management, ", "Budgeting, ", "Auditing,", "& Kill'n Watts"],
    "biopic": "images/me.jpg"
};

bio.display = function() {
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedPicture = HTMLbioPic.replace("%data%", bio.biopic);
    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
    $("#header").prepend(formattedPicture);
    $("#header").append(formattedWelcomeMessage);
    $("#topContacts, #footerContacts").append(formattedLocation);
    $("#topContacts, #footerContacts").append(formattedMobile);
    $("#topContacts, #footerContacts").append(formattedEmail);
    $("#topContacts, #footerContacts").append(formattedGithub);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
        $("#skills").append(formattedSkill);
        formattedSkill = HTMLskills.replace("%data%", bio.skills[5]);
        $("#skills").append(formattedSkill);
    }
};

bio.display();

var work = {
    "jobs": [{
            "employer": "United States Navy",
            "title": "Aviation Electricians Mate",
            "dates": "December 1994 - December 1997",
            "location": "Miramar, CA",
            "description": "Preformed preventative maintenance and repair work on E2C Hawkeye aircraft"
        },
        {
            "employer": "Pacific Bell / AT&T / Installation & Maintenance",
            "title": "Service Technician",
            "dates": "January 1997 - April 1995",
            "location": "El Cajon, CA",
            "description": "Pole climbing, telephone installion and repair, DSL installation and repair"
        },
        {
            "employer": "SBC Communications / AT&T / Construction & Engineering",
            "title": "Splicing Technician",
            "dates": "April 1995 - July 2009",
            "location": "San Diego, CA",
            "description": "Copper and fiber optic cable splicing and testing, Electronic Transport Equipment installation"
        },
        {
            "employer": "AT&T / Corporate Real Estate",
            "title": "Building Specialist",
            "dates": "July 2009 - July 2014",
            "location": "Santee, CA",
            "description": "Facility Maintence including HVAC, Control System, Electrical, Plumbing, Lighting"
        },
        {
            "employer": "AT&T / Corporate Real Estate",
            "title": "Property Manager",
            "dates": "July 2014 - November 2016",
            "location": "Santee, CA",
            "description": "Manage Portfolio of properties, supervise crew of Building Specialist, budgeting, energy management for regional area "
        },
        {
            "employer": "AT&T Corporate Real Estate",
            "title": "Senior Energy Manager",
            "dates": "November 2016 - Present",
            "location": "San Diego, CA",
            "description": "Nationwide Facility Optimization, building business cases for Finance, project management, auditing projects, training "
        }
    ]
};

work.display = function() {

    var jobsLength = work.jobs.length;
    for (var i = 0; i < jobsLength; i++) {
            $("#workExperience").append(HTMLworkStart);
            var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            var formattedWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            var formattedEmployerTitle = formattedEmployer + formattedWorkTitle;
            $(".work-entry:last").append(formattedEmployerTitle);
            var formattedWorkDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            var formattedWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            $(".work-entry:last").append(formattedWorkDates, formattedWorkLocation, formattedWorkDescription);
        }
};

work.display();

var projects = {

    "projects": [{
        "title": "DB108 - S Broadway Energy Savings Project",
        "dates": "2015",
        "description": "HVAC Building Controls Reprogramming and Mechanical Upgrades",
        "images": ["images/img1db108cost.jpg", "images/img2db108vol.jpg", "images/img3db108dmpr.jpg"]
    }, {
        "title": "M1136 - Robinson Ave Energy Savings Project",
        "dates": "2016",
        "description": "HVAC Building Controls Reprogramming and Mechanical Upgrades",
        "images": ["images/img4m1136cost.jpg", "images/img5m1136graph.jpg", "images/img6m1136ppcl.jpg"]
    }]
};

projects.display = function() {

    var projectsLength = projects.projects.length;
    for (var i = 0; i < projectsLength; i++) {
            $("#projects").append(HTMLprojectStart);
            var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            $(".project-entry:last").append(formattedTitle);
            var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            $(".project-entry:last").append(formattedDates);
            var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            $(".project-entry:last").append(formattedDescription);
            for (var image in projects.projects[i].images) {
               if (projects.projects[i].images.length > 0) {
                    var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[image]);
                    $(".project-entry:last").append(formattedImage);
                }
            }
        }
};

projects.display();

var education = {
    "schools": [{
            "name": "Bay City Central",
            "location": "Bay City, MI",
            "degree": "High School Diploma",
            "majors": "Advanced Placement",
            "dates": "1991 - 1994",
            "url": "https://www.baycitycentral.com"
        },
        {
            "name": "United States Navy",
            "location": "San Diego, CA",
            "degree": "Aviation Electricians Mate",
            "majors": "Electrical",
            "dates": "1994 - 1997",
            "url": "https://www.usn.org"
        }
    ],
    "onlineCourses": [{
        "title": "Udacity",
        "school": "Intro to Programming Nano Degree",
        "dates": "2016 - 2017",
        "url": "https://www.udacity.com"
    }]
};

education.display = function() {

    var schoolsLength = education.schools.length;
    for (var i = 0; i < schoolsLength; i++) {
        $("#education").append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
        var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
        var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
        var formattedSchoolURL = HTMLschoolURL.replace("%data%", education.schools[i].url);
        $(".education-entry:last").append(formattedSchoolName, formattedSchoolLocation, formattedSchoolDegree, formattedSchoolMajor, formattedSchoolDates, formattedSchoolURL);
    }

    if (education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineCourses);
        var onlineCourseLength = education.onlineCourses.length;
        for (i = 0; i < onlineCourseLength; i++) {
            $("#education").append(HTMLschoolStart);
            var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
            var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
            var formattedOnlineDate = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
            var formattedOnlineURL = HTMLonlineURL.replace("%data%", "Visit Website");
            $(".education-entry:last").append(formattedOnlineTitle, formattedOnlineSchool, formattedOnlineDate, formattedOnlineURL);
        }
    }
};

education.display();

$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;

    logClicks(x, y);
});

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);