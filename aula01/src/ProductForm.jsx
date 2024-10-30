import FormInput from "./FormInput"
import FormTextarea from "./FormTextarea"

const ProductForm = ({ handleChange, inputs, erros, isNew }) => {
  return (
    <>
      <div className="row">
        <div className="col-12 mb-3">
          <FormInput type="text" field="nome" label="Nome" value={inputs?.nome}
            onChange={handleChange} error={erros?.name} autofocus={true} />
        </div>
        <div className="col-12 mb-3">
          <FormInput type="number" field="preco" label="Preço" value={inputs?.preco}
            onChange={handleChange} error={erros?.name} />
        </div>
        <div className="col-12 mb-3">
          <FormTextarea field="descricao" label="Descrição" value={inputs?.descricao}
            onChange={handleChange} error={erros?.descricao} />
        </div>
        <div className="col-12 mb-3">
          <FormInput type="number" field="estoque" label="Estoque" value={inputs?.estoque}
            onChange={handleChange} error={erros?.estoque} />
        </div>
      </div>
    </>
  )
}

export default ProductForm