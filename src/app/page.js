import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
<>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7rVBu7zCi-A7MLRR_YRlaMaXngc7VUDguQ&s"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI7rVBu7zCi-A7MLRR_YRlaMaXngc7VUDguQ&s" width={50}>
    </img></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="http://localhost:3001/">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://www.google.co.th/?hl=th">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="https://chatgpt.com/">Service</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" aria-disabled="true" href="https://www.cmtc.ac.th/">Contact</a>
        </li>
        <form class="container-fluid justify-content-start">
    <button class="btn btn-outline-success me-2" type="button">SignIn</button>
    <button class="btn btn-outline-dark" type="button">SignUp</button>
  </form>
      </ul>
    </div>
  </div>
</nav>




        <div className="row my-3">
          <div className="col-12 text-center bg-primary p-0">
          <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://www.japancheckin.com/wp-content/uploads/2018/12/f4f9da3fbd57387828485025efbdf667_s.jpg" className="d-block w-100
      " alt="123.jpg " />
    </div>
    <div className="carousel-item">
      <img src="123.jpg" className="d-block w-100" alt="2b.jpg" />
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>
          </div>
        </div>

        <div className="row my-3">
          <div className="col-4 text-center bg-warning p-5">
          </div>
          <div className="col-4 text-center bg-success p-5">
            CARD 2
          </div>
          <div className="col-4 text-center bg-danger p-5">
            CARD 3
          </div>
        </div>

        
        <div className="row">
          <div className="col-md-16 bg-info p-5">
            X:@Tonnam18
          </div>
        </div>
</>
  );
}
