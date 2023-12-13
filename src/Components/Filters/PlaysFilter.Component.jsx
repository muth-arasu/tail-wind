import { Disclosure } from '@headlessui/react'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'


const PlaysFilter=(props) =>{
  return (
    <>
    
    <Disclosure >
     {
      ({open})=>{
          return (<>
           <Disclosure.Button className="py-2 flex  items-center bg-white  rounded-t-lg">     
            <span className='w-6 h-6'>{open?<BiChevronUp className='w-full h-full'/>:<BiChevronDown className='w-full h-full'/>}</span>
           <h3 className={open?"text-red-600 text-xl":"text-grap-700 text-xl"}> {props.title}</h3> 
      </Disclosure.Button>
      <Disclosure.Panel className="text-gray-500 flex flex-wrap bg-white p-6 -mt-6 rounded-b-lg">
          <div className='flex flex-wrap gap-3'>
            {
              props.tags.map((tag)=><>
              <div className=' border-2 border-gray-400 px-3 py-1 rounded-lg'>
            <span className='text-red-400 text-lg'>{tag}</span>
            </div>
              </>
              )
            }
          </div>
        
      </Disclosure.Panel>
          </>)
      }
    }
    </Disclosure>
   
    </>
  )
}
export default PlaysFilter