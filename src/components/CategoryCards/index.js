import './style.css'
function CategoryCards () {
    return(
        <div id="category-cards">
            <div className="category-cards">
                <h4>Rankeada</h4>
                <i class='bx bx-trending-up' ></i>
            </div>
            <div className="category-cards">
                <h4>Duelo 1x1</h4>
                <i class='bx bxl-ok-ru' ></i>
            </div>
            <div className="category-cards">
                <h4>Diversão</h4>
                <i class='bx bx-cool' ></i>
            </div>
        </div>
    )
}

export default CategoryCards