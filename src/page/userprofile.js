import React from 'react';
import Userprofile from '../component/userprofile';
import Photolist from '../component/photolist'
const userprofile=(props)=>{
    return(
        <div>
            <Userprofile id={props.match.params.id}/>
            <Photolist id={props.match.params.id}/>

        </div>
    )
}
export default userprofile;
