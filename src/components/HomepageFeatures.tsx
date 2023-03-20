/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";
import Link from "@docusaurus/Link";

type FeatureItem = {
  title: string;
  image: string;
  alt: string;
  description: JSX.Element;
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Deploy, monitor and scale your Indexer on Kubernetes using Launchpad",
    image: "/img/noun_launchpad.svg",
    alt: "Image copyright Eko Purnomo, courtesy of the Noun Project",
    description: (
      <>
        Launchpad provides a toolbox for smoothly operating your Graph Protocol Indexer on Kubernetes
      </>
    ),
    link: "/launchpad/intro",
  },
  {
    title: "Join Graphcast to coordinate with other Indexers using Radios",
    image: "/img/noun_gn_EkoPurnomo.svg",
    alt: "Image copyright Eko Purnomo, courtesy of the Noun Project",
    description: (
      <>
        Run Radios (P2P apps) in your stack to coordinate with other Indexers via the Graphcast Network
      </>
    ),
    link: "/graphcast/intro",
  },
];

function Feature({ title, image, description, alt, link }: FeatureItem) {
  return (
    <div className={clsx("col col--3")}>
      <Link to={link}>
        <div className="text--center">
          <img className={styles.featureImg} alt={alt} src={image} />
        </div>
      </Link>
      <div className="text--center padding-horiz--md">
        <Link to={link}  style={{ textDecoration: "none" }}>
          <div className="text--center--title">
            <h3>{title}</h3>
          </div>
        </Link>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={`row ${styles.featuresRow}`}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
