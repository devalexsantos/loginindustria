import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Certificates() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return(
    <div className="text-center flex flex-col items-center justify-center bg-footer bg-blend-darken bg-cover h-[550px]">
      <div className="container">
        <h4 className="text-4xl md:text-5xl font-bold text-white text-center mb-8">Prêmios e Certificados</h4>
        <h5 className="text-md md:text-xl font-bold border inline p-3 text-white hover:bg-primary hover:text-white hover:border-none hover:cursor-pointer">Ver todos os certificados</h5>
      </div>
      <div className="w-full mt-8">
      <div className="px-[10%]">
        <Slider {...settings}>
        <div className="card-wrapper p-4">
          <div className="card">
          <img src="/certificates/80plus.png" />
          </div>
        </div>
        <div className="card-wrapper p-4">
          <div className="card">
          <img src="/certificates/abnt.png" />
          </div>
        </div>
        <div className="card-wrapper p-4">
          <div className="card">
          <img src="/certificates/copy.png" />
          </div>
        </div>
        <div className="card-wrapper p-4">
          <div className="card">
          <img src="/certificates/dmtf.png" />
          </div>
        </div>

        <div className="card-wrapper p-4">
          <div className="card">
          <img src="/certificates/epeat.png" />
          </div>
        </div>

        <div className="card-wrapper p-4">
          <div className="card">
          <img src="/certificates/iec.png" />
          </div>
        </div>

        <div className="card-wrapper p-4">
          <div className="card">
          <img src="/certificates/iso9001.png" />
          </div>
        </div>

        <div className="card-wrapper p-4">
          <div className="card">
          <img src="/certificates/iso14001.png" />
          </div>
        </div>
        </Slider>
</div>
      </div>

    </div>
  )
}