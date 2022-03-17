import React from "react";
import "./style.css"
export default class Bmi extends React.Component {
    constructor(){
        super()
        this.state = {
            berat: 0,
            tinggi: 0,
            hasil: 0,
            status: ""
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
        let berat = this.state.berat
        let tinggi = this.state.tinggi
        let hasil = Number(berat) / (parseFloat(tinggi) * parseFloat(tinggi));
        this.setState({
            hasil: hasil
        })
        // let hasil = this.state.hasil
        if (hasil <= 18.5) {
            this.setState({
                status: "kekurangan berat badan"
            })
        } else if (hasil >= 18.5 && hasil <= 24.9){
            this.setState({
                status: "normal"
            })
        }
        else if (hasil >= 25.9 && hasil <= 29.9)  {
            this.setState({
                status: "kelebihan berat badan"
            })
        } else if (hasil >= 30){
            this.setState({
                status: "Obesitas"
            })
        }
    }
    
    render(){
        return(
            <div className="container col-lg-8 col-sm-12 mt-5">
                <div className="card">
                    <div className="card-header">
                        <h3 className="text-center"> Calculator BMI </h3>
                    </div>
                    <div className="card-body">
                    <form onSubmit={this.hasilJumlah} >
                        <h5 className="mt-2">Berat :</h5>
                        <input className='form-control' name='berat' onChange={this.changeState}/>
                        <h5 className="mt-2">Tinggi :</h5>
                        <input className='form-control' name='tinggi' onChange={this.changeState}/>
                        <button className=" mt-2 btn btn-md" type="submit">Hitung</button>
                        <h5 className="mt-4 text-center">HASIL</h5>
                        <div className="hasil">
                            <p> Status: {this.state.status}</p>
                            <p> BMI: {this.state.hasil}</p>
                        </div>
                    </form>
                    </div>
                </div>
            </div>
        )
    }
}