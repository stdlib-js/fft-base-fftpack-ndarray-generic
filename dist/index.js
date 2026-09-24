/** @license Apache-2.0 */

'use strict';

/*
* When adding modules to the namespace, ensure that they are added in alphabetical order according to module name.
*/

// MODULES //

var setReadOnly = require( '@stdlib/utils-define-read-only-property/dist' );


// MAIN //

/**
* Top-level namespace.
*
* @namespace ns
*/
var ns = {};

/**
* @name cffti
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/fft/base/fftpack/ndarray/generic/cffti}
*/
setReadOnly( ns, 'cffti', require( '@stdlib/fft-base-fftpack-ndarray-generic-cffti/dist' ) );

/**
* @name cosqi
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/fft/base/fftpack/ndarray/generic/cosqi}
*/
setReadOnly( ns, 'cosqi', require( '@stdlib/fft-base-fftpack-ndarray-generic-cosqi/dist' ) );

/**
* @name rffti
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/fft/base/fftpack/ndarray/generic/rffti}
*/
setReadOnly( ns, 'rffti', require( '@stdlib/fft-base-fftpack-ndarray-generic-rffti/dist' ) );

/**
* @name sinqi
* @memberof ns
* @readonly
* @type {Function}
* @see {@link module:@stdlib/fft/base/fftpack/ndarray/generic/sinqi}
*/
setReadOnly( ns, 'sinqi', require( '@stdlib/fft-base-fftpack-ndarray-generic-sinqi/dist' ) );


// EXPORTS //

module.exports = ns;
