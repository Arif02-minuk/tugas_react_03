import React, { Component } from "react";

class MenuTentangKami extends Component{
    constructor(props) {
        super(props);
        this.state = {
            tentang: "Warung Nusantara Adalah Restoran Yang Bernuansa Makanan Nusantara, Kami Ada Utunk Membuat Anda Menikmati Makanan Khas Dari Nusantar "
        }
    }
    render() {
        return (
          <center>
            <p>Tentang Kami</p>
                <p>{this.state.tentang}</p>  
          </center>
            
            
        );
    }
}

export default MenuTentangKami;