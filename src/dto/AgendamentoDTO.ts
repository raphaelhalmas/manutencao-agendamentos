class AgendamentoDTO {
    id: string;    
    barbeiro: string;    
    data: Date;

    constructor({ id, barbeiro, data }: AgendamentoDTO){
        this.id = id;
        this.barbeiro = barbeiro;
        this.data = data;
    }
}

export default AgendamentoDTO;