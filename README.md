<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# iterator2array

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create (or fill) an array from an iterator.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import iterator2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-from-iterator@v0.2.2-deno/mod.js';
```

#### iterator2array( iterator\[, out]\[, mapFcn\[, thisArg]] )

Creates (or fills) an array from an `iterator`.

```javascript
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-iter-randu@deno/mod.js';

var opts = {
    'iter': 10
};

var arr = iterator2array( randu( opts ) );
// returns <Array>
```

By default, the function creates and fills a generic `array`. To fill an array-like `object`, provide an `out` argument.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-iter-randu@deno/mod.js';

var out = new Float64Array( 10 );

var arr = iterator2array( randu(), out );
// returns <Float64Array>

var bool = ( out === arr );
// returns true
```

To invoke a function for each iterated value, provide a callback function.

```javascript
import array2iterator from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-to-iterator@deno/mod.js';

function fcn( v ) {
    return v * 10.0;
}

var arr = iterator2array( array2iterator( [ 1, 2, 3, 4 ] ), fcn );
// returns [ 10.0, 20.0, 30.0, 40.0 ]
```

The invoked function is provided two arguments:

-   `value`: iterated value
-   `index`: iterated value index

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-iter-randu@deno/mod.js';

function fcn( v, i ) {
    return v * (i+1);
}

var arr = iterator2array( randu(), new Float64Array( 10 ), fcn );
// returns <Float64Array>
```

To set the callback function execution context, provide a `thisArg`.

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-iter-randu@deno/mod.js';

function fcn( v ) {
    this.count += 1;
    return v * 10.0;
}

var ctx = {
    'count': 0
};

var arr = iterator2array( randu(), new Float64Array( 10 ), fcn, ctx );
// returns <Float64Array>

var count = ctx.count;
// returns 10
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If provided an output array, the function fills the output array with iterated values.
-   Iteration stops when an output array is full **or** an iterator finishes; whichever comes first.
-   By providing an output typed array, one avoids the temporary memory allocation when using the built-in `TypedArray.from`.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@deno/mod.js';
import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-iter-randu@deno/mod.js';
import iterator2array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-from-iterator@v0.2.2-deno/mod.js';

var opts;
var arr;
var it;
var i;

function scale( v, i ) {
    return v * (i+1);
}

// Create an iterator for generating uniformly distributed pseudorandom numbers:
opts = {
    'iter': 10
};
it = randu( opts );

// Fill an array with scaled iterator values:
arr = iterator2array( it, new Float64Array( opts.iter ), scale );

for ( i = 0; i < arr.length; i++ ) {
    console.log( arr[ i ] );
}
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/array-to-iterator`][@stdlib/array/to-iterator]</span><span class="delimiter">: </span><span class="description">create an iterator from an array-like object.</span>
-   <span class="package-name">[`@stdlib/iter-to-array-view`][@stdlib/iter/to-array-view]</span><span class="delimiter">: </span><span class="description">fill an array-like object view with values returned from an iterator.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-from-iterator.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-from-iterator

[test-image]: https://github.com/stdlib-js/array-from-iterator/actions/workflows/test.yml/badge.svg?branch=v0.2.2
[test-url]: https://github.com/stdlib-js/array-from-iterator/actions/workflows/test.yml?query=branch:v0.2.2

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-from-iterator/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-from-iterator?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-from-iterator.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-from-iterator/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-from-iterator/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-from-iterator/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-from-iterator/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-from-iterator/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-from-iterator/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-from-iterator/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-from-iterator/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-from-iterator/main/LICENSE

<!-- <related-links> -->

[@stdlib/array/to-iterator]: https://github.com/stdlib-js/array-to-iterator/tree/deno

[@stdlib/iter/to-array-view]: https://github.com/stdlib-js/iter-to-array-view/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
