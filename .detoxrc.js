/** @type {Detox.DetoxConfig} */
module.exports = {
  testRunner: {
    args: {
      '$0': 'jest',
      config: 'e2e/jest.config.js'
    },
    jest: {
      setupTimeout: 120000
    }
  },
  apps: {
    'ios.debug': {
      type: 'ios.app',
      binaryPath: 'ios/build/Build/Products/Debug-iphonesimulator/jestTesimg.app',
      build: 'xcodebuild -workspace ios/jestTesimg.xcworkspace -scheme jestTesimg -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build'
    },
    'ios.release': {
      type: 'ios.app',
      binaryPath: 'ios/build/Build/Products/Release-iphonesimulator/jestTesimg.app',
      build: 'xcodebuild -workspace ios/jestTesimg.xcworkspace -scheme jestTesimg -configuration Release -sdk iphonesimulator -derivedDataPath ios/build'
    },
    'android.debug': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
      build: 'cd android ; ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug ; cd -',
      reversePorts: [
        8081
      ]
    },
    'android.release': {
      type: 'android.apk',
      binaryPath: 'android/app/build/outputs/apk/release/app-release.apk',
      build: 'cd android ; ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release ; cd -'
    }
  },
  devices: {
    simulator: {
      type: 'ios.simulator',
      device: {
        type: 'iPhone 12'
      }
    },
    attached: {
      type: 'android.attached',
      device: {
        adbName: '.*'
      }
    },
    emulator: {
      type: 'android.emulator',
      device: {
        avdName: 'Pixel_5_API_32_2'
      }
    }
  },
  configurations: {
    'ios.sim.release': {
      binaryPath: "ios/build/Build/Products/Release-iphonesimulator/jestTesimg.app",
      build: "export RCT_NO_LAUNCH_PACKAGER=true && xcodebuild ONLY_ACTIVE_ARCH=YES -workspace ios/jestTesimg.xcworkspace -scheme a -configuration Release -sdk iphonesimulator -derivedDataPath ios/build",
      device: {
        type: "iPhone 12",
      },
    },
    'ios.sim.debug': {
      binaryPath: "ios/build/Build/Products/Debug-iphonesimulator/jestTesimg.app",
      build: "xcodebuild -workspace ios/jestTesimg.xcworkspace -scheme a -configuration Debug -sdk iphonesimulator -derivedDataPath ios/build",
      device: {
        type: "iPhone 12",
      },
    },
    'android.att.debug': {
      device: 'attached',
      app: 'android.debug'
    },
    'android.att.release': {
      device: 'attached',
      app: 'android.release'
    },
    'android.emu.debug': {
      device: 'emulator',
      app: 'android.debug'
    },
    'android.emu.release': {
      device: 'emulator',
      app: 'android.release'
    }
  }
};
