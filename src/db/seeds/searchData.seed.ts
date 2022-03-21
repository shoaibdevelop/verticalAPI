import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import { Search } from '../../api/search/search.entity'

export default class CreateSearchData implements Seeder {
  public async run(factory: Factory, connection: Connection): Promise<any> {
    const searchData = [{
      title: "What is Node JS?",
      photo: 'https://www.creative-tim.com/blog/content/images/wordpress/2020/03/node-js-736399_1280.png',
      shortDescription: 'Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine ',
      description: `Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project! Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.A Node.js app runs in a single process, without creating a new thread for every request. Node.js provides a set of asynchronous I/O primitives in its standard library that prevent JavaScript code from blocking and generally,`
    },
    {
      title: "JavaScript",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
      description: `JavaScript is a programming language that allows you to implement complex things on web pages. Every time a web page does more than just sit there and display static information for you to look at—displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, or more—you can bet that JavaScript is probably involved. In our first JavaScript module, we first answer some fundamental questions such as "what is JavaScript?"]`,
      shortDescription:
        "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries",
    },
    {
      title: "Vue.js",
      photo:
        "https://positivethinking.tech/wp-content/uploads/2021/01/Logo-Vuejs.png",
      description: `Vue  is a progressive framework for building user interfaces. Unlike other monolithic frameworks, Vue is designed from the ground up to be incrementally adoptable. The core library is focused on the view layer only, and is easy to pick up and integrate with other libraries or existing projects. On the other hand, Vue is also perfectly capable of powering sophisticated Single-Page Applications when used in combination with modern tooling`,
      shortDescription: `Vue.js is an open-source model–view–viewmodel front end JavaScript framework for building user interfaces and single-page applications. It was created by Evan You, and is maintained by him and the rest of the active core team members`,
    },
    {
      title: "Node.js",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png",
      description: `Node.js is an open-source and cross-platform JavaScript runtime environment. It is a popular tool for almost any kind of project! Node.js runs the V8 JavaScript engine, the core of Google Chrome, outside of the browser. This allows Node.js to be very performant.A Node.js app runs in a single process, without creating a new thread for every request.`,
      shortDescription: `Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.`,
    },
    {
      title: "ReactJs",
      photo: "https://reactjs.org/logo-og.png",
      description: `Currently, ReactJS is one of the most popular JavaScript front-end libraries which has a strong foundation and a large community.ReactJS is a declarative, efficient, and flexible JavaScript library for building reusable UI components. It is an open-source, component-based front end library which is responsible only for the view layer of the application.`,
      shortDescription:
        "React is a free and open-source front-end JavaScript library for building user interfaces based on UI components. It is maintained by Meta and a community of individual developers and companies. React can be used as a base in the development of single-page or mobile applications.",
    },
    {
      title: "AngularJS",
      photo:
        "https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/angularjs-logo-blog-header_0.jpg?itok=CUBxFqam",
      description: `This topic can help you understand Angular: what Angular is, what advantages it provides, and what you might expect as you start to build your applications.
  Angular is a development platform, built on TypeScript. As a platform, Angular includes:A component-based framework for building scalable web applications. A collection of well-integrated libraries that cover a wide variety of features, including routing, forms management, client-server communication, and more. A suite of developer tools to help you develop, build, test, and update your code With Angular, `,
      shortDescription:
        "AngularJS was a JavaScript-based open-source front-end web framework for developing single-page applications. It was maintained mainly by Google and a community of individuals and corporations.",
    },
    {
      title: "Next.js",
      photo:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png",
      description: `The ultimate tool for any React developer to learn and improve their own projects is, without a doubt, Next.js. Whether I'm building a static site with interactivity like a blog, or a highly dynamic, full-stack project like a social media app, I almost always reach for Next. The first reason for you to use Next is, as the banner headline states, because it's a React framework.`,
      shortDescription:
        "Next.js is an open-source development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites",
    },
    {
      title: "Express.js",
      photo: "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
      description: `In this first Express article we answer the questions "What is Node?" and "What is Express?", and give you an overview of what makes the Express web framework special. We'll outline the main features, and show you some of the main building blocks of an Express application (although at this point you won't yet have a development environment in which to test it).`,
      shortDescription:
        "Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js",
    },
    {
      title: "D3.js",
      photo: "https://raw.githubusercontent.com/d3/d3-logo/master/d3.png",
      description: `D3.js is a JavaScript library for manipulating documents based on data. D3 helps you bring data to life using HTML, SVG, and CSS. D3’s emphasis on web standards gives you the full capabilities of modern browsers without tying yourself to a proprietary framework, combining powerful visualization components and a data-driven approach to DOM manipulation. `,
      shortDescription:
        "D3.js is a JavaScript library for producing dynamic, interactive data visualizations in web browsers. It makes use of Scalable Vector Graphics, HTML5, and Cascading Style Sheets standards. It is the successor to the earlier Protovis framework.",
    },
    {
      title: "Underscore.js",
      photo: "https://underscorejs.org/docs/images/underscore.png",
      description: `Underscore is a JavaScript library that provides a whole mess of useful functional programming helpers without extending any built-in objects. It’s the answer to the question: “If I sit down in front of a blank HTML page, and want to start being productive immediately, what do I need?” … and the tie to go along with jQuery's tux and Backbone's suspenders.
  Underscore provides over 100 functions that support both your favorite workaday functional helpers: map, filter, invoke — as well as more specialized goodies: function binding, javascript templating, creating quick indexes, deep equality testing, and so on.
  A complete Test Suite is included for your perusal.
  You may also read through the annotated source code. There is a modular version with clickable import references as well.
  You may choose between monolithic and modular imports. There is a quick summary of the options below, as well as a more comprehensive discussion in the article. Enjoying Underscore, and want to turn it up to 11? Try Underscore-contrib.`,
      shortDescription:
        "Underscore.js is a JavaScript library which provides utility functions for common programming tasks. It is comparable to features provided by Prototype.js and the Ruby language, but opts for a functional programming design instead of extending object prototypes",
    },
    {
      title: "Lodash",
      photo:
        "https://upload.wikimedia.org/wikipedia/en/thumb/6/6f/Lodash.svg/220px-Lodash.svg.png",
      description: `Lodash is a JavaScript library that works on the top of underscore.js. It helps in working with arrays, strings, objects, numbers, etc. It provides us with various inbuilt functions and uses a functional programming approach which that coding in JavaScript easier to understand because instead of writing repetitive functions`,
      shortDescription:
        "Lodash is a JavaScript library which provides utility functions for common programming tasks using the functional programming paradigm.",
    },];

    await connection
    .createQueryBuilder()
    .insert()
    .into('search')
    .values(searchData)
    .execute()

  
    
    
  }
}
