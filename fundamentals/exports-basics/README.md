<h1>Basic Concepts</h1>
<p>There are three kind of modules that you can use in your app</p>
<ol>
<li><strong>If the module is part of core nodejs :</strong> 
<p>You can use that module by just including that module by 

``` 
const os = require('os')
```
</p>
</li>
<li><strong>If the module is part of third party libraries exists in node_modules :</strong> 
<p>You can use that module by just including that module by 

``` 
const _ = require('lodash')
```
</p>
</li>

<li><strong>If the module is part of your code and is created by you :</strong> 
<p>You have to export that module by 



``` 
module.exports.getName = ()=>{
  return 'Intizar Ahmad';
}
```
``` 
const  userinfo = require('./PATH_TO_THAT_MODULE')
userinfo.getName();
```
</p>
</li>
</ol>
