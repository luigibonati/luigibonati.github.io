---
layout: page
title: deal
description: Data-efficient active learning for machine learning interatomic potential
img: assets/img/projects_preview/deal.png
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

    <img src="examples/formate/imgs/analysis.png" alt="drawing" width="824"/>
* Interactive visualization using [chemiscope](https://chemiscope.org/)

    <a href="https://chemiscope.org/?load=https://raw.githubusercontent.com/luigibonati/DEAL/refs/heads/main/examples/formate/selection/deal_0.1_chemiscope.json.gz"> <img src="examples/formate/imgs/chemiscope-viewer.png" alt="drawing" width="412"></a>