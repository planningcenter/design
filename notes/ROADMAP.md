# 2020 ROADMAP

A year ago I set in motion the idea of separating spec and implemention.

My hope was that we could heal some organizational divides where autonomy subverting conversations around shared user experience.  
Maybe we could return to discussions of user experience — not implemetation.

After a year, I still think it's one of my best ideas.
But I think I was a little too defesive or sheepish in my execution.

This is how I see things going into year two.

## `@planningcenter/components` as the source of truth

At the onset, I believed that flexibility was the key.  
That an app should be able to use only the components they needed.  
And that those components should be able to act as a baseline to another framework.

I think this was more gesture than anything.  
Or maybe a selfish appeal to my ego that I _could_ manage such a project.

In practice, it was overkill.  
Teams that want to use the components, want the fully baked components.  
Other teams want to start with their own primitives.

So it makes no sense to retain the complexity of a multi-package project.

### Flip the default

Moving forward, `components` is where all source code will live.  
I won't continue publishing the one-off packages until a team requests them.

This should eliminate some confusion around where source lives and how inter-component dependencies work.

## Always be working with a product team

My favorite work this year has been responding to product teams.

I'll be doing more of that this year to support design across the company and promote our way of working with and thinking about componentry.

### `@planningcenter/experimental`

`@planningcenter/experimental` came out of this and I love it.  
It's just a sock drawer of ideas.  
Having a space that is beholden to noone is amazing.

## Use Storybook

I didn't want to use this.  
I wanted to build my own — which is absolutely attributable to ego.  
I just don't have the time.

So, here we go.

### Use Chromatic

I'd like to see if we can get an open source license to use chromatic for visual regression testing.

## Clarified role of Global Design

TODO

## Post 2019 360 Review Goals

- Clearly close Basecamp discussions
  - Put formalized specifications — in text form — on planningcenter.design
  - Detail anything we know we don't know... yet
- Push DM conversation to #components to surface requests
- Publish tribal knowledge to planningcenter.design
- How/where am I surfacing trends?
- How/where am I surfacig completed work? Timeline? GD changelog?
- How/where am surfacig my successes and the successes of others?
- Communicate to Shane what my discussion goals are and point out areas I'm looking for defense.
- Push more on "facts and opinions" language
  - Fact: Spec
  - Opinions: @planningcenter/components, ui-kit, application frameworks
