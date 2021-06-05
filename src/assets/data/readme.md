
<!-- readme.md is generated from README.Rmd. Please edit that file -->

## Rabies data from Pemba

[rabies\_cases\_anonymized.csv](src/assets/data/rabes_cases_anonymized.csv)
are 202 suspected rabid animal cases on Pemba Island, Tanzania between
2010-01-05 - 2018-10-27. The case-infector links have been reconstructed
using methods described in [Hampson et
al. 2009](https://journals.plos.org/plosbiology/article?id=10.1371/journal.pbio.1000053).

### Metadata for columns

| Column              | Description                                                                                                             |
|:--------------------|:------------------------------------------------------------------------------------------------------------------------|
| id\_case            | The unique id of the case.                                                                                              |
| id\_progen\_tree    | The unique id of the infector identified through a combination of contact tracing and transmission tree reconstruction. |
| id\_progen\_tracing | The unique id of the infector for a subset of animals for which contact tracing data is available.                      |
| membership          | The transmission chain to which each case belongs to.                                                                   |
| utm\_easting        | The x-coordinate location (in UTM coordinates) randomly jittered by 500 - 1000 meters to preserve anonymity.            |
| utm\_northing       | The y-coordinate location (in UTM coordinates) randomly jittered by 500 - 1000 meters to preserve anonymity.            |
| species             | The species of animal.                                                                                                  |
| date\_symptoms      | The date at which the animal began showing symptoms.                                                                    |

As case locations have been anonymized, original distances between case
pairs are provided at
[dist\_between\_cases.csv](src/assets/data/dist_between_cases.csv). The
columns `id_1` and `id_2` correspond to the column `id_case` in
`rabies_cases_anonymized.csv`, and `dist_m` is the distance in meters
between the two cases.
