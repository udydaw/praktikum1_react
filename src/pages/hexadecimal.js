import React from "react";
import "./style.css"

export default class Hexadecimal extends React.Component{
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
    hasilJumlahHeksadesimal = (e) => {
        e.preventDefault()
        let heksadesimal = this.state.heksadesimal
        let konversi = this.state.konversi

        let desimal = parseInt(heksadesimal, 16);
        let biner = parseInt(heksadesimal, 16).toString(2);
        let oktal = parseInt(heksadesimal, 16).toString(8);
        
        if (konversi === "desimal") {
            this.setState({
                hasil_heksadesimal : desimal
            })
        } else if (konversi === "biner"){
            this.setState({
                hasil_heksadesimal : biner
            })
        }
        else if (konversi === "oktal")  {
            this.setState({
                hasil_heksadesimal : oktal
            })
        } 
    }
    render(){
        return(
            <div className="container col-lg-8 col-sm-12">
                <div className="card mt-5">
                    <div className="card-header">
                        <h3 className="text-center">Konversi Bilangan Hexadecimal</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.hasilJumlahHeksadesimal}>
                            <h5 className="mt-2">Hexadecimal</h5>
                            <input className='form-control' name='heksadesimal' onChange={this.changeState}/>
                            <h5 className="mt-2">Pilihan Konversi</h5>
                            <select class="form-select" name='konversi' onChange={this.changeState}>
                                <option selected></option>
                                <option value="desimal">Decimal</option>
                                <option value="biner">Biner</option>
                                <option value="oktal">Octal</option>
                            </select>
                            <button class="mt-2 btn btn-md" type="submit">Hitung</button>
                        </form>
                        <h5 className=" mt-4 text-center">Hasil </h5>
                        <div className="hasil">
                            <p>{this.state.hasil_heksadesimal}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}