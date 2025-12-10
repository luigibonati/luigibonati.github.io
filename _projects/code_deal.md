---
layout: page
title: deal
description: Data-efficient active learning for machine learning interatomic potential
img: assets/img/project_preview/deal.png
importance: 2
category: code
related_publications: true
---

**Github**: [luigibonati/DEAL](https://github.com/luigibonati/DEAL)

**Publication**: [Data efficient machine learning potentials for modeling catalytic reactivity via active learning and enhanced sampling](https://doi.org/10.1038/s41524-024-01481-6) {% cite Perego2024DataSampling %}

---

DEAL selects non-redundant structures from atomistic trajectories via Sparse Gaussian Processes (SGP), to be used to train machine-learning interatomic potentials.

**Highlights**

* Select structures based on SGP predictive variance. 
* Analyze selected structures (e.g. along the trajectory or as a function of a CV)
* Interactive visualization using [chemiscope](https://chemiscope.org/)

    <div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/deal-analysis.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/projects/deal-chemiscope.png" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

