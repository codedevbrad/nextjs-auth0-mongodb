import { SharedProvider } from '../contexts/shared';
import { UserProvider } from '@auth0/nextjs-auth0';

import '../../styles/globals.css';

function MyApp({ Component, pageProps }) {
    return (
      <SharedProvider>
          <UserProvider>
              <Component {...pageProps} />
          </UserProvider>   
      </SharedProvider>
    )
}

export default MyApp; 
