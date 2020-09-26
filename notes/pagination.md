# 9/25 Pagination Specification (rough notes)

## Questions

- User testing
  _ "what do we need to validate about this?"
  _ "how do we sell it?" / "how do we get support for this?"
  _ who to validate concept with first
  _ balancing the political challenges

## What do we show for 1 page?

- Do we show pagination for just one result?
  _ Is there a standard?
  _ If we don't, how do we suggest people hide it
  _ How does that look if this is inside a foot?
  _ ...other non-conditional elements in tfoot?
  _ Filtered results experience (10+ pages down to 1 page)
  _ Is there a textual element that could be displayed in place of pagination?
  _ Tooltips over disabled results and buttons?
  _ What would migration look like if we started with all elements on the page and _later_ adopted a more sophisticated, conditional layout?

- Default: All elements on the page
- Optional: Open to localized decision-making with conditional messaging and show/hide in apps \* this is an area of unkown unkowns

### Implementation questions

- Is the condition tied to an showing/hiding an ancestor element?
- Which tables are show/hiding on one result?

## Where is the place to have long-term reviews of explorations?

## Treatment

Notes are left for posterity.
See Figma file for treatment: https://www.figma.com/file/nEpLkyf1RRGrgTgrDuLKSh/Pagination?node-id=40%3A499
See CodeSandbox for quick spike: https://codesandbox.io/s/elementspagination-spike-1c2n5?file=/src/styles.css

- Gaps
  _ 4px between concrete pages
  _ 2px between pager buttons \* 4px between pager group and pages
- Page links
  _ Color: min 3.5:1 contrast, gray, tintable
  _ Hover:
  _ background-color: light gray
  _ color:
- Target
  - background-color: _recommend_ "link blue"
  - color: white
- Ellipsis color
- Icon color
- Pagination divider
- Pager buttons
  _ background: lightest gray
  _ color: 3.5:1 on background min contrast
  _ gap: 2px
  _ states:
  _ disabled
  _ at rest
  _ hover
  _ active

- ellipsis icon or ellipsis character?

- How do we handle focus? Define it (spec) or defer it (adopt app)?

(GRAB FROM FIGMA FILE)

- Global palette
  _ Light gray
  _ button backgrounds, some one hover
  _ Darker light gray
  _ button active state
  _ Even darker gray
  _
  _ Blue
  _ target background
  - Darker blue
    _ target background :active
    _ White
    _ target text
    _ Dark gray \* Text, calculate contrast against hover state background

## Exploration

- Search glass hidden behind ellipsis might have been too clever \* dedicated icon for search could be more directly accessible

--- break ---

---

## Angela

- Why would we want to ask questions
- Reach out to real users
- Goal for internal feedback
  _ early exposure for design team, get buy-in, gain trust
  _ maybe introduce them at the prototype phase
- Sample questions:
  _ How would you navigate to page #7
  _ How many pages of results are there?
  _ How easy/difficult was it to navigate?
  _ General questions
- Workable prototype
- Walk them thru a line of thinking (strategically introduce them to discomfort)

## Shane

- Questions
  _ Spacing around ellipsis
  _ Color treatment
  _ Test different hover styles (designers only, not users)
  _ ellipses, prefer less space than more

# 9/18 Pagination Specifications

## Participants

- Angela Conlon
- Josh Wilkerson
- Shane Armitage
- Michael Chan

## Artifacts

- This file as record of thought process
- [Figma file](https://www.figma.com/file/nEpLkyf1RRGrgTgrDuLKSh/Pagination?node-id=2%3A1072) as an exploration in visual treatment and layout

## Recommendations

- Use chevron icons for "next/previous"
  - Ensure that screen readers labeling
- Pagination is not layout component
  - "sticky-ness" should be applied to layout (thead, tfoot, etc.)
- Background style belongs to layout element (table, etc)
- Separate concrete and abstract UI (e.g., prev/next and #)
- Show up to nine concrete page numbers
- Show no more than 7 elements when list is truncated
- Truncate only groups of 2 or more pages
- Forward/Back buttons are disabled when current page is first or last

### Visual state chart

- Fewer than 10 pages

```
[   | > ] [1]
[ < | > ] [1] 2 3 4
[ < | > ] [1] 2 3 4 5 6 7 8  9
[ < |   ]  1  2 3 4 5 6 7 8 [9]
```

- 10 pages or more

```
[   | > ] [1] 2  3  4  5  …  10
[ < | > ]  1 [2] 3  4  5  …  10
[ < | > ]  1  2 [3] 4  5  …  10
[ < | > ]  1  2  3 [4] 5  …  10

[ < | > ]  1  …  4 [5] 6  …  10
[ < | > ]  1  …  5 [6] 7  …  10

[ < | > ]  1  …  6 [7] 8  9  10
[ < | > ]  1  …  6  7 [8] 9  10
[ < | > ]  1  …  6  7  8 [9] 10
[ < |   ]  1  …  6  7  8  9 [10]
```

- gigantic lists

```
[   | > ] [1] 2  3  4  5 … 2360
[ < | > ]  1  2  3 [4] 5 … 2360

[ < | > ] 1 … 4    [5]    6    … 2360
[ < | > ] 1 … 2351 [2352] 2353 … 2360

[ < | > ] 1 … 2356  2357  2358 [2359]  2360
[ < |   ] 1 … 2356  2357  2358  2359  [2360]
```

## Playground

Below is the live playground of considerations, in no particular thought order.
These experiments are what shaped the outcome above.

### Experiment: Max 6 pages represented

```
< [1] 2 3 … 10 11 12 >
< 1 2 [3] … 10 11 12 >
< 1 2 3 … [10] 11 12 >
< 1 … 8 9 [10] 11 … 12 >
```

_Problem_: Having an absolute number of shown pages pagination with two ellipses not have a middle point

_Learned_: More than a max number of pages, we want a max number of "positions", whether those positions represent a page or a range

_Observations_: 7 feels like the right number. In the most complex cases, it can include both extremes, two ellipses, and 3 middle page numbers — previous, current, and next

### Experiment: Grouped Previous/Next buttons

_Thesis_: Logically, it's unintuitive that "previous/next" buttons are physically on the extremes of the full range.
If they were logically placed, they would live on each side of the current page but that's represented by the actual page numbers.

So what's the value of "previous" and "next"?
It's to allow a user to scrub thru pages without moving the mouse.

If that's the user goal, the placement current placement of previous/next buttons is only _mostly_ predictable.

First, the buttons move slightly as you move from single digit numbers to double digits — making misses possible.

Second, changing directions requires you move across the entire list of pages.

_Observations_: A better user experience for users navigating thru previous/next buttons is to _ensure_ that their position remains constant _and_ that directions are grouped close together.

Here are some experiments we ran to get there and explore alternate ideas:

#### Make First/Last Head/Tail range buttons

Include range indicator _in_ extreme buttons

```
< [1…] 9 [10] 11 […49] >
```

_Observation_: ranged buttons are hideous

#### Add Begining/End buttons

Keep the logic of Previous/Next buttons by removing notion of concrete extremes and adding fixed "beginning/end" buttons

```
⇤ < … 6 [7] 8 … > ⇥
[⇤ First] < … 6 [7] 8 … > [Last ⇥] [Page 7/112]
[⇤ First] … < 6 [7] 8 > … [Last ⇥] [Page 7/112]
[⇤ First] < [7] > [Last ⇥] [Page 7/112] * this might actually work for a simplified mobile layout
[⇤ 1 | first] < … 6 [7] 8 … > [last | 112 ⇥]
```

_Observations_:
Not knowing the "of X" pages is unsettling.
The addition of an `x/y` pages feels extranious (though informative).
Moving these extreme pages outside of "previous/next" buttons — while more correct — is awkward and visually cumbersome.
There's no oriention of numbers and ellipses that isn't confusing.

The way to clarify this arrangement is to remove range ellipses and concrete values for previous/next pages.
This is a _huge_ visual change and might be too much of departure from convention for users.
_HOWEVER_ it does present a very compelling (possible) mobile experience.

#### Previous/Next by X

Add the ability to navigate large by jumping x N pages:

```
⇤ [<10] < … 6 [7] 8 … > [10>] ⇥  | [🔽 Jump (1, 10, 20)]
```

_Observations_: This is confusing UI in cameras and editing software and it's hard to justify anyone wanting this in practice

#### Alphabetical Pagination

What might alphabetic pagination look like?

```
[⇤ A] … C [D] E … [⇥ Z]
```

_Observations_:
This is an interesting experiment but has two practical problems:

- Most of our tables are multi-dimensional. What field would this even target
- The letters themselves would require paginated results: `[⇤ A] < … C(1/9) [D](1/2) E(1/1000) … > [⇥ Z]`

#### Jump to page input

Present a condiitional UI for jumping to a page when ellipsis are shown

```
[⇤ 1] … 1234 <[1235]> 1236 … [⇥ 2500] (| Jump to: [___])
```

_Observations_:
A conditional UI might be jarring for the "filtering" use case.
([filtering use case](#filtering-use-case) is described below)

#### Max 7 elements, including ellipsis

- Separate concrete and abstract UI (e.g., prev/next and #)
- Show up to nine concrete page numbers
- Show no more than 7 elements when list is truncated
- Truncate only groups of 2 or more pages
- Forward/Back buttons are disabled when current page is first or last

```
[ < | > ] 1 2 3 5 6 7 8 9
[ < | > ] 1 2 3 4 5 (6...9) 10
[ < | > ] 1 (2...5) 6 7 8 9 10
[ < | > ] 1 (2...9) 10 11 12 (13...17) 18
```

#### … as button to toggle "go to" UI

Ellipsis act as actionable button to toggle a "go to page" ui.

- Ellipses are actional buttons
  - on hover, reveal a "search" icon on hover
  - on click, toggle a "go to" ui
- Go to ui includes the following
  - input, validating available page range
  - go button
    - should be `enter`-able and first tabbable
  - cancel/close button
  - `/ {total pages}` statement

_Considerations_:

- This adds functionality without requiring a behavior change
- It repurposes an otherwise useless indicator
- It puts access to pages in a place where someone might be inclined to reach for (expect) them
- It hides other consideration that would be contextually confusing
- Input will pre-populate with current selected page so you don't have to escape out to remember what the current page is
- Forward/back buttons will remain visible and decrement/increment page number in the text input
- Go should be styled look like the currently selected page style to help
- Cancel should be styled like the forward/back buttons

```
[ < | > ] 1 … 8 [9] 10 … 19

:hover

[ < | > ] 1 🔍 8 [9] 10 … 19

:click

[ < | > ] [9] / 19 [➡️][×]
```

### Filtering use case

- start: unfiltered -> 2500 pages
  - user sees all UI options
- action: filter for first name containing "e"
  - user sees reduced list with conditional UI options hidden

_Observations_:
Pagination shouldn't jump around or conditionally show options as the user filters results

## Concerns and Curiosities

- How does the proposed forward/back buttons impact layout and the current "centered" standard?
- Is there an impact on right/left-handedness

## Next steps

- Explore visual treatments
- Define stylistic specification
- Implement baseline CSS implementation
- Create prototype and questionnaire for internal research (not feedback) among other designers, support agents, and PMs
