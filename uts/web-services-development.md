## Lecture 1 Basics

**Web Apps Vs Web Service** : Web Applications are presentation-oriented, page-based, human oriented (user interacts with page: Request/Response). Web Services are service oriented, service-based, machine oriented, Application provides “Remote Procedure Calls/Remote Methods”, Application interacts with Application (Request/Response (RPC), Message oriented).

- Website / Web Application : Human user + Web Browser Request Web Server Response (HTML, JS. GIF) Human user + Web Browser.
- Web Service: Service Consumer (Web Client) Request Service Provider (Web Server) Response (JSON, XML) Service Consumer.

**HTML Vs JSP** : HTML can only make static websites. How can we program functionality into a webpage? JSP = JavaServer Pages. Allows embedding Java code within HTML and executed by server and returned to browser as HTML. Execution Process → Web browser accesses URL of JSP page, corresponding JSP file is converted into a Java class, Java class is compiled and executed, Output is sent back to browser. In our case, server is Glassfish.

**Syntax** : `<% out.println(“Hello World”); %>` . Java Code enclosed by `<% .. %>`. Outside those tags, it is normal HTML. Examples: `<%! String name; %>` , `<%= name %>`.

## Lecture 2 HTTP Methods and JSP Basics

#### HTTP

HTTP is designed to enable client-server communication. HTTP works as a request-response protocol a client and server. The two most used HTTP methods are: GET and POST.

**GET and POST** - GET is used to Request a representation of the specific resource. Idempotent! (Only retrieval data; should not have other effects). Can be bookmarked. Appear in URL after '?' (never use GET to send sensitive data; the length is limited).On other hand, POST submits data to be processed (eg. storing, updating, ordering a product or sending Email). Non-Idempotent! Cannot be bookmarked. The data is included in the body of the request.

|                             | GET                                                                                                 | POST                                                                                                           |
| --------------------------- | --------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| Back button/ Reload         | Harmless                                                                                            | Data will be resubmitted                                                                                       |  |
| Cached                      | Can be cached                                                                                       | Not cached                                                                                                     |
| History                     | Parameters remain in browser history                                                                | Parameters are not saved in browser history                                                                    |
| Restrictions on data length | Yes, when sending data, the GET method adds the data to the URL; and the length of a URL is limited | No restrictions                                                                                                |
| Security                    | GET is less secure compared to POST because data sent is part of the URL                            | POST is a little safer than GET because the parameters are not stored in browser history or in web server logs |
| Visibility                  | Data is visible to everyone in the URL                                                              | Data is not displayed in the URL                                                                               |

#### JSP

Java Code is enclosed by `<% ... %>`. Outside those tags, it is normal HTML.

```jsp
<p>This is my JSP Hello World Program, So,
<%
     String firstName = request.getParameter("FIRSTNAME");
     out.println("hi "+ firstName);
%>
</p>

```

**Objects**
We can access Java objects from with JSPs. Main types of objects are Implicit Objects ( Provided by the container ) and Application-specific Objects ( Local instances, Instances of JavaBean, etc. ). Web container provides a context to provide scope of object. Some of the examples of JSP implicit objects are:

| Object      | Description                                                                                                 |
| ----------- | ----------------------------------------------------------------------------------------------------------- |
| request     | This is HttpServletRequest object associated with the request.                                              |
| response    | This is HttpServletResponse object associated with the response to the client                               |
| out         | This is the PrintWriter object used to send output to the client.                                           |
| session     | This is the HttpSession object associated with the request.                                                 |
| application | This is the ServletContext object associated with application context.                                      |
| config      | This is the ServletConfig object associated with the page.                                                  |
| pageContext | This encapsulates use of server-specific features like higher performance JspWriters.                       |
| page        | This is simply a synonym for this, and is used to call the methods defined by the translated servlet class. |
| Exception   | The Exception object allows the exception data to be accessed by designated JSP.                            |

User makes a "request" to view a page of the server. Server then executes the requested JSP and send back a "response" to the user. The server "response" contains HTML output generated by the requested JSP Page. Commonly used JSP objects are: `request` and `response`.

**Directive**
Directive are instructions to the JSP compiler (translator). Example: include includes at translation-time, NOT run-time. Two main directive are page and include.

```jsp
<%@ directiveName attribute="value" attribute= "value" %>
//Note: <%@directive %> tags.
<%@ page import="java.util.*, java.io.*"%>
<%@ include file="copyright.html"%>
```

![Request Response Cycle](./images/wsd/jsp.png)

#### Embedded Code

- **Declarations**: Declarations executed when page is initialised. It is used to define class-wide variables and methods. Declarations must produce no output.

```jsp
<%! Java variables and method declarations %>
<%! int i = 0; %>
<%! int cube = 0; %>
<%! public int cubed(int j){
      return (j*j*j);
  }  %>
```

- **Scriptlets**: Basically any Java code can go in a scriptlet.

```jsp
<%
try {
 i = Integer.parseInt(request.getParameter("mynum"));
 } catch (NumberFormatException nfe) {
out.println("Go back and enter a valid number.");
 i = 0;
 }
 cube = cubed(i);
%>
```

- **Expressions**: Expressions are primary for inserting values of Java variables into HTML code without having to type in full asa scriptlet: `<% out.print(i); %>` vs `<%= i %>`

```jsp
<%= Java expression to be evaluated %>
<body>
 <p>You entered the value <%= i %></p>
<p>That number cubed is <%= cube %></p>
 <p>I can say the same thing with <%= cubed(i) %></p>
<p>I can also use Scriptlets to get <% out.println(cube); %></p>
</body>
```

- **Standard Actions**: Actions are well-known tags that affect the runtime behaviour. Some examples are `<jsp:include .../>`,`<jsp:useBean>`, `<jsp:forward>` etc. Include directive ( JSP does not compile if there is any change in included file only (no changes in source file)) Include action (better choice for including dynamic resources).

```jsp
<jsp:include page="my.jsp" flush="true" />
```

- **Expression Language**: Expression Language (EL) introduced with JSP 2.4 & J2EE 1.4. It complements JSP Expressions with simpler syntax.

```jsp
${object}
//Each ${object} would be same as <%= object %>
```

Supports: JSP implicit objects, Java Beans, Simple Calculations, etc.

## Lecture 3 JSP Beans and Sessions

#### JSP and JavaBean

Request/Response -- JSP -- JavaBeans -- Business Processing

**Using JavaBeans** : Allows us to encapsulate reusable functionality in a “bean” . A bean is a normal Java Class that follows some rules (called Design Patterns). One basic design pattern is for “properties” which is using a getter and setter methods. JavaBeans are not a client side component model (they are not EJBS, Enterprise JavaBeans). A JavaBean is a class that conforms to the following conventions:

- Provides a public constructor with no parameter as well as with parameters(s).
- Provides a public getter and setter (to access private fields).
- Implements the `Serialization` interface. Serialization is the process of converting an object into a stream of bytes in order to store the object or transmit it to memory, a database or a file. Classes `ObjectInputStream` and `ObjectOutputStream` are high-level streams that contain the methods for serializing and de-serializing an object.

```java


package uts.wsd;

public class User implements java.io.Serializable {
   private String email;
   private String password;

   public User() { }      //Must have a default constructor
   public User(String email, String password) {
       this.email = email;
       this.password = password;
   }
//Getters
   public String getEmail(){ return email; }
   public String getPassword(){ return password; }
//Setters
   public void setEmail(String email){ this.email = email; }
   public void setPassword(String password){ this.password = password; }
 }
```

```jsp
//Using beans
<% uts.wsd.User user = new uts.wsd.User(email, name, password); %>

//OR
<%@ page import="uts.wsd.*" %>
<% User user = new User(email, name, password); %>
//Setting properties
<% user.setEmail("sharadghimire5551@gmail.com");
//Getting Properties
<%= user.getEmail() %>

```

- Using beans `<jsp:useBean id="user" class="uts.wsd.User" scope="page" />`
  - `uts.edu.User user = new uts.wsd.User()`
- Setting Properties `<jsp:setProperty name="user" property="email" value="sh@g.com"/>`
  - `user.setEmail("sh@g.com")`
- Getting Properties `<jsp:getProperty name="user" property="email" />`
  - `user.getEmail()`

**JSP Scopes**: JSP allows us to save data into a scope

| Scope       | Where saved                                                 |
| ----------- | ----------------------------------------------------------- |
| page        | Only for the current page, destroyed when we leave the page |
| request     | Kept while request is active                                |
| session     | Saved in the current session                                |
| application | Saved for the whole application                             |

**EL and JavaBeans**: Expression Language also can access JavaBeans

```jsp
//Instead of
<jsp:useBean id="user" class="uts.wsd.User" />
<jsp:getProperty name="user" properties="email" /> //this invoke user.getEmail()
//use
${user.email}
```

**Session**
Many websites use session-based interactions. HTTP is a stateless protocol so to maintain state in a web application we use Session and Cookies. A cookie is a small piece of text stored by a user's browser. Cookie stores session information on the client (a unique identifier is stored on the client side called session id). A Session is a server side storage of information that is desired throughout the user's interaction with the website. The web application pairs this session id with it's internal data and retrieves the stored variables for use by the requested page.

_JSP Session_ - A session is an implicit object associated with a visitor.

```jsp
//Data can be put in the session
Person p = new Person("John Smith");
<% session.setAttribute("theperson",p); %>

//Data can be retrieved from it
Person p = (Person) session.getAttribute("theperson");

<p> The person’s name: <%= p.getName() %> </p>
```

The content of the session will be remembered until the user closes his/her web browser or until our web application explicitly clears the session. To end an application session : `<% session.invalidate(); %>` inside logout.jsp.

**JSP Deployment**
A single JSP page is pretty simple but a complex web application is more complex and includes static HTML files, static images, JSP files, separate Java classes, CSS stylesheets etc. So, we need to package web applications for deployment.
Web applications are packaged as _WAR_ (Web Application aRchive) files. WAR files can include all of the file types plus a deployment descriptor to specify configuration settings and make the application as container-independent as possible. A WAR file can be deployed into any compliant web container or JSP/Servlet container. Apache Tomcat is a web container.
