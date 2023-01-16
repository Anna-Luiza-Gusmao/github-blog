import { HeaderSearchForm, SearchFormContainer, SearchFormInput } from "./styles"

export function SearchForm () {
    return (
        <SearchFormContainer>
            <HeaderSearchForm>
                <h1>Publicações</h1>
                <p>6 publicações</p>
            </HeaderSearchForm>
            <SearchFormInput>
                <input 
                    type="text"
                    placeholder="Buscar conteúdo"
                />
                <button type="submit" style={{'display': 'none'}}>Enviar</button>
            </SearchFormInput>
        </SearchFormContainer>
    )
}