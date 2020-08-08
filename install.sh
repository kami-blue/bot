if test -f "firstRun"; then
    echo "Already installed!"
    exit 0
fi

if [[ $EUID -ne 0 ]]; then
   echo "This script must be run as root"
   exit 1
fi

apt-get install build-essential libcairo2-dev libpango1.0-dev libjpeg-dev libgif-dev librsvg2-dev ffmpeg

if [ ! -d "$HOME/.local/bin" ]; then
    mkdir "$HOME/.local/bin"
    # shellcheck disable=SC2164
    git clone https://github.com/buildkite/terminal-to-html.git && cd terminal-to-html
    make
    mv ./terminal-to-html "$HOME/.local/bin"
  else
    # shellcheck disable=SC2164
    git clone https://github.com/buildkite/terminal-to-html.git && cd terminal-to-html
    make
    mv ./terminal-to-html "$HOME/.local/bin"
fi
touch firstRun
exit 0
