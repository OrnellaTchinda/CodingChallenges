// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:


//url starting with http:// https:// and www.
//return domain name

// * url = "http://github.com/carbonfive/raygun" -> domain name = "github"
// * url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
// * url = "https://www.cnet.com"                -> domain name = cnet"

//replace and split

function domainName(url) {
    return url.replace("http://", "").replace("https://", "").replace("www.", "").split(".")[0]
}