import { getNFTs } from '@/libs/nftsapi'
import * as types from './mutation-types'

export const loadNFTsList = async ({ commit }, selectedAddress) => {
  if (selectedAddress) {
    const resp = await getNFTs(selectedAddress)
    const { ownedNfts } = resp

    if (ownedNfts && ownedNfts.length) {
      let nfts = ownedNfts.reduce((prev, curr) => {
        const tokenId = curr.tokenId ? hex2int(curr.tokenId) : 0
        const tokenUri = curr.tokenUri
        const metadata = curr.metadata
        const src = curr.media && curr.media.length > 0 ? curr.media[0].raw : ""
        const title= curr.title
        
        let d = { ...d, tokenId, tokenUri, metadata, src ,title}
        prev = prev.concat([d])
        return prev
      }, [])
      console.log(nfts,"====nfts", ownedNfts)
      commit(types.UPD_NFTS_LIST, nfts)
    } else {
      throw new Error('No nfts.')
    }
  } else {
    throw new Error(msg || 'no nfts')
  }
}

/**
 * 十六进制转换十进制
 * @param {十六进制} hex 
 * @returns 
 */
function hex2int(hex) {
  if (!hex) {
    return 0;
  }
  hex = hex.replace('0x', '')

  var len = hex.length, a = new Array(len), code;
  for (var i = 0; i < len; i++) {
    code = hex.charCodeAt(i);
    if (48 <= code && code < 58) {
      code -= 48;
    } else {
      code = (code & 0xdf) - 65 + 10;
    }
    a[i] = code;
  }

  return a.reduce(function (acc, c) {
    acc = 16 * acc + c;
    return acc;
  }, 0);
}

