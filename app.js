// using querySelector() to target header and adding another line to appear after "hit there"
let header_background = document.querySelector(`#for_header`);
header_background[`outerHTML`] += `<h1> This should appear after original Hi there</h1>`;

// using querySelector()
let header_text = document.querySelector(`#for_header_title`);
header_text[`style`][`backgroundColor`] = 'orange';

// using querySelectorAll()

let p_background = document.querySelectorAll(`.for_p`);
p_background[`innerHTML`] = ` <a href = "https://images.unsplash.com/photo-1596130619401-d822f9dede1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8c21hbGwlMjBkdWNrfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60">
a duck</a>`;