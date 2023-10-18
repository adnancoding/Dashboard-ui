import React, { useState } from "react";
import "./Dashboard.css";
import img0 from "../assets/img0.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import img5 from "../assets/img5.png";
import img6 from "../assets/img6.png";
import img7 from "../assets/img7.png";
import pfp from "../assets/pfp.jpg";

function Dashboard() {
  const [style, setStyle] = useState(
    "navbar-nav bg-gradient-white-50 sidebar sidebar-dark accordion custom-sidebar"
  );

  const changeStyle1 = () => {
    if (
      style ==
      "navbar-nav bg-gradient-white-50 sidebar sidebar-dark accordion custom-sidebar"
    ) {
      setStyle(
        "navbar-nav bg-gradient-white-50 sidebar sidebar-dark accordion toggled1"
      );
    } else {
      setStyle(
        "navbar-nav bg-gradient-white-50 sidebar sidebar-dark accordion custom-sidebar"
      );
    }
  };

  return (
    <div>
      <body id="page-top">
        {/* Page Wrapper */}
        <div id="wrapper">
          {/*Sidebar */}
          <ul className="your-ul-class" id="accordionSidebar">
      <a
        className="sidebar-brand d-flex align-items-center justify-content-center"
        href="#"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          fill="currentColor"
          className="bi bi-nut"
          viewBox="0 0 16 16"
        >
          <path d="m11.42 2 3.428 6-3.428 6H4.58L1.152 8 4.58 2h6.84zM4.58 1a1 1 0 0 0-.868.504l-3.428 6a1 1 0 0 0 0 .992l3.428 6A1 1 0 0 0 4.58 15h6.84a1 1 0 0 0 .868-.504l3.429-6a1 1 0 0 0 0-.992l-3.429-6A1 1 0 0 0 11.42 1H4.58z" />
          <path d="M6.848 5.933a2.5 2.5 0 1 0 2.5 4.33 2.5 2.5 0 0 0-2.5-4.33zm-1.78 3.915a3.5 3.5 0 1 1 6.061-3.5 3.5 3.5 0 0 1-6.062 3.5z" />
        </svg>
        <div className="sidebar-brand-text mx-3">Dashboard</div>
      </a>

      {/* Nav Item - Dashboard */}
      <li className="nav-item active bg">
        <a className="nav-link" href="index.html">
          <i className="fas fa-fw fa-tachometer-alt"></i>
          <span>Dashboard</span>
        </a>
      </li>

      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseTwo"
          aria-expanded="true"
          aria-controls="collapseTwo"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-box"
            viewBox="0 0 16 16"
          >
            <rect
              x="1"
              y="1"
              width="14"
              height="14"
              rx="3"
              ry="3"
              stroke="white"
              fill="transparent"
              stroke-width="1"
            />
            <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5 8.186 1.113zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443 .184z" />
          </svg>

          <span> Products</span>
          <div
            id="collapseTwo"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <a className="collapse-item" href="buttons.html">
                Thanks
              </a>
              <a className="collapse-item" href="cards.html">
                For Checking
              </a>
            </div>
          </div>
        </a>
      </li>
      <li className="nav-item">
        <a
          className="nav-link collapsed"
          href="#"
          data-toggle="collapse"
          data-target="#collapseUtilities"
          aria-expanded="true"
          aria-controls="collapseUtilities"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-person"
            viewBox="0 0 16 16"
          >
            <rect
              x="1"
              y="1"
              width="14"
              height="14"
              rx="3"
              ry="3"
              stroke="white"
              fill="transparent"
              stroke-width="1"
            />
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
          </svg>

          <span> Customers</span>
          <div
            id="collapseUtilities"
            className="collapse"
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <a className="collapse-item" href="buttons.html">
                Thanks
              </a>
              <a className="collapse-item" href="cards.html">
                For Checking
              </a>
            </div>
          </div>
        </a>
      </li>
      {/* Add similar Nav.Item and NavDropdown for Income, Promote, and Help */}
      <li className="nav-item bottom">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-person"
          viewBox="0 0 16 16"
        >
          <rect
            x="1"
            y="1"
            width="14"
            height="14"
            rx="3"
            ry="3"
            stroke="white"
            fill="transparent"
            stroke-width="1"
          />
          <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
        </svg>
        <div className="pfcon">
          <h6>
            <b
              style={{
                color: "white",
                fontWeight: "bold",
              }}
            >
              Evano
            </b>
          </h6>
          <span>Project Manager </span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          className="bi bi-caret-down"
          viewBox="0 0 16 16"
        >
          <path
            fillRule="evenodd"
            d="M8 10a1 1 0 01-.65-.24l-3.5-3a1 1 0 111.3-1.52L8 8.76l2.85-2.52a1 1 0 111.3 1.52l-3.5 3a1 1 0 01-.65.24z"
          />
        </svg>
      </li>
    </ul>
          {/*End of Sidebar*/}

          {/* Content Wrapper*/}
          <div id="content-wrapper" className="d-flex flex-column">
            <div id="content">
              {/*Begin Page Content*/}
              <div className="container-fluid">
                {/* Sidebar Toggle (Topbar) */}
                <button
                  id="sidebarToggleTop"
                  className="btn btn-link d-md-none rounded-circle mr-3"
                  onClick={changeStyle1}
                >
                  <i className="fa fa-bars"></i>
                </button>

                <div className="d-flex justify-content-between align-items-center w-100 my-div">
                  <h3>
                    <b style={{ color: "black", fontWeight: "bold" }}>
                      Hello Shahrukh👋🏻,
                    </b>
                  </h3>

                  <div className="input-group" style={{ width: "20%" }}>
                    <div className="input-group-prepend">
                      <span className="input-group-text bg-transparent border-right-0">
                        <i className="fa fa-search"></i>
                      </span>
                    </div>
                    <input
                      type="text"
                      className="form-control border-left-0"
                      placeholder="Search..."
                      aria-label="Search"
                      aria-describedby="search-icon"
                    />
                  </div>
                </div>

                {/*Content Row  */}
                <div className="row">
                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col-auto">
                            <img src={img0} alt="My Image" />
                          </div>
                          <div className="col mr-2">
                            <span>Earnings</span>
                            <h3>
                              <b style={{ color: "black", fontWeight: "bold" }}>
                                $198K
                              </b>
                            </h3>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="green"
                              class="bi bi-arrow-up"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                              />
                            </svg>
                            <span style={{ color: "green" }}>
                              <b>37.8% </b>
                            </span>
                            <span>this month</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col-auto">
                            <img src={img2} alt="My Image" />
                          </div>
                          <div className="col mr-2">
                            <span>Orders</span>
                            <h3>
                              <b style={{ color: "black", fontWeight: "bold" }}>
                                $2.4K
                              </b>
                            </h3>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="red"
                              class="bi bi-arrow-down"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                              />
                            </svg>
                            <span style={{ color: "red" }}>
                              <b>2% </b>
                            </span>
                            <span>this month</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col-auto">
                            <img src={img3} alt="My Image" />
                          </div>
                          <div className="col mr-2">
                            <span>Balance</span>
                            <h3>
                              <b style={{ color: "black", fontWeight: "bold" }}>
                                $2.4K
                              </b>
                            </h3>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="red"
                              class="bi bi-arrow-down"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
                              />
                            </svg>
                            <span style={{ color: "red" }}>
                              <b>2% </b>
                            </span>
                            <span>this month</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-md-6 mb-4">
                    <div className="card shadow h-100 py-2">
                      <div className="card-body">
                        <div className="row no-gutters align-items-center">
                          <div className="col-auto">
                            <img src={img1} alt="My Image" />
                          </div>
                          <div className="col mr-2">
                            <span>Total Sales</span>
                            <h3>
                              <b style={{ color: "black", fontWeight: "bold" }}>
                                $89K
                              </b>
                            </h3>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              fill="green"
                              class="bi bi-arrow-up"
                              viewBox="0 0 16 16"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
                              />
                            </svg>
                            <span style={{ color: "green" }}>
                              <b>11% </b>
                            </span>
                            <span>this week</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/*   Content Row  */}

                <div className="row">
                  {/* Area Chart */}
                  <div className="col-xl-8 col-lg-7">
                    <div className="card shadow mb-4">
                      {/* Card Header - Dropdown */}
                      <div
                        className="card-header py-3 d-flex flex-row align-items-center justify-content-between"
                        style={{ borderBottom: "none", background: "white" }}
                      >
                        <h3>
                          <b style={{ color: "black", fontWeight: "bold" }}>
                            Overview
                          </b>
                          <h6>Monthly Earnings</h6>
                        </h3>
                        <div className="dropdown">
                          <div className="dropdown no-arrow">
                            <a
                              className="dropdown-toggle"
                              href="#"
                              role="button"
                              id="dropdownMenuLink"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <span className="text-secondary">Quarterly </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                class="bi bi-caret-down"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M8 10a1 1 0 01-.65-.24l-3.5-3a1 1 0 111.3-1.52L8 8.76l2.85-2.52a1 1 0 111.3 1.52l-3.5 3a1 1 0 01-.65.24z"
                                />
                              </svg>
                            </a>
                            <div
                              className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                              aria-labelledby="dropdownMenuLink"
                            >
                              <div className="dropdown-header">
                                To Create
                              </div>
                              <a className="dropdown-item" href="#">
                                exact same ui
                              </a>
                              <a className="dropdown-item" href="#">
                               i have use image
                              </a>
                              <div className="dropdown-divider"></div>
                              <a className="dropdown-item" href="#">
                                of chart instead of chart
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="chart-area">
                        <img
                          src={img4}
                          alt="My Image"
                          width="100%"
                          height="100%"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="col-xl-4 col-lg-5">
                    <div className="card shadow mb-4">
                      <div
                        className="card-header py-3 d-flex flex-row align-items-center justify-content-between"
                        style={{ borderBottom: "none", background: "white" }}
                      >
                        <h3>
                          <b style={{ color: "black", fontWeight: "bold" }}>
                            Customers
                          </b>
                          <h6>Customer that buy products</h6>
                        </h3>
                      </div>

                      <div className="card-body">
                        <img
                          src={img5}
                          alt="My Image"
                          width="65%"
                          height="65%"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {/* table area  */}
                  <div className="col-12">
                    <div className="card">
                      <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center w-100">
                          <h3>
                            <b style={{ color: "black", fontWeight: "bold" }}>
                              Product Sell
                            </b>
                          </h3>

                          <div className="input-group" style={{ width: "30%" }}>
                            <div className="input-group-prepend">
                              <span className="input-group-text bg-transparent srchbodr">
                                <i className="fa fa-search"></i>
                              </span>
                            </div>
                            <input
                              type="text"
                              className="form-control border-left-0"
                              placeholder="Search..."
                              aria-label="Search"
                              aria-describedby="search-icon"
                              style={{ border: "none" }}
                            />
                            <div className="dropdown">
                              <span className="text-secondary">
                                <b>Last 30 days</b>
                              </span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                fill="currentColor"
                                class="bi bi-caret-down"
                                viewBox="0 0 16 16"
                              >
                                <path
                                  fill-rule="evenodd"
                                  d="M8 10a1 1 0 01-.65-.24l-3.5-3a1 1 0 111.3-1.52L8 8.76l2.85-2.52a1 1 0 111.3 1.52l-3.5 3a1 1 0 01-.65.24z"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="table-responsive">
                        <table className="table table-hover">
                          <thead>
                            <tr>
                              <td className="border-top-0">Product Name</td>
                              <td className="border-top-0">Stock</td>
                              <td className="border-top-0">Price</td>
                              <td className="border-top-0">Total Sales</td>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td style={{ width: "70%" }}>
                                <div className="row no-gutters align-items-center">
                                  <div className="col-auto">
                                    <img src={img6} alt="My Image" />
                                  </div>
                                  <div className="col mr-2">
                                    <h3>
                                      <b
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        Abstract 3D
                                      </b>
                                    </h3>

                                    <span>Lorem ipsum dolor sit amet.</span>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span style={{ color: "black" }}>
                                  32 in stock
                                </span>
                              </td>
                              <td style={{ color: "black" }}>
                                <b>$45</b>
                              </td>
                              <td>
                                <span style={{ color: "black" }}>20</span>
                              </td>
                            </tr>
                            <tr>
                              <td style={{ width: "70%" }}>
                                <div className="row no-gutters align-items-center">
                                  <div className="col-auto">
                                    <img src={img7} alt="My Image" />
                                  </div>
                                  <div className="col mr-2">
                                    <h3>
                                      <b
                                        style={{
                                          color: "black",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        Sarphens Illustration
                                      </b>
                                    </h3>

                                    <span>Lorem ipsum dolor sit amet.</span>
                                  </div>
                                </div>
                              </td>
                              <td>
                                <span style={{ color: "black" }}>
                                  32 in stock
                                </span>
                              </td>
                              <td style={{ color: "black" }}>
                                <b>$45</b>
                              </td>
                              <td>
                                <span style={{ color: "black" }}>20</span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Dashboard;
