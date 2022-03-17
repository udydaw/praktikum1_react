import React from "react";
import "./style.css"

export default class Octal extends React.Component{
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
    hasilJumlahOktal = (e) => {
        e.preventDefault()
        let oktal = this.state.oktal
        let konversi = this.state.konversi

        let desimal = parseInt(oktal, 8);
        let biner = parseInt(oktal, 8).toString(2);
        let heksadesimal = parseInt(oktal, 8).toString(16);
        
        if (konversi === "desimal") {
            this.setState({
                hasil_oktal : desimal
            })
        } else if (konversi === "biner"){
            this.setState({
                hasil_oktal : biner
            })
        }
        else if (konversi === "heksadesimal")  {
            this.setState({
                hasil_oktal : heksadesimal
            })
        } 
    }
    render(){
        return(
            <div className="container col-lg-8 col-sm-12">
                <div className="card mt-5">
                    <div className="card-header">
                        <h3 className="text-center">Konversi Bilangan Octal</h3>
                    </div>
                    <div className="card-body">
                    <form onSubmit={this.hasilJumlahOktal}>
                            <h5 className="mt-2">Octal</h5>
                            <input className='form-control' name='oktal' onChange={this.changeState}/>
                            <h5 className="mt-3">Pilihan Konversi</h5>
                            <select class="form-select" name='konversi' onChange={this.changeState}>
                                <option selected></option>
                                <option value="desimal">Decimal</option>
                                <option value="biner">Biner</option>
                                <option value="heksadesimal">Hexadecimal</option>
                            </select>
                            <button class=" mt-2 btn btn-md" type="submit">Hitung</button>
                        </form>
                        <h5 className=" mt-4 text-center">Hasil </h5>
                        <div className="hasil">
                            <p>{this.state.hasil_oktal}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}