## Time to lay some opinions down

- Both TypeScript (2.x) and Flow show a lot of promise for providing some type
  checks prior to your JS hitting the runtime environment.

- While Closure Compiler is still a useful tool (we really do get a lot of
  mileage out of it at Canva), it definitely takes more work to get up and 
  running with it and properly make use of it's features.  Additionally, it
  needs to play catch up with TypeScript and Flow on a number of features.

:::

## Opinions (continued)

- If I was starting a project now that I wanted to incorporate static type
  checking into I think TypeScript would be the best choice.  It's currently
  the most feature complete and a conversion from TypeScript to Flow would
  be fairly trivial (assuming the point below is considered).

- When looking at the features and functionality that TypeScript behaves I
  think a developer needs to be discerning in what they use
  (i.e. a "TypeScript: The Good Parts" would be useful).

- Flow feels like it will be the "just right" solution as it continues to 
  mature.  The fact that it built with OCaml bodes well as OCaml has some
  demonstrated capability for creating parsers and static analysers.