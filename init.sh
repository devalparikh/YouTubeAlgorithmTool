#!/bin/sh
SESSION_NAME="YTApp"

tmux has-session -t ${SESSION_NAME}
if [ $? != 0 ]
then
  # Create the session
  tmux new-session -s ${SESSION_NAME} -n name -d

  # First window (0) -- vim and console
  # tmux send-keys -t ${SESSION_NAME}

  # shell (1)
  tmux new-window -n bash -t ${SESSION_NAME}
  tmux send-keys -t ${SESSION_NAME}:1 'git status' C-m
  tmux split-window -v
  tmux send-keys -t ${SESSION_NAME}:1 'ls' C-m

#   # python server console (6)
#   tmux new-window -n python-api -t ${SESSION_NAME}
#   tmux send-keys -t ${SESSION_NAME}:7 'python3 .backend/etl_service/apiServer.py' C-m

  # react server console (2)
  tmux new-window -n python-api -t ${SESSION_NAME}
  tmux send-keys -t ${SESSION_NAME}:2 'cd frontend && npm start' C-m

  # Start out on the first window when we attach
  tmux select-window -t ${SESSION_NAME}:1
fi
tmux attach -t ${SESSION_NAME}