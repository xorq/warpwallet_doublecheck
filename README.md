# warpwallet_doublecheck
Use this single page to double check if your warpwallet is legit

According to keybase.io, the warpwallet is found using this formula:

s1 	=	scrypt(key=(passphrase||0x1), salt=(salt||0x1), N=218, r=8, p=1, dkLen=32)
s2 	=	pbkdf2(key=(passphrase||0x2), salt=(salt||0x2), c=216, dkLen=32, prf=HMAC_SHA256)
keypair	=	generate_bitcoin_keypair(s1 ⊕ s2)

This self-sufficient script can be used to double check that the warpwallet you discovered is legit.
