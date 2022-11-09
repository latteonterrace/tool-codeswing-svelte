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