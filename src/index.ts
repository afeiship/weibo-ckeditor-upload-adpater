import NxWeiboOss from '@jswork/next-weibo-oss';
import NxLcOptions from '@afeiship/next-leancloud-options';

const WEIBO_LC_ID = '60f768f6d9f1465d3b1d5c43';

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

  async upload() {
    await this.weiboOssClient();
    return new Promise((resolve) => {
      this.loader.file.then((file) => {
        this.weiboOss(file).then((url) => {
          resolve({ default: url });
        });
      });
    });
  }

  private async weiboOssClient() {
    if (this.weiboOss) return Promise.resolve(this.weiboOss);
    const { value } = await this.lcOpts.get();
    this.weiboOss = new NxWeiboOss(value);
    return this.weiboOss;
  }
}
