import React from 'react'

const Loader = () => {
    return(
        <div className="ui segment loading">
          <div className="ui active dimmer">
            <div
              className="ui text loader"
              style={{
                fontSize: "30px",
                display: "block",
                position: "absolute",
                bottom: "60px",
                left: "20%",
                cursor: "pointer",
                textAlign: "center"
              }}
            >
              Loading..
            </div>
          </div>
        </div>
    )
}

export default Loader;