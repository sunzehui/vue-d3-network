// find links by node => [ links ] | null
export const findLinks = (nodeId, links) => {
  let nodeLinks = [];
  for (let link of links) {
    if (link.sid === nodeId || link.tid === nodeId) nodeLinks.push(link);
  }
  return nodeLinks.length ? nodeLinks : null;
};
export const findNode = (nodes, nodeId) => {
  let index = nodeExists(nodeId);
  if (index) {
    return nodes[index];
  }
  return null;
};
// removes node by id => () => ( [newNodes] )
export const removeNode = (nodeId, nodes, cb) => {
  let index = nodes.findIndex((node) => {
    return node.id === nodeId;
  });
  if (index > -1) {
    nodes.splice(index, 1);
    cb(nodes);
  } else {
    cb(null);
  }
};

// removes orphaned links => { newLinks, removed }
export const rebuildLinks = (nodes, links) => {
  let newLinks = [];
  let removed = [];
  for (let link of links) {
    if (nodeExists(link.sid, nodes) && nodeExists(link.tid, nodes)) {
      newLinks.push(link);
    } else {
      removed.push(link);
    }
  }
  return { newLinks, removed };
};

// removes unlinked nodes => [ newNodes ]
export const rebuildNodes = (links, nodes) => {
  let newNodes = [];
  for (let node of nodes) {
    if (isLinked(node.id, links)) {
      newNodes.push(node);
    }
  }
  return newNodes;
};

// finds node by id => boolean
export const nodeExists = (nodeId, nodes) => {
  let index = nodes.findIndex((node) => {
    return node.id === nodeId;
  });
  return index > -1;
};

// Checks if node is linked => boolean
const isLinked = (nodeId, links) => {
  let index = links.findIndex((link) => {
    return link.tid === nodeId || link.sid === nodeId;
  });
  return index > -1;
};

// link formatter
export const newLink = (id, sid, tid) => {
  return { id, sid, tid };
};
const list = [
  {
    _id: "629df850a505ce65439b223d",
    entity1: "小辣椒S1 Pro（移动4G）",
    rel: "SIM卡类",
    entity2: "双卡  ",
  },
  {
    _id: "629df850a505ce65439b223e",
    entity1: "小辣椒S1 Pro（移动4G）",
    rel: "存储卡",
    entity2: "MicroSD卡  ",
  },
  {
    _id: "629df850a505ce65439b223f",
    entity1: "小辣椒红辣椒国民猴赛雷（移动4G）",
    rel: "价格",
    entity2: "￥339[停产]",
  },
  {
    _id: "629df850a505ce65439b2240",
    entity1: "小辣椒红辣椒国民猴赛雷（移动4G）",
    rel: "屏幕尺寸",
    entity2: "5英寸  1280x720像素 ",
  },
  {
    _id: "629df850a505ce65439b2241",
    entity1: "小辣椒红辣椒国民猴赛雷（移动4G）",
    rel: "CPU型号",
    entity2: "展讯 SC9830  ",
  },
  {
    _id: "629df850a505ce65439b2242",
    entity1: "小辣椒红辣椒国民猴赛雷（移动4G）",
    rel: "电池容量",
    entity2: "2000mAh  ",
  },
  {
    _id: "629df850a505ce65439b2243",
    entity1: "小辣椒红辣椒国民猴赛雷（移动4G）",
    rel: "前置摄像",
    entity2: "200万像素  ",
  },
  {
    _id: "629df850a505ce65439b2244",
    entity1: "小辣椒红辣椒国民猴赛雷（移动4G）",
    rel: "后置摄像",
    entity2: "500万像素  ",
  },
  {
    _id: "629df850a505ce65439b2245",
    entity1: "小辣椒红辣椒国民猴赛雷（移动4G）",
    rel: "RAM容量",
    entity2: "1GB  ",
  },
  {
    _id: "629df850a505ce65439b2246",
    entity1: "小辣椒红辣椒国民猴赛雷（移动4G）",
    rel: "ROM容量",
    entity2: "8GB  ",
  },
  {
    _id: "629df850a505ce65439b2247",
    entity1: "小辣椒红辣椒国民猴赛雷（移动4G）",
    rel: "SIM卡类",
    entity2: "双卡  ",
  },
  {
    _id: "629df850a505ce65439b2248",
    entity1: "小辣椒红辣椒国民猴赛雷（移动4G）",
    rel: "存储卡",
    entity2: "MicroSD卡  ",
  },
  {
    _id: "629df850a505ce65439b2249",
    entity1: "联想乐檬K3（K31-T3/移动4G）",
    rel: "价格",
    entity2: "￥470[停产]",
  },
  {
    _id: "629df850a505ce65439b224a",
    entity1: "联想乐檬K3（K31-T3/移动4G）",
    rel: "屏幕尺寸",
    entity2: "5英寸  1280x720像素 ",
  },
  {
    _id: "629df850a505ce65439b224b",
    entity1: "联想乐檬K3（K31-T3/移动4G）",
    rel: "电池容量",
    entity2: "2300mAh  可拆卸式电池 ",
  },
  {
    _id: "629df850a505ce65439b224c",
    entity1: "联想乐檬K3（K31-T3/移动4G）",
    rel: "前置摄像",
    entity2: "500万像素  ",
  },
  {
    _id: "629df850a505ce65439b224d",
    entity1: "联想乐檬K3（K31-T3/移动4G）",
    rel: "后置摄像",
    entity2: "800万像素  ",
  },
  {
    _id: "629df850a505ce65439b224e",
    entity1: "联想乐檬K3（K31-T3/移动4G）",
    rel: "RAM容量",
    entity2: "2GB  ",
  },
  {
    _id: "629df850a505ce65439b224f",
    entity1: "联想乐檬K3（K31-T3/移动4G）",
    rel: "ROM容量",
    entity2: "8GB  ",
  },
  {
    _id: "629df850a505ce65439b2250",
    entity1: "联想乐檬K3（K31-T3/移动4G）",
    rel: "SIM卡类",
    entity2: "双卡（Micro SIM卡）  ",
  },
  {
    _id: "629df850a505ce65439b2251",
    entity1: "联想乐檬K3（K31-T3/移动4G）",
    rel: "屏幕材质",
    entity2: "TFT材质（IPS ",
  },
  {
    _id: "629df850a505ce65439b2252",
    entity1: "魅族魅蓝Note 3（全网通）",
    rel: "价格",
    entity2: "￥799[停产]",
  },
  {
    _id: "629df850a505ce65439b2253",
    entity1: "魅族魅蓝Note 3（全网通）",
    rel: "屏幕尺寸",
    entity2: "5.5英寸  1920x1080像素 ",
  },
  {
    _id: "629df850a505ce65439b2254",
    entity1: "魅族魅蓝Note 3（全网通）",
    rel: "CPU型号",
    entity2: "联发科 Helio P10  ",
  },
  {
    _id: "629df850a505ce65439b2255",
    entity1: "魅族魅蓝Note 3（全网通）",
    rel: "电池容量",
    entity2: "4100mAh  不可拆卸式电 ",
  },
  {
    _id: "629df850a505ce65439b2256",
    entity1: "魅族魅蓝Note 3（全网通）",
    rel: "前置摄像",
    entity2: "500万像素  ",
  },
  {
    _id: "629df850a505ce65439b2257",
    entity1: "魅族魅蓝Note 3（全网通）",
    rel: "后置摄像",
    entity2: "1300万像素  ",
  },
  {
    _id: "629df850a505ce65439b2258",
    entity1: "魅族魅蓝Note 3（全网通）",
    rel: "RAM容量",
    entity2: "2GB  ",
  },
  {
    _id: "629df850a505ce65439b2259",
    entity1: "魅族魅蓝Note 3（全网通）",
    rel: "ROM容量",
    entity2: "16GB  ",
  },
  {
    _id: "629df850a505ce65439b225a",
    entity1: "魅族魅蓝Note 3（全网通）",
    rel: "SIM卡类",
    entity2: "双卡（Nano S ",
  },
  {
    _id: "629df850a505ce65439b225b",
    entity1: "360 手机f4（标准版/移动4G）",
    rel: "价格",
    entity2: "￥550[停产]",
  },
  {
    _id: "629df850a505ce65439b225c",
    entity1: "360 手机f4（标准版/移动4G）",
    rel: "屏幕尺寸",
    entity2: "5英寸  1280x720像素 ",
  },
  {
    _id: "629df850a505ce65439b225d",
    entity1: "360 手机f4（标准版/移动4G）",
    rel: "CPU型号",
    entity2: "联发科 MT6753  ",
  },
  {
    _id: "629df850a505ce65439b225e",
    entity1: "360 手机f4（标准版/移动4G）",
    rel: "电池容量",
    entity2: "2500mAh  不可拆卸式电 ",
  },
  {
    _id: "629df850a505ce65439b225f",
    entity1: "360 手机f4（标准版/移动4G）",
    rel: "前置摄像",
    entity2: "500万像素  ",
  },
  {
    _id: "629df850a505ce65439b2260",
    entity1: "360 手机f4（标准版/移动4G）",
    rel: "后置摄像",
    entity2: "1300万像素  ",
  },
  {
    _id: "629df850a505ce65439b2261",
    entity1: "360 手机f4（标准版/移动4G）",
    rel: "RAM容量",
    entity2: "2GB  ",
  },
  {
    _id: "629df850a505ce65439b2262",
    entity1: "360 手机f4（标准版/移动4G）",
    rel: "ROM容量",
    entity2: "16GB  ",
  },
  {
    _id: "629df850a505ce65439b2263",
    entity1: "360 手机f4（标准版/移动4G）",
    rel: "SIM卡类",
    entity2: "双卡（Nano SIM卡）  ",
  },
  {
    _id: "629df850a505ce65439b2264",
    entity1: "360 手机f4（标准版/移动4G）",
    rel: "存储卡",
    entity2: "MicroSD卡  ",
  },
  {
    _id: "629df850a505ce65439b2265",
    entity1: "酷派8029（移动4G）",
    rel: "价格",
    entity2: "￥240[停产]",
  },
  {
    _id: "629df850a505ce65439b2266",
    entity1: "酷派8029（移动4G）",
    rel: "屏幕尺寸",
    entity2: "4英寸  800x480像素 ",
  },
  {
    _id: "629df850a505ce65439b2267",
    entity1: "酷派8029（移动4G）",
    rel: "电池容量",
    entity2: "1500mAh  可拆卸式电池 ",
  },
  {
    _id: "629df850a505ce65439b2268",
    entity1: "酷派8029（移动4G）",
    rel: "后置摄像",
    entity2: "200万像素  ",
  },
  {
    _id: "629df850a505ce65439b2269",
    entity1: "酷派8029（移动4G）",
    rel: "RAM容量",
    entity2: "512MB  ",
  },
  {
    _id: "629df850a505ce65439b226a",
    entity1: "酷派8029（移动4G）",
    rel: "ROM容量",
    entity2: "4GB  ",
  },
  {
    _id: "629df850a505ce65439b226b",
    entity1: "酷派8029（移动4G）",
    rel: "存储卡",
    entity2: "MicroSD卡  ",
  },
  {
    _id: "629df850a505ce65439b226c",
    entity1: "酷派8029（移动4G）",
    rel: "传感器类",
    entity2: "CMOS  ",
  },
  {
    _id: "629df850a505ce65439b226d",
    entity1: "酷派8029（移动4G）",
    rel: "闪光灯",
    entity2: "LED补光灯  ",
  },
  {
    _id: "629df850a505ce65439b226e",
    entity1: "酷派8029（移动4G）",
    rel: "像素密度",
    entity2: "233ppi  ",
  },
];
import { nanoid } from "nanoid";

export const getNode = () => {
  const nodes = [];
  for (let i = 0; i < list.length; i++) {
    const { entity1, entity2 } = list[i];
    if (!nodes.filter((item) => item.name && item.name === entity1).length) {
      nodes.push({
        name: entity1,
        id: nanoid(),
      });
    }
    if (!nodes.filter((item) => item.name && item.name === entity2).length) {
      nodes.push({
        name: entity2,
        id: nanoid(),
      });
    }
  }
  return nodes;
};
export const getLink = (allNodes) => {
  const links = [];

  for (let i = 0; i < list.length; i++) {
    const { entity1, entity2, rel } = list[i];
    const sid = allNodes.find((item) => item.name === entity1).id;
    const tid = allNodes.find((item) => item.name === entity2).id;

    links.push({
      sid,
      tid,
      name: rel,
    });
  }
  return links;
};
// generates random links => [ links ]
export const makeRandomLinks = (nodes, maxLinks) => {
  let links = [];
  let id = 0;
  for (let node of nodes) {
    let total = Math.floor(Math.random() * maxLinks);
    for (let i = 0; i <= total; i++) {
      let target = Math.floor(Math.random() * nodes.length);
      let source = node.id;
      id++;
      links.push(newLink(id, source, target));
    }
  }

  return links;
};

// random node name
const newNodeName = () => {
  return Math.random().toString(36).substring(7);
};

// node formatter
export const newNode = (nodeId) => {
  return { id: nodeId, name: newNodeName() };
};

// generates random nodes => [ nodes ]
export const makeRandomNodes = (maxNodes) => {
  let nodes = Array.apply(null, { length: maxNodes }).map((value, index) => {
    return newNode(index);
  });
  // console.log(nodes);
  return nodes;
};

// vue custom event handler
export const methodCall = (vm, action, args) => {
  let method = vm[action];
  if (typeof method === "function") {
    if (args) method(...args);
    else method();
  } else {
    console.error("Call to undefined method:", action);
  }
};

// vue event wrapper
export const emitEvent = (vm, action, args) => {
  if (vm.$data.conf && vm.$data.conf.allEventsAs) {
    let evName = vm.$data.conf.allEventsAs;
    return vm.$emit(evName, action, args);
  }
  return vm.$emit(action, ...args);
};
