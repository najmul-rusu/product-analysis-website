import React from 'react';
const Blog = () => {
    return (
        <div className='m-20'>
            <h2 className='text-2xl font-bold'>Question and Answer</h2>
            <h3 className='text-left text-xl font-bold my-5'>What is Context API?</h3>
            <p className='text-left'>The React Context API is a way to effectively create global variables for a React app that can be passed around. This is an alternative to "prop drilling" or moving props from grandparents to children to parents. The topic is also referred to as a simple, light method for managing the state using Redox.

                Context API is a (kind of) new feature added to version 16.3 of React that allows one to share (or part of) the whole app lightly and comfortably.</p>

            <h3 className='text-left text-xl font-bold my-5'>What is semantic tag?</h3>
            <p className='text-left'>The key feature of a semantic element is that it clearly communicates its meaning to both the developer and the browser. These elements clearly define its content.</p>
            <p className='text-left font-bold my-2'>Examples of semantic tag:</p>
            <ul className='text-left'>
                <li>Header tags &lt;h1&gt;&nbsp;through &lt;h6&gt;</li>
                <li>&lt;blockquote&gt;</li>
                <li>&lt;code&gt;</li>
                <li>&lt;em&gt;</li>
            </ul>
        </div>
    );
};

export default Blog;