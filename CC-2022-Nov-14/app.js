// Your mission is to implement a function that converts the following potentially harmful characters:

// < --> &lt;
// > --> &gt;
// " --> &quot;
// & --> &amp;

//A string
// string with characters replaced
//htmlspecialchars("<h2>Hello World</h2>"),"&lt;h2&gt;Hello World&lt;/h2&gt;"   htmlspecialchars("Hello, how would you & I fare?"),"Hello, how would you &amp; I fare?"
//Why does the order matter

function htmlspecialchars(formData) {

    return formData.replace(/&/g, "&amp;")
        .replace(/"/g, "&quot;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")

}