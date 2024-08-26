import "./form.css";
import { useState } from "react";

const Form = () => {
    const initialForm = {
        nome: "",
    }

    const [formState, setFormState] = useState(initialForm)

    const handleInput = (event) => {
        const target = event.currentTarget;

        const { value, name } = target;

        setFormState({ ...formState, [name]: value })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formState.nome);

        setFormState({ ...initialForm })
    }
    return (
        <div className="containerForm">
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="form__group_one">
                        <h1>Cadastro de Paciente</h1>
                        <label htmlFor="nome">Register your name:</label>
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            value={formState.nome}
                            onChange={handleInput}
                            class="input"
                            placeholder="Insert here..."
                        />
                    </div>
                    <div className="form__group_one">
                        <button type="submit" class="text">
                            <span>
                                <b>
                                    Enviar
                                </b>
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;