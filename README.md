# Tools to assist in standardizing APIs

## Problem Statement

- When does it make sense to bother to consider identifying, communicate and enforce an API standard?  
- What would need to be in place to achieve some level of standardization?



### Standards that can be considered for an API

First its worthwhile to identify things that could be candidates for standardization.  The following are representations about which there could be benefits from standardization.

- How are dates represented
- How are date times represented?
- How are currencies represented?

### Considerations

- What is everyone else doing
- Are there tools we can use to adopt the standard
- Is there much effort to adopt a standard
- Is there a way to enforce the standard

### Background

By APIs we are talking about REST APIs generally with json payloads as this seems to where everyone else to moving to.

API implementations and clients can be written in a number of languages.  To date this analysis will consider
- java,
- javascript,
- typescript
- C#

but could be extended to

- go
- ruby
as other popular languages.

Json Schema is a specification used to define API payloads.

There are a number of validation engines available in different landuages which understand Json Schema and can validate Json payloads against the schema.

Json Schema does not currently have many standardized primitives and hence there is the real possibility of variation.


#### Approach

In other to get some level of standardization the approach is to
- define APIs in contracts based on Json Schema
- where the schemas declare regular expression patterns for standard types
- and provide libraries to the developer to convert between propertys and language specific primitives
- and provide examples for how to enable serialization/deserialization from and to the standards in languages specific conversion optimizations.

### Standardizing Date

The Json Schema 0.4 does not have a primitive for Date. However it indicates that in future the RFC3339 standard will be used.

We are still left to decide if Dates should be represented with a time component (as they are in C#) or not (as in Java8 with its LocalDate).

The approach taken here is to represent dates without an time component nor time zone component.


### Standardizing Date Time

The Json Schema 0.4 does not have a primitive for DateTime. However it indicates that in future the RFC3339 standard will be used.

We are still left to decide if DateTime should be represented without a time component, with time always in UTC or to support date times in a non-UTC or local format.

The approach taken here is to represent datetime always with a time component and to support times in UTC or non-UTC.


### Standardizing Currency

The Json Schema 0.4 does not have a primitive for Currency.

We are left to decide if currency is represented as int,number or string.

The approach taken here is to represent Currencies as string conforming to a regular expression which allows 0 or 2 decimal places only.
