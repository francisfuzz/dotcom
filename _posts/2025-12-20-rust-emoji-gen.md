# Building emoji_gen: A Day of Rust, Docker, and Automation

I worked with Claude to explore how to create a CLI in Rust and learn more about the toolchain and setup.

Repository: https://github.com/francisfuzz/emoji_gen

Together, we transformed emoji_gen from a rough Rust CLI into a production-ready project with complete CI/CD infrastructure.

We started by fixing a critical Docker build error where the test module couldn't find generate_emojis. The culprit? Rust's module system required explicit use crate::generate_emojis in the test module. Once resolved, the Docker image built cleanly with integrated linting and testing.

From there, we enhanced the README with comprehensive setup instructions, then tackled the GitHub Actions workflow. We modernized rust.yml to use Docker for consistent builds and added formatting checks with cargo fmt. The workflow now mirrors local development perfectly.

Conventional Commits became our standard through detailed CLAUDE.md documentation, establishing a foundation for quality git history. We then built complete release automation: a GitHub Actions workflow that cross-compiles binaries for Linux (x86_64, ARM64), macOS (Intel, Apple Silicon), and Windows, while publishing multi-platform Docker images to GitHub Container Registry.

Our first release (v0.1.0-beta.1) revealed the importance of workflow testing—we discovered and fixed path issues in the release process. We established a branch-based git workflow requiring draft PRs for all changes, and optimized CI to skip Rust builds for documentation-only commits, saving valuable CI minutes.

Finally, we documented five critical improvements for the future in [docs/next.md](https://github.com/francisfuzz/emoji_gen/blob/main/docs/next.md).

## Lessons Learned

- Docker: Module visibility requires explicit use statements in test modules, even when testing functions in the same crate.
- GitHub Actions: Test release workflows early with beta tags; cross-platform builds need careful artifact path configuration; conditional workflows (paths-ignore) prevent wasteful CI runs.
- Next Steps: See https://github.com/francisfuzz/emoji_gen/blob/main/docs/next.md for production-grade improvements including error handling, configuration, benchmarking, documentation, and security auditing.
