import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Chip from "@mui/joy/Chip";
import Link from "@mui/joy/Link";
import Typography from "@mui/joy/Typography";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

export default function Product({ product }) {
  return (
    <Card sx={{ width: 250, maxWidth: "100%", boxShadow: "lg" }}>
      <CardOverflow>
        <AspectRatio sx={{ minWidth: 200 }}>
          <img src={product.images[0].url} loading="lazy" alt="" />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Link
          href={`/product/${product._id}`}
          fontWeight="md"
          color="neutral"
          textColor="text.primary"
          overlay
          endDecorator={<ArrowOutwardIcon />}
        >
          {product.name}
        </Link>

        <Typography
          level="title-lg"
          sx={{ mt: 1, fontWeight: "xl" }}
          endDecorator={
            <Chip component="span" size="sm" variant="soft" color="success">
              Lowest price
            </Chip>
          }
        >
          {product.price} INR
        </Typography>
        <Typography
          level="body-sm"
          style={{
            color: product.Stock <= 5 ? "#FF7F7F" : "black",
          }}
        >
          (Only <b>{product.Stock}</b> left in stock!)
        </Typography>
      </CardContent>
      <CardOverflow>
        <Button
          size="lg"
          style={{
            borderTopLeftRadius: 0,
            borderTopRightRadius: 0,
          }}
        >
          Add to cart
        </Button>
      </CardOverflow>
    </Card>
  );
}
