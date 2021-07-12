import './newproduct.css'

export default function NewProduct() {
    return (
        <div className="newProduct">
            <h1 className="addproductTitle">NewProduct</h1>
            <form  className="addProductForm">
                <div className="addProdItem">
                    <label>Image</label>
                    <input type="file" id="file" />
                </div>
                <div className="addProdItem">
                    <label>Name</label>
                    <input type="text" placeholder="Apple Airpod" />
                </div>
                <div className="addProdItem">
                    <label>Stock</label>
                    <input type="text" placeholder="123" />
                </div>
                <div className="addProdItem">
                    <label>Active</label>
                    <select name="active" id="active">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button className="addProdButton">Create</button>
            </form>
        </div>
    )
}
