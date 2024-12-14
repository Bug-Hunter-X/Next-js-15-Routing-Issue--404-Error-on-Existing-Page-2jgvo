```javascript
// pages/index.js
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Welcome to my Next.js app!</h1>
      <Link href='/about'>
        <a>Go to About Page</a>
      </Link>
    </div>
  );
}
```
```javascript
//pages/about.js

export default function About(){
    return(
        <h1>About Page</h1>
    );
}
```
The issue may stem from a problem with file system case sensitivity on some OS or an accidental typo in the file name. Double check file names and paths for accuracy and ensure that the file names are consistent with your routing configuration.