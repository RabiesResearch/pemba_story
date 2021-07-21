# Knitting to github pages

rmarkdown::render(input = here::here("rmd_draft/working.Rmd"), 
                  output_file = here::here("docs/index_rmd.html"))


rmarkdown::render(input = here::here("rmd_draft/policy_brief.Rmd"), 
                  output_file = here::here("docs/policy_brief.html"))
