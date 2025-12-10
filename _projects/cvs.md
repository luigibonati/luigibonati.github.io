---
layout: page
title: Data-driven collective variables
description: Using machine learning to discover CVs for enhanced sampling
img: assets/img/publication_preview/2020-jpcl-deeplda.png
importance: 1
category: projects
related_publications: true
---

A key challenge in enhanced sampling simulations is identifying collective variables (CVs) able to efficiently explore rare events. I developed data-driven approaches that automate this process using machine learning techniques. Notably, I proposed a method to build CVs from metastable states alone via neural networks optimized with Fisher’s discriminant {% cite Bonati2020DataDrivenSampling %} and a deep learning framework to extract slow modes from biased simulations, improving rare-event sampling in diverse applications {% cite Bonati2021DeepSampling %}. 

<div class="row justify-content-sm-center">
    <div class="col-sm-3 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/publication_preview/2021-cimento.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-9 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/publication_preview/2021-pnas-tica.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: DeepLDA. Right: DeepTICA.
</div>

Recent advances include a descriptor-free approach leveraging geometric graph neural networks for symmetry-invariant CVs {% cite Zhang2024DescriptorFreeNetworks %} and a multitask approach that can learn CVs from transition path sampling simulations while simultaneously optimizing shooting efficiency {% cite Zhang2024CombiningAlgorithm %}. 

**Code**. All these techniques are implemented in mlcolvar, a Python library I developed which integrates machine learning-based CVs into enhanced sampling workflows {% cite Bonati2023Amlcolvar %}. 

**Reviews**. We recently covered these topics in a tutorial-style book chapter {% cite Trizio2024AdvancedVariables %} and a Chemical Review article {% cite Zhu2025EnhancedApplications %}

