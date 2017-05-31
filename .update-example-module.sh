echo "🗑  - removing old copy of react-native-select-input-ios .."
rm -rf ./example/node_modules/react-native-select-input-ios

echo "👷  - creating new copy of react-native-select-input-ios.."
mkdir ./example/node_modules/react-native-select-input-ios

for data in *; do
  if [ -d "$data" ]; then
    if [ $data != "node_modules" ] && [ $data != "example" ] && [ $data != "screenshots" ]; then
      cp -R ./$data ./example/node_modules/react-native-select-input-ios/
      echo "copied $data folder .."
    fi
  else
    cp ./$data ./example/node_modules/react-native-select-input-ios/
    echo "copied $data file .."
  fi
done

echo "🍻  - done!"
