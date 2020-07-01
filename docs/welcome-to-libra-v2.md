---
id: welcome-to-libra-v2
title: Libra Developer Documentation
disable_pagination: true
sidebar_label: Home
---

Browse the latest documentation on the Libra Core, wallets, payments, and node operations. 

<div className="margin-vert--lg" />

The Libra payment system is built on a secure, scalable, and reliable blockchain. It is backed by a reserve of high-quality liquid assets comprising cash or ca​sh eq​uivalents and very short-term government secu​rities. This will help ensure that people and businesses have confidence that their Libra Coins can be converted into their local currency. It is governed by the [Libra Association](http://libra.org/) and its subsidiary Libra Networks, tasked with developing and operating the Libra network and the Libra project.

<CardsWrapper title="We welcome developers who want to:">
  <OverlayCard 
    description="This section of content will be available soon"
    icon="img/core-contributors.svg" 
    iconDark="img/core-contributors-dark.svg" 
    title="Contribute to Core" 
    to="#"
  />
  <OverlayCard 
    description="This section of content will be available soon"
    icon="img/docs/merchant-solutions.svg" 
    iconDark="img/docs/merchant-solutions-dark.svg"
    title="Contribute to Libra Blockchain" 
    to="#"
  />
  <OverlayCard 
    description="This section of content will be available soon"
    icon="img/wallet-app.svg" 
    iconDark="img/wallet-app-dark.svg"
    title="Build a Wallet" 
    to="#"
  />
  <OverlayCard
    description="This section of content will be available soon"
    icon="img/wallet-app.svg" 
    iconDark="img/wallet-app-dark.svg"
    title="Develop a wallet for the Libra Network"
    to="#"
  />
  <OverlayCard
    description="This section of content will be available soon"
    icon="img/move.svg" 
    iconDark="img/move-dark.svg"
    title="Develop with Move"
    to="#"
  />
  <OverlayCard
    description="This section of content will be available soon"
    icon="img/move.svg" 
    iconDark="img/move-dark.svg"
    title="Learn about and experiment with the Move language"
    to="#"
  />
  <OverlayCard
    description="This section of content will be available soon"
    icon="img/docs/merchant-solutions.svg" 
    iconDark="img/docs/merchant-solutions-dark.svg" 
    title="Accept Payments"
    to="#"
  />
  <OverlayCard
    description="This section of content will be available soon"
    icon="img/docs/merchant-solutions.svg" 
    iconDark="img/docs/merchant-solutions-dark.svg" 
    title="Accept payments and integrate with the network"
    to="#"
  />
  <OverlayCard
    description="This section of content will be available soon"
    icon="img/move.svg" 
    iconDark="img/move-dark.svg"
    title="Run a Full Node"
    to="#"
  />
  <OverlayCard
    description="This section of content will be available soon"
    icon="img/core-contributors.svg" 
    iconDark="img/core-contributors-dark.svg" 
    title="Learn how to operate full nodes in the Libra Blockchain"
    to="#"
  />
</CardsWrapper>

<WaveBackground />

## Discover Libra Docs

<MultiStepSnippet
  defaultValue="my-first-transaction"
  values={[
    { value: 'my-first-transaction', label: (
      <ColorCard 
        color="purpleDark"
        icon="img/transaction.svg"
        overlay="Send a test transaction to orem ipsum dolor sit amet, ctetur adipiscing elit, sed do"
        title="Send a test transaction"
        type="snippetTab"
      />
    )},
    { value: 'run-move', label: (
      <ColorCard 
        color="purpleLight"
        icon="img/docs/move-program.svg" 
        overlay="Second overlay (no content specified in comps"
        title="Write a move program"
        type="snippetTab"
      />
    )},
    { value: 'demo-wallet', label: (
      <ColorCard 
        color="aqua"
        icon="img/docs/try-a-wallet.svg" 
        overlay="Third overlay (no content specified in comps"
        title="Try out a wallet"
        type="snippetTab"
      />
    )},
  ]
}>
<MultiStepTabItem value="my-first-transaction" learnMoreLink="/docs/core/my-first-transaction">

```bash
# Create two accounts and transfer LBR between the two.
# This uses the testnet for experimentation

libra% account create
libra% account create
libra% account list
libra% account mint 0 110 LBR
libra% account mint 1 52 LBR
libra% query balance 0
libra% query balance 1
libra% transfer 0 1 10 LBR
libra% query balance 0
libra% query balance 1 
```

</MultiStepTabItem>
<MultiStepTabItem value="run-move" learnMoreLink="/docs/core/run-move-locally">

```bash
script {
  use 0x0::LibraAccount;
  use 0x0::LBR;
  use 0x0::Transaction;
  use 0x717da70a461fef6307990847590ad7af::MyModule;

  fun main(amount: u64) {
    let coin = LibraAccount::withdraw_from_sender<LBR::T>(amount);
    // Calls the id procedure defined in our custom module
    LibraAccount::deposit<LBR::T>(Transaction::sender(), MyModule::id(coin));
  }
}
```

</MultiStepTabItem>
<MultiStepTabItem value="demo-wallet">

```bash
git clone git@github.com:libra/libra-wallet.git
```

</MultiStepTabItem>
</MultiStepSnippet>

## Explore Github

<CardsWrapper>
  <TagCard
    icon="img/github.svg"
    iconDark="img/github-dark.svg"
    tags={["Web", "Mobile", "Merchant"]}
    title="Reference Wallet"
    to="https://github.com/libra"
  />
  <TagCard
    icon="img/github.svg"
    iconDark="img/github-dark.svg"
    tags={["Web", "Mobile", "Merchant"]}
    title="Reference Merchant"
    to="https://github.com/libra"
  />
  <TagCard
    icon="img/github.svg"
    iconDark="img/github-dark.svg"
    tags={["Web", "Mobile", "Core"]}
    title="Libra Core"
    to="https://github.com/libra"
  />
</CardsWrapper>

<div className="margin-vert--lg" />

Check out the Libra network’s documentation and community sites, and stay up to date by signing up for our newsletter here.

<div className="margin-vert--lg" />

Tell us your plan to build a product or service. We know that not all aspects of the Libra network will be available immediately to some developers. We're excited to work with the community to evolve these features, and look forward to your participation!