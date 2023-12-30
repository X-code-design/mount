import Navbar from '../componentes/Navbar'
import { useBodyScroll, Button } from '@geist-ui/core'
import { SlidersHorizontal, Plus } from 'lucide-react'

function News() {
    
    const [hidden, setHidden] = useBodyScroll()
    
    function toggleScroll(state) {
        setHidden(state)
    }

    return (
        <>
            <Navbar toggleScroll={toggleScroll} />
            <div className='content'>
                <h2>News</h2>
                <Button icon={<SlidersHorizontal />}>Filter</Button>
                <Button type="secondary" icon={<Plus />}>Post</Button>
            </div>
        </>
    )
}

export default News