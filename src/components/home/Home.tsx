import './Home.css';
import BlogCard from '../blogcard/BlogCard';

function Home() {
    // Hardcoded blog data
const blogs = [
  {
    authorImg: "https://tse2.mm.bing.net/th/id/OIP.DddVc_GnX93lvAb8aTj7tAHaHa?rs=1&pid=ImgDetMain&o=7&rm=3",
    category: "Tech Insights",
    date: "Jan 24, 2026",
    title: "How React is Changing Modern Web Development",
    description: "React makes it painless to create interactive UIs. With component-based architecture, developers can reuse code efficiently, improve performance, and build scalable applications faster than ever. This article dives into the latest React features, best practices, and real-world examples to help developers optimize their web apps.",
  },
  {
    authorImg: "https://th.bing.com/th?q=Tech+Logo+Dark+Fire&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    category: "Design Trends",
    date: "Jan 25, 2026",
    title: "UI/UX Best Practices for 2026",
    description: "Good design is more than aesthetics—it’s about user experience. In this article, we explore the latest UI/UX trends, including minimalism, micro-interactions, and accessibility considerations. Learn how to create engaging interfaces that delight users and increase retention.",
  },
  {
    authorImg: "https://th.bing.com/th/id/OIP.s5iGqTYN2bhYoLh3jly-kgHaEK?w=314&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    category: "Programming Tips",
    date: "Jan 26, 2026",
    title: "Top 10 JavaScript Tricks Every Developer Should Know",
    description: "JavaScript is full of hidden gems and powerful features that many developers overlook. From closures and async/await patterns to destructuring and template literals, these 10 tricks will make your code cleaner, faster, and more maintainable. Ideal for both beginners and seasoned developers.",
  },
  {
    authorImg: "https://th.bing.com/th?q=Tech+Stack+Fluf+Full+From&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    category: "AI & Tech",
    date: "Jan 27, 2026",
    title: "The Rise of AI in Web Development",
    description: "Artificial intelligence is revolutionizing web development. From intelligent chatbots and recommendation engines to automated testing and predictive analytics, AI tools are helping developers build smarter, faster, and more adaptive web applications. Learn how AI is shaping the future of development.",
  },
  {
    authorImg: "https://th.bing.com/th?q=Venn+Diagram&w=120&h=120&c=1&rs=1&qlt=70&o=7&cb=1&pid=InlineBlock&rm=3&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247",
    category: "Data Science",
    date: "Jan 28, 2026",
    title: "Data Visualization Tips for Beginners",
    description: "Data is meaningless without context. Effective visualization helps communicate insights clearly. This guide walks beginners through best practices, popular tools like Tableau and Power BI, and tips for creating impactful charts, dashboards, and graphs that make your data speak.",
  },
  {
    authorImg: "https://th.bing.com/th/id/OIP.QddN4fB9lGwbTpaJ2wgY0QHaEP?w=321&h=184&c=7&r=0&o=7&pid=1.7&rm=3",
    category: "Web Development",
    date: "Jan 29, 2026",
    title: "Building Scalable Web Apps with Node.js",
    description: "Node.js is a powerful runtime for building scalable and high-performance web applications. Learn how to structure your apps, manage asynchronous operations efficiently, implement REST APIs, and leverage popular frameworks like Express to handle growing user traffic seamlessly.",
  },
  {
    authorImg: "https://th.bing.com/th/id/OIP.8GpZQT-UTxBX1rMEOq_AFwHaEN?w=293&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    category: "Cybersecurity",
    date: "Jan 30, 2026",
    title: "10 Tips to Secure Your Web Applications",
    description: "Security is critical for any web app. This article covers the top 10 best practices for developers, including input validation, HTTPS, authentication strategies, secure storage, and monitoring. Protect your applications from common attacks like XSS, SQL injection, and CSRF.",
  },
  {
    authorImg: "https://th.bing.com/th/id/OIP.4OSA02xAHncIP_2AWQMRiwHaFS?w=273&h=195&c=7&r=0&o=7&pid=1.7&rm=3",
    category: "AI & Machine Learning",
    date: "Jan 31, 2026",
    title: "Machine Learning for Beginners",
    description: "Machine learning can seem intimidating, but it’s approachable with the right guidance. Learn key concepts like supervised vs. unsupervised learning, regression, classification, and clustering. Start building your first predictive models with Python and popular libraries like scikit-learn.",
  },
  {
    authorImg: "https://th.bing.com/th/id/OIP.VGjLINz9dmPDn7Lvi6cN8gHaFj?w=213&h=180&c=7&r=0&o=7&pid=1.7&rm=3",
    category: "Programming Tips",
    date: "Feb 1, 2026",
    title: "Understanding Async/Await in JavaScript",
    description: "Async/await has simplified asynchronous programming in JavaScript. This article explains how it works, compares it with promises, and demonstrates real-world scenarios like fetching API data, error handling, and chaining asynchronous operations cleanly.",
  },
  {
    authorImg: "https://th.bing.com/th/id/OIP.1uuoUlhcG26m9Lq3-1qVWQHaE8?w=297&h=198&c=7&r=0&o=7&pid=1.7&rm=3",
    category: "Tech Insights",
    date: "Feb 2, 2026",
    title: "The Future of Web Frameworks",
    description: "Web frameworks evolve rapidly. This article explores upcoming frameworks, innovations in frontend and backend architecture, component-driven development, and how developers can stay ahead by choosing the right tools for performance, maintainability, and scalability.",
  }
];



    return (
        <div className="parent">
            {blogs.map((blog, index) => (
                <BlogCard key={index} blog={blog} />
            ))}
        </div>
    );
}

export default Home;
