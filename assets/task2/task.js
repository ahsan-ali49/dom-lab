// 2. Here is a sample html file with a submit button. Write a JavaScript function to get the value of the href, hreflang, rel, target, and type attributes of the
// specified link.


const getAttributes = ()=>{
    const link = document.querySelector('a');
    console.log(link.href);
    console.log(link.hreflang);
    console.log(link.rel);
    console.log(link.target);
    console.log(link.type);
}
