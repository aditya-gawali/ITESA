import React, { useState } from 'react'
import { useNavigate  } from 'react-router-dom';
const Form = () => {




    // let name, email, mob, pos, git, linkedin, link, que = "";


    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setMobile] = useState("");
    const [pos, setPos] = useState("");
    const [git, setGit] = useState("");
    const [linkedin, setLinkedIn] = useState("");
    const [link, setLink] = useState("");
    const [que, setQue] = useState("");
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();



        const response = await fetch("https://itesa-server.onrender.com/api/join", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, mobile, pos, git, linkedin, link, que })
        });

        if (response.ok) {
            console.log('Task Added Successfully');
            navigate('/');
            
        } else {
            console.error('Failed to Add Task');
        }

        


    }



    return (


        <div className='w-full min-h-[100vh] text-white flex items-center justify-start flex-col gap-4 font-[neue] mt-20 md:mt-32 mb-10'>
            <div className='w-[90vw] md:w-[40vw] text-white bg-opacity-30 backdrop-blur-sm p-4 flex gap-4 flex-col'>
                <h1 className='text-2xl pb-6'>Join Us</h1>
                <form onSubmit={submitHandler} className='flex flex-col gap-6 px-2'>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-sm text-white'>Name</h1>
                        <input type="text"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                            required
                            className='w-full bg-transparent outline-none border-b border-gray-500' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-sm text-white'>Email</h1>
                        <input type="email" value={email} required
                            onChange={(e) => { setEmail(e.target.value) }} className='w-full bg-transparent outline-none border-b border-gray-500' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-sm text-white'>Mobile</h1>
                        <input type="text" value={mobile} required
                            onChange={(e) => { setMobile(e.target.value) }} className='w-full bg-transparent outline-none border-b border-gray-500' />
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-sm text-white'>Position interested in</h1>
                        <select
                            id="options"
                            name="options"
                            value={pos}
                            required
                            onChange={(e) => { setPos(e.target.value) }}
                            className="w-full bg-transparent outline-none border-b border-gray-500 text-xs pb-1"
                        >
                            <option value="" disabled className="bg-[#0c0c0c] bg-opacity-30 backdrop-blur-sm text-black">
                                Choose an option...
                            </option>
                            <option value="Technical" className="bg-[#0c0c0c] text-black bg-opacity-30 backdrop-blur-sm">Technical Coordinator</option>
                            <option value="PR" className="bg-[#0c0c0c] text-black bg-opacity-30 backdrop-blur-sm">PR Coordinator</option>
                            <option value="Design" className="bg-[#0c0c0c] text-black bg-opacity-30 backdrop-blur-sm">Design Coordinator</option>
                            <option value="Management" className="bg-[#0c0c0c] text-black bg-opacity-30 backdrop-blur-sm">Management Coordinator</option>
                            <option value="Photography" className="bg-[#0c0c0c] text-black bg-opacity-30 backdrop-blur-sm">Photography Coordinator</option>
                            <option value="Editing" className="bg-[#0c0c0c] text-black bg-opacity-30 backdrop-blur-sm">Editing Coordinator</option>
                            <option value="Sports" className="bg-[#0c0c0c] text-black bg-opacity-30 backdrop-blur-sm">Sports Coordinator</option>
                            <option value="Cultural" className="bg-[#0c0c0c] text-black bg-opacity-30 backdrop-blur-sm">Cultural Coordinator</option>
                            <option value="Documentation" className="bg-[#0c0c0c] text-black bg-opacity-30 backdrop-blur-sm">Documentation Coordinator</option>
                            <option value="Meme" className="bg-[#0c0c0c] text-black bg-opacity-30 backdrop-blur-sm">Meme Content Coordinator</option>

                        </select>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-sm text-white'>GitHub profile (For Technical member)</h1>
                        <input type="text" value={git}
                            onChange={(e) => { setGit(e.target.value) }} className='w-full bg-transparent outline-none border-b border-gray-500' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-sm text-white'>LinkedIn Profile</h1>
                        <input type="text" value={linkedin}
                            onChange={(e) => { setLinkedIn(e.target.value) }} className='w-full bg-transparent outline-none border-b border-gray-500' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-sm text-white'>Relevant Links (Work done related to the selected domain)
                        </h1>
                        <input type="text" value={link}
                            onChange={(e) => { setLink(e.target.value) }} className='w-full bg-transparent outline-none border-b border-gray-500' />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <h1 className='text-sm text-white'>What would you do if you get selected as a member in ITESA?</h1>
                        <input type="text" value={que} required
                            onChange={(e) => { setQue(e.target.value) }} className='w-full bg-transparent outline-none border-b border-gray-500' />
                    </div>

                    <button className='w-[20vw] p-2 md:w-[10vw] bg-[#27E0B3] rounded-sm text-black text-sm font-[neue] font-bold'>Submit </button>

                </form>
            </div>
        </div>
    )
}

export default Form
