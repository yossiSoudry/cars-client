'use client'
import { ShowMoreProps } from '@/types'
import { useRouter } from 'next/navigation'
import React from 'react'
import Button from './Button'
import { updateSearchParams } from '@/utils'

const ShowMore = ({ pageNumber, isNext}: ShowMoreProps) => {
    const router = useRouter()
    const handleNavigation = () => {
        const newLimit = (pageNumber + 1)*10;
        const newPathName = updateSearchParams('limit',`${newLimit}` )
        router.push(newPathName)
    }
  return (
    <div className='w-full center gap-5 mt-10' id='scloll'>
        {!isNext && (
            <Button 
                title='הצג עוד'
                btnType='button'
                styles='bg-primary-blue rounded-full text-white' 
                handleClick={handleNavigation}
                
            />
        )}
    </div>
  )
}

export default ShowMore