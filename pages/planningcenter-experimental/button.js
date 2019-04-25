import React from "react";

import Layout from "../../pages_support/layout";

// TODO: there seems to be a problem with the build
import {
  ComposedButton as Button,
  ButtonCluster
} from "../../planningcenter-experimental/button/button.js";
import "../../planningcenter-experimental/button/button.css";
import Readme from "../../planningcenter-experimental/button/README.md";
import pkg from "../../planningcenter-experimental/button/package.json";
import { Detail } from "../../pages_support/package";

export default function() {
  return (
    <Layout>
      <div className="markdown-body">
        <Detail {...pkg} componentName="Button" />

        <section>
          <h2>Button</h2>
          <div
            style={{
              backgroundColor: "#fafafa",
              padding: 16
            }}
          >
            <Button onClick={() => alert("howdy")} action="put" height={6}>
              A Button
            </Button>

            <Button onClick={() => alert("howdy")} action="put" height={6}>
              A Button{" "}
              {/* TODO: extract this component for left and right usage */}
              <span style={{ marginLeft: 8, marginRight: -8 }}>🔽</span>
            </Button>

            <ButtonCluster>
              <Button height={5} className="ButtonCluster__Button">
                One
              </Button>
              <Button height={5} className="ButtonCluster__Button">
                Two
              </Button>
              <Button height={5} className="ButtonCluster__Button">
                Three
              </Button>
            </ButtonCluster>
          </div>
        </section>

        <Readme />
      </div>
    </Layout>
  );
}
