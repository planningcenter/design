import React from "react";
import Link from "next/link";

// TODO: there seems to be a problem with the build
import Avatar from "../../twain/avatar/lib/avatar.mjs";
import "../../twain/avatar/avatar.css";

function Home() {
  return (
    <div>
      <Link>
        <a href="/">Home</a>
      </Link>

      <h1>@planningcenter/design</h1>
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
    </div>
  );
}

export default Home;
