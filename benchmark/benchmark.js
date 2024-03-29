/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench-harness' );
var isArray = require( '@stdlib/assert-is-array' );
var array2iterator = require( '@stdlib/array-to-iterator' );
var pkg = require( './../package.json' ).name;
var iterator2array = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var arr;
	var i;

	values = array2iterator( [ 1, 2, 3, 4 ] );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = iterator2array( values );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( arr ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::map', function benchmark( b ) {
	var values;
	var arr;
	var i;

	values = array2iterator( [ 1, 2, 3, 4 ] );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = iterator2array( values, transform );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( arr ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function transform( v, i ) {
		return v + i;
	}
});

bench( pkg+'::fill', function benchmark( b ) {
	var values;
	var arr;
	var out;
	var i;

	values = array2iterator( [ 1, 2, 3, 4 ] );
	out = [ 0, 0, 0, 0 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = iterator2array( values, out );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( arr ) || arr !== out ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+'::map,fill', function benchmark( b ) {
	var values;
	var arr;
	var out;
	var i;

	values = array2iterator( [ 1, 2, 3, 4 ] );
	out = [ 0, 0, 0, 0 ];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		arr = iterator2array( values, out, transform );
		if ( typeof out !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( arr ) || arr !== out ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();

	function transform( v, i ) {
		return v + i;
	}
});
