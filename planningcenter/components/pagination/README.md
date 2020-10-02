Codesandbox spike: https://codesandbox.io/s/elementspagination-spike-1c2n5?file=/src/App.js

- example URLs
  - `https://giving-staging.planningcenteronline.com/O127/P1437/people?page=2`
- https://github.com/ministrycentered/accounts/blob/master/app/views/people/_application_administrators_pagination.html.erb
- https://github.com/ministrycentered/accounts/blob/master/app/helpers/remote_link_pagination_helper.rb

- accessibility resources

  - https://www.a11ymatters.com/pattern/pagination/
  - https://a11y-style-guide.com/style-guide/section-navigation.html
  - https://html.spec.whatwg.org/multipage/sections.html#the-nav-element
  - https://mikewest.org/2010/02/an-accessible-pagination-pattern/
  - https://getbootstrap.com/docs/4.5/components/pagination/

- wrapped in a nav element

  - aria-label="Paginated results navigation"
  - don't use `role=navigation`
    - https://html.spec.whatwg.org/multipage/sections.html#the-nav-element

- span, visually hidden for previous/next
