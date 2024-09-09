import { title } from "process";
import { useState } from "react";

export const useLogicHome = () => {
  
    const [section1, setSection1] = useState([
        {
            title:"Introduce Your Product Quickly & Effectively",
            dis:"Capture your audience’s attention with a swift and impactful product introduction. Highlight key features, benefits, and unique selling points that set your product apart. With clear messaging and engaging visuals, make a lasting impression that communicates the value of your product effortlessly.",
            dis1:"Feel free to let me know if you need any changes!",
        }
    ]);
    const [section2, setSection2] = useState([
        {
            title:"Fast & Powerful",
            dis:"Experience unparalleled speed and exceptional power with our solution. Designed to handle the most demanding tasks effortlessly, it ensures you get the job done faster and more efficiently than ever before. Embrace the ultimate combination of speed and performance, elevating your productivity to new heights.",
        }
    ])
    const [section3, setSection3] = useState([
        {
            title:"",
            dis:"",
            title1:"",
            dis1:"",
            title2:"",
            dis2:"",
        }
    ])
    const [section4, setSection4] = useState([
        {
            title:"A Price To Suit Everyone",
            dis:"Discover exceptional value with pricing options tailored to fit every budget. Whether you’re a small startup or an established business, our flexible plans ensure that you can access top-quality solutions without breaking the bank. Enjoy premium features and great service at a price that works for you.",
            price:"100",
        }
    ])

    return {section1,section2,section3,section4}

  
}
