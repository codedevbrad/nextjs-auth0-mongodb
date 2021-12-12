import dbConnect from '../../../../utils/dbConnect';
import { PostFindALL, PostCreate } from '../../../database/servicePosts/controller.db';
import { getSession } from '@auth0/nextjs-auth0';

dbConnect();

export default async ( req, res ) => {
    switch (req.method) {
      case 'GET':
        let posts = await PostFindALL();
        res.status(200).json( posts );
        break
      case 'POST':
            try {
              const { title } = req.body;
              const session = getSession( req, res );
              let { sub } = session.user;
              let userId = JSON.stringify( sub.split('google-oauth2|').pop() );

              let post = await PostCreate({ title: title , data: 'data', userId: userId });

              console.log( post );

              res.status( 200 ).send( post );
            }
            catch ( err ) {
                console.log( 'error posting' );
                res.status( 500 ).send({ msg: 'error posting' });
            }
        break
      default:
        res.status(405).end() //Method Not Allowed
        break
    }
}
