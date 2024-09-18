import React from "react";

export default function Database() {
  return (
    <div className="row mt-5">
      <div className="col-6">
        <div className="card_skill row">
          <div className="col-4">
            <img src="/SSMS.png" alt="" width="70px" height="70px" />
          </div>
          <div className="col-8">
            <span className="text-warning"> SQL Server</span>
            <div className="text-light">Basic skill with SQL Server</div>
          </div>
        </div>
      </div>
      <div className="col-6">
        <div className="card_skill row">
          <div className="col-4">
            <img src="/mySQL.png" alt="" width="70px" height="70px" />
          </div>
          <div className="col-8">
            <span className="text-warning">MySQL</span>
            <div className="text-light">Basic skills with MySQL</div>
          </div>
        </div>
      </div>
      <div className="col-6 mt-4">
        <div className="card_skill row">
          <div className="col-4">
            <img src="/mongodb.png" alt="" width="70px" height="70px" />
          </div>
          <div className="col-8">
            <span className="text-warning"> MongoDB </span>
            <div className="text-light">Basic skills with MongoDB</div>
          </div>
        </div>
      </div>
    </div>
  );
}
