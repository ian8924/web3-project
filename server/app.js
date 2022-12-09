const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const ethers = require('ethers');
const lodash = require('lodash');
dotenv.config();
const PORT = process.env.PORT || 3000;
const PUBLIC_PATH = process.env.PUBLIC_PATH || path.resolve(__dirname, '../public');
const STORAGE_ACCOUNTS = 'accounts';
const STORAGE_MINT_INFO = 'mintInfo';
const MESSAGE_MINT_STRING = 'Mint Arjaverse NFT';
const AVAILABLE_MINT_NUM = 16;

async function initServer() {
  const storage = await initStorage();
  const allowedOrigins = [`http://localhost:${PORT}`, `http://localhost:3001`, '*'];
  const corsOptions = {
    origin: '*'
  };
  const app = express();
  app.use(express.json())
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors(corsOptions));
  app.use(express.static(PUBLIC_PATH)); //Serves resources from public folder
  
  // Routes
  app.get('/api', (_, res) => {
    res.json({
      msg: 'Hello World',
    });
  });

  app.get('/nft/mint-info', (req, res) => {
    const mintInfo = storage.get(STORAGE_MINT_INFO) || [];
    return res.json({
      availableAmt: AVAILABLE_MINT_NUM - mintInfo.length,
      deadline: new Date(2022, 12, 17, 14, 0, 0).getTime(),
    })
  })
  
  app.post('/nft/mint', (req, res) => {
    const { address: _address, message, signature } = req.body;
    const address = _address.toLowerCase();
    if (message !== MESSAGE_MINT_STRING) {
      return res.status(400).json({
        error: 400,
        msg: 'Invalid mint message',
      })
    }

    if(!address || !signature) {
      return res.status(400).json({
        error: 400,
        msg: 'Missing address or signature',
      });
    }
    const mintInfoList = storage.get(STORAGE_MINT_INFO) || [];
    if(mintInfoList.find((mintInfo) => mintInfo.address === address)) {
      return res.status(400).json({
        error: 400,
        msg: `Address ${address} already minted`,
      });
    }
    const newIndex = storage.get(STORAGE_MINT_INFO).length;
    const mintItem = {
      address,
      signature,
      score: 0,
      createdAt: Date.now(),
    }
    storage.set(`${STORAGE_MINT_INFO}.${newIndex}`, mintItem)
    res.json({
      data: {
        ...mintItem,
        signature: undefined
      },
      msg: 'Minted successfully',
    });
  });

  app.post('/nft/score', (req, res) => {
    const { address: _address, score, px, py, bx, by } = req.body;
    const address = _address.toLowerCase();
    const scoreNumber = parseInt(score);

    if(!address || !score || !px || !py || !bx || !by) {
      return res.status(400).json({
        error: 400,
        msg: 'invalid data',
      });
    }
    if(isNaN(scoreNumber) || scoreNumber <= 0) {
      return res.status(400).json({
        error: 400,
        msg: 'invalid score',
      });
    }
    
    const mintInfoList = storage.get(STORAGE_MINT_INFO) || [];
    const mintInfoIndex = mintInfoList.findIndex((mintInfo) => mintInfo.address === address);
    if(mintInfoIndex < 0) {
      return res.status(400).json({
        error: 400,
        msg: `Address ${address} is not exist`,
      });
    }
    const mintItem = mintInfoList[mintInfoIndex];

    mintItem.score = scoreNumber;
    storage.set(`${STORAGE_MINT_INFO}.${mintInfoIndex}`, mintItem)

    res.json({
      data: {
        ...mintItem,
        signature: undefined
      },
    });
  });

  app.get('/nft/getAll', (req, res) => {
    const mintInfoList = storage.get(STORAGE_MINT_INFO) || [];

    res.json({
      data: mintInfoList.map(item => ({
        ...item,
        signature: undefined
      })),
    });
  });
  
  app.use((_, res, _2) => {
    res.status(404).json({ error: 'NOT FOUND' });
  });
  app.listen(PORT);

  return app;
}

initServer().then(() => {
  console.log(`Server started on port ${PORT}`);
})

async function initStorage() {
  const storagePath = path.resolve(__dirname, 'storage.json');
  const data = {
    updatedTime: Date.now(),
    storage: {
      mintInfo: [],
    }
  }
  if(fs.existsSync(storagePath)) {
    const fileData = JSON.parse(fs.readFileSync(storagePath, 'utf8'));
    data.updatedTime = fileData.updatedTime;
    data.storage = fileData.storage;
  }
  const save = () => {
    fs.writeFileSync(storagePath, JSON.stringify(data));
  }
  return {
    get: (ref) => {
      return lodash.cloneDeep(lodash.get(data.storage, ref));
    },
    set: (ref, value) => {
      lodash.set(data.storage, ref, value);
      data.updatedTime = Date.now();
      save();
    },
    
  }
}