## Legend

- ▶️ Go forth. Nothing to worry about
- ⏯ Go forth with caution. There were historical concerns — possibly resolved with new information
- ⏸ Consider this…

## Things to know:

- The [Story.md](https://github.com/planningcenter/design/blob/main/planningcenter/topbar/docs/STORY.md) actually has a lot of helpful historical information in it
- [README.md](https://github.com/planningcenter/design/tree/main/planningcenter/topbar) includes links to many installations and relevant nested docs
- [PR #46](https://github.com/planningcenter/design/pull/46) is the best illustration of working toward injection in. It takes a bit of determination and convincing but yields a better result for everyone.

## Migrate to Modern React APIs? ▶️

Where components justify re-writing, anything that can be improved with Context and Hooks should be.

Both the library and local installations would gain tremendous clarity by utilizing current APIs.

There's no dogmatic use of class and render-props here. The other APIs didn't exist at the time of writing.

## Unify overall spacing and padding? ▶️

Spacing and padding decisions were all intentionally made at the time they were made. But the artifacts of those discussions were largely compromises. This pertains specifically to padding. The padding allowed us to not violate previous expectations _too_ much across the suite.

A consistent and universal padding should be considered as an adjacent task to a topper redesign.

## Accessibility improvements? ▶️

Apart from accessible markup, there has been no accessibility considerations or testing built into existing version of Topbar. That's definitely a sign of it's age and where we were at as a company in 2017.

All accessibility improvements are welcome.

Areas that would have maximal benefit:\

- Using an accessibility-considered Dropdown (like Reach UI's `Menu Button`)
- `Skip to content` link
- `:focus-visible` (with Safari fallback) for keyboard users

## Product Icons ⏯

Product Icons have an under-engineered workflow. It could be improved but it's an area where the cost-benefit of building a proper export has never been less than the effort of just adding a new icon manually.

Current process:

- There's an `.ia` file kept in the project source
- All parts of the separate — squircle, type, icon, etc.
- The parts are constructed in React components for each permutation (mobile, medium, large).

https://github.com/planningcenter/design/tree/main/planningcenter/topbar/illustrations

## Information architecture ⏯

This is an area where historical expectations played the biggest role.

An information architecture that best represent's the user's experience is: `User -> Organization -> Product`. This is an area where Planning Center has a layout challenge. Most single-product apps put user information on the right. Many native, multi-org products (Discord, etc) utilize an organization sidebar and put the user at the bottom. G Suite is the only wide-spread model we found for a service that provides a product suite where a user exist in multiple orgs with a subset of supported apps.

## Injection as a principle ⏸

Dependency injection is one of those things people love or hate. In Topbar, injection has a utility. **Injection allows for more problems to be solved by product developers and designers. Local solutions mean less library churn because 0 product-specific concerns are managed in the library.**

There have been two recent cases where this proved valuable.

- `Resources => Calendar` rebrand. Calendar was able to control `ProductSwitch` presentation via Feature Flipper without having to coordinate a Topbar migration with other apps.
- `CsrfFetch` security patch. Apps are able to update Topbar for features while (momentarily) opting out of `CSRF` `/logout` requests.

There's no hard and fast rule one what is injectable and what isn't. There is a litmus test though: "would this change introduce a library-managed conditional that isn't generally useful to all products?" If the answer is "yes," there's a good chance you should solve the problem with injection.

Topbar does a pretty good job of exporting default injectables as well.

## Composition as a principle ⏸

As it says in documentation, there is no `default export` of Topbar. Every app manages its own construction of features. Those constructions vary wildly.

This principle serves the same goal as [Injection as a principle](#injection-as-a-principle). **Composition allows for more problems to be solved by product developers and designers. Local solutions mean less library churn because 0 product-specific alterations are managed in the library.**

A few areas that are well-served by this principle:

- Calendar and Groups have `Notifications`
- Services has a `Plans` link that includes a Popover of recent events
- Services and People provide Search
- Giving links utilize a drop-shadow to separate white text from the yellow background
