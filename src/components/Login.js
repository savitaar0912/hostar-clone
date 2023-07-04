import React from 'react'
import { Button } from 'react-bootstrap';
import "../css/Login.css"

export default function Login() {
  return (
    <div className="section">
      <div className="box1">
        <div className="logos">
          <img className="logo1" src="\images\cta-logo-one.svg" alt="..." />
          <div className="mb-2">
            <Button className="primary" size="lg">
              <a href="/">
                Get All There
              </a>
            </Button>
          </div>
          <div className="info">
            <p>Get Premium access to Game of Thrones and House of Dragons with the Disney+ subscription. As of 31/05/2023 the price of Disney bundle will increase by $1.</p>
          </div>
          <img className="logo2" src="\images\cta-logo-two.png" alt="..." />
        </div>
      </div>
    </div>
  )
}
