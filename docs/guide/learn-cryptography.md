---
id: learn-cryptography
title: Cryptography
---

# Cryptography


## Hashing Algorithm

The hashing algorithm used in Zarb is Blake2b. Blake2 is considered to be a very fast cryptographic hash function that is also used in the cryptocurrency Zcash.


Example:
```
Message: "zarb"
Hash256: 12b38977f2d67f06f0c0cd54aaf7324cf4fee184398ea33d295e8d1543c2ee1a
Hash160: e93efc0c83176034cb828e39435eeecc07a29298
```


We have also a reserved hash which we call it UndefHash. `UndefHash` used to refer to the genesis block. When a validator sees an invalid block it votes to `Undefhash`

```
UndefHash: 0000000000000000000000000000000000000000000000000000000000000000
```

## Keypairs and Signing

Zarb is using BLS threshold signature (Boneh–Lynn–Shacham) for cryptographic signing and verification.
[Herumi](https://github.com/herumi/bls) is an implementation of BLS threshold signature, which we are using in Zarb blockchain.

### Example:

```
Private Key: (32 bytes)
d0c6a560de2e60b6ac55386defefdf93b0c907290c2ad1b4dbd3338186bfdc68

Public key: (96 bytes)
37bfe636693eac0b674ae6603442192ef0432ad84384f0cec8bea5f63c9f45c29bf085b8b9b7f069ae873ccefe61a50a59ad3fefd729af5d63e9cb2325a8f064ab2514b3f846dbfded53234800603a9e752422ad48b99f835bcd95df945aac93

Signature: (48 bytes)
76da6c523c4abac463aad1ead5b7a042f143e354c346f6921a4975cc16959559e9b738fa197ab4df123f580a553b1596

Message:
"zarb"
```

## Signature aggregation

Using bls signature we can aggregate two or more signatures and have an aggregated signature.

We have implemented aggregated methods for aggregating public keys and signatures.
