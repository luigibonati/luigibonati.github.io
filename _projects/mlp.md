---
layout: page
title: Machine learning potentials
description: Accelerating active learning with enhanced sampling to study rare events
img: assets/img/publication_preview/2022-cattod-urea.png
importance: 2
category: projects
related_publications: true
---

**Using enhanced sampling to build ML potentials for rare events**.
The construction of ML interatomic potentials for phase transitions and chemical reactions is challenging due to the difficulty of including all relevant configurations in the training set. By integrating enhanced sampling techniques into active learning strategies we are able obtain reliable and robust machine learning potentials. This enables ab initio-quality simulations of rare events which would otherwise be prohibitively expensive, ranging from crystallization {% cite Bonati2018SiliconMetadynamics %} to phase diagrams {% cite Niu2020AbGallium %} and from chemical reactions in solvent {% cite Yang2022UsingWater %} to heterogeneous catalysis {% cite Bonati2023TheFe111 %} and to phase-change materials {% cite AbouElKheir2024UnravelingPotential %}.

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/2018-prl-silicon.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/2020-natcomm-gallium.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/publication_preview/2024-npj-gesbte.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: silicon crystallization. Middle: gallium phase diagram. Right: GeSbTe crystallization.
</div>

**Data-efficient active learning**. 
To make the machine learning potentials routinely applicable and to model processes in more realistic conditions and with higher levels of electronic theory, it is essential to have data-efficient techniques. To this end, I have devised a framework that integrates advanced sampling with Gaussian processes and graph neural networks to construct reactive potentials in a highly efficient manner {% cite Perego2024DataSampling %}. This data-efficient active learning (DEAL) scheme enables an ab initio-quality discovery of transition paths and ensures uniform accuracy along them, with a 20-fold increase in data-efficiency with respect to previous approaches. 

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/deal-1.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/deal-2.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Left: gaussian-process based enhanced sampling exploration of reaction pathways. Right: data-efficient active learning selection.
</div>

**Transfer learning for atomistic simulations**. 
Furthermore, we are also developing transfer learning approaches to extract the representation learned from graph neural networks trained on large datasets and transfer them to new systems via kernel methods, enabling high (computational and data) efficiency  {% cite Falk2023Transfer %} {% cite Novelli2025FastPotentials %}.

