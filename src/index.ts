import nx from '@jswork/next';
import '@jswork/next-weibo-oss';
import '@afeiship/next-leancloud-options';

const WEIBO_LC_ID = '60f768f6d9f1465d3b1d5c43';
const fetch = window.fetch.bind(window);
const defaults = {
  baseURL: 'https://tva1.js.work'
};

export default class {
  private loader;
  private lcOpts;
  private options;
  private weiboOss;

  constructor(inLoader, inOptions) {
    this.loader = inLoader;
    this.lcOpts = new nx.LeancloudOptions({ fetch, id: WEIBO_LC_ID });
    this.options = { ...defaults, ...inOptions };
  }

  upload() {
    return new Promise((resolve, reject) => {
      Promise.all([this.loader.file, this.weiboOssClient()])
        .then(([file]) => {
          this.weiboOss
            .upload(file)
            .then((res) => {
              resolve({ default: res[0]?.url });
            })
            .catch(reject);
        })
        .catch(reject);
    });
  }

  private weiboOssClient() {
    if (this.weiboOss) return Promise.resolve(this.weiboOss);
    const { baseURL } = this.options;
    return new Promise((resolve) => {
      this.lcOpts.get().then((res) => {
        this.weiboOss = new nx.WeiboOss(res.value, { baseURL });
        resolve(this.weiboOss);
      });
    });
  }
}
