// The Form Data
let formData = [
  // For demonstration purposes,
  // the first form element has been added to the HTML file as a comment
  // compare the input in the HTML file with the contents of this first object
  {
    "type": "text",
    "label": "First Name",
    "id": "user-first-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "text",
    "label": "Last Name",
    "id": "user-last-name",
    "icon": "fa-user",
    "options": []
  },
  {
    "type": "email",
    "label": "Email Address",
    "id": "user-email",
    "icon": "fa-envelope",
    "options": []
  },
  {
    "type": "text",
    "label": "Current Website URL",
    "id": "user-website",
    "icon": "fa-globe",
    "options": []
  },
  {
    "type": "select",
    "label": "Select Language",
    "id": "user-language",
    "icon": "",
    "options": [{
        "label": "English",
        "value": "EN"
      },
      {
        "label": "French",
        "value": "FR"
      },
      {
        "label": "Spanish",
        "value": "SP"
      },
      {
        "label": "Chinese",
        "value": "CH"
      },
      {
        "label": "Japanese",
        "value": "JP"
      }
    ]
  },
  {
    "type": "textarea",
    "label": "Your Comment",
    "id": "user-comment",
    "icon": "fa-comments",
    "options": []
  },
  {
    "type": "tel",
    "label": "Mobile Number",
    "id": "user-mobile",
    "icon": "fa-mobile-phone",
    "options": []
  },
  {
    "type": "tel",
    "label": "Home Number",
    "id": "user-phone",
    "icon": "fa-phone",
    "options": []
  }
];

// HINTS:
// As you can see, we access the first element in the array
// with [0] and then grab the property "label" using the "." operator
(function() {
  // Select the first element from the array
  let first = formData[0];
  // Log the first object
  console.log(first);
  // Log the string "First Name"
  console.log(first.label);
})();


// -------- Your Code Goes Below this Line --------
let form = document.getElementById("fields");

let input = document.createElement("input");
let select = document.createElement("select");
let textarea = document.createElement("textarea");

// Create loop to run through formData array
for (let i = 0; i < formData.length; i++) {
  // Create array of keys of object [i] named attribute-ish
  let atrb = Object.keys(formData[i]);
  // Create array of values of object [i] named value
  let value = Object.values(formData[i]);
  for (var j = 0; j < value.length; j++) {

    // console log for debug purposes
    console.log('atrb', atrb[j]);
    console.log('value', value[j]);

    // different input types have different html tags, select the right one
    if ((atrb[j] == 'type') && (value[j] == ('text' || 'tel' || 'email')) {
        for (var k = 0; k < value.length; k++) {
          input.setAttribute(atrb[j], value[j]);
        }
      } else if (atrb[j] == 'type' && value[j] == 'textarea') {
        for (var k = 0; k < value.length; k++) {
          textarea.setAttribute(atrb[j], value[j]);
        }
      } else {
        for (var k = 0; k < value.length; k++) {
          select.setAttribute(atrb[j], value[j]);
        }
      }
    }
    console.log("6");
  }
