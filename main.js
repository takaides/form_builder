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
    "options": [
      // consistency
      {
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

  let input = document.createElement("input");
  let select = document.createElement("select");
  let textarea = document.createElement("textarea");

  // Create array of keys of object [i] named attribute-ish
  let atrb = Object.keys(formData[i]);
  // Create array of values of object [i] named value
  let value = Object.values(formData[i]);
  for (var j = 0; j < value.length; j++) {
    // console log for debug purposes
    console.log('atrb', atrb[j]);
    console.log('value', value[j]);

    // different input types have different html tags, select the right one
    if (formData[i].type == ('text' || "tel" || 'email')) {
      for (var k = 0; k < value.length; k++) {
        input.setAttribute(atrb[k], value[k]);
        console.log("1", i, atrb[k], value[k]);
      }
      // input.setAttribute(atrb[j], value[j]);
      // console.log("1", i, atrb[j], value[j]);
      input.setAttribute('placeholder', formData[i].label);
      input.removeAttribute('options');
      form.appendChild(input);

    } else if (formData[i].type == 'textarea') {
      for (var k = 0; k < value.length; k++) {
        textarea.setAttribute(atrb[k], value[k]);
        console.log("2", i, atrb[k], value[k]);
      }
      textarea.setAttribute('placeholder', formData[i].label);
      textarea.removeAttribute('options');
      form.appendChild(textarea);

    } else if (formData[i].type == 'select') {
      for (var k = 0; k < value.length; k++) {
        select.setAttribute(atrb[k], value[k]);
        console.log("3", i, atrb[k], value[k]);
      }
      select.removeAttribute('options');
      form.appendChild(select);

    } else {
      console.log("this is broken");
    }

    if (formData[i].options != []) {
      let option = document.createElement("option");
      for (var k = 0; k < formData[i].options.length; k++) {
        option.setAttribute("value", formData[i].options[k].value);
        option.innerHTML = formData[i].options[k].label;
        console.log("!!!!",formData[i].options[k].label,formData[i].options[k].value);
        select.appendChild(option);
      }
    }
  }
  console.log("6");
}
