#!/bin/bash
cd /home/kavia/workspace/code-generation/basic-website-development-4423-4432/main_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

