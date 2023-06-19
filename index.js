const http = require("http")
const dotenv = require("dotenv")
dotenv.config()

function RouteContent(request,response) {
    const url = request.url

    if(url === "/"){
        response.write("<html>")
        response.write("<head><title>Node First Handson</title></head>")
        response.write("<body>")
        response.write("<h2>Node by sending response in HTML</h2>")
        response.write("<p> In the context of HTML, a node refers to an element or a part of the HTML document's structure. Every element in an HTML document, such as headings, paragraphs, images, links, forms, etc., is considered a node.</p>")
        response.write("<p>Nodes form a hierarchical structure known as the Document Object Model (DOM). The DOM represents the HTML document as a tree-like structure, where each node in the tree corresponds to an element, attribute, or text within the HTML markup</p>")
        response.write("<p>Nodes can have relationships with other nodes. For example, a parent node can have child nodes, and sibling nodes can have the same parent. This relationship allows you to access and manipulate different parts of the HTML document using JavaScript or other scripting languages.</p>")
        response.write("<p>Here are some common types of nodes you may encounter in HTML:</p>")
        response.write("<ol>")
        response.write("<li>Element Nodes: These nodes represent the HTML elements, such as div tag imag tag and p tag etc. They can contain other nodes as child nodes.</li>")
        response.write("<li>Text Nodes: These nodes represent the text content within an element. For example, the actual text inside a paragraph or heading tag is represented by a text node.</li>")
        response.write("<li>Attribute Nodes: These nodes represent the attributes of an element. An element may have attributes like src, href, class, etc., which are represented as attribute nodes.</li>")
        response.write("<li>Comment Nodes: These nodes represent the comments within the HTML markup. They are enclosed within <!-- and --> and are not rendered as visible content on the web page.</li>")
        response.write("</ol>")
        response.write("</body>")
        response.write("</html>")
        return response.end()
    }

    if(url === "/json"){
        response.write(JSON.stringify([ 
        {node: "The node key represents the concept of a node."},
        {description: "The description key provides a definition or explanation of what a node is. It states that a node is a fundamental unit or element within data structures."}
        ,{ properties : "The properties key contains an array that lists some common properties or characteristics of nodes. These include the ability to hold data or additional properties, the presence of relationships with other nodes, and the organization within various data structures."}   
    ]))
        return response.end()   
    }



    response.write("Page not found")
    return response.end()

}

const PORT = process.env.PORT

const server = http.createServer(RouteContent)
server.listen(PORT,()=>{
console.log("Server is running fine");
})