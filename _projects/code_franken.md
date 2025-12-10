---
layout: page
title: franken
description: Transfer learning with GNNs and random Fourier features
img: assets/img/publication_preview/2025-npj-franken.png
importance: 3
category: code
related_publications: true
---

**Website**: [https://franken.readthedocs.io](https://franken.readthedocs.io)

**Github**: [CSML-IIT-UCL/franken](https://github.com/CSML-IIT-UCL/franken)

**Publication**: [Fast and Fourier features for transfer learning of interatomic potentials](https://doi.org/10.1038/s41524-025-01779-z) {% cite Novelli2025FastPotentials %}

---

Franken is an open-source library that can be used to enhance the accuracy of atomistic foundation models. It can be used for molecular dynamics simulations, and has a focus on computational efficiency.

`franken` features include:
 - Supports fine-tuning for a variety of foundation models ([MACE](https://github.com/ACEsuit/mace), [SevenNet](https://github.com/MDIL-SNU/SevenNet), [SchNet](https://github.com/facebookresearch/fairchem))
 - Automatic [hyperparameter tuning](https://franken.readthedocs.io/notebooks/autotune.html) simplifies the adaptation procedure, for an out-of-the-box user experience.
 - Several random-feature approximations to common kernels (e.g. Gaussian, polynomial) are available to flexibly fine-tune any foundation model.
 - Support for running within [LAMMPS](https://www.lammps.org/) molecular dynamics, as well as with [ASE](https://wiki.fysik.dtu.dk/ase/).

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/projects/franken-overview.png" title="mlcolvar" class="img-fluid rounded z-depth-1" %}
    </div>
</div>

For detailed information and benchmarks please check our paper [*Fast and Fourier Features for Transfer Learning of Interatomic Potentials*](https://www.nature.com/articles/s41524-025-01779-z) [].

