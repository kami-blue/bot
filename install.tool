if test -f "firstRun"; then
  echo "Already installed!"
  exit 0
fi

if [[ $EUID -ne 0 ]]; then
  if [[ $(which brew) ]]; then
    npm install
    brew install ffmpeg
    touch firstRun
    echo "Installed successfully."
  else
    echo "Installing brew..."
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
    echo "Run this script again!"
  fi
  echo "Run this script as root again!"
  exit 0
fi

if [[ $(ls "/Library/Developer/CommandLineTools") ]]; then
  echo "Installing terminal-to-html..."
else
  xcode-select --install
fi

git clone https://github.com/buildkite/terminal-to-html.git && cd terminal-to-html
make
mv ./terminal-to-html /usr/local/bin