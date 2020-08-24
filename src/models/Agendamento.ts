import { uuid } from 'uuidv4';

class Agendamento {
    id: string;    
    prestadorServico: string;    
    data: Date;

    constructor({ prestadorServico, data }: Omit<Agendamento, 'id'>){
        this.id = uuid();
        this.prestadorServico = prestadorServico;
        this.data = data;
    }
}

export default Agendamento;