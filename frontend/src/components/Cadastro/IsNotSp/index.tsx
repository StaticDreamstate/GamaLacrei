

export default function isNotSp() {
    return (
        <><div>
            <p>
                Ainda não atuamos em seu Estado. 
                Preencha as informações abaixo para entrar na lista de espera e ser
                comunicada da implementação em seu Estado.
            </p>
            <form action="#" >
                <div className="field">
                    <label htmlFor="name">Estado de atuação *</label>
                    <input type="search" name="estado" id="estado" value={'São Paulo'} disabled />
                </div>
            </form>
        </div>
        </>
    );
}