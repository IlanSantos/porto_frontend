import {Routes, Route} from 'react-router-dom'
import NovoConteiner from './pages/conteiner/NovoConteiner'
import AtualizaConteiner from './pages/conteiner/AtualizaConteiner'
import BuscaConteiner from './pages/conteiner/BuscaConteiner'
import DeletaConteiner from './pages/conteiner/DeletaConteiner'

import NovaMovimentacao from './pages/movimentacao/NovaMovimentacao'
import BuscaMovimentacao from './pages/movimentacao/BuscaMovimentacao'
import AtualizaMovimentacao from './pages/movimentacao/AtualizaMovimentacao'
import DeletarMovimentacao from './pages/movimentacao/DeletaMovimentacao'
import RelatorioMovimentacao from './pages/movimentacao/RelatorioMovimentacao'


const Router = () => {

    return (
        <Routes>
            <Route path="/conteiner/novo" element={<NovoConteiner />} />
            <Route path="/conteiner/atualizar" element={<AtualizaConteiner />} />
            <Route path="/conteiner/buscar" element={<BuscaConteiner />} />
            <Route path="/conteiner/deletar" element={<DeletaConteiner />} />

            <Route path="/movimentacao/novo" element={<NovaMovimentacao />} />
            <Route path="/movimentacao/buscar" element={<BuscaMovimentacao />} />
            <Route path="/movimentacao/atualizar" element ={<AtualizaMovimentacao />} />
            <Route path="/movimentacao/deletar" element ={<DeletarMovimentacao />} />

            <Route path="movimentacao/relatorio" element={<RelatorioMovimentacao />} />
        </Routes>
    )

}


export default Router

