# Contributing

- Clone the repository
- Execute the `npm install --dev` command to install the dependencies
- Enable [Cross-Origin Resource Sharing (CORS)][1] in your browser of choice (through an extension)^1^.
- Either execute the `npm run dev` command to setup a development suite

^1^ **Note** Allowing every Cross-Origin request can be dangerous, make sure to disable the plugin after development!

Development
----

Running `npm run dev` will serve your content on **127.0.0.1:8080** (or localhost:8080). The content is being served by `webpack-dev-server` that watches for changes and **hot-swaps** where possible.

Bundling for distribution
----

 - Set `NODE_ENV=production`
 - Execute `npm run build` or if **webpack** is installed globally just run `webpack`

License
-

    MIT License
    
    Copyright (c) 2016 Cosb
        
    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:
    
    The above copyright notice and this permission notice shall be included in all
    copies or substantial portions of the Software.
    
    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
    SOFTWARE.

[1]: https://en.wikipedia.org/wiki/Cross-origin_resource_sharing