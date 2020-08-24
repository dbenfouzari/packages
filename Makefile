.PHONY: release
release:
	yarn gitmoji-changelog
	git stash
	yarn lerna version --no-push --force-git-tag
	git stash pop stash@{0}
	git add CHANGELOG.md
	TAG_BEFORE_AMEND=`git tag --points-at HEAD`
	git commit --amend
	COMMIT=`git rev-parse HEAD`

	echo "Tag before commit ${TAG_BEFORE_AMEND}"
	echo "Commit ${COMMIT}"

	git tagm ${TAG_BEFORE_AMEND} ${COMMIT}
	git push