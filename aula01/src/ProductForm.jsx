const ProductForm = ({ handleChange, inputs, erros, isNew}) => {
  return (
    <>
        <div className="row">
            <div className="form-floating">
                <input type="text" className="form-control" id="productName" placeholder="" 
                id="nome" name="nome" value={inputs?ProductForm.value} />
                <label htmlFor="nome">Nome</label>
                {erros?.nome && <div className="invalid-feedback">{erros?.nome}</div>}
            </div>
        </div>
    </>
  )
}

export default ProductForm