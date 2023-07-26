import { API } from '@/global/config/api'

export const getCategorias = async () => {
    try {
        const data = await API.get(
            '/categories?page[limit]=40&sort=-total_media_count'
        )

        if (data) {
            return data
        }

        return new Error('Erro ao listar todos os personagens')
    } catch (error) {
        return new Error('Erro ao listar todos os personagens')
    }
}
