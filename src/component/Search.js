import React, {useState} from 'react';


function Search(props){

    const{ onsearch }= props;

    const[textsearch,settextsearch] = useState("");

    const hendelInput=(event)=>{
        const text = event.target.value
        settextsearch(text)
        console.log(text);

    }
    const hendelEnterKeyPressed = (event) =>{
       if(event.key==="Enter"){
        onsearch(textsearch)
        console.log(textsearch);
       }

    }
    return ( 
        <>
        <h1>chuthamat</h1>
        <input 
        className="search" 
        type="text"
        onChange={hendelInput}
        onKeyPress={hendelEnterKeyPressed} 
        value={textsearch} 
        placeholder="Search photos" 
        />
       </>

)
}
export default Search;