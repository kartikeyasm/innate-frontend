import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Card, CardContent, CardMedia, CardActions } from "@mui/material";
import Button from "@mui/material/Button";

/*Temp Images*/
import tempImage from "../../assets/tempImage.jpg"

const items = [
    {
      id: 1,
      name: "Rudraksh",
      price: "99.99",
      image: tempImage,
    },
    {
      id: 2,
      name: "Rudraksh",
      price: "149.99",
      image: tempImage,
    },
    {
      id: 3,
      name: "Rudraksh",
      price: "49.99",
      image: tempImage,
    },
    {
      id: 4,
      name: "Rudraksh",
      price: "89.99",
      image: tempImage,
    },
    {
      id: 5,
      name: "Rudraksh",
      price: "89.99",
      image: tempImage,
    },
    {
      id: 6,
      name: "Rudraksh",
      price: "89.99",
      image: tempImage,
    },
    {
      id: 7,
      name: "Rudraksh",
      price: "89.99",
      image: tempImage,
    },
];

const RecomendedItem = () => {
    return (
      <div className="w-full px-4 py-6">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={10}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            480: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 5 },
            1536: { slidesPerView: 6 },
          }}
          className="w-full"
        >
          {items.map((item) => (
            <SwiperSlide key={item.id} className="flex justify-center">
              <Card sx={{ width: "100%", maxWidth: 250, borderRadius: 2, boxShadow: 3 }}>
                <CardMedia
                  component="img"
                  height="160"
                  image={item.image}
                  alt={item.name}
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <h3 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>{item.name}</h3>
                  <p style={{ color: "gray" }}>₹{item.price}</p>
                </CardContent>
                <CardActions>
                  <Button variant="contained" color="primary" fullWidth>
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    );
};

export default RecomendedItem;