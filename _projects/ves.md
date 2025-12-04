---
layout: page
title: Machine learning bias potentials
description: Neural network-based variationally enhanced sampling
img: assets/img/publication_preview/2019-pnas-deepves.png
importance: 4
category: research
related_publications: true
---

**Deep-VES**. A popular strategy to overcome kinetic bottlenecks in atomistic simulations is to identify a number of key collective variables and to introduce an external bias potential that is able to accelerate sampling by favoring their fluctuations.
I developed a variant of the variationally enhanced sampling method, in which the bias potential is represented as a neural network [1]. The bias is optimized on-the-fly with a reinforcement learning-like scheme, which minimizes the Kullback-Leibler divergence between the sampled and the target distribution. Using a neural network rather than a linear basis expansion allows to better represent represent complex free-energy surfaces and to handle several collective variables.