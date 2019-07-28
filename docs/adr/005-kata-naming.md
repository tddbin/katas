# 5. Kata naming

## Status

Draft

## Context

The more katas come to life and the more overlap between es6, es7, es8, etc. versions exist the more a structure is
needed on how to allow grouping the katas in any other form.
One example. ES6 has katas in the group "Array API", "Object API", "String API", etc. ES1, ES7, ES10 and other also
have katas that have the same group names and that is logically correct.

In order to make these easy to use and allow grouping, for example all Array-API-katas into one group and present 
them on the website (or somewhere else), the groups must be used consistently.

## Decision

Many katas can be put into the following X groups and this is done across the board (not only for language katas,
also for libraries, etc.) in order to have a coherent structure and make it easier for the user's to understand
where to look for katas.

### The "Xxx API" katas

The ES6 Promise katas are a very good example (not perfect at this point in time, but very good). The standards
are like this:
1. The group name is "Xxx API", for example "Promise API", "String API", ...
1. The directory name is `.../xxx-api/`, for example `es6/language/array-api`
1. The group contains API katas, such as the `Xxx.method()`, `Xxx.property` katas
    1. Two additional katas should be provided:
        1. The "Basics" kata, this kata describes basic knowledge that is needed for understanding this topic,
        for example promises need some explaination, see the [ES6 Promise "Basics" kata][1], which does that very well.
        1. "The API" kata gives a quick overview of the API to understand what can be done with it. Just pick the
        most common use case for every method/property and show it briefly, the explicit kata like "Promise.all()" will
        cover the feature more detailed, and if needed there might even be an [in-depth kata][2] for it. 
    katas for good examples  
    
### Syntax katas

Katas that help to learn syntax of JavaScript are in this group.  
These are for example "Block scope", "Template string", "Rest operator", "Destructuring" and others.

TBD: should they adhere to a naming scheme?

### TBD: Other katas???

Are there other kata types? If so, must they be described or even standardized?     

## Consequences

Kata groups become easier to identify and understand, this might also lead to more and better ways to visualize
what katas/topics exist in the different language versions and therefore will allow to become more useful.

[1]: ../../katas/es6/language/promise/basics.js
[2]: 004-in-depth-katas.md