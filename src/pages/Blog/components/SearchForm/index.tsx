import { useContext } from "react"
import { HeaderSearchForm, SearchFormContainer, SearchFormInput } from "./styles"
import { IssuesContext } from "../../../../context/IssuesContext"
import { useForm } from "react-hook-form"
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormSchema = z.object({
    query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

export function SearchForm () {
    const { issuesData, searchIssues } = useContext(IssuesContext)

    const { 
        register, 
        handleSubmit,
        reset
    } = useForm<SearchFormInputs>({
        resolver: zodResolver(searchFormSchema)
    })

    async function handleSearchIssues (data: SearchFormInputs) {
        await searchIssues(data.query)
        reset()
    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchIssues)}>
            <HeaderSearchForm>
                <h1>Publicações</h1>
                <p>{issuesData.length} publicações</p>
            </HeaderSearchForm>
            <SearchFormInput>
                <input 
                    type="text"
                    placeholder="Buscar conteúdo"
                    {...register('query')}
                />
                <button type="submit" style={{'display': 'none'}}>Enviar</button>
            </SearchFormInput>
        </SearchFormContainer>
    )
}