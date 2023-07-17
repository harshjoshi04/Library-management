import React, { useEffect, useState } from 'react';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from './Card';
import AnimationCard from './AnimationCard';




export default function Home() {
    const [out, setOut] = useState([])
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 4
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,

        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    useEffect(() => {
        fetch('http://localhost:3000/api/getdata')
            .then(value => value.json())
            .then(response => {
                setOut(response)
            })

    }, [])

    return (
        <>
            <div
                className="relative overflow-hidden bg-no-repeat bg-cover hero-sec"
                style={{
                    backgroundPosition: "50%",
                    height: "500px"
                }}
            >
                <div
                    className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
                >
                    <div className="flex justify-center items-center h-full ani">
                        <div className="text-center text-white px-6 md:px-12">
                            <h1 className="text-2xl md:text-2xl xl:text-4xl font-bold tracking-tight mb-12">
                                Welcome to our library,<br /> where knowledge flourishes, ideas bloom, and the joy of reading illuminates every corner.
                            </h1>
                            <button
                                type="button"
                                className="inline-block px-7 py-3 border-2 border-white text-white font-medium text-sm leading-snug uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                                data-mdb-ripple="true"
                                data-mdb-ripple-color="light"
                            >
                                Get started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className='text-3xl font-bold mx-24 mt-10'>Dark Category</h1>
            {out.length
                ?
                <>
                    <Carousel responsive={responsive} arrows={false} swipeable={false} draggable={false}>
                        {out.map((val, index) => {
                            if (val.bookCategory === "Dark") {
                                return <Card
                                    key={val._id}
                                    data={val}
                                />
                            }
                        })}
                    </Carousel>
                </>
                :
                <AnimationCard />
            }

            <h1 className='text-3xl font-bold mx-24 mt-10'>Psychology Category</h1>
            {out.length
                ?
                <>
                    <Carousel responsive={responsive} arrows={false} swipeable={false} draggable={false}>
                        {out.map((val, index) => {
                            if (val.bookCategory === "Psychology") {
                                return <Card
                                    key={val._id}
                                    data={val}
                                />
                            }
                        })}
                    </Carousel>
                </>
                :
                <AnimationCard />
            }
            <h1 className='text-3xl font-bold mx-24 mt-10'>Horror Category</h1>
            {out.length
                ?
                <>
                    <Carousel responsive={responsive} arrows={false} swipeable={false} draggable={false}>
                        {out.map((val, index) => {
                            if (val.bookCategory === "Horror") {
                                return <Card
                                    key={val._id}
                                    data={val}
                                />
                            }
                        })}
                    </Carousel>
                </>
                :
                <AnimationCard />
            }


            <div className="container my-24 px-6 mx-auto ">


                <section className="mb-32 text-gray-800 text-center">
                    <h2 className="text-3xl font-bold mb-20">Our Library</h2>

                    <div className="grid lg:gap-x-12 lg:grid-cols-3">
                        <div className="mb-12 lg:mb-0">
                            <div className="rounded-lg shadow-lg h-full block bg-white">
                                <div className="flex justify-center">
                                    <div className="p-4 bg-gray-600 rounded-full shadow-lg inline-block -mt-8">
                                        <svg
                                            className="w-7 h-7 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 512 512"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M488.6 250.2L392 214V105.5c0-15-9.3-28.4-23.4-33.7l-100-37.5c-8.1-3.1-17.1-3.1-25.3 0l-100 37.5c-14.1 5.3-23.4 18.7-23.4 33.7V214l-96.6 36.2C9.3 255.5 0 268.9 0 283.9V394c0 13.6 7.7 26.1 19.9 32.2l100 50c10.1 5.1 22.1 5.1 32.2 0l103.9-52 103.9 52c10.1 5.1 22.1 5.1 32.2 0l100-50c12.2-6.1 19.9-18.6 19.9-32.2V283.9c0-15-9.3-28.4-23.4-33.7zM358 214.8l-85 31.9v-68.2l85-37v73.3zM154 104.1l102-38.2 102 38.2v.6l-102 41.4-102-41.4v-.6zm84 291.1l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6zm240 112l-85 42.5v-79.1l85-38.8v75.4zm0-112l-102 41.4-102-41.4v-.6l102-38.2 102 38.2v.6z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-gray-600 mb-4">1000+</h3>
                                    <h5 className="text-lg font-medium mb-4">Books</h5>
                                    <p className="text-gray-500">
                                        Among our community of 1,000+ readers, you will find literary enthusiasts exploring the realms of fiction, delving into the depths of non-fiction, and embarking on journeys of self-discovery through biographies and memoirs. They engage with thought-provoking classics, contemporary bestsellers, and hidden gems that have captured their hearts and minds.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="mb-12 lg:mb-0">
                            <div className="rounded-lg shadow-lg h-full block bg-white">
                                <div className="flex justify-center">
                                    <div className="p-4 bg-gray-600 rounded-full shadow-lg inline-block -mt-8">
                                        <svg
                                            className="w-7 h-7 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 544 512"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M527.79 288H290.5l158.03 158.03c6.04 6.04 15.98 6.53 22.19.68 38.7-36.46 65.32-85.61 73.13-140.86 1.34-9.46-6.51-17.85-16.06-17.85zm-15.83-64.8C503.72 103.74 408.26 8.28 288.8.04 279.68-.59 272 7.1 272 16.24V240h223.77c9.14 0 16.82-7.68 16.19-16.8zM224 288V50.71c0-9.55-8.39-17.4-17.84-16.06C86.99 51.49-4.1 155.6.14 280.37 4.5 408.51 114.83 513.59 243.03 511.98c50.4-.63 96.97-16.87 135.26-44.03 7.9-5.6 8.42-17.23 1.57-24.08L224 288z"
                                            ></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-gray-600 mb-4">70%</h3>
                                    <h5 className="text-lg font-medium mb-4">Growth</h5>
                                    <p className="text-gray-500">
                                        The introduction and enhancement of online services, such as online catalog access, e-renewals, interlibrary loan requests, and digital reference assistance, can contribute to the growth and convenience of the library website.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="">
                            <div className="rounded-lg shadow-lg h-full block bg-white">
                                <div className="flex justify-center">
                                    <div className="p-4 bg-gray-600 rounded-full shadow-lg inline-block -mt-8">
                                        <svg
                                            className="w-7 h-7 text-white"
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 640 512"
                                        >
                                            <path
                                                fill="currentColor"
                                                d="M512.1 191l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0L552 6.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zm-10.5-58.8c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.7-82.4 14.3-52.8 52.8zM386.3 286.1l33.7 16.8c10.1 5.8 14.5 18.1 10.5 29.1-8.9 24.2-26.4 46.4-42.6 65.8-7.4 8.9-20.2 11.1-30.3 5.3l-29.1-16.8c-16 13.7-34.6 24.6-54.9 31.7v33.6c0 11.6-8.3 21.6-19.7 23.6-24.6 4.2-50.4 4.4-75.9 0-11.5-2-20-11.9-20-23.6V418c-20.3-7.2-38.9-18-54.9-31.7L74 403c-10 5.8-22.9 3.6-30.3-5.3-16.2-19.4-33.3-41.6-42.2-65.7-4-10.9.4-23.2 10.5-29.1l33.3-16.8c-3.9-20.9-3.9-42.4 0-63.4L12 205.8c-10.1-5.8-14.6-18.1-10.5-29 8.9-24.2 26-46.4 42.2-65.8 7.4-8.9 20.2-11.1 30.3-5.3l29.1 16.8c16-13.7 34.6-24.6 54.9-31.7V57.1c0-11.5 8.2-21.5 19.6-23.5 24.6-4.2 50.5-4.4 76-.1 11.5 2 20 11.9 20 23.6v33.6c20.3 7.2 38.9 18 54.9 31.7l29.1-16.8c10-5.8 22.9-3.6 30.3 5.3 16.2 19.4 33.2 41.6 42.1 65.8 4 10.9.1 23.2-10 29.1l-33.7 16.8c3.9 21 3.9 42.5 0 63.5zm-117.6 21.1c59.2-77-28.7-164.9-105.7-105.7-59.2 77 28.7 164.9 105.7 105.7zm243.4 182.7l-8.2 14.3c-3 5.3-9.4 7.5-15.1 5.4-11.8-4.4-22.6-10.7-32.1-18.6-4.6-3.8-5.8-10.5-2.8-15.7l8.2-14.3c-6.9-8-12.3-17.3-15.9-27.4h-16.5c-6 0-11.2-4.3-12.2-10.3-2-12-2.1-24.6 0-37.1 1-6 6.2-10.4 12.2-10.4h16.5c3.6-10.1 9-19.4 15.9-27.4l-8.2-14.3c-3-5.2-1.9-11.9 2.8-15.7 9.5-7.9 20.4-14.2 32.1-18.6 5.7-2.1 12.1.1 15.1 5.4l8.2 14.3c10.5-1.9 21.2-1.9 31.7 0l8.2-14.3c3-5.3 9.4-7.5 15.1-5.4 11.8 4.4 22.6 10.7 32.1 18.6 4.6 3.8 5.8 10.5 2.8 15.7l-8.2 14.3c6.9 8 12.3 17.3 15.9 27.4h16.5c6 0 11.2 4.3 12.2 10.3 2 12 2.1 24.6 0 37.1-1 6-6.2 10.4-12.2 10.4h-16.5c-3.6 10.1-9 19.4-15.9 27.4l8.2 14.3c3 5.2 1.9 11.9-2.8 15.7-9.5 7.9-20.4 14.2-32.1 18.6-5.7 2.1-12.1-.1-15.1-5.4l-8.2-14.3c-10.4 1.9-21.2 1.9-31.7 0zM501.6 431c38.5 29.6 82.4-14.3 52.8-52.8-38.5-29.6-82.4 14.3-52.8 52.8z"
                                            />
                                        </svg>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-2xl font-bold text-gray-600 mb-4">100+</h3>
                                    <h5 className="text-lg font-medium mb-4">Daily User</h5>
                                    <p className="text-gray-500">
                                        Libraries with a moderate user base and a more extensive range of resources might see a higher number of daily website users. This could range from a few hundred to a few thousand users per day.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div>


        </>
    )
}
