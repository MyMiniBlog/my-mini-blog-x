
function SaveMyArticle(){
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
        </div>
    )
}
export default SaveMyArticle;