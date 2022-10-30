import './Formulario.css';
import CampoTexto from '../CampoTexto';
import { MultiSelect } from '../MultiSelect';
import Botao from '../Botao';

export const Formulario = () => {

    const aoSalvar = (evento) => {
        evento.preventDefault();
     }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Realize seu sonho de viajar o mundo conosco</h2>
                <CampoTexto 
                label="Nome" 
                placeholder="Nome Completo" 
                obrigatorio={true}/>
                <CampoTexto 
                label="E-mail" 
                placeholder="nome@gmail.com" 
                obrigatorio={true}/>
                <CampoTexto 
                label="Número" 
                placeholder="(16)9 9999-8888" 
                obrigatorio={true}/>
                <CampoTexto 
                label="CPF" 
                placeholder="123.456.789-10" 
                obrigatorio={true}/>
                <MultiSelect />
                <Botao>
                    Enviar
                </Botao>
            </form>
        </section>
    )
}