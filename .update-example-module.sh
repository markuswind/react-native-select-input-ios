echo "🗑  - removing old copy of source files .."
rm -rf ./example/node_modules/react-native-select-input-ios/src

for data in *; do
  if [ -d "$data" ]; then
    if [ $data == "src" ]; then
      cp -R ./$data ./example/node_modules/react-native-select-input-ios/
      echo "🚚  - copied $data folder .."
    fi
  fi
done

echo "🔧  - done!"
