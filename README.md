# The Face of NelFoo

This is the frontend repository for the Nellore Foods Web Application. 
This website will be hosted at [nelfoo.com](https://nelfoo.com) in the near
future once it gets to the MVP stage.

As of right now, the website is in the Proof-of-Concept stage, and is under
active development. In the case that you wish to assist in it's development,
we'd be super glad to have you.

Please find the instructions to set up the project infrastructure below.

## The NelFoo Infrastructure

The nelfoo-space is powered by individual projects that come up to become one working
model by the end of it. The links to these projects are provided down below,

- nf-front < this repository
- [nf-back](https://git.sr.ht/~dat-adi/nf-back)

Please note that you will need to set up both repositories on your development
system in order for the application to run as expected. If the project fails
anywhere due to the absence of another service, please raise a [ticket](https://git.sr.ht/~dat-adi/nelfoo-bugs)
because that's not expected behavior.

## Setting up the frontend

The frontend is based on SvelteKit + Skeleton UI toolkit, and in order to get
started working, there's three steps to be followed.

```sh
# Clone and move into the repository
git clone https://git.sr.ht/~dat-adi/nf-front
cd nf-front

# Install the dependencies
npm install

# Run the application
npm run dev

# The application now should be running at http://localhost:5173/
```

In the case that you prefer `yarn` over `npm`, you're free to proceed with your
package manager preference. However, the underlying dependencies for this 
project will depend on `npm` for the time being.

### Enabling the full experience

As mentioned before, it is recommended to be running all of the components of
the environment to test and develop effectively. By doing so, you will have the
following services running on your instance. (Assuming that the ports have not
been altered)

| Service  | Port |
| -------- | ---- |
| Frontend | 5173 |
| Backend  | 3000 |

In order to understand how to set up the backend service, please check out the
[backend repository](https://git.sr.ht/~dat-adi/nf-back).

That's it!

At this point, you should have a decent idea of why we have this repository,
and how to set up it for development.

## Contributing

As of right now, I'm still trying to figure out how to work with SourceHut, so
this section has not been implemented yet.
