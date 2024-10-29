"use client";
import { useParams } from "next/navigation";
import catalog from "../../const/good.json";
import { Box, Button, Flex, RadioGroup, Text } from "@radix-ui/themes";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import "../../components/Catalog/styles.css";

export default function ProductItem() {
  const params = useParams();
  const { id } = params;
  const product = catalog.find((it) => it.uuid === id);
  const productImgArray = useMemo(
    () => product?.images.split(",").map((it) => it.trimStart()),
    [product?.images]
  );
  let [error, setError] = useState([]);
  const [size, setSize] = useState("");
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let p = [];
    {
      productImgArray &&
        productImgArray.map((it) => {
          p.push(true);
        });
    }
    setError(p);
  }, [productImgArray]);

  useEffect(() => {
    setTotal(Math.round(count * product?.price_usd * 100) / 100);
  }, [count, product?.price_usd]);

  const handleChange = (e) => {
    setSize(e);
  };

  return product ? (
    <Flex direction="row" wrap={{ xs: "wrap", sm: "nowrap", lg: "nowrap" }}>
      <Flex gap="5" wrap="wrap" justify="center" align="center">
        {product?.mainImage && (
          <Image
            src={product?.mainImage}
            width={320}
            height={420}
            alt={product?.title}
          />
        )}
        {productImgArray &&
          productImgArray.map((it, ind) => {
            return (
              <Image
                key={ind}
                src={error[ind] ? it : product?.mainImage}
                width={320}
                height={420}
                alt={it}
                onError={() => {
                  let newArr = [...error];
                  newArr[ind] = false;
                  setError(newArr);
                }}
              />
            );
          })}
        <Flex
          direction="row"
          justify="center"
          align="center"
          width="100%"
          gap="9"
          p="2"
        >
          <Flex direction="column" gap="3" maxWidth="200px">
            {product?.sizes && (
              <RadioGroup.Root
                name="sizes"
                onValueChange={(e) => handleChange(e)}
              >
                {product.sizes.split(",").map((it) => {
                  return (
                    <RadioGroup.Item key={it} value={it}>
                      <Text size={{ xs: "4", sm: "4", lg: "5" }}>{it}</Text>
                    </RadioGroup.Item>
                  );
                })}
              </RadioGroup.Root>
            )}
          </Flex>
          <Flex direction={"row"} gap="5">
            <Flex
              direction={"column"}
              justify={"center"}
              align={"center"}
              gap={"2"}
            >
              <Button
                size="3"
                type="button"
                style={{ width: "100%" }}
                radius="Large"
                onClick={() => setCount((prev) => prev + 1)}
              >
                Add
              </Button>
              <Button
                size="3"
                type="button"
                radius="Large"
                onClick={() => setCount((prev) => prev - 1)}
                disabled={count === 0}
              >
                Reduce
              </Button>
            </Flex>
            <Flex direction={"column"} gap="3" minWidth={"200px"}>
              <Box>
                <Text size={{ xs: "4", sm: "6", lg: "7" }}>
                  Amount: {count}
                </Text>
              </Box>
              <Box>
                <Text size={{ xs: "4", sm: "5", lg: "6" }}>
                  Price: {product?.price_usd} usd
                </Text>
              </Box>
              <Box>
                <Text size={{ xs: "6", sm: "7", lg: "8" }}>
                  Total: {total} usd
                </Text>
              </Box>
              <Button
                type="button"
                radius="large"
                disabled={count < 1 || !size}
                onClick={() => {
                  alert(`your make order for ${count} ${size} ${total}`);
                }}
              >
                Buy
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Box
        maxWidth={{ xs: "100%", sm: "60%", lg: "50%" }}
        p={{ xs: "4", sm: "6", lg: "8" }}
      >
        <h3>Product Item </h3>
        <h4>{product?.title}</h4>
        <Flex
          direction={"column"}
          justify={"center"}
          align={"center"}
          dangerouslySetInnerHTML={{ __html: product?.description }}
        ></Flex>
      </Box>
    </Flex>
  ) : (
    <Text>We can&apos;t find anything. Try again</Text>
  );
}
