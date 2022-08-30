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
  // {
  //   title: "Indexers: Run Gossip Radios to join the Gossip Network",
  //   image: "/img/noun_gn_EkoPurnomo.svg",
  //   alt: "Image copyright Eko Purnomo, courtesy of the Noun Project",
  //   description: (
  //     <>
  //       Run Gossip Radios in your stack to coordinate with other Indexers via the Gossip Network
  //     </>
  //   ),
  //   link: "/gossip-network/intro",
  // },
  // {
  //   title: "Build a Radio for your application on the Gossip Network",
  //   image: "/img/noun_radio.svg",
  //   alt: "Image copyright Eko Purnomo, courtesy of the Noun Project",
  //   description: (
  //     <>
  //       Run Gossip Radios in your stack to participate in the Gossip Network. Learn more about how this benefits your operation.
  //     </>
  //   ),
  //   link: "/gossip-network/intro",
  // },
  // {
  //   title: "Indexers: Deploy, monitor and scale your Indexer on Kubernetes using Launchpad",
  //   image: "/img/noun_launchpad.svg",
  //   alt: "Image copyright Eko Purnomo, courtesy of the Noun Project",
  //   description: (
  //     <>
  //       Launchpad provides a toolbox for operating your Indexer on Kubernetes, whether you have 1 machine, or 100.
  //     </>
  //   ),
  //   link: "/launchpad/intro",
  // },
  {
    title: "View resources for The Graph's MIPs Program",
    image: "/img/noun_testnet.svg",
    alt: "Image copyright LAFS, courtesy of the Noun Project",
    description: (
      <>
        A collection of resources to support Indexers in The Graph's ongoing incentivised [MIPs Program](https://thegraph.com/blog/mips-multi-chain-indexing-incentivized-program)
      </>
    ),
    link: "/mips-resources/intro",
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
