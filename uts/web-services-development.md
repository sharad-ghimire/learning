## Lecture 1 Basics

**Web Apps Vs Web Service** : Web Applications are presentation-oriented, page-based, human oriented (user interacts with page: Request/Response). Web Services are service oriented, service-based, machine oriented, Application provides “Remote Procedure Calls/Remote Methods”, Application interacts with Application (Request/Response (RPC), Message oriented).

- Website / Web Application : Human user + Web Browser Request Web Server Response (HTML, JS. GIF) Human user + Web Browser.
- Web Service: Service Consumer (Web Client) Request Service Provider (Web Server) Response (JSON, XML) Service Consumer.

**HTML Vs JSP** : HTML can only make static websites. How can we program functionality into a webpage? JSP = JavaServer Pages. Allows embedding Java code within HTML and executed by server and returned to browser as HTML. Execution Process → Web browser accesses URL of JSP page, corresponding JSP file is converted into a Java class, Java class is compiled and executed, Output is sent back to browser. In our case, server is Glassfish.

**Syntax** : `<% out.println(“Hello World”); %>` . Java Code enclosed by `<% .. %>`. Outside those tags, it is normal HTML. Examples: `<%! String name; %>` , `<%= name %>`.

## Lecture 2 HTTP Methods and JSP Basics

**HTTP** : HTTP is designed to enable client-server communication. HTTP works as a request-response protocol a client and server. The two most used HTTP methods are: GET and POST.

**GET and POST** - GET is used to Request a representation of the specific resource. Idempotent! (Only retrieval data; should not have other effects). Can be bookmarked. Appear in URL after '?' (never use GET to send sensitive data; the length is limited).On other hand, POST submits data to be processed (eg. storing, updating, ordering a product or sending Email). Non-Idempotent! Cannot be bookmarked. The data is included in the body of the request.
| | GET | POST |
| ------------- |-------------| -----|
| Back button/ Reload | Harmless | Data will be resubmitted |
|Cached|Can be cached|Not cached|
|History|Parameters remain in browser history|Parameters are not saved in browser history|
|Restrictions on data length|Yes, when sending data, the GET method adds the data to the URL; and the length of a URL is limited|No restrictions
|Security|GET is less secure compared to POST because data sent is part of the URL|POST is a little safer than GET because the parameters are not stored in browser history or in web server logs|
|Visibility|Data is visible to everyone in the URL|Data is not displayed in the URL|

**JSP**: Java Code is enclosed by `<% ... %>`. Outside those tags, it is normal HTML.

```jsp
<p>This is my JSP Hello World Program, So,
<%
     String firstName = request.getParameter("FIRSTNAME");
     out.println("hi "+ firstName);
%>
</p>

```
