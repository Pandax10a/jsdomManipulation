// using querySelector() to target header and adding another line to appear after "hi there"
let header_background = document.querySelector(`#for_header`);
header_background[`outerHTML`] += `<h1> This should appear after original Hi there</h1>`;

// using getElementById to change background color of the text box
let header_text = document.getElementById(`for_header_title`);
header_text[`style`][`backgroundColor`] = 'orange';

// using querySelectorAll() replacing p tag content

let p_text = document.querySelectorAll(`h3`);
for (let i = 0;i<p_text.length;i++) {
p_text[i][`innerHTML`] = ` <h4>replacing original</h4>`;
}

// using getElementsByClassName() content before current content
let p_all = document.getElementsByClassName(`for_p`);
for (let i = 0; i<p_all.length;i++) {
p_all[i][`outerHTML`] = `<inline>this is before lorem ipsum</inline>` + p_all[i][`outerHTML`];
}

// cleared everything to show one message
document.body[`outerHTML`] = `<h1>Wiped everything from here</h1>`