# weibo-ckeditor-upload-adpater
> Weibo ckeditor upload adapter.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```shell
npm install @jswork/weibo-ckeditor-upload-adpater
```

## usage
```js
import WeiboCkeditorUploadAdpater from '@jswork/weibo-ckeditor-upload-adpater';
import ReactCkeditor from '@jswork/react-ckeditor';

// usage
<ReactCkeditor
  value={this.state.value}
  onChange={this.handleChange}
  imageUploadAdapter={WeiboCkeditorUploadAdpater}
/>
```

## license
Code released under [the MIT license](https://github.com/afeiship/weibo-ckeditor-upload-adpater/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/weibo-ckeditor-upload-adpater
[version-url]: https://npmjs.org/package/@jswork/weibo-ckeditor-upload-adpater

[license-image]: https://img.shields.io/npm/l/@jswork/weibo-ckeditor-upload-adpater
[license-url]: https://github.com/afeiship/weibo-ckeditor-upload-adpater/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/weibo-ckeditor-upload-adpater
[size-url]: https://github.com/afeiship/weibo-ckeditor-upload-adpater/blob/master/dist/weibo-ckeditor-upload-adpater.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/weibo-ckeditor-upload-adpater
[download-url]: https://www.npmjs.com/package/@jswork/weibo-ckeditor-upload-adpater
