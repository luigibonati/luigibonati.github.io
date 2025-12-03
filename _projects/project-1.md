---
layout: page
title: Data-driven collective variables for enhanced sampling
description: with background image
img: assets/img/12.jpg
importance: 10
category: work
related_publications: true
---

A key challenge in enhanced sampling simulations is identifying collective variables (CVs) able to efficiently explore rare events. I developed data-driven approaches that automate this process using machine learning techniques. Notably, I proposed a method to build CVs from metastable states alone via neural networks optimized with Fisher’s discriminant {% cite Bonati2020DataDrivenSampling %} and a deep learning framework to extract slow modes from biased simulations, improving rare-event sampling in diverse applications {% cite Bonati2021DeepSampling %}. Recent advances include a descriptor-free approach leveraging geometric graph neural networks for symmetry-invariant CVs {% cite Zhang2024DescriptorFreeNetworks %} and a multitask approach that can learn CVs from transition path sampling simulations while simultaneously optimizing shooting efficiency {% cite Zhang2024CombiningAlgorithm %}. All these techniques are implemented in mlcolvar, a Python library I developed which integrates machine learning-based CVs into enhanced sampling workflows {% cite Bonati2023Amlcolvar %}. We covered these topic in a tutorial-style book chapter {% cite Trizio2024AdvancedVariables %} and a Chemical Review article {% cite Bonati2023Amlcolvar %}

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

{% endraw %}
