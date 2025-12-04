---
layout: page
title: Machine learning bias potentials
description: Neural network-based variationally enhanced sampling
img: assets/img/publication_preview/2019-pnas-deepves.png
importance: 4
category: work
related_publications: true
---

A popular strategy to overcome kinetic bottlenecks in atomistic simulations is to identify a number of key collective variables and to introduce an external bias potential that is able to accelerate sampling by favoring their fluctuations.
I developed a variant of the variationally enhanced sampling method, in which the bias potential is represented as a neural network [1]. The bias is optimized on-the-fly with a reinforcement learning-like scheme, which minimizes the Kullback-Leibler divergence between the sampled and the target distribution. Using a neural network rather than a linear basis expansion allows to better represent represent complex free-energy surfaces and to handle several collective variables.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>