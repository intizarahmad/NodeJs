### Accessing the user input from commands
<p>process.argv is used to get the input passed from the command line</p>
<p>Suppose you a run a command</p>

```
node app.js add
```

<p>So the out put will be the array of the commands </p>
<ul>
    <li>The first value of the array is the path of the node</li>
    <li>Second is the path of the file (here app.js)</li>
    <li>Third will be the command you passed (here add)</li>
</ul>
