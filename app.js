// using querySelector() to target header and adding another line to appear after "hi there"
let header_background = document.querySelector(`#for_header`);
header_background[`outerHTML`] += `<h1> This should appear after original Hi there</h1>`;

// using getElementById to change background color of the text box
let header_text = document.getElementById(`for_header_title`);
header_text[`style`][`backgroundColor`] = 'orange';

// using querySelectorAll() replacing p tag content

let p_text = document.querySelectorAll(`.for_main`);
p_text[`innerHTML`] = `replacing original`;

// using getElementsByClassName() content before current content
let p_all = document.getElementsByClassName(`for_p`);
p_all[`outerHTML`] = `<inline>this is before</inline>` + p_all[`outerHTML`];