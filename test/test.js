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

var tape = require( 'tape' );
var noop = require( '@stdlib/utils-noop' );
var randu = require( '@stdlib/random-iter-randu' );
var Float64Array = require( '@stdlib/array-float64' );
var Complex64Array = require( '@stdlib/array-complex64' );
var array2iterator = require( '@stdlib/array-to-iterator' );
var Complex64 = require( '@stdlib/complex-float32-ctor' );
var realf = require( '@stdlib/complex-float32-real' );
var imagf = require( '@stdlib/complex-float32-imag' );
var iterator2array = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof iterator2array, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided an iterator argument which is not an iterator', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterator2array( value );
		};
	}
});

tape( 'the function throws an error if provided an iterator argument which is not an iterator (callback)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterator2array( value, noop );
		};
	}
});

tape( 'the function throws an error if provided an iterator argument which is not an iterator (output argument)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterator2array( value, [] );
		};
	}
});

tape( 'the function throws an error if provided an iterator argument which is not an iterator (output + callback arguments)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterator2array( value, [], noop );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterator2array( randu(), value );
		};
	}
});

tape( 'the function throws an error if provided a callback argument which is not a function (output argument)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			iterator2array( randu(), [], value );
		};
	}
});

tape( 'the function throws an error if provided insufficient arguments', function test( t ) {
	t.throws( iterator2array, TypeError, 'throws an error' );
	t.end();
});

tape( 'the function creates an array from an iterator', function test( t ) {
	var expected;
	var values;
	var actual;
	var it;

	values = [ 1, 2, 3, 4 ];
	it = array2iterator( values );

	actual = iterator2array( it );
	expected = values;

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports providing a callback to be invoked for each iterated value', function test( t ) {
	var expected;
	var values;
	var actual;
	var it;

	values = [ 1, 2, 3, 4 ];
	it = array2iterator( values );

	actual = iterator2array( it, scale );
	expected = [ 1, 4, 9, 16 ];

	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function scale( v, i ) {
		return v * (i+1);
	}
});

tape( 'the function supports filling a provided output array', function test( t ) {
	var expected;
	var values;
	var actual;
	var out;
	var it;

	values = [ 1, 2, 3, 4 ];
	it = array2iterator( values );

	out = new Float64Array( values.length );
	actual = iterator2array( it, out );
	expected = new Float64Array( values );

	t.equal( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports filling a provided output array (accessors)', function test( t ) {
	var expected;
	var values;
	var actual;
	var out;
	var it;
	var z1;
	var z2;
	var i;

	values = [
		new Complex64( 1.0, 2.0 ),
		new Complex64( 3.0, 4.0 ),
		new Complex64( 5.0, 6.0 ),
		new Complex64( 7.0, 8.0 )
	];
	it = array2iterator( values );

	out = new Complex64Array( values.length );
	actual = iterator2array( it, out );
	expected = new Complex64Array( values );

	t.equal( actual, out, 'returns expected value' );
	for ( i = 0; i < expected.length; i++ ) {
		z1 = actual.get( i );
		z2 = expected.get( i );
		t.equal( realf( z1 ), realf( z2 ), 'returns expected value' );
		t.equal( imagf( z1 ), imagf( z2 ), 'returns expected value' );
	}
	t.end();
});

tape( 'the function supports filling a provided output array (short iterator)', function test( t ) {
	var expected;
	var values;
	var actual;
	var out;
	var it;

	values = [ 1, 2 ];
	it = array2iterator( values );

	out = new Float64Array( 4 );
	actual = iterator2array( it, out );
	expected = new Float64Array( [ 1, 2, 0, 0 ] );

	t.equal( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();
});

tape( 'the function supports filling a provided output array (callback)', function test( t ) {
	var expected;
	var values;
	var actual;
	var out;
	var it;

	values = [ 1, 2, 3, 4 ];
	it = array2iterator( values );

	out = new Float64Array( values.length );
	actual = iterator2array( it, out, scale );
	expected = new Float64Array( [ 1, 4, 9, 16 ] );

	t.equal( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function scale( v, i ) {
		return v * (i+1);
	}
});

tape( 'the function supports filling a provided output array (callback; short iterator)', function test( t ) {
	var expected;
	var values;
	var actual;
	var out;
	var it;

	values = [ 1, 2 ];
	it = array2iterator( values );

	out = new Float64Array( 4 );
	actual = iterator2array( it, out, scale );
	expected = new Float64Array( [ 1, 4, 0, 0 ] );

	t.equal( actual, out, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function scale( v, i ) {
		return v * (i+1);
	}
});

tape( 'the function supports specifying the evaluation context of a provided callback', function test( t ) {
	var expected;
	var actual;
	var values;
	var ctx;
	var it;

	values = [ 1, 2, 3, 4 ];
	it = array2iterator( values );

	ctx = {
		'count': 0
	};
	actual = iterator2array( it, scale, ctx );
	expected = [ 1, 4, 9, 16 ];

	t.equal( ctx.count, 4, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function scale( v, i ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return v * (i+1);
	}
});

tape( 'the function supports specifying the evaluation context of a provided callback (output argument)', function test( t ) {
	var expected;
	var values;
	var actual;
	var out;
	var ctx;
	var it;

	values = [ 1, 2, 3, 4 ];
	it = array2iterator( values );

	ctx = {
		'count': 0
	};
	out = new Float64Array( values.length );
	actual = iterator2array( it, out, scale, ctx );
	expected = new Float64Array( [ 1, 4, 9, 16 ] );

	t.equal( ctx.count, 4, 'returns expected value' );
	t.deepEqual( actual, expected, 'returns expected value' );
	t.end();

	function scale( v, i ) {
		this.count += 1; // eslint-disable-line no-invalid-this
		return v * (i+1);
	}
});

tape( 'if provided an output argument, the function supports infinite iterators', function test( t ) {
	var out = iterator2array( randu(), new Float64Array( 10 ) );
	t.equal( out.length, 10, 'has expected length' );
	t.end();
});

tape( 'if provided an output argument, the function supports infinite iterators (callback)', function test( t ) {
	var out = iterator2array( randu(), new Float64Array( 10 ), scale );
	t.equal( out.length, 10, 'has expected length' );
	t.end();

	function scale( v, i ) {
		return v * (i+1);
	}
});
