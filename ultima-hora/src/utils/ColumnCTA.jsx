

//además del contenido, le pasamos la altura y anchura en formato css standard, por ejemplo: {`${5/7*100}%`}
export function ColumnCTA({image, section, author, title, content, heightPassed, widthPassed}){


    return <div style={{height:heightPassed, width:widthPassed}} className=' min-h-110 md:min-h-0 sm:max-h-90 sm:min-h-90 md:max-h-70 lg:max-h-300 relative bg-stone-100 border-2 border-stone-400 '>
    
                    <img className='h-3/5 lg:h-1/3  w-300 object-cover' src={image} alt="" />
                    <div className='absolute  bottom-0 h-3/4 w-full flex justify-center'>
                    <div className='bg-stone-100 overflow-hidden px-2 w-4/5 h-full text-center py-2'>
                    <h1 className='font-extrabold text-lg tracking-widest'>{section}</h1>
                    <h2 className='font-bold text-sm tracking-widest'>{author}</h2>
                    <h3 className='font-extrabold text-xl  pt-5 mb-5'>{title}</h3>
                    <h4 className=' w-full text-stone-700  font-normal text-sm  '>{content} </h4>
    
    
             </div>
             </div>
             </div>

}