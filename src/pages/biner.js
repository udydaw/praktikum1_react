import React from "react";
import "./style.css"

export default class Biner extends React.Component{
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
    hasilJumlahBiner = (e) => {
        e.preventDefault()
        let biner = this.state.biner
        let konversi = this.state.konversi

        let desimal = parseInt(biner, 2);
        let oktal = parseInt(biner, 2).toString(8);
        let heksadesimal = parseInt(biner, 2).toString(16);
    
        if (konversi === "desimal") {
            this.setState({
                hasil_biner : desimal
            })
        } else if (konversi === "oktal"){
            this.setState({
                hasil_biner : oktal
            })
        }
        else if (konversi === "heksadesimal")  {
            this.setState({
                hasil_biner : heksadesimal
            })
        } 
    }
    render(){
        return(
            <div className="container col-lg-8 col-sm-12">
                <div className="card mt-5">
                    <div className="card-header">
                        <h3 className="text-center">Konversi Bilangan Biner</h3>
                    </div>
                    <div className="card-body">
                    <form onSubmit={this.hasilJumlahBiner}>
                            <h5 className="mt-2">Biner</h5>
                            <input className='form-control' name='biner' onChange={this.changeState}/>
                            <h5 className="mt-2">Pilihan Konversi</h5>
                            <select class="form-select" name='konversi' onChange={this.changeState}>
                                <option selected></option>
                                <option value="desimal">Decimal</option>
                                <option value="oktal">Octal</option>
                                <option value="heksadesimal">Hexadecimal</option>
                            </select>
                            <button class="btn btn-md mt-2" type="submit">Hitung</button>
                        </form>
                        <h5 className="mt-4 text-center">Hasil </h5>
                        <div className="hasil">
                            <p>{this.state.hasil_biner}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}