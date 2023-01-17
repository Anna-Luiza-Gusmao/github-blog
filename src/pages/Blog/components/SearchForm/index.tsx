import { useContext } from "react"
import { HeaderSearchForm, SearchFormContainer, SearchFormInput } from "./styles"
import { IssuesContext } from "../../../../context/IssuesContext"

export function SearchForm () {
    const { issuesData } = useContext(IssuesContext)

    return (
        <SearchFormContainer>
            <HeaderSearchForm>
                <h1>Publicações</h1>
                <p>{issuesData.length} publicações</p>
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