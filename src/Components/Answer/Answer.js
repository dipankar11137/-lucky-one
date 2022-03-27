import React from 'react';

const Answer = () => {
    return (
        <div className='container'>
            <h3>1 . How to react works ?</h3>
            <p><span className='fw-bold'>Answer : </span> React is a declarative, skilled, and flexible JavaScript library for creating user interfaces. It allows you to compose complex UIs from small and isolated pieces of code called "components". React works in declarative code.To illustrate what we mean by declarative code, we want you to imagine the following code as an app. With a navigator, a title, a filter, and a list you see what the picture looks like on the screen below. Because every line of code declares what every element of the app is.</p>

            <h3>2 . Different between Props Vs State .</h3>
            <p><span className='fw-bold'>Answer : </span>
                Props:
                (i) .Props are read-only.
                (ii).Props are external and controlled by whatever renders the component.
                (iii).Props make components reusable.
                (iv).Props are used to communicate between components.

                State:
                (i).State changes can be asynchronous.
                (ii).The State is internal and controlled by the React Component itself.
                (iii).States can be used for rendering dynamic changes with the component.
                (iv).State cannot be accessed by child components.</p>

            <h3>3. How useState work ?</h3>
            <p><span className='fw-bold'>Answer : </span> useState is a hook that allows you to have state variables in functional elements. You pass the initial state to this function and it provides the current state value (not the initial state) and a variable with another function to update this value. React Hooks has been released for a while now and they are great! I used their production code and it all looks beautiful. As I continued to use the hook, I began to wonder how all this magic works.
                Obviously I wasn't alone because there was a Boston response meetup on this. Thank you to Ryan Florence and Michael Jackson (not the Moonwalking legend) for giving such great speeches around this subject. Keep visiting and you will learn more about useEffect and how it works!</p>
        </div>
    );
};

export default Answer;