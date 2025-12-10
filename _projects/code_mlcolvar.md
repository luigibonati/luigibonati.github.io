---
layout: page
title: mlcolvar
description: Machine learning collective variables for enhanced sampling
img: assets/img/mlcolvar.png
importance: 1
category: code
related_publications: true
---

**Website**: [https://mlcolvar.readthedocs.io](https://mlcolvar.readthedocs.io)

**Github**: [luigibonati/mlcolvar](https://github.com/luigibonati/mlcolvar)

**Publication**: [A unified framework for machine learning collective variables for enhanced sampling simulations: mlcolvar](https://doi.org/10.1063/5.0156343) {% cite Bonati2023Amlcolvar %}

---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/mlcolvar.png" title="mlcolvar" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

`mlcolvar` is a Python library aimed to help design data-driven collective-variables (CVs) for enhanced sampling simulations. The key features are:

1. A unified framework to help test and use (some) of the CVs proposed in the literature. 
2. A modular interface to simplify the development of new approaches and the contamination between them.
3. A streamlined distribution of CVs in the context of advanced sampling. 

The library is built upon the [PyTorch](https://pytorch.org/) ML library as well as the [Lightning](https://lightning.ai/) high-level framework. 

---

Some of the **CVs** which are implemented, organized by learning setting:
- _Unsupervised_: PCA, (Variational) AutoEncoders [[1](http://dx.doi.org/%2010.1002/jcc.25520),[2](http://dx.doi.org/%2010.1021/acs.jctc.1c00415)]
- _Supervised_: LDA [[3](http://dx.doi.org/10.1021/acs.jpclett.8b00733)], DeepLDA [[4](http://dx.doi.org/%2010.1021/acs.jpclett.0c00535)], DeepTDA [[5](http://dx.doi.org/%2010.1021/acs.jpclett.1c02317)]
- _Time-informed_: TICA [[6](http://dx.doi.org/%2010.1063/1.4811489)], DeepTICA/SRVs [[7](http://dx.doi.org/10.1073/pnas.2113533118),[8](http://dx.doi.org/%2010.1063/1.5092521)], VDE [[9](http://dx.doi.org/10.1103/PhysRevE.97.062412)]

And many others can be implemented based on the building blocks or with simple modifications. Check out the [tutorials](https://mlcolvar.readthedocs.io/en/stable/tutorials.html) and the [examples](https://mlcolvar.readthedocs.io/en/stable/examples.html) section of the documentation.