import NxWeiboOss from '@jswork/next-weibo-oss';
import NxLcOptions from '@afeiship/next-leancloud-options';

const WEIBO_LC_ID = '60f768f6d9f1465d3b1d5c43';
const fetch = window.fetch.bind(window);

export default class {
  private loader;
  private options;
  private lcOpts;
  private weiboOss;

  constructor(inLoader, inOptions) {
    this.loader = inLoader;
    this.options = inOptions;
    this.lcOpts = new NxLcOptions({ fetch, id: WEIBO_LC_ID });
  }

  upload() {
    return new Promise((resolve) => {
      this.weiboOssClient().then(() => {
        this.loader.file.then((file) => {
          this.weiboOss.upload(file).then((url) => {
            resolve({ default: url });
          });
        });
      });
    });
  }

  private weiboOssClient() {
    if (this.weiboOss) return Promise.resolve(this.weiboOss);
    return new Promise((resolve) => {
      this.lcOpts.get().then((res) => {
        this.weiboOss = new NxWeiboOss(res.value);
        resolve(this.weiboOss);
      });
    });
  }
}
