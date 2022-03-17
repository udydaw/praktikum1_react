import React from "react"
import "./style.css"
export default class Bank extends React.Component{
    constructor(){
        super()
        this.state = {
            nominal: 0,
            bunga: 0,
            periode: 0,
            totalbunga: 0,
            totalperiode: 0,
            hasil: 0
        }
    }
    changeState = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    hasilJumlah = (e) => {
        e.preventDefault()
        let nominal = this.state.nominal
        let bunga = this.state.bunga
        let periode = this.state.periode
        
        let hitungperiode = Number(nominal) / Number(periode)
        let hitungbunga = Number(hitungperiode) * Number(bunga/100)
        let hitung = Number(hitungbunga) + Number(hitungperiode)
        
        this.setState({
            totalbunga: hitungbunga,
            totalperiode: hitungperiode, 
            hasil: hitung
        })
    }
    render(){
        return(
            <div className="container col-lg-8 col-sm-12">
                <div className="card mt-5">
                    <div className="card-header">
                        <h3 className="text-center">Cicilan Bank</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.hasilJumlah}>
                            <h5 className="mt-2">Nominal</h5>
                            <input className='form-control' name='nominal' onChange={this.changeState}/>
                            <h5 className="mt-2">Bunga (%)</h5>
                            <input className='form-control' name='bunga' onChange={this.changeState}/>
                            <h5 className="mt-2">Periode</h5>
                            <select className="form-select" name='periode' onChange={this.changeState}>
                                <option selected></option>
                                <option value="1">1 Bulan</option>
                                <option value="2">2 Bulan</option>
                                <option value="3">3 Bulan</option>
                                <option value="4">4 Bulan</option>
                                <option value="5">5 Bulan</option>
                                <option value="6">6 Bulan</option>
                                <option value="7">7 Bulan</option>
                                <option value="8">8 Bulan</option>
                                <option value="9">9 Bulan</option>
                                <option value="10">10 Bulan</option>
                                <option value="11">11 Bulan</option>
                                <option value="12">12 Bulan</option>
                            </select>
                            <button className="btn btn-md mt-2" type='submit'>Hitung</button>
                        </form>
                        <h5 className="mt-4 text-center">HASIL</h5>
                        <div className="hasil mt-2">
                            <p>Nominal : {this.state.nominal}</p>
                            <p>Bunga : {this.state.bunga}</p>
                            <p>periode : {this.state.periode}</p>
                            <p>totalbunga: {this.state.totalbunga}</p>
                            <p>Hasil : {this.state.hasil}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}