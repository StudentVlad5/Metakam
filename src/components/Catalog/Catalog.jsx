import { Box, Flex } from "@radix-ui/themes";
import catalog from "../../const/good.json";
import Image from "next/image";
import "./styles.css";
import { ButtonBuy } from "./ButtonBuy";

export const Catalog = () => {
  return (
    <Box
      py="8"
      style={{
        backgroundColor: "var(--gray-a2)",
        borderRadius: "var(--radius-3)",
      }}
    >
      <Flex gap="3" wrap="wrap" justify="center" align="center" p="20">
        {catalog.map((it) => {
          return (
            <Box
              key={it.uuid}
              width={300}
              className="cardItem"
              style={{ padding: "20px" }}
            >
              <Image
                className="cardImage"
                src={it.mainImage}
                alt={it.product}
                width="200"
                height="300"
              />
              <h3>{it.product}</h3>
              <Flex
                gap="3"
                direction="column"
                wrap="wrap"
                justify="center"
                align="center"
                className="cardFlex"
              >
                <p>{it.category}</p>
                <p>Price: {it.price_usd} usd</p>
                <p>Discount: {it.discount_usd} usd</p>
                <ButtonBuy uuid={it.uuid} />
              </Flex>
            </Box>
          );
        })}
      </Flex>
    </Box>
  );
};
