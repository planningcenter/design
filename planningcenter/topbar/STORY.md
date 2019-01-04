# TOPBAR
A shared topbar for planning center apps

<!-- toc -->

* [Status](#status)
* [History](#history)
  + [Problems](#problems)
  + [New year, new topbar](#new-year-new-topbar)
  + [Development](#development)
  + [Expectations](#expectations)
  + [Mid-course corrections](#mid-course-corrections)
  + [API optimizations](#api-optimizations)
  + [What kind of day has it been?](#what-kind-of-day-has-it-been)
  + [What I'd change](#what-id-change)
* [Design decisions](#design-decisions)
  + [There is no Topbar](#there-is-no-topbar)
  + [Each team owns their topbar](#each-team-owns-their-topbar)
* [20 Questions](#20-questions)
  + [Why rewrite?](#why-rewrite)
  + [Why remove Topbar from Interfaces?](#why-remove-topbar-from-interfaces)
  + [Why an NPM Module?](#why-an-npm-module)
  + [Why Inline Styles](#why-inline-styles)
  + [Why TypeScript](#why-typescript)
  + [Why no tests?](#why-no-tests)
* [On TypeScript](#on-typescript)
  + [Examples](#examples)
* [Component overview](#component-overview)
  + [`SmallTopbar` and `NotSmallTopbar`](#smalltopbar-and-notsmalltopbar)
  + [`SmallRoute` and `NotSmallRoute`](#smallroute-and-notsmallroute)
  + [`AppsProvider` and `ConnectedPeople` Providers](#appsprovider-and-connectedpeople-providers)
  + [`DisplaySwitch`](#displayswitch)
  + [`BellIcon`, `SpyglassIcon`, and `XIcon`](#bellicon-spyglassicon-and-xicon)
* [back to top](#back-to-top)
* [Issues and Critique](#issues-and-critique)
* [TODO](#todo)
* [Other Notes](#other-notes)

<!-- tocstop -->

## Status
*Topbar* is implemented in all eight of Planning Center's flagship apps.
It will be enabled simultaneously on (or close to) November 1st. 

[back to top](#topbar)

## History
There are a lot of questions about the history, and process of developing *Topbar*.
I thought I'd expose some context.

I started the *Topbar* discussions 2 1/2 years ago.
The goal: unify the 8 disparate topbars and provide shared placement for Search and Notifications.

### Problems
We had a problem.
*Interfaces Topbar* uses a floating element layout to support older browsers.
For the uninitiated, that means elements don't have any meaningful relationship to one another.
So you can't say "put this Search component between the routes and user badge".
You have to say "when the screen is exactly this width, put Search this many pixels from the right of the screen. If it gets opened, make sure that it's no wider than this many pixels".

That's not a scalable way to move our apps forward with new features.

We had another problem.

Since long before I was here, the planning center top bar has had these very strong vertical delineators.
Those stronge vertical lines made a visual affordance for the icons.
But they had came with a side-effect.
Everyone designed layouts to those vertical lines,
even though they were arbitrary.

I wanted to see those lines gone so we could free our layouts from an arbitrary horizontal rhythm.

### New year, new topbar
At the beginning of the year, Shane, the PMs, and I picked discussions of the next topbar.

Time had marched on and CSS Flexbox was something we could expect our users to have.

New layout system: *check*.

Removing the vertical lines was more hard-won.
They were an affordance for the icons, which have been a fixture of the Planning Center topbar for a decade.
Many layouts played directly to it.
But everyone came ready to play and compromised to make it work.

Removal of strong vertical rules: *check*

### Development
We decided to take a sprint and tackle one app at one breakp: Services desktop.

Shane, Aaron and I worked to finalize menus, layouts, and treatments for Services *Topbar*.
It's the most complex use-case for *Topbar*.
So, build it for Services and every other app should work.

### Expectations
Jeff set the early expectations for what it should be capable of:
1. And you shall love the API with all your heart, soul and mind.
1. The second is like it: work on any framework as you work on Rails.

*(Mark 12:30-31)*

The drone in my head sounded more like this:
1. API all-the-things.
1. React all-the-things.

### Mid-course corrections
I wasn't able to deliver on the original expectation of Services desktop-only.
Fortunately, I discovered that pretty quickly.
*Interfaces Topbar* (particularly for Services) sprawled across Rails views, CSS classes, jQuery event handlers, and React components.
I couldn't make a clean cut without rewriting parts of the old,
making the all-app transition more difficult.

So, I added a mobile implementation to the punch list.

In addition to that, we needed to decide whether the initial view would be rendered in React.
*Interfaces Topbar* uses React components for menus but the initial view is rendered by Rails.
If we were going to follow through requirement #1 (love the API with all your heart),
React needed to render the initial view.

This was a problem before Turbolinks5 because you'd see a flicker—an offset between the server-rendered view and the JavaScript-rendered view.
Fortunately, it's largely not a problem with Turbolinks5.

Hurray!

So, Jeff and I decided to move forward with React-all-the-things.

### API optimizations
In the last two weeks of the project, I took a number of conversations with James about how to optimize API requests.

The niave version of the component made four API requests on every page load:
* `/`
* `/me`
* `/me/apps`
* `/me/connected_people`

I'm no performance specialist but that seemed excessive.

At first we devised a plan to coalesce everything into the `/me` endpoint.
But we'd still be making 1 request every view.
And we'd likely hit that endpoint again every time a user interacted with a menu.

After thinking and rethinking, we thought it best to obey the spirit of law #1 (API-all-the-things) and not the letter. The truth is, we had that information availabe in Rails, at the render-site of the component.
So we made a concession and passed user and org data from Rails.

Now, this doesn't break the spirit of the law because a non-Rails app can still write a data-providing component that interfaces with API.
And given that we don't have any use-cases for that yet,
there's was no point in being staunch about a universal solution.

So, we have options and we're also not pegging the API every request.

Thanks, James.

### What kind of day has it been?
I didn't make the original 6-week goal of getting the desktop-only React *Topbar* in Services.

Excluding time spent on other projects,
it took 9 weeks to design and develop a responsive, QA'd and deliverable *Topbar* to all 8 apps.

I don't know whether to feel good or bad about it but that's how long it took.

### What I'd change
Decisions were being made between Berg, Aaron, Shane, and I.
I don't think I did a great job of communicated the finer details in People stand-ups, when not directly discussing items with Berg. I know we discussed some of the major points in stand-ups (use of NPM module, API-driven, React-all-the-things),
but some of the finer details got glossed over between my work with the Services team and daily People stand-ups.

On a technical level, there were no big changes.
There were only shifts in the existing boundaries.
We used React before, we simply needed to use more of it.
It was a library inside another library before, and we wanted pull it out.
It used hand-drawn UMD definitions, and we wanted to leverage Node tooling for builds and testing.
Same thing; different edges.

I probably should have been in Services stand-ups for the build out.

That said, I've done my best to fill in gaps in the [20 Questions](#20-questions) section.


[back to top](#topbar)

## Design decisions
### There is no Topbar
There is no single, black-box *Topbar*.

Topbar is a set of components designed for composition.
So, if your App's topbar is Voltron, *Topbar* is Keith, Lance, Pidge, Sven, Hunk, and Princess Allura.
If your App's topbar is Captain Planet, *Topbar* is The Planeteers: Gi, Kwame, Linka, Ma-Ti, and Wheeler.

You get the picture.

### Each team owns their topbar
With *Topbar*, each app-team owns their topbar implementation.
If you want to start implementing Search, go for it.
Notifications? Do it.
Topbar is opinionated about placement and implementation details that don't change.
However, it returns control to the app for for things that can change.

The primary mechanism for this is the [render prop](http://reactpatterns.com/#render-callback).
So familiarize.

[back to top](#topbar)

## 20 Questions
### Why rewrite?
As detailed in [#problems](#problems),
The *Interfaces Topbar* was written to support browsers without CSS Flexbox.
*People* and *Services* search elements had to be positioned manually for every breakpoint.
*Check-Ins* "Make Station" button and *Registrations* notifications were not not exempt.

In adding affordances for Search and Notifications (across apps),
we needed to rewrite with more powerful layout primitives.

[back to top](#topbar)

### Why remove Topbar from Interfaces?
*Interfaces* is a big project and the sprawling *Interfaces Topbar* implementation is not discoverable in it.

We've been wanting to separate the two projects for years but never had the time.

[back to top](#topbar)

### Why an NPM Module?
In the [#expectations](#expectations) section,
I talk about the importance of developing a topbar that is indifferent to server-side framework.

Over the last year, all teams have done work to support Node modules in Rails.
Now—with webpacker—support is built right into the framework.
There's little sense in keeping a Ruby gem on *NPM*.
Likewise, there's no sense housing JavaScript modules in *RubyGems*.

[back to top](#topbar)

### Why Inline Styles
It's the most direct, overridable path to styling components.

If we run into real problems, we can add indirection then.

[back to top](#topbar)

### Why TypeScript
The most important feature of any library is a reliable API.
I needed a way track breaking changes better than memory and assumption.

I could write a bunch of tests or use a language with first class interfaces.

I chose the latter. And I did so with care.

I'll answer a few questions to illustrate.

#### How does TypeScript impact me and my app?
> It doesn't. I export all the right builds for modern loaders

#### Do I need to know TypeScript to use the Topbar?
> No

#### Does my app need to understand TypeScript?
> No

#### Is there a UMD I can use in apps without a module loader?
> Yes

#### Do I need to know TypeScript to land fixes in Topbar?
> Unlikely

#### Why use TypeScript if it doesn't impact me or my app?
> It helps me identify breaking API changes

#### What are you using it for?
> I use it where I would have used `prop-types`. If you don't need to change a component's interface, you don't need to know anything about TypeScript.

#### Could TypeScript be easily removed if objectives change?
> Yes. By removing the component type annotations and changing the `.tsconfig` to be more permissive about type enforcement.

#### Why not Flow?
> TypeScript is a more mature product than Flow. It provides quicker authoring feedback. It's a language. So, unlike FlowBabelStage0Script, it doesn't vary (unreliably) from project to project. (Read Google-ability)

### Why no tests?
This thing was changing on a daily basis.
Now that it's PM approved in all apps, all start building a backstop for it.

My strategy for testing is simple.
Because the interfaces are already covered by the type system,
I'll do a snapshot test for each of the 8-apps,
in the 3 supported width ranges.

I don't have any plans to test the API components but that might change.

## On TypeScript


The exported components make heavy use of [interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html).

You'll see, in a couple places `public static defaultProps`, which is the way you set `defaultProps` on a TypeScript classes.

That's it, the rest is the JavaScript you know and love.

### Examples
#### Component Class
Just so you know what to expect, here's what a component class looks like in TypeScript:

```ts
class MyComponent extends React.Component<{}, {}> {
  render() {
    return <div />
  }
}
```

See that `<{}, {}>` bit?

That defines the interface for the component.
The two empty objects represent `props` and `state`.
In this component their empty and must always be empty.

#### Component Class with required props
Here's a component that takes a `name` prop.
It's string.

```ts
class Greeting extends React.Component<{ name: string }, {}> {
  render() {
    return (
      <h1>
        {this.props.name.toUpperCase()}.
      </h1>
    )
  }
}
```

Now, if I don't render the component with `name` or try to pass a `number`, I'll get an error.

#### Component Class with optional, default props
Let's add an optional `punctuation` prop to `Greeting` and set a default value for it.

```ts
class Greeting extends React.Component<{
  name: string,
  punctuation?: string,
}, {}> {
  public static defaultProps {
    punctuation: "."
  }

  render() {
    return (
      <h1>
        {this.props.name.toUpperCase()}
        {this.props.punctuation}
      </h1>
    )
  }
}
```

This is about all the TypeScript you'll see.
And if you find yourself needing to change an interfaces, you'll see why this is so valuable in a library.

[back to top](#topbar)

## Component overview
This is the high-level look at the exported components and what purpose they serve.

### `SmallTopbar` and `NotSmallTopbar`
Topbar has two primary exports: `SmallTopbar` and `NotSmallTopbar`.
These components are home to the implementations for small and large displays, respectively.
When provided all the correct props, they can be independently rendered with none of the other components.

Baked into these two components are all the details of display and interaction.

### `SmallRoute` and `NotSmallRoute`
Topbar exposes to route components.
These are effectively styled anchor tags.
The encapsulate the basic out-of-the-box styles apps use today.
However, they can easily be replaced with implementations of your own.

```ts
<SmallRoute
  href={uri}
  active={someBooleanExpression}
>
  {name}
</SmallRoute>
```

### `AppsProvider` and `ConnectedPeople` Providers
Topbar exports two data-providing components that interact with PCO API endpoints.
These components fetch data, cache it in localStorage, and expose it via the `render` function prop.
The first argument `render` callbacks is called with is the 

```js
<AppsProvider
  render={(apps, refetchApps) =>
    <ul onSomeEvent={reFetchApps}>
      {apps.map(({ id, attributes: app }) =>
        <li key={id}>{attributes.name}</li>
      )}
    </ul>
  }
>
```

They can easily be replaced with implementations of your own.

### `DisplaySwitch`
This is a very implementation-specific component.

It takes `smallTopbar` and `notSmallTopbar` as props.
It renders `smallTopbar` when the display is smaller than `720px` and `notSmallTopbar` otherwise.

```ts
<DisplaySwitch
  smalTopbar={() =>
    <SmallTopbar {...allTheRequiredProps} />
  }
  notSmallTopbar={() =>
    <SmallTopbar {...allTheRequiredProps} />
  }
>
```

Both functions get called with a string.
It's a shorthand representation of the current breakpoint.

Here's a legend:

    "xs" =  480px >
    "sm" =  600px >
    "md" =  720px >
    "lg" =  960px >
    "xl" = 1200px >

```ts
<DisplaySwitch
  smalTopbar={breakpoint =>
    <SmallTopbar
      {...allTheRequiredProps}
      breakpointConditionalProp={breakpoint === "xs"}
    />
  }
  notSmallTopbar={breakpoint =>
    <SmallTopbar
      {...allTheRequiredProps}
      breakpointConditionalProp={["xl", "lg"].indexOf(breakpoint) !== -1}
    />
  }
>
```

This can easily be replaced with implementations of your own.

[back to top](#topbar)

### `BellIcon`, `SpyglassIcon`, and `XIcon`
These components simply styled SVGs.

`BellIcon` is the most advanced with some options for showing the indicator dot.
In leu of docs, checkout the implementation for how.

[back to top](#topbar)

## Issues and Critique
If you have questions or concerns, please make them known in the [Github issue tracker](https://github.com/planningcenter/topbar/issues).
I will do my best to provide meaningful context and loop in the parties with whom the decisions were made.

[back to top](#topbar)

## TODO
These are things I'd like to see improved.

* no apps state
* no connectedPeople state
* specify and extract remaining `any` types
* improve a11y of icons and buttons
* better solve for all my `.toLowerCases()`
* create enum interface for breakpoint strings
* #refactor-all-icons-to-32px-base
* #improve-outline-a11y https://hackernoon.com/removing-that-ugly-focus-ring-and-keeping-it-too-6c8727fefcd2

## Other Notes
The final component API was brought to you by the [Dear Evan Hansen](https://genius.com/albums/Benj-pasek-and-justin-paul/Dear-evan-hansen-original-broadway-cast-recording) soundtrack.
God only knows how this album was able to give me such supernatural focus.
I only wish I'd found it earlier in the process.
