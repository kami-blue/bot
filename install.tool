if [[ $EUID -ne 0 ]]; then
   echo "This script must be run as root"
   exit 1
fi

if test -f "firstRun"; then
    echo "Already installed!"
    exit 0
fi

if [[ $(ls "/Library/Developer/CommandLineTools") ]]; then
  if [[ $(which brew) ]]; then
    npm install
    brew install ffmpeg
    git clone https://github.com/buildkite/terminal-to-html.git && cd terminal-to-html
    make
    mv ./terminal-to-html /usr/local/bin
    touch firstRun
    echo "Installed successfully."
    exit 0
  else
    echo "Installing brew..."
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
    echo "Run this script again!"
    exit 0
  fi
else
  xcode-select --install
  echo "Run this script again!"
  exit 0
fi