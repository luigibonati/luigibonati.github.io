---
layout: page
title: Machine learning potentials
description: For rare and reactive events
img: assets/img/publication_preview/2022-cattod-urea.png
importance: 2
category: work
related_publications: true
---

The construction of ML interatomic potentials for phase transitions and chemical reactions is challenging due to the difficulty of including all relevant configurations in the training set. By integrating enhanced sampling techniques into active learning strategies we are able obtain reliable and robust machine learning potentials. This enables ab initio-quality simulations of rare events which would otherwise be prohibitively expensive, ranging from crystallization {% cite Bonati2018SiliconMetadynamics %} to phase diagrams {% cite Niu2020AbGallium %} and from chemical reactions in solvent {% cite Yang2022UsingWater %} to heterogeneous catalysis {% cite Bonati2023TheFe111 %} and to phase-change materials {% cite AbouElKheir2024UnravelingPotential %}.

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

To make the machine learning potentials routinely applicable and to model processes in more realistic conditions and with higher levels of electronic theory, it is essential to have data-efficient techniques. To this end, I have devised a framework that integrates advanced sampling with Gaussian processes and graph neural networks to construct reactive potentials in a highly efficient manner {% cite Perego2024DataSampling %}. This data-efficient active learning (DEAL) scheme enables an ab initio-quality discovery of transition paths and ensures uniform accuracy along them, with a 20-fold increase in data-efficiency with respect to previous approaches. Furthermore, we are also developing transfer learning approaches to extract the representation learned from graph neural networks trained on large datasets and transfer them to new systems via kernel methods, enabling high (computational and data) efficiency  {% cite Falk2023Transfer %} {% cite Novelli2025FastPotentials %}.

