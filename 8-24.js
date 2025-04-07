function htmlEscape(strings, ...values) {
    let result = strings[0];
    for ( let i=0; i<values.length; i++) {
        result += escape(values[i]) + strings [+1];
    }
    return result;
    function escape(s) {
        return s.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/'/g, "&#039;")
            .replace(/"/g, "&quot;")
            .replace(/`/g, "&#096;");
    }
}
let userinput = "<script>alert('test');</script>";
let message = htmlEscape`<p>${userinput}</p>`;
console.log(message);