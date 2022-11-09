# CodeSwing을 이용한 Svelte 개발

CodeSwing은 Windows VSCode  또는 gihub.dev의 VSCode에서 Svelte 코드를 작성하고 테스트할 수 있습니다.  일단 프로젝트 부터 생성해 보죠. 

Windows에서는 프로젝트 폴더를 선택하면 되고 github에서는 repository를 만듭니다.  github.dev에서는 점(.)을 입력하면 github.dev로 전환되고 VSCode 환경으로 전환됩니다. 

> Windows에서는 Svelte for VS Code 익스텐션을 설치하면 코딩하기 쉬운데 Web에서는 아직 지원을 하지 않아서 불편합니다. 



## Svelte 환경 만들기 
Ctrl + Shift + P를 누르고 "CodeSwing: Initialize workspace as swing"을 선택합니다.

"Components: Svelte"를 선택합니다. 

그러면 프로젝트 루트 폴더에 다음과 같이 초기 파일들이 생성됩니다. 

```shell
📁 프로젝트 폴더
  📄README.md # 지금 읽고 있는 문서
  📄codeswing.json  # 코드 스윙 설정 파일
  📃App.svelte   # entry point 
```  

Entry Point인 App.svelte는 다음과 같이 초기 코드가 있습니다. 
```html
<script>
let name = "world";
</script>

<h1>Hello {name}!</h1>
```

실행 창에는 Hello world! 가 보일 것입니다. 


## 컴포넌트 만들기 
List.svelte 파일을 생성합니다. 다음과 같이 작성합니다. 
```html
<script>
</script>
<ul>
    <li>111</li>
    <li>222</li>
    <li>333</li>
</ul>
```
App.svelte에서 import하고 컴포넌트를 추가합니다. 
```html
<script>
    import List from './List.svelte'
    let name = "world";
</script>

<h1>Hello {name}!</h1>
<List/>
```
## JavaScript 작성하기
StringUtil.js를 작성하고 다음과 같이 입력합니다. 
```jsx
const append = (str, suffix) => str + suffix;

export { append } 
```

App.svelte에서 import하여 사용합니다. 
```html
<script>
    import List from './List.svelte'
    import { append } from './StringUtil.js'
    let name = "world";
    let helloWorld = append('Hello', 'World');
</script>

<h1>Hello {name}!</h1>
<h2>{helloWorld}</h2>

<List/>
```

## 외부 라이브러리 추가
[axios](https://www.npmjs.com/package/axios) 라이브러리를 추가해 보겠습니다. 

* Ctrl + Shift + P 를 누르고 Code Swing : Add Library를 선택합니다. 
* Script를 선택합니다. 
* axios를 검색해서 추가합니다. 

codeswing.json에 다음과 같이 URL이 추가됩니다. 
```json
{
  "scripts": [
    "https://cdnjs.cloudflare.com/ajax/libs/axios/1.1.3/axios.js"
  ],
  "styles": []
}
```

StringUtil.js에 다음과 같이 코드를 작성하고 export 합니다. 
```jsx


const fetchNaver = () => {
    const url = 'https://www.naver.com';
    axios.get(url)
        .then((response) => {
            console.log("ok");
            console.log(response.data);
        })
        .catch((error) => {
            console.log(error);
        });
}

export { append , fetchNaver};
```

App.svelte에서 fetchNaver를 import하고 사용합니다. 
```html
<script>
    import List from './List.svelte'
    import { append, fetchNaver } from './StringUtil.js'
    let name = "world";
    let helloWorld = append('Hello', 'World');
    

    fetchNaver();
</script>

<h1>Hello {name}!</h1>
<h2>{helloWorld}</h2>

<List/>
```

> 불행이도 CORS 때문에 Web에서는 작동이 안됩니다. 








































