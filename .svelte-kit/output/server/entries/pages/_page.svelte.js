import { c as create_ssr_component, a as compute_rest_props, v as validate_component, h as add_attribute, m as missing_component, b as spread, d as escape_object, e as escape_attribute_value, f as escape, k as each } from "../../chunks/ssr.js";
import { t as twMerge, F as Frame, i as is_void, P, B as Button } from "../../chunks/P.js";
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "horizontal", "reverse", "img", "padding", "size"]);
  let { href = void 0 } = $$props;
  let { horizontal = false } = $$props;
  let { reverse = false } = $$props;
  let { img = void 0 } = $$props;
  let { padding = "lg" } = $$props;
  let { size = "sm" } = $$props;
  const paddings = {
    none: "",
    xs: "p-2",
    sm: "p-4",
    md: "p-4 sm:p-5",
    lg: "p-4 sm:p-6",
    xl: "p-4 sm:p-8"
  };
  const sizes = {
    none: "",
    xs: "max-w-xs",
    sm: "max-w-sm",
    md: "max-w-xl",
    lg: "max-w-2xl",
    xl: "max-w-screen-xl"
  };
  let innerPadding;
  let cardClass;
  let imgClass;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.horizontal === void 0 && $$bindings.horizontal && horizontal !== void 0)
    $$bindings.horizontal(horizontal);
  if ($$props.reverse === void 0 && $$bindings.reverse && reverse !== void 0)
    $$bindings.reverse(reverse);
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  innerPadding = paddings[padding];
  cardClass = twMerge("flex w-full", sizes[size], reverse ? "flex-col-reverse" : "flex-col", horizontal && (reverse ? "md:flex-row-reverse" : "md:flex-row"), href && "hover:bg-gray-100 dark:hover:bg-gray-700", !img && innerPadding, $$props.class);
  imgClass = twMerge(reverse ? "rounded-b-lg" : "rounded-t-lg", horizontal && "object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none", horizontal && (reverse ? "md:rounded-e-lg" : "md:rounded-s-lg"));
  return `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, { tag: href ? "a" : "div" }, { rounded: true }, { shadow: true }, { border: true }, { href }, $$restProps, { class: cardClass }), {}, {
    default: () => {
      return `${img ? `<img${add_attribute("class", imgClass, 0)}${add_attribute("src", img, 0)} alt=""> <div${add_attribute("class", innerPadding, 0)}>${slots.default ? slots.default({}) : ``}</div>` : `${slots.default ? slots.default({}) : ``}`}`;
    }
  })} `;
});
const Android = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { div = "relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-xl h-[600px] w-[300px] shadow-xl" } = $$props;
  let { slot = "rounded-xl overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800" } = $$props;
  let { top = "w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute" } = $$props;
  let { leftTop = "h-[32px] w-[3px] bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg" } = $$props;
  let { leftMid = "h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg" } = $$props;
  let { leftBot = "h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg" } = $$props;
  let { right = "h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg" } = $$props;
  if ($$props.div === void 0 && $$bindings.div && div !== void 0)
    $$bindings.div(div);
  if ($$props.slot === void 0 && $$bindings.slot && slot !== void 0)
    $$bindings.slot(slot);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.leftTop === void 0 && $$bindings.leftTop && leftTop !== void 0)
    $$bindings.leftTop(leftTop);
  if ($$props.leftMid === void 0 && $$bindings.leftMid && leftMid !== void 0)
    $$bindings.leftMid(leftMid);
  if ($$props.leftBot === void 0 && $$bindings.leftBot && leftBot !== void 0)
    $$bindings.leftBot(leftBot);
  if ($$props.right === void 0 && $$bindings.right && right !== void 0)
    $$bindings.right(right);
  return `<div${add_attribute("class", twMerge(div, $$props.class), 0)}><div${add_attribute("class", twMerge(top, $$props.classTop), 0)}></div> <div${add_attribute("class", twMerge(leftTop, $$props.classLeftTop), 0)}></div> <div${add_attribute("class", twMerge(leftMid, $$props.classLeftMid), 0)}></div> <div${add_attribute("class", twMerge(leftBot, $$props.classLeftBot), 0)}></div> <div${add_attribute("class", twMerge(right, $$props.classRight), 0)}></div> <div${add_attribute("class", twMerge(slot, $$props.classSlot), 0)}>${slots.default ? slots.default({}) : ``}</div></div> `;
});
const DefaultMockup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { div = "relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]" } = $$props;
  let { slot = "rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800" } = $$props;
  let { top = "h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg" } = $$props;
  let { leftTop = "h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg" } = $$props;
  let { leftBot = "h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg" } = $$props;
  let { right = "h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg" } = $$props;
  if ($$props.div === void 0 && $$bindings.div && div !== void 0)
    $$bindings.div(div);
  if ($$props.slot === void 0 && $$bindings.slot && slot !== void 0)
    $$bindings.slot(slot);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.leftTop === void 0 && $$bindings.leftTop && leftTop !== void 0)
    $$bindings.leftTop(leftTop);
  if ($$props.leftBot === void 0 && $$bindings.leftBot && leftBot !== void 0)
    $$bindings.leftBot(leftBot);
  if ($$props.right === void 0 && $$bindings.right && right !== void 0)
    $$bindings.right(right);
  return `<div${add_attribute("class", twMerge(div, $$props.class), 0)}><div${add_attribute("class", twMerge(top, $$props.classTop), 0)}></div> <div${add_attribute("class", twMerge(leftTop, $$props.classLeftTop), 0)}></div> <div${add_attribute("class", twMerge(leftBot, $$props.classLeftBot), 0)}></div> <div${add_attribute("class", twMerge(right, $$props.classRight), 0)}></div> <div${add_attribute("class", twMerge(slot, $$props.classSlot), 0)}>${slots.default ? slots.default({}) : ``}</div></div> `;
});
const Desktop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { inner = "rounded-xl overflow-hidden h-[140px] md:h-[262px]" } = $$props;
  let { bot = "relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl h-[24px] max-w-[301px] md:h-[42px] md:max-w-[512px]" } = $$props;
  let { botUnder = "relative mx-auto bg-gray-800 rounded-b-xl h-[55px] max-w-[83px] md:h-[95px] md:max-w-[142px]" } = $$props;
  let { div = "relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[16px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]" } = $$props;
  if ($$props.inner === void 0 && $$bindings.inner && inner !== void 0)
    $$bindings.inner(inner);
  if ($$props.bot === void 0 && $$bindings.bot && bot !== void 0)
    $$bindings.bot(bot);
  if ($$props.botUnder === void 0 && $$bindings.botUnder && botUnder !== void 0)
    $$bindings.botUnder(botUnder);
  if ($$props.div === void 0 && $$bindings.div && div !== void 0)
    $$bindings.div(div);
  return `<div${add_attribute("class", twMerge(div, $$props.class), 0)}><div${add_attribute("class", twMerge(inner, $$props.classInner), 0)}>${slots.default ? slots.default({}) : ``}</div></div> <div${add_attribute("class", twMerge(bot, $$props.classBot), 0)}></div> <div${add_attribute("class", twMerge(botUnder, $$props.classBotUnder), 0)}></div> `;
});
const Ios = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { div = "relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px] shadow-xl" } = $$props;
  let { slot = "rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800" } = $$props;
  let { top = "w-[148px] h-[18px] bg-gray-800 top-0 rounded-b-[1rem] left-1/2 -translate-x-1/2 absolute" } = $$props;
  let { leftTop = "h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg" } = $$props;
  let { leftBot = "h-[46px] w-[3px] bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg" } = $$props;
  let { right = "h-[64px] w-[3px] bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg" } = $$props;
  if ($$props.div === void 0 && $$bindings.div && div !== void 0)
    $$bindings.div(div);
  if ($$props.slot === void 0 && $$bindings.slot && slot !== void 0)
    $$bindings.slot(slot);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.leftTop === void 0 && $$bindings.leftTop && leftTop !== void 0)
    $$bindings.leftTop(leftTop);
  if ($$props.leftBot === void 0 && $$bindings.leftBot && leftBot !== void 0)
    $$bindings.leftBot(leftBot);
  if ($$props.right === void 0 && $$bindings.right && right !== void 0)
    $$bindings.right(right);
  return `<div${add_attribute("class", twMerge(div, $$props.class), 0)}><div${add_attribute("class", twMerge(top, $$props.classTop), 0)}></div> <div${add_attribute("class", twMerge(leftTop, $$props.classLeftTop), 0)}></div> <div${add_attribute("class", twMerge(leftBot, $$props.classLeftBot), 0)}></div> <div${add_attribute("class", twMerge(right, $$props.classRight), 0)}></div> <div${add_attribute("class", twMerge(slot, $$props.classSlot), 0)}>${slots.default ? slots.default({}) : ``}</div></div> `;
});
const Laptop = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { div = "relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]" } = $$props;
  let { inner = "rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800" } = $$props;
  let { bot = "relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]" } = $$props;
  let { botCen = "absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800" } = $$props;
  if ($$props.div === void 0 && $$bindings.div && div !== void 0)
    $$bindings.div(div);
  if ($$props.inner === void 0 && $$bindings.inner && inner !== void 0)
    $$bindings.inner(inner);
  if ($$props.bot === void 0 && $$bindings.bot && bot !== void 0)
    $$bindings.bot(bot);
  if ($$props.botCen === void 0 && $$bindings.botCen && botCen !== void 0)
    $$bindings.botCen(botCen);
  return `<div${add_attribute("class", twMerge(div, $$props.class), 0)}><div${add_attribute("class", twMerge(inner, $$props.classInner), 0)}>${slots.default ? slots.default({}) : ``}</div></div> <div${add_attribute("class", twMerge(bot, $$props.classBot), 0)}><div${add_attribute("class", twMerge(botCen, $$props.classBotCen), 0)}></div></div> `;
});
const Smartwatch = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { div = "relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-t-[2.5rem] h-[63px] max-w-[133px]" } = $$props;
  let { slot = "rounded-[2rem] overflow-hidden h-[193px] w-[188px]" } = $$props;
  let { rightTop = "h-[41px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -right-[16px] top-[40px] rounded-r-lg" } = $$props;
  let { rightBot = "h-[32px] w-[6px] bg-gray-800 dark:bg-gray-800 absolute -right-[16px] top-[88px] rounded-r-lg" } = $$props;
  let { top = "relative mx-auto border-gray-900 dark:bg-gray-800 dark:border-gray-800 border-[10px] rounded-[2.5rem] h-[213px] w-[208px]" } = $$props;
  let { bot = "relative mx-auto bg-gray-800 dark:bg-gray-700 rounded-b-[2.5rem] h-[63px] max-w-[133px]" } = $$props;
  if ($$props.div === void 0 && $$bindings.div && div !== void 0)
    $$bindings.div(div);
  if ($$props.slot === void 0 && $$bindings.slot && slot !== void 0)
    $$bindings.slot(slot);
  if ($$props.rightTop === void 0 && $$bindings.rightTop && rightTop !== void 0)
    $$bindings.rightTop(rightTop);
  if ($$props.rightBot === void 0 && $$bindings.rightBot && rightBot !== void 0)
    $$bindings.rightBot(rightBot);
  if ($$props.top === void 0 && $$bindings.top && top !== void 0)
    $$bindings.top(top);
  if ($$props.bot === void 0 && $$bindings.bot && bot !== void 0)
    $$bindings.bot(bot);
  return `<div${add_attribute("class", twMerge(div, $$props.class), 0)}></div> <div${add_attribute("class", twMerge(top, $$props.classTop), 0)}><div${add_attribute("class", twMerge(rightTop, $$props.classRightTop), 0)}></div> <div${add_attribute("class", twMerge(rightBot, $$props.classRightBot), 0)}></div> <div${add_attribute("class", twMerge(slot, $$props.classSlot), 0)}>${slots.default ? slots.default({}) : ``}</div></div> <div${add_attribute("class", twMerge(bot, $$props.classBot), 0)}></div> `;
});
const Tablet = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { div = "relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[454px] max-w-[341px] md:h-[682px] md:max-w-[512px]" } = $$props;
  let { slot = "rounded-[2rem] overflow-hidden h-[426px] md:h-[654px] bg-white dark:bg-gray-800" } = $$props;
  let { leftTop = "h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg" } = $$props;
  let { leftMid = "h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg" } = $$props;
  let { leftBot = "h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg" } = $$props;
  let { right = "h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg" } = $$props;
  if ($$props.div === void 0 && $$bindings.div && div !== void 0)
    $$bindings.div(div);
  if ($$props.slot === void 0 && $$bindings.slot && slot !== void 0)
    $$bindings.slot(slot);
  if ($$props.leftTop === void 0 && $$bindings.leftTop && leftTop !== void 0)
    $$bindings.leftTop(leftTop);
  if ($$props.leftMid === void 0 && $$bindings.leftMid && leftMid !== void 0)
    $$bindings.leftMid(leftMid);
  if ($$props.leftBot === void 0 && $$bindings.leftBot && leftBot !== void 0)
    $$bindings.leftBot(leftBot);
  if ($$props.right === void 0 && $$bindings.right && right !== void 0)
    $$bindings.right(right);
  return `<div${add_attribute("class", twMerge(div, $$props.class), 0)}><div${add_attribute("class", twMerge(leftTop, $$props.classLeftTop), 0)}></div> <div${add_attribute("class", twMerge(leftMid, $$props.classLeftMid), 0)}></div> <div${add_attribute("class", twMerge(leftBot, $$props.classLeftBot), 0)}></div> <div${add_attribute("class", twMerge(right, $$props.classRight), 0)}></div> <div${add_attribute("class", twMerge(slot, $$props.classSlot), 0)}>${slots.default ? slots.default({}) : ``}</div></div> `;
});
const DeviceMockup = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { device = "default" } = $$props;
  const componets = {
    android: Android,
    ios: Ios,
    tablet: Tablet,
    default: DefaultMockup,
    smartwatch: Smartwatch,
    laptop: Laptop,
    desktop: Desktop
  };
  let component;
  if ($$props.device === void 0 && $$bindings.device && device !== void 0)
    $$bindings.device(device);
  component = componets[device];
  return `${component ? `${validate_component(component || missing_component, "svelte:component").$$render($$result, {}, {}, {
    default: () => {
      return `${slots.default ? slots.default({}) : ``}`;
    }
  })}` : `<div class="border p-3 text-xl" data-svelte-h="svelte-12c4a2r">Unknow device</div>`} `;
});
const Heading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["tag", "color", "customSize"]);
  let { tag = "h1" } = $$props;
  let { color = "text-gray-900 dark:text-white" } = $$props;
  let { customSize = "" } = $$props;
  const textSizes = {
    h1: "text-5xl font-extrabold",
    h2: "text-4xl font-bold",
    h3: "text-3xl font-bold",
    h4: "text-2xl font-bold",
    h5: "text-xl font-bold",
    h6: "text-lg font-bold"
  };
  if ($$props.tag === void 0 && $$bindings.tag && tag !== void 0)
    $$bindings.tag(tag);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.customSize === void 0 && $$bindings.customSize && customSize !== void 0)
    $$bindings.customSize(customSize);
  return `${((tag$1) => {
    return tag$1 ? `<${tag}${spread(
      [
        escape_object($$restProps),
        {
          class: escape_attribute_value(twMerge(customSize ? customSize : textSizes[tag], color, "w-full", $$props.class))
        }
      ],
      {}
    )}>${is_void(tag$1) ? "" : `${slots.default ? slots.default({}) : ``}`}${is_void(tag$1) ? "" : `</${tag$1}>`}` : "";
  })(tag)} `;
});
const Mark = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["color", "bgColor", "markClass"]);
  let { color = "text-white dark:bg-blue-500" } = $$props;
  let { bgColor = "bg-blue-600" } = $$props;
  let { markClass = "px-2 rounded" } = $$props;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.bgColor === void 0 && $$bindings.bgColor && bgColor !== void 0)
    $$bindings.bgColor(bgColor);
  if ($$props.markClass === void 0 && $$bindings.markClass && markClass !== void 0)
    $$bindings.markClass(markClass);
  return `<mark${spread(
    [
      escape_object($$restProps),
      {
        class: escape_attribute_value(twMerge(markClass, bgColor, color, $$props.class))
      }
    ],
    {}
  )}>${slots.default ? slots.default({}) : ``}</mark> `;
});
const Span = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, [
    "italic",
    "underline",
    "linethrough",
    "uppercase",
    "gradient",
    "highlight",
    "highlightClass",
    "decorationClass",
    "gradientClass"
  ]);
  let { italic = false } = $$props;
  let { underline = false } = $$props;
  let { linethrough = false } = $$props;
  let { uppercase = false } = $$props;
  let { gradient = false } = $$props;
  let { highlight = false } = $$props;
  let { highlightClass = "text-blue-600 dark:text-blue-500" } = $$props;
  let { decorationClass = "decoration-2 decoration-blue-400 dark:decoration-blue-600" } = $$props;
  let { gradientClass = "text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400" } = $$props;
  let underlineClass = twMerge("underline", decorationClass);
  let classSpan = twMerge(
    italic && "italic",
    underline && underlineClass,
    linethrough && "line-through",
    uppercase && "uppercase",
    gradient ? gradientClass : "font-semibold text-gray-900 dark:text-white",
    highlight && highlightClass,
    $$props.class
  );
  if ($$props.italic === void 0 && $$bindings.italic && italic !== void 0)
    $$bindings.italic(italic);
  if ($$props.underline === void 0 && $$bindings.underline && underline !== void 0)
    $$bindings.underline(underline);
  if ($$props.linethrough === void 0 && $$bindings.linethrough && linethrough !== void 0)
    $$bindings.linethrough(linethrough);
  if ($$props.uppercase === void 0 && $$bindings.uppercase && uppercase !== void 0)
    $$bindings.uppercase(uppercase);
  if ($$props.gradient === void 0 && $$bindings.gradient && gradient !== void 0)
    $$bindings.gradient(gradient);
  if ($$props.highlight === void 0 && $$bindings.highlight && highlight !== void 0)
    $$bindings.highlight(highlight);
  if ($$props.highlightClass === void 0 && $$bindings.highlightClass && highlightClass !== void 0)
    $$bindings.highlightClass(highlightClass);
  if ($$props.decorationClass === void 0 && $$bindings.decorationClass && decorationClass !== void 0)
    $$bindings.decorationClass(decorationClass);
  if ($$props.gradientClass === void 0 && $$bindings.gradientClass && gradientClass !== void 0)
    $$bindings.gradientClass(gradientClass);
  return `<span${spread([escape_object($$restProps), { class: escape_attribute_value(classSpan) }], {})}>${slots.default ? slots.default({}) : ``}</span> `;
});
const Waitlist = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return ` <section id="waitlist"><div class="grid grid-cols-4 gap-4 bg-white page-pad"><div class="pt-2 pl-4 col-start-1 col-end-5">${validate_component(Card, "Card").$$render($$result, { size: "xxl" }, {}, {
    default: () => {
      return `<div class="grid grid-cols-4 gap-4 pad-container"><div class="p-[25%]">${validate_component(Heading, "Heading").$$render($$result, { tag: "h4", align: "left" }, {}, {
        default: () => {
          return `Contact us`;
        }
      })} ${validate_component(Heading, "Heading").$$render($$result, { tag: "h6", align: "left" }, {}, {
        default: () => {
          return `projimpulseinfo@gmail.com`;
        }
      })}</div> <div class="pt-2 pl-4 col-start-3 col-end-5">${validate_component(Heading, "Heading").$$render(
        $$result,
        {
          tag: "h2",
          customSize: "text-4xl font-extrabold "
        },
        {},
        {
          default: () => {
            return `Join our Waitlist`;
          }
        }
      )} <form class="ud-contact-form" data-svelte-h="svelte-jncchx"><div class="ud-form-group p-12"><iframe src="https://fm.addxt.com/form/?vf=1FAIpQLSeg1jrOEiDrpp0_GYrWdQfYUOQKNEsLjb4vSr89swRXQgaLrg" width="100%" height="300" frameborder="0" marginheight="0" marginwidth="0" scrolling="no">Loading…</iframe></div></form></div></div>`;
    }
  })}</div></div></section>`;
});
const Hero = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="flex flex-col gap-10 flex-1 items-center justify-center p-40 md:pb-14 bg-white" data-svelte-h="svelte-16pklzv"><h2 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl max-w-[1200px] mx-auto w-full text-center font-semibold"><span class="text-blue-900">Personal Finance</span> <span class="text-slate-600 line-through">Is Hard</span><br>
      Just Got <span class="text-blue-900">Easier</span> with <span class="text-blue-900">Kuber</span></h2> <p class="text-xl sm:text-2xl md:text-3xl text-center max-w-[1000px] mx-auto w-full">Less thinking &amp; more doing. We&#39;re the one-stop finance app in your pocket. 
      It&#39;s 2024, don&#39;t look at your budgets and finances in excels or paper books.</p></div>`;
});
const Pics = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="bg-white pb-16 page-pad">${validate_component(DeviceMockup, "DeviceMockup").$$render($$result, { device: "laptop" }, {}, {
    default: () => {
      return `<img src=" /figma/Main Dashboard.png" class="dark:hidden h-[156px] md:h-[278px] w-full" alt="laptop example 1"> <img src="https://flowbite.s3.amazonaws.com/docs/device-mockups/laptop-screen-dark.png" class="hidden dark:block h-[156px] md:h-[278px] w-full" alt="laptop example 2">`;
    }
  })}</div>`;
});
const Purpose = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<div class="page-pad bg-white pt-8 pb-4">${validate_component(Card, "Card").$$render($$result, { size: "xxl", class: "bg-black" }, {}, {
    default: () => {
      return `${validate_component(Heading, "Heading").$$render(
        $$result,
        {
          tag: "h1",
          class: "mb-8 leading-[75px] our-text text-white"
        },
        {},
        {
          default: () => {
            return `Help us in removing ${validate_component(Span, "Span").$$render(
              $$result,
              {
                underline: true,
                class: "text-white",
                decorationClass: "decoration-8 decoration-red-600 dark:decoration-red-600"
              },
              {},
              {
                default: () => {
                  return `Financial Anxiety`;
                }
              }
            )}, from ${validate_component(Mark, "Mark").$$render($$result, { class: "bg-blue-800" }, {}, {
              default: () => {
                return `your life`;
              }
            })}`;
          }
        }
      )} ${validate_component(Card, "Card").$$render(
        $$result,
        {
          size: "xxl",
          class: "grid md:grid-cols-2 bg-black"
        },
        {},
        {
          default: () => {
            return `<figure class="flex flex-col justify-center items-center p-8 text-center bg-black rounded-tl-lg rounded-bl-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700"><blockquote class="mx-auto mb-4 max-w-2xl text-white dark:text-white">${validate_component(Heading, "Heading").$$render(
              $$result,
              {
                class: "text-white our-text pb-2",
                tag: "h2"
              },
              {},
              {
                default: () => {
                  return `We Try Harder.`;
                }
              }
            )} ${validate_component(P, "P").$$render(
              $$result,
              {
                class: "text-white pt-4",
                align: "center"
              },
              {},
              {
                default: () => {
                  return `Startups have to keep innovating all the time. We&#39;re not the largest name in finance management apps. We’d be drowned out if we didn&#39;t put in extra effort.`;
                }
              }
            )} ${validate_component(P, "P").$$render(
              $$result,
              {
                class: "text-white pt-4",
                align: "center"
              },
              {},
              {
                default: () => {
                  return `The services we offer can&#39;t be anything less than cutting-edge financial tools, And since we’re not the largest bank, you won’t feel like just another number when you use our app.`;
                }
              }
            )} ${validate_component(Heading, "Heading").$$render(
              $$result,
              {
                class: "text-white our-text pt-4 pb-2",
                tag: "h3"
              },
              {},
              {
                default: () => {
                  return `There’s no slacking for us.`;
                }
              }
            )}</blockquote></figure> <figure class="flex flex-col justify-center items-center p-8 text-center bg-black rounded-tl-lg rounded-bl-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700"><blockquote class="mx-auto mb-4 max-w-2xl text-white dark:text-white">${validate_component(Heading, "Heading").$$render(
              $$result,
              {
                class: "text-white our-text pb-2",
                tag: "h2"
              },
              {},
              {
                default: () => {
                  return `Help us with Feedback.`;
                }
              }
            )} ${validate_component(P, "P").$$render(
              $$result,
              {
                class: "text-white pt-4",
                align: "center"
              },
              {},
              {
                default: () => {
                  return `We’d love to hear your thoughts! Please try out our demo and share your feedback. Your input helps us improve and serve you even better.`;
                }
              }
            )}  <div class="pt-8">${validate_component(Button, "Button").$$render(
              $$result,
              {
                outline: true,
                color: "green",
                class: "text-white",
                style: "text-decoration:none;",
                href: "https://demo.kuberapp.net"
              },
              {},
              {
                default: () => {
                  return `Try our Demo`;
                }
              }
            )}</div></blockquote></figure>`;
          }
        }
      )}`;
    }
  })}</div>`;
});
const ProductCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { index } = $$props;
  let { productFeature } = $$props;
  if ($$props.index === void 0 && $$bindings.index && index !== void 0)
    $$bindings.index(index);
  if ($$props.productFeature === void 0 && $$bindings.productFeature && productFeature !== void 0)
    $$bindings.productFeature(productFeature);
  return `<div class="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-14 lg:gap-20 relative text-base"><div${add_attribute("class", "flex flex-col gap-8 md:gap-10 pt-8 sm:pt-10 " + (index % 2 === 1 ? " md:order-2" : " "), 0)}><h4 class="text-2xl sm:text-3xl md:text-4xl max-w-[1000px] w-full font-medium relative pr-10">${slots.default ? slots.default({}) : ``}</h4> <p>${escape(productFeature.description)}</p> <div class="flex flex-col gap-3">${each(productFeature.featureList, (listItem) => {
    return `<div class="flex gap-2 items-center"><div class="grid place-items-center px-1.5 text-xs sm:text-sm aspect-square rounded-full border-[1.5px] bg-white border-solid border-green-300" data-svelte-h="svelte-1fgwcu8"><i class="fa-solid fa-bolt text-green-400"></i></div> <p>${escape(listItem)}</p> </div>`;
  })}</div> <div class="flex items-center">${validate_component(Button, "Button").$$render(
    $$result,
    {
      outline: true,
      style: "text-decoration:none;",
      color: "green",
      href: "https://demo.kuberapp.net"
    },
    {},
    {
      default: () => {
        return `Try our Demo`;
      }
    }
  )}</div></div> <div${add_attribute("class", "flex flex-col dropShadow overflow-hidden border rounded-lg ", 0)}><div class="rounded-t-xl h-8 sm:h-10 bg-white opacity-60 px-3 flex items-center gap-2">${each([1, 2, 3], (i) => {
    return `<div class="rounded-full aspect-square w-2.5 sm:w-3 bg-indigo-300"></div>`;
  })}</div> <div class="flex flex-col bg-white gap-4 flex-1"><img${add_attribute("src", productFeature.imgUrl, 0)} alt="product-img"></div></div></div>`;
});
const SectionWrapper = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  return `<section${add_attribute("id", id, 0)}${add_attribute("class", "min-h-screen flex flex-col px-4 ", 0)}><div class="flex flex-col flex-1 max-w-[1400px] mx-auto w-full">${slots.default ? slots.default({}) : ``}</div></section>`;
});
const Features = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let productFeatures = [
    {
      featureList: [
        "Analyze spending patterns and preferences ",
        "Financial Insights",
        "Actionable Solutions"
      ],
      description: "Easily aggregates multiple financial institutions into one platform, so you can view all your finances in one place.",
      imgUrl: " /figma/Depository.png"
    },
    {
      featureList: [
        "Intuituve Flowchart Interface",
        "Directly connect your accounts",
        "Suggestions to achieve your goals more efficiently",
        "View your short-term and long-term goals in one place"
      ],
      description: "Monitor budgeting rules aligned to the goals you set, so you can stay on track and achieve your financial goals.",
      imgUrl: " /figma/Modules.png"
    },
    {
      featureList: [
        "Comnpare with your current spending timeline",
        "See how your spending habits have changed over time",
        "View how your goals mpact your financial growth"
      ],
      description: "Get projections on ideal timeline for networth growth, so you can plan your financial future with confidence.",
      imgUrl: " /figma/Projection.png"
    }
  ];
  return `  ${validate_component(SectionWrapper, "SectionWrapper").$$render($$result, { id: "features" }, {}, {
    default: () => {
      return `<div class="flex flex-col gap-10 sm:gap-14 md:gap-24 flex-1 items-center justify-center pb-10 md:pb-14"><div class="flex flex-col gap-2 pt-16">${validate_component(Heading, "Heading").$$render($$result, { tag: "h1", class: "mb-4 our-text" }, {}, {
        default: () => {
          return `Don&#39;t just be ${validate_component(Span, "Span").$$render(
            $$result,
            {
              underline: true,
              decorationClass: "decoration-8 decoration-blue-800 dark:decoration-red-600"
            },
            {},
            {
              default: () => {
                return `aware`;
              }
            }
          )}, Take ${validate_component(Mark, "Mark").$$render($$result, { class: "bg-blue-800" }, {}, {
            default: () => {
              return `Action`;
            }
          })}`;
        }
      })}</div> ${each(productFeatures, (productFeature, index) => {
        return `${validate_component(ProductCard, "ProductCard").$$render($$result, { productFeature, index }, {}, {
          default: () => {
            return `${index === 0 ? `Our platform is designed to <span class="text-yellow-400 font-medium" data-svelte-h="svelte-mzwafn">simplify money management</span>, so that you can say goodbye to sleepless nights.` : `${index === 1 ? `You can easily create and stick to a budget that fits your lifestyle, without the <span class="text-yellow-400 font-medium" data-svelte-h="svelte-1fronhw">stress and complexity</span>.` : `<span class="text-yellow-400 font-medium" data-svelte-h="svelte-13j68o5">Forecast an ideal timeline</span> that can be achieved along with your growth in Net-worth`}`} `;
          }
        })}`;
      })}</div>`;
    }
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-7ejueb_START -->${$$result.title = `<title>Kuber</title>`, ""}<meta name="description" content="Kuber - Personal Finance Concierge"><!-- HEAD_svelte-7ejueb_END -->`, ""} <section>${validate_component(Hero, "Hero").$$render($$result, {}, {}, {})} ${validate_component(Pics, "Pics").$$render($$result, {}, {}, {})} <div class="bg-white">${validate_component(Features, "Features").$$render($$result, {}, {}, {})}</div> <div class="pl-4 bg-white">${validate_component(Purpose, "Purpose").$$render($$result, {}, {}, {})}</div> ${validate_component(Waitlist, "Waitlist").$$render($$result, {}, {}, {})}</section>`;
});
export {
  Page as default
};
