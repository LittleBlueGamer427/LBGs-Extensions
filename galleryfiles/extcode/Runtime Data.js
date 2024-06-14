if (!Scratch.extensions.unsandboxed) {
    throw new Error("Runtime Data extension needs to be run unsandboxed!");
  }

let extensionIcon = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI0Mi4yODczNSIgaGVpZ2h0PSI0Mi4yODczNSIgdmlld0JveD0iMCwwLDQyLjI4NzM1LDQyLjI4NzM1Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjE4Ljg1NjMyLC0xNTguODU2MzIpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTIyMS4zNTYzMywxODBjMCwtMTAuMjk2NjIgOC4zNDcwNiwtMTguNjQzNjggMTguNjQzNjgsLTE4LjY0MzY4YzEwLjI5NjYyLDAgMTguNjQzNjcsOC4zNDcwNiAxOC42NDM2NywxOC42NDM2OGMwLDEwLjI5NjYyIC04LjM0NzA1LDE4LjY0MzY4IC0xOC42NDM2NywxOC42NDM2OGMtMTAuMjk2NjIsMCAtMTguNjQzNjgsLTguMzQ3MDYgLTE4LjY0MzY4LC0xOC42NDM2OHoiIGZpbGw9IiM3OTkxOTgiIHN0cm9rZT0iIzFlMzQzYSIgc3Ryb2tlLXdpZHRoPSI1IiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxnIGZpbGw9IiM2ZTg2OGUiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiPjxwYXRoIGQ9Ik0yMzEuMjMyNTYsMTcxLjIzMjU1YzQuODQyMTMsLTQuODQyMTMgMTIuNjkyNzcsLTQuODQyMTMgMTcuNTM0OSwwYzQuODQyMTMsNC44NDIxMyA0Ljg0MjEyLDEyLjY5Mjc2IC0wLjAwMDAxLDE3LjUzNDg5Yy00Ljg0MjEzLDQuODQyMTMgLTEyLjY5Mjc2LDQuODQyMTQgLTE3LjUzNDg5LDAuMDAwMDFjLTQuODQyMTMsLTQuODQyMTMgLTQuODQyMTMsLTEyLjY5Mjc3IDAsLTE3LjUzNDl6IiBzdHJva2Utd2lkdGg9Im5vbmUiLz48ZyBzdHJva2Utd2lkdGg9IjAiPjxwYXRoIGQ9Ik0yNTQuMzc4NjIsMTcyLjg2OTE0bC01LjYxMTE3LDUuNjExMTdsLTcuMjQ3NzYsLTcuMjQ3NzZsNS42MTExNywtNS42MTExN3oiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9Ii8+PHBhdGggZD0iTTI0Ny4xMzA4NiwxOTQuMzc4NjFsLTUuNjExMTYsLTUuNjExMTZsNy4yNDc3NiwtNy4yNDc3Nmw1LjYxMTE2LDUuNjExMTZ6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIvPjxwYXRoIGQ9Ik0yMzguNDgwMzIsMTg4Ljc2NzQ0bC01LjYxMTE4LDUuNjExMThsLTcuMjQ3NzYsLTcuMjQ3NzZsNS42MTExOCwtNS42MTExOHoiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9Ii8+PHBhdGggZD0iTTIzMS4yMzI1NSwxNzguNDgwMzFsLTUuNjExMTYsLTUuNjExMTZsNy4yNDc3NiwtNy4yNDc3Nmw1LjYxMTE2LDUuNjExMTZ6IiBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpbmRleCZxdW90OzpudWxsfSIvPjwvZz48L2c+PGcgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjNTg3NzgwIiBzdHJva2Utd2lkdGg9IjQiPjxwYXRoIGQ9Ik0yMjkuMDI3MDMsMTkzLjc3MTQ1bDkuMjc5MTYsLTIyLjgyOTY3bDguMjQ4MTQsMTEuNzgzMDVsNC40MTg2NCwtMTYuNDk2MjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yMjQuNzkwNTEsMTkzLjc3MTQ1YzAsLTIuMzM5NzYgMS44OTY3NSwtNC4yMzY1MiA0LjIzNjUyLC00LjIzNjUyYzIuMzM5NzcsMCA0LjIzNjUyLDEuODk2NzYgNC4yMzY1Miw0LjIzNjUyYzAsMi4zMzk3NyAtMS44OTY3Niw0LjIzNjUyIC00LjIzNjUyLDQuMjM2NTJjLTIuMzM5NzYsMCAtNC4yMzY1MiwtMS44OTY3NiAtNC4yMzY1MiwtNC4yMzY1MnoiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTI0Ni43MzY0NSwxNjYuMjI4NTZjMCwtMi4zMzk3NiAxLjg5Njc2LC00LjIzNjUyIDQuMjM2NTIsLTQuMjM2NTJjMi4zMzk3NywwIDQuMjM2NTIsMS44OTY3NiA0LjIzNjUyLDQuMjM2NTJjMCwyLjMzOTc3IC0xLjg5Njc1LDQuMjM2NTIgLTQuMjM2NTIsNC4yMzY1MmMtMi4zMzk3NiwwIC00LjIzNjUyLC0xLjg5Njc2IC00LjIzNjUyLC00LjIzNjUyeiIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjQyLjQ5OTkzLDE4My4zMDMwMmMwLC0yLjMzOTc2IDEuODk2NzUsLTQuMjM2NTIgNC4yMzY1MiwtNC4yMzY1MmMyLjMzOTc3LDAgNC4yMzY1MiwxLjg5Njc1IDQuMjM2NTIsNC4yMzY1MmMwLDIuMzM5NzcgLTEuODk2NzYsNC4yMzY1MiAtNC4yMzY1Miw0LjIzNjUyYy0yLjMzOTc2LDAgLTQuMjM2NTIsLTEuODk2NzYgLTQuMjM2NTIsLTQuMjM2NTJ6IiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0yMzQuMDI2ODksMTcwLjQ2NTA4YzAsLTIuMzM5NzYgMS44OTY3NSwtNC4yMzY1MiA0LjIzNjUyLC00LjIzNjUyYzIuMzM5NzcsMCA0LjIzNjUyLDEuODk2NzYgNC4yMzY1Miw0LjIzNjUyYzAsMi4zMzk3NyAtMS44OTY3Niw0LjIzNjUyIC00LjIzNjUyLDQuMjM2NTJjLTIuMzM5NzYsMCAtNC4yMzY1MiwtMS44OTY3NSAtNC4yMzY1MiwtNC4yMzY1MnoiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PC9nPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSIyLjUiPjxwYXRoIGQ9Ik0yMjkuMDI3MDMsMTkzLjc3MTQ1bDkuMjc5MTYsLTIyLjgyOTY3bDguMjQ4MTQsMTEuNzgzMDVsNC40MTg2NCwtMTYuNDk2MjciIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yMjQuNzkwNTEsMTkzLjc3MTQ1YzAsLTIuMzM5NzYgMS44OTY3NSwtNC4yMzY1MiA0LjIzNjUyLC00LjIzNjUyYzIuMzM5NzcsMCA0LjIzNjUyLDEuODk2NzYgNC4yMzY1Miw0LjIzNjUyYzAsMi4zMzk3NyAtMS44OTY3Niw0LjIzNjUyIC00LjIzNjUyLDQuMjM2NTJjLTIuMzM5NzYsMCAtNC4yMzY1MiwtMS44OTY3NiAtNC4yMzY1MiwtNC4yMzY1MnoiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PHBhdGggZD0iTTI0Ni43MzY0NSwxNjYuMjI4NTZjMCwtMi4zMzk3NiAxLjg5Njc2LC00LjIzNjUyIDQuMjM2NTIsLTQuMjM2NTJjMi4zMzk3NywwIDQuMjM2NTIsMS44OTY3NiA0LjIzNjUyLDQuMjM2NTJjMCwyLjMzOTc3IC0xLjg5Njc1LDQuMjM2NTIgLTQuMjM2NTIsNC4yMzY1MmMtMi4zMzk3NiwwIC00LjIzNjUyLC0xLjg5Njc2IC00LjIzNjUyLC00LjIzNjUyeiIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjQyLjQ5OTkzLDE4My4zMDMwMmMwLC0yLjMzOTc2IDEuODk2NzUsLTQuMjM2NTIgNC4yMzY1MiwtNC4yMzY1MmMyLjMzOTc3LDAgNC4yMzY1MiwxLjg5Njc1IDQuMjM2NTIsNC4yMzY1MmMwLDIuMzM5NzcgLTEuODk2NzYsNC4yMzY1MiAtNC4yMzY1Miw0LjIzNjUyYy0yLjMzOTc2LDAgLTQuMjM2NTIsLTEuODk2NzYgLTQuMjM2NTIsLTQuMjM2NTJ6IiBzdHJva2UtbGluZWNhcD0iYnV0dCIvPjxwYXRoIGQ9Ik0yMzQuMDI2ODksMTcwLjQ2NTA4YzAsLTIuMzM5NzYgMS44OTY3NSwtNC4yMzY1MiA0LjIzNjUyLC00LjIzNjUyYzIuMzM5NzcsMCA0LjIzNjUyLDEuODk2NzYgNC4yMzY1Miw0LjIzNjUyYzAsMi4zMzk3NyAtMS44OTY3Niw0LjIzNjUyIC00LjIzNjUyLDQuMjM2NTJjLTIuMzM5NzYsMCAtNC4yMzY1MiwtMS44OTY3NSAtNC4yMzY1MiwtNC4yMzY1MnoiIHN0cm9rZS1saW5lY2FwPSJidXR0Ii8+PC9nPjwvZz48L2c+PC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjIxLjE0MzY3NToyMS4xNDM2NzUtLT4=";
let deviceICON = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIzNy44NjI2NyIgaGVpZ2h0PSI0NC42NTA1NiIgdmlld0JveD0iMCwwLDM3Ljg2MjY3LDQ0LjY1MDU2Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjIxLjA2ODY3LC0xNTQuMjgwNzgpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQuNSIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTIyMy4zMTg2NywxODBjMCwtOS4yMTI4NSA3LjQ2ODQ5LC0xNi42ODEzMyAxNi42ODEzMywtMTYuNjgxMzNjOS4yMTI4NSwwIDE2LjY4MTMzLDcuNDY4NDkgMTYuNjgxMzMsMTYuNjgxMzNjMCw5LjIxMjg1IC03LjQ2ODQ5LDE2LjY4MTMzIC0xNi42ODEzMywxNi42ODEzM2MtOS4yMTI4NSwwIC0xNi42ODEzMywtNy40Njg0OSAtMTYuNjgxMzMsLTE2LjY4MTMzeiIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjI5LjgyNjYzLDE2My40MTI3NnYtNi44ODE5OGgyMC4zNDY3NHY2Ljg4MTk4eiIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiLz48cGF0aCBkPSJNMjQwLDE3OS43MjAwN3YtNy43Nzk2MyIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8+PHBhdGggZD0iTTIzOS4yNTE5NiwxODBsLTEwLjE3MzM3LDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIvPjwvZz48L2c+PC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjE4LjkzMTMzMjU4NDYwNzY0NToyNS43MTkyMjM5ODE1NjI4MzQtLT4=";
let runtimeICON = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI0MS42MDI4NyIgaGVpZ2h0PSIzOS41MDgzNiIgdmlld0JveD0iMCwwLDQxLjYwMjg3LDM5LjUwODM2Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjE5LjE5ODU2LC0xNjAuMjQ1ODIpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMjIxLjQ0ODU2LDE5Ny41MDQxOGwxNS4yNjAwNSwtMjMuOTM3MzRsOS44NzQxNSwxMC4zMjI5OGwxMS45Njg2NywtMjEuMzk0Ii8+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6MjAuODAxNDM3MTM0NDUxNTA0OjE5Ljc1NDE3ODU4NjUzODk1Ni0tPg==";
let frameICON = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI0OC43ODQwOCIgaGVpZ2h0PSIyNi43OTE2NSIgdmlld0JveD0iMCwwLDQ4Ljc4NDA4LDI2Ljc5MTY1Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjE1LjYwNzk2LC0xNjYuNjA0MTgpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQuNSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0yMTcuODU3OTYsMTgwYzAsLTYuMTU1NjcgNC45NTY2NiwtMTEuMTQ1ODIgMTEuMDcxMDIsLTExLjE0NTgyYzYuMTE0MzUsMCAxMS4wNzEwMiw0Ljk5MDE1IDExLjA3MTAyLDExLjE0NTgyYzAsNi4xNTU2NyAtNC45NTY2NiwxMS4xNDU4MiAtMTEuMDcxMDIsMTEuMTQ1ODJjLTYuMTE0MzUsMCAtMTEuMDcxMDIsLTQuOTkwMTUgLTExLjA3MTAyLC0xMS4xNDU4MnoiLz48cGF0aCBkPSJNMjQwLDE4MGMwLC02LjE1NTY3IDQuOTU2NjYsLTExLjE0NTgyIDExLjA3MTAyLC0xMS4xNDU4MmM2LjExNDM1LDAgMTEuMDcxMDIsNC45OTAxNSAxMS4wNzEwMiwxMS4xNDU4MmMwLDYuMTU1NjcgLTQuOTU2NjYsMTEuMTQ1ODIgLTExLjA3MTAyLDExLjE0NTgyYy02LjExNDM1LDAgLTExLjA3MTAyLC00Ljk5MDE1IC0xMS4wNzEwMiwtMTEuMTQ1ODJ6Ii8+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6MjQuMzkyMDM3ODcwMTUxODI1OjEzLjM5NTgyMzExNzA2OTY1NC0tPg==";
let storageICON = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyNi42NDIwNCIgaGVpZ2h0PSIzMS42NTM0NiIgdmlld0JveD0iMCwwLDI2LjY0MjA0LDMxLjY1MzQ2Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjI2LjY3ODk4LC0xNjEuNzQyMzYpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQuNSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0yMjguOTI4OTgsMTgwYzAsLTYuMTU1NjcgMTEuMDcxMDIsLTE1LjMzNDg1IDExLjA3MTAyLC0xNS4zMzQ4NWMwLDAgMTEuMDcxMDIsOS4xNzkxOCAxMS4wNzEwMiwxNS4zMzQ4NWMwLDYuMTU1NjcgLTQuOTU2NjYsMTEuMTQ1ODIgLTExLjA3MTAyLDExLjE0NTgyYy02LjExNDM1LDAgLTExLjA3MTAyLC00Ljk5MDE1IC0xMS4wNzEwMiwtMTEuMTQ1ODJ6Ii8+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6MTMuMzIxMDIwMDAwMDAwMDA0OjE4LjI1NzYzNTM2MjQ5NzgzNy0tPg==";
let platICON = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI0OS41MzIxMiIgaGVpZ2h0PSI1MS45NzY4NiIgdmlld0JveD0iMCwwLDQ5LjUzMjEyLDUxLjk3Njg2Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjE1LjIzMzk0LC0xNDguNDAxMzEpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQuNSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0yMjEuOTEwMDcsMTU4LjM4MTU5bDE4LjA4OTkzLC03LjU0MjU1bDE4LjA4OTkzLDcuNTQyNTVsLTE4LjA4OTkzLDcuNTQyNTR6Ii8+PHBhdGggZD0iTTIxNy40ODM5NCwxODguNjEwOTV2LTI1LjU4MzAzbDE5LjU5ODcsOC4zNjExM3YyNS41ODMwM3oiLz48cGF0aCBkPSJNMjQyLjkxNzM2LDE5Ni45NzIwOHYtMjUuNTgzMDNsMTkuNTk4NywtOC4zNjExM3YyNS41ODMwM3oiIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2luZGV4JnF1b3Q7Om51bGx9Ii8+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6MjQuNzY2MDU4NjU5MTg4MzAzOjMxLjU5ODY5NDA2NzUyNTk5Ny0tPg==";
let userICON = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIzMy42NzM2MyIgaGVpZ2h0PSI0Ni41NTU3NyIgdmlld0JveD0iMCwwLDMzLjY3MzYzLDQ2LjU1NTc3Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjIzLjE2MzE4LC0xNTYuNzIyMTEpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQuNSIgc3Ryb2tlLWxpbmVjYXA9ImJ1dHQiIHN0cm9rZS1saW5lam9pbj0ibWl0ZXIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWRhc2hhcnJheT0iIiBzdHJva2UtZGFzaG9mZnNldD0iMCIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0yMjUuNDEzMTgsMjAxLjAyNzg5di0xMC43MDU1YzAsMCA5LjQ1NTE5LC00LjYyNDc4IDE0LjI2MjE1LC00LjYyNDc4YzQuOTE1MTcsMCAxNC45MTE0OCw0LjYyNDc4IDE0LjkxMTQ4LDQuNjI0Nzh2MTAuNzA1NXoiLz48cGF0aCBkPSJNMjMwLjI3NTQ2LDE2OC42OTY2NmMwLC01LjM3MDcyIDQuMzUzODMsLTkuNzI0NTQgOS43MjQ1NCwtOS43MjQ1NGM1LjM3MDcyLDAgOS43MjQ1NCw0LjM1MzgzIDkuNzI0NTQsOS43MjQ1NGMwLDUuMzcwNzIgLTQuMzUzODMsOS43MjQ1NCAtOS43MjQ1NCw5LjcyNDU0Yy01LjM3MDcyLDAgLTkuNzI0NTQsLTQuMzUzODMgLTkuNzI0NTQsLTkuNzI0NTR6Ii8+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6MTYuODM2ODE1NDg4NzgyNTI6MjMuMjc3ODg2NjQxNTM2MzU1LS0+";
let ttICON = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI0Ni42NTczIiBoZWlnaHQ9IjQ2LjY1NzMiIHZpZXdCb3g9IjAsMCw0Ni42NTczLDQ2LjY1NzMiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC0yMTYuNjcxMzUsLTE1Ni42NzEzNSkiPjxnIGRhdGEtcGFwZXItZGF0YT0ieyZxdW90O2lzUGFpbnRpbmdMYXllciZxdW90Ozp0cnVlfSIgZmlsbC1ydWxlPSJub256ZXJvIiBzdHJva2UtbGluZWNhcD0iYnV0dCIgc3Ryb2tlLWxpbmVqb2luPSJtaXRlciIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtZGFzaGFycmF5PSIiIHN0cm9rZS1kYXNob2Zmc2V0PSIwIiBzdHlsZT0ibWl4LWJsZW5kLW1vZGU6IG5vcm1hbCI+PHBhdGggZD0iTTIyNC4zMjYyMiwxODBjMCwtOC42NTYzOSA3LjAxNzM4LC0xNS42NzM3OCAxNS42NzM3OCwtMTUuNjczNzhjOC42NTYzOSwwIDE1LjY3Mzc4LDcuMDE3MzggMTUuNjczNzgsMTUuNjczNzhjMCw4LjY1NjM5IC03LjAxNzM4LDE1LjY3Mzc4IC0xNS42NzM3OCwxNS42NzM3OGMtOC42NTYzOSwwIC0xNS42NzM3OCwtNy4wMTczOCAtMTUuNjczNzgsLTE1LjY3Mzc4eiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEwIi8+PHBhdGggZD0iTTIzMy40NTI2LDIwMy4zMjg2NXYtNi4yNjI3M2gxMy4wOTQ3OXY2LjI2MjczeiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMjE4Ljg3NDQ1LDE5MS44NjYxNGw0LjQyODQyLC00LjQyODQybDkuMjU5NDEsOS4yNTk0MWwtNC40Mjg0Miw0LjQyODQyeiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMjE2LjY3MTM1LDE3My40NTI2aDYuMjYyNzN2MTMuMDk0NzloLTYuMjYyNzN6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0yMjguMTMzODYsMTU4Ljg3NDQ1bDQuNDI4NDIsNC40Mjg0MmwtOS4yNTk0MSw5LjI1OTQxbC00LjQyODQyLC00LjQyODQyeiIgZmlsbD0iI2ZmZmZmZiIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjAiLz48cGF0aCBkPSJNMjMzLjQ1MjYsMTYyLjkzNDA4di02LjI2MjczaDEzLjA5NDc5djYuMjYyNzN6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0yNDcuNDM3NzIsMTYzLjMwMjg3bDQuNDI4NDIsLTQuNDI4NDJsOS4yNTk0MSw5LjI1OTQxbC00LjQyODQyLDQuNDI4NDJ6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjxwYXRoIGQ9Ik0yNTcuMDY1OTIsMTczLjQ1MjZoNi4yNjI3M3YxMy4wOTQ3OWgtNi4yNjI3M3oiIGZpbGw9IiNmZmZmZmYiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIwIi8+PHBhdGggZD0iTTI1Ni42OTcxMywxODcuNDM3NzJsNC40Mjg0Miw0LjQyODQybC05LjI1OTQxLDkuMjU5NDFsLTQuNDI4NDIsLTQuNDI4NDJ6IiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMCIvPjwvZz48L2c+PC9zdmc+PCEtLXJvdGF0aW9uQ2VudGVyOjIzLjMyODY1MTkwMDE2OTU0NzoyMy4zMjg2NTE5MDAxNjk1NzUtLT4=";
let rICON = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSI0NS43OTAzMiIgaGVpZ2h0PSIzNi41IiB2aWV3Qm94PSIwLDAsNDUuNzkwMzIsMzYuNSI+PGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTIxNy4xMDQ4NCwtMTYxLjc1KSI+PGcgZGF0YS1wYXBlci1kYXRhPSJ7JnF1b3Q7aXNQYWludGluZ0xheWVyJnF1b3Q7OnRydWV9IiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9Im5vbnplcm8iIHN0cm9rZT0iI2ZmZmZmZiIgc3Ryb2tlLXdpZHRoPSI0LjUiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMjE5LjM1NDg0LDE5NnYtMjQuNjAyMTVoNDEuMjkwMzJ2MjQuNjAyMTV6Ii8+PHBhdGggZD0iTTIyMS40NjIzNywxNzEuMzk3ODV2LTcuMzk3ODVoMTguNTgwNjV2Ny4zOTc4NXoiLz48cGF0aCBkPSJNMjMzLjc1MjY5LDE4My42OTg5M2MwLC0zLjQwNTc1IDIuNzYwOTEsLTYuMTY2NjYgNi4xNjY2NiwtNi4xNjY2NmMzLjQwNTc1LDAgNi4xNjY2NiwyLjc2MDkxIDYuMTY2NjYsNi4xNjY2NmMwLDMuNDA1NzUgLTIuNzYwOTEsNi4xNjY2NiAtNi4xNjY2Niw2LjE2NjY2Yy0zLjQwNTc1LDAgLTYuMTY2NjYsLTIuNzYwOTEgLTYuMTY2NjYsLTYuMTY2NjZ6Ii8+PC9nPjwvZz48L3N2Zz48IS0tcm90YXRpb25DZW50ZXI6MjIuODk1MTYwMDAwMDAwMDA0OjE4LjI1LS0+";
let eICON = "data:image/svg+xml;base64,PHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHdpZHRoPSIyNi42OTIyMyIgaGVpZ2h0PSI0NS4xOTE4OCIgdmlld0JveD0iMCwwLDI2LjY5MjIzLDQ1LjE5MTg4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMjI2LjY1Mzg5LC0xNTcuNDAxODQpIj48ZyBkYXRhLXBhcGVyLWRhdGE9InsmcXVvdDtpc1BhaW50aW5nTGF5ZXImcXVvdDs6dHJ1ZX0iIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjQuNSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIHN0eWxlPSJtaXgtYmxlbmQtbW9kZTogbm9ybWFsIj48cGF0aCBkPSJNMjMwLjY4NzM3LDE1OS42NTE4NGMwLDAgLTcuNjExMzYsNDAuMjAwMjEgOC42MTM2MSw0MC42OTE4OGMxNi4yMjQ5NywwLjQ5MTY3IDEwLjk4OTc4LC00MC4wOTc4NCAxMC45ODk3OCwtNDAuMDk3ODQiLz48L2c+PC9nPjwvc3ZnPjwhLS1yb3RhdGlvbkNlbnRlcjoxMy4zNDYxMTQ0MjkyNTU4MDY6MjIuNTk4MTU3MzEwNTgyNDgtLT4=";

class RunDataTime {
    getInfo() {
      return {
        id: 'DataRuntime',
        name: 'Runtime Data',
        menuIconURI: extensionIcon,
        color1: '#799198',
        color2: '#6e868e',
        blocks: [
          {
          blockType: Scratch.BlockType.LABEL,
          text: 'Platform'
          },
          {
            opcode: 'url',
            blockType: Scratch.BlockType.REPORTER,
            text: 'url',
            blockIconURI: platICON
          },
          {
            opcode: 'name',
            blockType: Scratch.BlockType.REPORTER,
            text: 'name',
            blockIconURI: platICON
          },
          {
            blockType: Scratch.BlockType.LABEL,
            text: 'Runtime'
          },
          {
            opcode: 'height',
            blockType: Scratch.BlockType.REPORTER,
            text: 'stage height',
            blockIconURI: runtimeICON
          },
          {
            opcode: 'width',
            blockType: Scratch.BlockType.REPORTER,
            text: 'stage width',
            blockIconURI: runtimeICON
          },
          {
            opcode: 'profiler',
            blockType: Scratch.BlockType.REPORTER,
            text: 'profiler',
            blockIconURI: runtimeICON
          },
          {
            opcode: 'turbomode',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'turbo mode?',
            blockIconURI: runtimeICON
          },
          {
            opcode: 'interpolation',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'interpolation?',
            blockIconURI: runtimeICON
          },
          {
            opcode: 'debug',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'debug?',
            blockIconURI: runtimeICON
          },
          {
            opcode: 'packaged',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'is packaged?',
            blockIconURI: runtimeICON
          },
          {
            blockType: Scratch.BlockType.LABEL,
            text: 'Frame Loop'
          },
          {
            opcode: 'framerate',
            blockType: Scratch.BlockType.REPORTER,
            text: 'frame rate',
            blockIconURI: frameICON
          },
          {
            opcode: 'running',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'running?',
            blockIconURI: frameICON
          },
          {
            blockType: Scratch.BlockType.LABEL,
            text: 'Storage'
          },
          {
            opcode: 'projecthost',
            blockType: Scratch.BlockType.REPORTER,
            text: 'project host',
            blockIconURI: storageICON
          },
          {
            opcode: 'assethost',
            blockType: Scratch.BlockType.REPORTER,
            text: 'asset host',
            blockIconURI: storageICON
          },
          {
            opcode: 'projecttoken',
            blockType: Scratch.BlockType.REPORTER,
            text: 'project token',
            blockIconURI: storageICON
          },
          {
            blockType: Scratch.BlockType.LABEL,
            text: 'IO Devices'
          },
          {
            opcode: 'timer',
            blockType: Scratch.BlockType.REPORTER,
            text: 'project timer',
            blockIconURI: deviceICON
          },
          {
            opcode: 'paused',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'timer paused?',
            blockIconURI: deviceICON
          },
          {
            blockType: Scratch.BlockType.LABEL,
            text: 'User Data'
          },
          {
            opcode: 'user',
            blockType: Scratch.BlockType.REPORTER,
            text: 'username',
            blockIconURI: userICON
          },
          {
            blockType: Scratch.BlockType.LABEL,
            text: 'Target Type'
          },
          {
            opcode: 'sprite',
            blockType: Scratch.BlockType.REPORTER,
            text: 'sprite',
            blockIconURI: ttICON
          },
          {
            opcode: 'stage',
            blockType: Scratch.BlockType.REPORTER,
            text: 'stage',
            blockIconURI: ttICON
          },
          {
            blockType: Scratch.BlockType.LABEL,
            text: 'Extensions'
          },
          {
            opcode: 'sand',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'unsandboxed',
            blockIconURI: eICON
          },
          {
            blockType: Scratch.BlockType.LABEL,
            text: 'Renderer'
          },
          {
            opcode: 'privskin',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'private skin access allowed?',
            blockIconURI: rICON
          },
          {
            opcode: 'hq',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'high quality render allowed?',
            blockIconURI: rICON
          },
          {
            opcode: 'ost',
            blockType: Scratch.BlockType.BOOLEAN,
            text: 'offscreen touching allowed?',
            blockIconURI: rICON
          }
        ]
      };
    }
    url() {
      return Scratch.vm.runtime.platform.url;
    }

    name() {
        return Scratch.vm.runtime.platform.name;
    }
    height() {
      return Scratch.vm.runtime.stageHeight;
    }
    width() {
      return Scratch.vm.runtime.stageWidth;
    }
    turbomode() {
      return Scratch.vm.runtime.turboMode;
    }
    interpolation() {
      return Scratch.vm.runtime.interpolationEnabled;
    }
    framerate() {
      return Scratch.vm.runtime.frameLoop.framerate;
    }
    running() {
      return Scratch.vm.runtime.frameLoop.running;
    }
    projecthost() {
      return Scratch.vm.runtime.storage.projectHost;
    }
    assethost() {
      return Scratch.vm.runtime.storage.assetHost;
    }
    projecttoken() {
      return Scratch.vm.runtime.storage.projectToken;
    }
    profiler() {
      return Scratch.vm.runtime.profiler;
    }
    packaged() {
      return Scratch.vm.runtime.isPackaged;
    }
    timer() {
      return Scratch.vm.runtime.ioDevices.clock.projectTimer();
    }
    paused() {
      return Scratch.vm.runtime.ioDevices.clock._paused;
    }
    user() {
      return Scratch.vm.runtime.ioDevices.userData._username;
    }
    debug() {
      return Scratch.vm.runtime.debug;
    }
    sprite() {
      return Scratch.TargetType.SPRITE;
    }
    stage() {
      return Scratch.TargetType.STAGE;
    }
    sand() {
      return Scratch.extensions.unsandboxed;
    }
    privskin() {
      return Scratch.renderer.allowPrivateSkinAccess;
    }
    hq() {
      return Scratch.renderer.useHighQualityRender;
    }
    ost() {
      return Scratch.renderer.offscreenTouching;
    }
   }
  
  Scratch.extensions.register(new RunDataTime());
