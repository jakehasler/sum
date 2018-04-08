BIN 				= ./bin
MODULES_BIN =	$$(npm bin)
RN 					= $(MODULES_BIN)/react-native
ANDROID_DIR	= ./android
IOS_DIR			= ./ios

clean:
	rm -rf $(IOS_DIR)/build $(ANDROID_DIR)/build
	rm -fr $(TMPDIR)/react-*
	watchman watch-del-all

deps:
	npm install

server:
	node node_modules/react-native/local-cli/cli.js start

run-ios:
	$(RN) run-ios --scheme=Navi-dev

run-android:
	$(RN) run-android
