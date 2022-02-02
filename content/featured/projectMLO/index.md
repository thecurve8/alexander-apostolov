---
date: '3'
title: 'Stochastic variance reduced gradient methods for training Deep Neural Networks'
cover: './thesis_cover.png'
github: 'https://github.com/thecurve8/momentum_in_DL'
external: 'https://www.epfl.ch/labs/mlo/'
tech:
  - Deep Neural Networks
  - SVRG
  - STORM
  - Variance reduced optimization
  - MetaInit
  - SGD
  - Adam
  - Pytorch
showInProjects: true
---
Semester thesis in Machine Learning Optimmization lab at EPFL

An empirical study giving insights on why variance reduced methods such as Stochastic Variance Reduced Gradient (SVRG) or STOchastic Recursive Momentum (STORM) fail on common deep neural networks such as ResNet18/101.

Additionaly, I give possible improvements for these methods by removing Batch-normalization layers from the used architecture and using initialization techniques such as MetaInit.
