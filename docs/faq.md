# Frequently Asked Questions

Answers for users, researchers, and future contributors.

---

## What does ExtensionChecker do?

It gives you a quick, readable summary of extension permissions, host access, and review signals so you can decide whether an extension deserves a closer look.

## Does a low score mean an extension is completely safe?

No. It means the static signals reviewed here did not indicate higher-risk manifest combinations. It is a triage tool, not a guarantee.

## Which browsers are supported?

The scanner works with common Chromium and Firefox-family extension formats — including Chrome, Edge, Opera, and Firefox store listings. Safari extensions are supported via manual upload.

## Can I self-host or fork it?

Yes. The project uses a permissive MIT license because we want people to adapt it, improve it, and even build commercial offerings on top of it.

## Why make the project open source?

A simple extension checker should be broadly available. Open source makes the baseline inspectable, reproducible, and easier for others to expand.

## How is the risk score calculated?

The scanner examines the extension manifest for requested permissions, host access scope, and metadata signals like store ratings and review counts. It applies a set of heuristic rules to classify combinations as low, medium, or high risk. The rules are open source and auditable.

## Is my data stored or tracked?

No. ExtensionChecker does not require an account, does not store scan results on a server, and does not track users. See our [Privacy Policy](/privacy/) for details.

## How can I contribute?

Head to the [GitHub organization](https://github.com/extensionchecker) and pick a repo. Bug reports, feature ideas, documentation improvements, and pull requests are all welcome.
