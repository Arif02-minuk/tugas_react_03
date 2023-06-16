import React, { Component } from "react";
import ListMakanan from "../ListData/ListMakanan";

class MenuMakanan extends Component{
    constructor(props) {
        super(props);
        this.state = {
            jumlah: 0
        }
        this.RubahPesanan = this.RubahPesanan.bind(this);
        this.pesanan = this.pesanan.bind(this);
    }

    RubahPesanan() {
        this.setState((state, props) => {
            return {
                pesan : state.jumlah
            }
        })
    }

    pesanan(e) {
        console.log(e.target.value)
    }

    render() {
        return (
          <div>
            <h3>Daftar makanan Yang Kami sediakan: </h3>
            <table>
              <tbody>
                <tr>
                  <td>
                    <ListMakanan gambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/nasipadang.jpg" />
                    <center>
                      <button onClick={this.RubahPesanan}>
                        Pesan Sekarang
                      </button>
                    </center>
                  </td>
                  <td>
                    <ListMakanan gambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sate.png" />
                    <center>
                      <button onClick={this.RubahPesanan}>
                        Pesan Sekarang
                      </button>
                    </center>
                  </td>
                  <td>
                    <ListMakanan gambar="https://s3-ap-southeast-1.amazonaws.com/niomic/img/sample/sotolamongan.png" />
                    <center>
                      <button onClick={this.RubahPesanan}>
                        Pesan Sekarang
                      </button>
                    </center>
                  </td>
                  <td>
                    <ListMakanan gambar="https://www.dbs.com/iwov-resources/images/newsroom/indonesia/Blog/masakan%20nusantara/nasi%20kentut.png" />
                    <center>
                      <button onClick={this.RubahPesanan}>
                        Pesan Sekarang
                      </button>
                    </center>
                  </td>
                  <td>
                    <ListMakanan gambar="https://blog.tokowahab.com/wp-content/uploads/2020/03/Resep-Nasi-Kuning-Tumpeng-Mini.jpg" />
                    <center>
                      <button onClick={this.RubahPesanan}>
                        Pesan Sekarang
                      </button>
                    </center>
                  </td>
                </tr>
              </tbody>
                </table>
                <br />
                <input type="text" onChange={this.pesanan} />
                <h3>Pesanan Anda: {this.state.pesan}</h3>
          </div>
        );
    }







}


export default MenuMakanan