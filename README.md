# farp
A tool to find and replace given pattern with substitute text or filter inside file.

Due to this feature it can be used for replacing the matched selection either with substitute text or filtered text. The filtered texts are made by applying filter criterias over matched selections.

## Prerequisite
It would require [node.js](https://nodejs.org) to be installed on system prior its use.

## Setup 
Install the app using npm & to access it globally

	npm install -g farp

## Usage
You can see the available options via below command

	> farp
	Farp (v1.1.0)

	A tool to replace given pattern with substitute inside file.

	Syntax:
	  farp <pattern> <substitute> <file>
	  farp <pattern> --filter=<criteria> <file>

	Options:
	  --filter    Criteria to modify the matched chunk 

	Usages:
	  farp 'foo' 'bar' file.txt
	  farp '\/\{[a-zA-Z0-9_-]+\}' '--filter={"{":"&#123;","}":"&#125;"}' file.txt

It would also get displayed in case of missing parameters.