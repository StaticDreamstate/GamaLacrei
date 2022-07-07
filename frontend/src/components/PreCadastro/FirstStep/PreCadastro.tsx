import Select from 'react-select'
import { DropStyled } from './FirstStyle';
interface IDropDown {
    label: string;
    value: number;
}

export default function PreCadastro() {

    const options: Array<IDropDown> = [
        { value: 0, label: 'São Paulo' },
        { value: 1, label: 'Rio de Janeiro' },
        { value: 2, label: 'Acre' },
        { value: 3, label: 'Alagoas' },
        { value: 4, label: 'Amazonas' },
        { value: 5, label: 'Bahia' },
        { value: 6, label: 'Ceará' },
        { value: 7, label: 'Espírito Santo' },
        { value: 8, label: 'Goiás' },
        { value: 9, label: 'Maranhão' },
        { value: 10, label: 'Mato Grosso' },
        { value: 11, label: 'Mato Grosso do Sul' },
        { value: 12, label: 'Minas Gerais' },
        { value: 13, label: 'Pará' },
        { value: 14, label: 'Paraíba' },
        { value: 15, label: 'Paraná' },
        { value: 16, label: 'Rio Grande do Norte' },
        { value: 17, label: 'Rio Grande do Sul' },
        { value: 18, label: 'Pernambuco' },
        { value: 19, label: 'Rondônia' },
        { value: 20, label: 'Santa Catarina' },
        { value: 21, label: 'Sergipe' },
        { value: 22, label: 'Tocantins' },
        { value: 23, label: 'Distrito Federal' },
        { value: 24, label: 'Amapá' },
    ];

    return (
        <>
            <DropStyled>
                <form action="">
                    <div className="field">
                        <Select options={options} placeholder='Selecione um Estado' />
                    </div>
                    <div className="btnCentralizar">
                        <div className="actions">
                            <button type="submit">Continuar</button>
                        </div>
                    </div>
                </form>
            </DropStyled>
        </>




    );



}