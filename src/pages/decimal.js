import React from "react"
import "./style.css"
export default class Decimal extends React.Component{
    constructor(){
        super()
        this.state = {
            desimal: 0,
            biner: 0,
            oktal: 0,
            heksadesimal: 0,
            konversi: "",
            hasil_desimal: 0,
            hasil_biner: 0,
            hasil_oktal: 0,
            hasil_heksadesimal: 0
        }
    }
    changeState = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    hasilJumlahDesimal = (e) => {
        e.preventDefault()
        let desimal = this.state.desimal
        let konversi = this.state.konversi

        let biner = parseInt(desimal).toString(2);
        let oktal = parseInt(desimal).toString(8);
        let heksadesimal = parseInt(desimal).toString(16);
    
        if (konversi === "biner") {
            this.setState({
                hasil_desimal : biner
            })
        } else if (konversi === "oktal"){
            this.setState({
                hasil_desimal : oktal
            })
        }
        else if (konversi === "heksadesimal")  {
            this.setState({
                hasil_desimal : heksadesimal
            })
        } 
    }
    render(){
        return(
            <div className="container col-lg-8 col-sm-12">
                <div className="card mt-5">
                    <div className="card-header">
                        <h3 className="text-center">Konversi Bilangan Decimal</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.hasilJumlahDesimal}>
                            <h5>Desimal</h5>
                            <input className='form-control' name='desimal' onChange={this.changeState}/>
                            <h5>Pilihan Konversi</h5>
                            <select class="form-select" name='konversi' onChange={this.changeState}>
                                <option selected></option>
                                <option value="biner">Biner</option>
                                <option value="oktal">Octal</option>
                                <option value="heksadesimal">Hexadecimal</option>
                            </select>
                            <br/>
                            <button class="btn btn-md" type="submit">Hitung</button>
                        </form>
                        <h5 className="mt-4 text-center">Hasil </h5>
                        <div className="hasil">
                            <p>{this.state.hasil_desimal}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}