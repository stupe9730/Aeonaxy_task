import { faMessage, faPaste, faPenToSquare, } from '@fortawesome/free-regular-svg-icons'
import { faBars, faChevronLeft, faChevronRight, faEllipsisVertical, faLightbulb, faLock, faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import docsimg from './Texteditor.png';
const Home = ({ sidebar, setSidebar }) => {
    console.log(sidebar);
    return <>
        <div className='w-full'>
            <div className='flex mx-3 mt-2 gap-5 items-center justify-between'>
                <div className='flex gap-5 items-center '>
                    <FontAwesomeIcon onClick={e => setSidebar(!sidebar)} className='md:hidden block' icon={faBars} />
                    <FontAwesomeIcon icon={faPaste} />
                    <FontAwesomeIcon icon={faChevronLeft} />
                    <FontAwesomeIcon icon={faChevronRight} />
                    <div className='md:flex hidden  gap-3 items-center'>
                        <FontAwesomeIcon icon={faLock} />
                        <p>My private channel / 👋 Getting started</p>
                    </div>
                </div>
                <div className='flex items-center gap-4'>
                    <p>Share</p>
                    <FontAwesomeIcon icon={faMessage} />
                    <FontAwesomeIcon icon={faStar} className='text-yellow-500' />
                    <FontAwesomeIcon icon={faEllipsisVertical} />
                </div>
            </div>
            <div className='md:mx-20 mx-5 my-6'>
                <h1 className='text-4xl font-bold '>Getting Started</h1>
                <div className='bg-gray-300 my-6 p-3 flex gap-2'>
                    <FontAwesomeIcon icon={faLock} />
                    <div>
                        <p>This doc is in Your <span className='font-bold'>private channel,</span>Where you can store your private work. You can share docs one by one from here. but to properly organize your team's knowledge base, use <span className='font-bold'>workspace channels.</span></p>
                        <p className='mt-5'>You can make channels <span className='font-bold'>public</span>to make all docs visible to everyone on the team, or <span className='font-bold'>private</span>if you want the channel's docs to only be visible by a selection of teammates.</p>
                    </div>
                </div>
                <p className='text-3xl font-bold mt-10 mb-6 block'>Collaborate with your team with these three features</p>
                <div className='flex items-center gap-2 my-3'>
                    <FontAwesomeIcon icon={faPenToSquare} />
                    <p className='font-bold text-xl'>Docs</p>
                </div>
                <div className='flex flex-col lg:flex-row  lg:gap-0 gap-4 bg-blue-200 p-4 items-center'>
                    <div>
                        <div className='bg-blue-300 rounded-lg inline-block p-1 my-2'>DOCS</div>
                        <p>Create docs to collaborate with your team. Type <span className='bg-blue-300 font-bold'>/</span> to discover Slite's editor tools and bring your docs to life.</p>
                    </div>
                    <img height={250} width={250} src={docsimg} alt="" />
                </div>
                <div>
                    <div className=' relative mx-auto my-3'>
                        <input type="text" className="w-full  border-2 bg-transparent rounded-sm md:py-4 py-2 pl-10 pr-4 outline-none" placeholder="Give it a go by typing / below" />
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <FontAwesomeIcon icon={faLightbulb} className="text-yellow-600" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>


}

export default Home