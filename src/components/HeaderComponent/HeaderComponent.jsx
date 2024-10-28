import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import arrowDown from "../../../public/arrow-down-3101.svg";
import "./styles.css";
import data from "../../const/header.json";
import Image from "next/image";

export const HeaderComponent = () => {
  return (
    <div className="headerContainer">
      <div className="logo">
        <h1>Metakam</h1>
      </div>
      <NavigationMenu.Root className="NavigationMenuRoot">
        <NavigationMenu.List className="NavigationMenuList">
          {data.map((it) => {
            return (
              <NavigationMenu.Item key={it.id}>
                {it.item ? (
                  <>
                    <NavigationMenu.Trigger className="NavigationMenuTrigger">
                      {it.name}{" "}
                      <Image
                        width="7"
                        height="7"
                        src={arrowDown}
                        alt="arrow"
                        className="CaretDown"
                        aria-hidden
                      />
                    </NavigationMenu.Trigger>

                    <NavigationMenu.Content className="NavigationMenuContent">
                      <ul className={`List ${it.code}`}>
                        {it.item.map((i) => {
                          return (
                            <ListItem key={i.id} href={i.link} title={i.name}>
                              {i.description}
                            </ListItem>
                          );
                        })}
                      </ul>
                    </NavigationMenu.Content>
                  </>
                ) : (
                  <NavigationMenu.Link
                    key={it.id}
                    className="NavigationMenuLink"
                    href={it.link}
                  >
                    {it.name}
                  </NavigationMenu.Link>
                )}
              </NavigationMenu.Item>
            );
          })}

          <NavigationMenu.Indicator className="NavigationMenuIndicator">
            <div className="Arrow" />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>

        <div className="ViewportPosition">
          <NavigationMenu.Viewport className="NavigationMenuViewport" />
        </div>
      </NavigationMenu.Root>
    </div>
  );
};

const ListItem = ({ className, children, title, ...props }, forwardedRef) => (
  <li>
    <NavigationMenu.Link asChild>
      <a
        className={classNames("ListItemLink", className)}
        {...props}
        ref={forwardedRef}
      >
        <div className="ListItemHeading">{title}</div>
        <p className="ListItemText">{children}</p>
      </a>
    </NavigationMenu.Link>
  </li>
);
