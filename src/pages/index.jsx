import { useContext } from 'react';
import Link from 'next/link';
import { useSharedContext } from '../contexts/shared';

export default function Home ( ) {
    const [clickAmount, increment] = useSharedContext();
    return (
         <div>
                 <div onClick={( ) => increment( ) }> increment </div>
                 <div> { clickAmount } </div>
                <Link href='/posts'> go to posts </Link>
         </div>
    )
 }