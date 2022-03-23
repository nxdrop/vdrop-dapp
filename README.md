# Dedrop V2

## Development Usage

```bash
git clone https://gitcode.net/drop-v2/drop-dapp.git && cd drop-dapp
yarn install

```


## API 
前端与后端交互API list


### 加载首页Drops 项目

> drop/list

- response

```js
{
  total:40,
  pagesize:10,
  page:1,
  data:[
    {
      id:'',
      name:'',
      officalSize:'',
      logoUrl:'',
      description:'',
      dropTotal:100,
    }
  ]
}
```

### CreateDrop 参数结构

> drop/create_drop

```js

{
   info: {
      name: 'projName',
      officalSite: 'projUrl',
      logoUri: "projLogo",
      description: 'projIntro',
      dropTotal:100000, // Drop NFT total
    },
    nftname:'',
    description:'',
    image:'', // NFT image URI
    merkleRoot:'',// merkelRoot hash
    attributes: [{trait_type: '', value: 10, display_type: '' }],
    external_url: '',
}
```

> 

### Get 项目列表

> aridrops/list

- response 

```js
{
  code:0,
  msg:'ok',
  data:[
    {
        dropid: dropid,
        info: info,
        merkleRoot: merkleRoot
    }
  ]
}
```

### 获取用户 持有 NFT 与项目对应关系list

> 通过钱包获取

```json

```

