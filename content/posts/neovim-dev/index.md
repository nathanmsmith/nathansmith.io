---
title: WIP NEOVIM DEV
subtitle: WIP NEOVIM DEV
date: '2025-10-10'
draft: true
---

I've used Neovim for 6 years. Recently I've made a grand total of 2 Neovim
contributions. Here's my dev setup.

* CONTRIBUTING.md
* Introduction wiki page
* Roadmap
> - Split the work between multiple developers
> - Enable [advanced UIs] without modifications to the core
> - Maximize [extensibility](https://neovim.io/doc/user/ui.html)


* NVIM IS... WELL DOCUMENTED
* NVIM IS... FAST AND SMALL
* NVIM IS... MAINTAINABLE
  * Use the object-oriented spirit: Put data and code together.  Minimize the
  knowledge spread to other parts of the code.


- Rough guidelines on where Lua documentation should end up:
    - Nvim API functions `vim.api.nvim_*` should be in `api.txt`.
    - If the module is big and not relevant to generic and lower-level Lua
      functionality, then it's a strong candidate for separation. Example:
      `treesitter.txt`
    - Otherwise, add them to `lua.txt`


*dev-naming*


1. Start by forking the repo on GitHub.

### Builds

```
brew install cmake ninja ccache
```

### Testing

```
# All tests
make test

# Specific test types
make functionaltest     # Lua functional tests
make unittest          # Unit tests
make oldtest           # Legacy Vim tests

# Single test file
TEST_FILE=test_file.vim make oldtest
```

```
make lint

# Specific linting
make lintlua           # Lua code
make lintc             # C code
make lintsh            # Shell scripts
make lintcommit        # Commit messages
make lintdoc           # Documentation
make clang-analyzer    # Static analysis
```

### Formatting

```
# All formatting
make format

# Specific formatting
make formatc           # C code (clang-format)
make formatlua         # Lua code (stylua)
```
