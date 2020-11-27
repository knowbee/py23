# py23

    Convert your Python 2.x source code into valid Python 3.x code.

## Installation

```
yarn global add py23
```

```
npm install -g py23
```

## Usage

```
  py23 --path ./

  // recursively convert all python 2.x source code files into python 3 valid code
```

```
  py23 --path ./app.py

  // converts all code in app.py file
```

## Supported conversions:

### print

`Converts the print statement to the print() function.`

### getcwdu

`Renames os.getcwdu() to os.getcwd().`

### raw_input

`Converts raw_input() to input().`

### raise

`Converts raise E, V to raise E(V)`

### has_key

`Changes dict.has_key(key) to key indict.`

### except

` Converts except X, T to except X as T.`

### unittest methods

| Python 2.x (From)           | Python 3.x (To)            |
| --------------------------- | -------------------------- |
| failUnlessEqual(a, b)       | assertEqual(a, b)          |
| assertEquals(a, b)          | assertEqual(a, b)          |
| failIfEqual(a, b)           | assertNotEqual(a, b)       |
| assertNotEquals(a, b)       | assertNotEqual(a, b)       |
| failUnless(a)               | assertTrue(a)              |
| assert\_(a)                 | assertTrue(a)              |
| failIf(a)                   | assertFalse(a)             |
| failUnlessRaises(exc, cal)  | assertRaises(exc, cal)     |
| failUnlessAlmostEqual(a, b) | assertAlmostEqual(a, b)    |
| assertAlmostEquals(a, b)    | assertAlmostEqual(a, b)    |
| failIfAlmostEqual(a, b)     | assertNotAlmostEqual(a, b) |
| assertNotAlmostEquals(a, b) | assertNotAlmostEqual(a, b) |
