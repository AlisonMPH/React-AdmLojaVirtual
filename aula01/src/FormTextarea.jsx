const FormTextarea = ({ field, onChange, label, value, error, autofocus = false }) => {
    return (
        <>
            <div className="form-floating">
                <textarea className={`form-control $error ? 'is-invalid' : 'is-valid'}`}
                    placeholder=" " id={field} name={field} onChange={onChange}
                    autofocus={autofocus} style="height:3rem">value={value || ""}</textarea>
                <label htmlFor={field}>{label}</label>
            </div>
            {error && <div className="invalid-feedback">{error}</div>}
        </>
    )
}

export default FormTextarea