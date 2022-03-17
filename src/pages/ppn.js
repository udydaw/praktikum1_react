import React from "react"

export default class Ppn extends React.Component{
    constructor(){
        super()
        this.state = {
            hargaAwal: 0,
            PPN: 0,
            diskon: 0,
            totalPPN: 0,
            totaldisc: 0,
            hasil: 0,
        }
    }
    changeState = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    // => arrow function 
    hasilJumlah = (e) => {
        e.preventDefault()
        let hargaAwal = this.state.hargaAwal
        let PPN = this.state.PPN
        let diskon = this.state.diskon

        let hitungPPN = Number(hargaAwal) * Number(PPN/100)
        let hitungdisc = Number(hargaAwal) * Number(diskon/100)
        let hitung = Number(hargaAwal) + Number(hitungPPN) - Number(hitungdisc)
        
        this.setState({
            totalPPN: hitungPPN,
            totaldisc: hitungdisc, 
            hasil: hitung
        })
    }
    render(){
        return(
            <div className=" container col-lg-8 col-sm-12 mt-5">
                <div className="card">
                    <div className="card-header">
                        <h3 className="text-center">Hitung Harga Akhir</h3>
                    </div>
                    <div className="card-body">
                        <form onSubmit={this.hasilJumlah}>
                            <h5 className="mt-2">Harga Awal</h5>
                            <input className='form-control' name='hargaAwal' onChange={this.changeState}/>
                            <h5 className="mt-2">PPN (%)</h5>
                            <input className='form-control' name='PPN' onChange={this.changeState}/>
                            <h5 className="mt-2">Diskon (%)</h5>
                            <input className='form-control' name='diskon' onChange={this.changeState}/>
                            <button class="btn btn-md mt-2" type="submit">Hitung</button>
                        </form>
                        <h5 className="text-center">Harga Akhir </h5>
                        <div className="hasil ">
                            <p className="text-center">{this.state.hasil}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}