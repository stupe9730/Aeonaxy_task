import { faBell, faCircleDown, faClock, faHand, faMessage, faPaste } from '@fortawesome/free-regular-svg-icons'
import { faBars, faBoxArchive, faCaretDown, faCaretRight, faCircleHalfStroke, faClose, faDiagramSuccessor, faLock, faSearch, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Home from './Home'
const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false)
    const [dropdown, setDropdown] = useState(true)
    console.log(sidebar);
    return <>
        {/*Notification start  */}
        <div className='bg-blue-700 text-center items-center  py-1 flex justify-between  text-white'>
            <p className='flex-grow text-[10px] md:text-sm'>Enable broser notifications to avoid missing out on important activity.</p>
            <div className='flex items-center  gap-1 md:gap-3'>
                <div className='flex gap-3 text-[5px]  md:text-sm  items-center bg-blue-600 p-1'>
                    <FontAwesomeIcon icon={faBell} />
                    <p >Enable notifications</p>
                </div>
                <FontAwesomeIcon className=' text-[10px] md:text-2xl' icon={faClose} />

            </div>
        </div>
        {/*Notification start  */}

        {/* sidebar left grid start  */}
        {/* <Sidebarcompo /> */}
        <div className="grid   md:grid-cols-12">
            <div className={`md:col-span-4 z-10 col-span-12 py-3bg-gray-200 ${sidebar ? "absolute bg-white" : "hidden"} md:inline-block`}>
                <div className='flex md:mx-6 mx-3 md:my-0 my-2 items-center justify-between'>
                    <div className='flex gap-3 justify-center items-center '>
                        <FontAwesomeIcon onClick={e => setSidebar(!sidebar)} className='md:hidden block' icon={faBars} />
                        <div className=' h-10 w-10  text-center'>
                            <div className='rounded-full bg-red-200 p-2'>
                                <FontAwesomeIcon icon={faDiagramSuccessor} />
                            </div>
                        </div>
                        <p className='font-boldf '>refero team</p>
                    </div>
                    <FontAwesomeIcon className=' ' icon={faBell} />
                </div>

                <div className='flex relative mx-3 my-2 items-center justify-between'>
                    <div className=" flex w-[90%]">
                        {/* Search Input */}
                        <input
                            type="text"
                            className="block w-[100%] py-2 pl-10 pr-1 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Ask you AI assistant"
                        />

                        {/* Search Icon */}
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FontAwesomeIcon icon={faHand} className='text-gray-400' />
                        </div>

                        {/* Side Button */}
                        <div className='p-2 rounded-md absolute right-[-5] bg-white shadow-md ms-2'>
                            <FontAwesomeIcon icon={faSearch} className='' />
                        </div>
                    </div>
                </div>


                <div className='mx-3 '>
                    <div className='bg-gray-400 px-2 py-2'>
                        <p className='text-xl'>Your team used 8/50 free docs</p>
                        <p className='text-sm text-gray-300'>Upgrade to create unliited docs</p>
                    </div>
                    <div className='ms-6'>
                        <div className='flex  items-center my-3 gap-2'>
                            <FontAwesomeIcon icon={faClock} />
                            <p>Catch Up</p>
                        </div>
                        <div className='flex  items-center my-3 gap-2'>
                            <FontAwesomeIcon icon={faMessage} />
                            <p>Discussions</p>
                        </div>
                        <h1 className='font-bold'>Favorites</h1>
                        <div className='flex  items-center my-3 gap-1'>
                            <p className='text-xl'>👋</p>
                            <p>Discussions</p>
                        </div>

                        <h1 className='font-bold'>My channels</h1>
                        <div className='flex flex-col justify-between h-[75vh]'>
                            <div>
                                <div onClick={e => setDropdown(!dropdown)} className='flex cursor-pointer gap-3 items-center'>
                                    {
                                        !dropdown ?
                                            <FontAwesomeIcon icon={faCaretRight} />
                                            : <FontAwesomeIcon icon={faCaretDown} />
                                    }
                                    <FontAwesomeIcon icon={faLock} />
                                    <p>My private channel</p>
                                </div>
                                {
                                    dropdown && <div className='flex  items-center my-3 gap-1 bg-blue-200 ps-3 '>
                                        <p className='text-xl'>👋</p>
                                        <p>Getting Started</p>
                                    </div>
                                }
                                <div className='flex gap-3 items-center my-3'>
                                    <FontAwesomeIcon icon={faCaretRight} />
                                    <FontAwesomeIcon icon={faPaste} />
                                    <p>Enginnering</p>
                                </div>
                                <div className='flex gap-3 items-center my-3'>
                                    <FontAwesomeIcon icon={faCaretRight} />
                                    <FontAwesomeIcon icon={faPaste} />
                                    <p>Product</p>
                                </div>

                            </div>
                            <div className=''>
                                <div className='flex gap-3 items-center my-3'>
                                    <FontAwesomeIcon icon={faUserPlus} />
                                    <p>Add people</p>
                                </div>
                                <div className='flex gap-3 items-center my-3'>
                                    <FontAwesomeIcon icon={faCircleHalfStroke} />
                                    <p>Templates</p>
                                </div>
                                <div className='flex gap-3 items-center my-3'>
                                    <FontAwesomeIcon icon={faCircleDown} />
                                    <p>Shared with me</p>
                                </div>
                                <div className='flex gap-3 items-center my-3'>
                                    <FontAwesomeIcon icon={faBoxArchive} />
                                    <p>Archive</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
            <div className='col-span-8'>
                <Home sidebar={sidebar} setSidebar={setSidebar} />
            </div>
        </div>
        {/* sidebar left grid start  */}

    </>
}

export default Sidebar