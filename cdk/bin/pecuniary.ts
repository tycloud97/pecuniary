#!/usr/bin/env node
import 'source-map-support/register';
import { App } from '@aws-cdk/core';
import { PecuniaryStack } from '../lib/pecuniary-stack';

const app = new App();

new PecuniaryStack(app, 'pecuniary-dev', {
  appName: 'pecuniary',
  envName: 'dev',
  dlqNotifications: process.env.DLQ_NOTIFICATIONS,
  tags: {
    env: 'dev',
    application: 'pecuniary',
  },
});