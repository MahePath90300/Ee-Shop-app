import "../Category/Category.css"
function Category({img,title}){
    return <div className="category">
        <img src={img} width="60" height="60"/>
        <h4>{title}</h4>
    </div>
}
export default Category;