class AgendamentoDTO {
    id: string;    
    prestadorServico: string;    
    data: Date;

    constructor({ id, prestadorServico, data }: AgendamentoDTO){
        this.id = id;
        this.prestadorServico = prestadorServico;
        this.data = data;
    }
}

export default AgendamentoDTO;