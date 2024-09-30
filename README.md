# block-lite-frontend

## 설명

이 프로젝트는 EVM 체인에서 작동하는 오픈소스 블록 탐색기입니다. 이 저장소를 사용하면 로컬에서 탐색기를 실행할 수 있습니다. [크롤링 코드](https://github.com/KAPUIST/block-lite-crawler)와 [백엔드 코드](https://github.com/KAPUIST/block-lite-back)가 제공되며, 이 저장소에서는 프론트엔드 코드를 제공합니다.

## 시작하기

### 서버 설정

- **아래 링크를 따라 서버를 단계별로 설정하세요.**
- 첫 번째로, 크롤링 서버와 데이터베이스를 설정합니다.
  - <https://github.com/KAPUIST/block-lite-crawler>
- 두 번째로, 백엔드 서버를 설정합니다.
  - <https://github.com/KAPUIST/block-lite-back>

### 설치 방법

**위 서버 설치가 완료된 후 다음 작업을 설치하세요.**

- 이 저장소를 Git 클론하세요.

```bash
git clone https://github.com/KAPUIST/block-lite-front
```

- **macOS 및 Ubuntu에서는** `.env` 파일을 생성하여 `GENERATE_SOURCEMAP`을 설정하세요.

```env
GENERATE_SOURCEMAP=false
```

- **Windows에서는** `package.json`을 수정하여 `GENERATE_SOURCEMAP`을 설정하세요.

```javascript
  "scripts": {
    "start": "set \"GENERATE_SOURCEMAP=false\" && node scripts/start.js",
    "build": "set \"GENERATE_SOURCEMAP=false\" && node scripts/build.js",
    "test": "node scripts/test.js"
  },
```

- `/src/redux/reducer/etherApi.js`에서 'baseURL'을 사용 중인 블록체인 RPC URL로 변경하세요.

```javascript
import axios from 'axios';

const etherApi = axios.create({
  //블록체인 RPC URL 변경
  baseURL: 'https://eth.public-rpc.com',
  headers: { 'content-type': 'application/json' },
});

export default etherApi;
```

- `/src/redux/reducer/dbApi.js`에서 'baseURL'을 사용 중인 백엔드 서버로 변경하세요.

```javascript
import axios from 'axios';

const dbApi = axios.create({
  //백엔드 서버 URL 변경
  baseURL: 'http://localhost:3001',
  headers: { 'content-type': 'application/json' },
});

export default dbApi;
```

- 아래 명령어로 로컬에서 실행하세요.

```bash
npm install --save
npm start
```

**로컬에서 실행할 경우, 다음 포트에서 진행됩니다.**

- 프론트엔드 - http://localhost:3000
- 백엔드 - http://localhost:3001
- 크롤링 서버 - http://localhost:3006
