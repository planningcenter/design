# Component Checklist

- [] color values have css custom properties
- [] color values have js variables
- [] sizes have classes
- [] sizes are codified into js arrays
- [] extensible via component prop — as=
- [] extensible via className prop — className=
- [] extensible via children prop — children={() => {}}
- [] extensible via component composition
- [] extensible via

# What would need to happen to make it platform agnostic?

I'd love to explore these ideas again, using Context to provide different handlers.

- could a propsMap function that map considered props to different APIs?
- could className take an optional function to more extensible? className={typeof incomingClassNames === "function" ? : incomingClassNames(classes) : classes}
- could style prop as function work: style={typeof style === "function" style(componentStyles) : componentStyles}
- how could this be made to work with the style-components composition model?
