---
layout: post
title: "BigTable Database Implementation & Analysis"
tags: sdefeature course
---

# Introduction

Query processing is one of the most important operations in a DBMS. Among various query operators, the join and sort operators are usually considered costly if not implemented in an efficient design. These operators are also buffer-sensitive since their performance are largely affected by the amount of available buffer. One major goal of this project phase is to analyze and understand how the size of buffer affects may largely affect the efficiency of query processing in a DBMS. To this end, we first revised the physical model of our BigTable for storing more than one logical tables. Afterwards, we implemented special RowJoin and RowSort defined in the project spec, which are not the same as those of relational databases. Moreover, we implemented GetCounts which counts the number of unique maps and a new MapInsert which inserts an individual map into a table, to analyze how the size of buffer affects different queries in our BigTable in different query cases. The detail of implementation, design choices, and a report of query analyses are included. Several known bugs and defects in our implementation are also described and discussed.

# Design and Implementation

TBA

# Results and Conclusions

TBA

# Demonstrated Skills

TBA

