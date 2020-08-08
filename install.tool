if test -f "firstRun"; then
  echo "Already installed!"
  exit 0
fi

if [[ $EUID -ne 0 ]]; then
  if [[ $(which brew) ]]; then
    brew install ffmpeg
  else
    if [[ $(ls "/Library/Developer/CommandLineTools") ]]; then
      /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
      echo "Run this script again!"
      exit 0
    else
      xcode-select --install
      echo "Run this script again!"
      exit 0
    fi
  fi
  echo "Run this script as root again!"
  exit 0
fi

npm install
git clone https://github.com/buildkite/terminal-to-html.git && cd terminal-to-html
make
mv ./terminal-to-html /usr/local/bin
touch firstRun
echo "Installed successfully."
exit 0