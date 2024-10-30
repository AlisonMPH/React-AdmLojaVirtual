import FormInput from "./FormInput"

const ProductForm = ({ handleChange, inputs, erros, isNew}) => {
  return (
    <>
        <div className="row">
            <div className="col-12 mb-3">
                <FormInput type="text" field="nome" label="Nome" value={inputs?.nome} 
                onChange={handleChange} error={erros?.name} autofocus={true} />
            </div>
        </div>
    </>
  )
}

export default ProductForm