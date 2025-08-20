"use client";
import Footer1 from "@/components/footers/Footer1";
import Header2 from "@/components/headers/Header2";
import Link from "next/link";

export default function ClientsPage() {
  return (
    <>
      <Header2 />
      <div
        className="breadcrumb-wrapper bg-cover"
        style={{ backgroundImage: 'url("/assets/img/pagetitle.jpg")' }}
      >
        <div className="shape-image float-bob-y">
        
        </div>
        <div className="container">
          <div className="breadcrumb-wrapper-items">
            <div className="page-heading">
              <div className="breadcrumb-sub-title">
                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                Our Clients
                </h1>
              </div>
              <ul
                className="breadcrumb-items wow fadeInUp"
                data-wow-delay=".5s"
              >
                <li>
                  <Link href={`/`}> Home </Link>
                </li>
                <li>
                  <i className="fa-sharp fa-solid fa-slash-forward" />
                </li>
                <li>Clients</li>
              </ul>
            </div>
            <div className="breadcrumb-image">
           
            </div>
          </div>
        </div>
      </div>
    
      <Footer1 />
    </>
  );
} 