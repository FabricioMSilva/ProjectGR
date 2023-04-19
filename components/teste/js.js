
import Materiais from '../pages/api/Materiais.json'

function recebeDados() {
    fetch({ Materiais })
        .then(res => res.json())
        .then(result => this.setMatTudo({ result }))
        .catch(err => err);
    console.log(MatTudo)
}
recebeDados()
