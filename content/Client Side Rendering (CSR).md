---
title: Client Side Rendering (CSR)
publish: true
---

Rules for Client Side Rendering (CSR):

use `'use clinet'` directive to change default server component to client component. After that every code inside and all children of client component becomes `client code`

DO NOT INCLUDE SERVER COMPONENTS INSIDE CLIENT COMPONENTS!!

Client components are pre-rendered on the server to make them more smoothy on the client side and improve SEO (by static pre-rendering)

Users Browser:

- Clicking buttons
- Entering information in input fields
- Triggering events
- Using React hooks
