import { faFloppyDisk } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function SaveMyArticle(){
    const onSaveClick=()=> {
        
    }

    return (
        <div id="saveMyArticle" style={{
            display:"grid",
            alignItems:"center",
            padding:"100px 300px"
        }}>
            <input type="text" name="title" placeholder="Title" />
            <textarea name="content"
            style={{
                height:"300px"
            }}
            placeholder="content"></textarea>
            <input type="text" name="createdOn" value={Date()}/>
            <button onClick={onSaveClick} ><FontAwesomeIcon icon={faFloppyDisk} /></button>
        </div>
    )
}
export default SaveMyArticle;