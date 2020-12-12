// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from '/Volumes/MR TRUNG/ReactJS/Project/Course-react-antd/e-learning/node_modules/@umijs/preset-built-in/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
