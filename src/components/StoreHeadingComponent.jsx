"use client"

import PageTitleComponent from '../components/PageTitleComponent';
// import { useBearStore } from '@/store/store'

const StoreHeadingComponent = () => {

  // const bears = useBearStore(state => state.bears);
  // const increaseBear = useBearStore(state => state.increaseBear);

  return (
    <div className="mx-auto max-w-6xl">
        <PageTitleComponent text="Get NBA Goats Stickers!" />
        <p className="max-w-xl text-center px-2 mx-auto text-base text-gray-600">
            Times are tough. Liven up your home with some NBA Goats Stickers. ⛹️‍♂️ 
            {/* There are {bears} */}
        </p>
        {/* <button onClick={increaseBear} className="bg-palette-primary text-white font-primary font-normal py-2 px-4 rounded-full mx-auto mt">
          Add Bear
        </button> */}
    </div>
    
  )
}

export default StoreHeadingComponent