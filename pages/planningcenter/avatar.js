import React from "react";
import Link from "next/link";
import "github-markdown-css";

import { ComposedAvatar as Avatar } from "../../twain/avatar/avatar.js";
import "../../twain/avatar/avatar.css";
import Readme from "../../twain/avatar/README.md";
import pkg from "../../twain/avatar/package.json";
import { Detail } from "../../pages_support/package";

export default function() {
  return (
    <div
      className="markdown-body"
      style={{ maxWidth: "40em", padding: "2em 4em" }}
    >
      <Link href="/">
        <a>Home</a>
      </Link>

      <Detail {...pkg} />

      <section>
        <h2>Avatar</h2>
        <div
          style={{
            backgroundColor: "#fafafa",
            padding: 16
          }}
        >
          <span onClick={() => alert("tada!")}>
            <Avatar
              src="http://placekitten.com/200/300"
              alt="a cute kitten"
              size={8}
              inset={true}
            />
          </span>
        </div>
      </section>

      <section>
        <div
          style={{
            backgroundColor: "blue",
            padding: 16
          }}
        >
          <style>
            {`.ScaledAvatar--size_whatever { height: 40px; width: 40px }`}
          </style>
          <Avatar
            src="http://placekitten.com/200/300"
            alt="a cute kitten"
            size="whatever"
            strict={false}
            inset={true}
          />
        </div>
      </section>

      <section>
        <div
          style={{
            backgroundColor: "blue",
            padding: 16
          }}
        >
          <Avatar
            src="http://placekitten.com/200/300"
            alt="a cute kitten"
          />

          <Avatar
            src="http://placekitten.com/200/300"
            alt="a cute kitten"
            size={2.5}
            inset={true}
          />

          <Avatar
            src="http://placekitten.com/200/300"
            alt="a cute kitten"
            size={3}
            inset={true}
          />

          <Avatar
            src="http://placekitten.com/200/300"
            alt="a cute kitten"
            size={4}
            inset={true}
          />

          <Avatar
            src="http://placekitten.com/200/300"
            alt="a cute kitten"
            size={5}
            inset={true}
          />

          <Avatar
            src="http://placekitten.com/200/300"
            alt="a cute kitten"
            size={6}
            inset={true}
          />

          <Avatar
            src="http://placekitten.com/200/300"
            alt="a cute kitten"
            size={7}
            inset={true}
          />

          <Avatar
            src="http://placekitten.com/200/300"
            alt="a cute kitten"
            size={8}
            inset={true}
          />

          <Avatar
            src="http://placekitten.com/200/300"
            alt="a cute kitten"
            size={9}
            inset={true}
          />
        </div>
      </section>

      <section>
        <div
          style={{
            backgroundColor: "pink",
            padding: 16
          }}
        >
          <Avatar
            src="http://placekitten.com/200/300"
            alt="a cute kitten"
            size={{
              mn: 3,
              xs: 4,
              sm: 5,
              md: 6,
              lg: 7,
              xl: "twiddle"
            }}
            strict={false}
            inset={true}
          />

          <Avatar
            src="http://placekitten.com/200/300"
            alt="a cute kitten"
            size={{
              mn: 8,
              xs: 7,
              sm: 6,
              md: 5,
              lg: 4,
              xl: 3
            }}
            inset={true}
          />
        </div>
      </section>
      <Readme />
    </div>
  );
}
