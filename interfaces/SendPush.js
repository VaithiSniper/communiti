import * as PushAPI from "@pushprotocol/restapi";
import * as ethers from "ethers";

const PK = '58907db7ced2b2c91cefd70c994bee35daaec737b9493c4216b6860e2cbe57e7'; // channel private key
const Pkey = `0x${PK}`;
const _signer = new ethers.Wallet(Pkey);

const sendNotification = async() => {
  try {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer: _signer,
      type: 1, // broadcast
      identityType: 2, // direct payload
      notification: {
        title: `Activity added`,
        body: `New activity added , check it out now !`
      },
      payload: {
        title: `Activity added`,
        body: `New activity added , check it out now !`,
        cta: '',
        img: ''
      },
      channel: 'eip155:5:0x379f7dEBf9495D8DE278A4A45A401F27f38564B7', // your channel address
      env: 'staging'
    });
  } catch (err) {
    console.error('Error: ', err);
  }
}

export default sendNotification;