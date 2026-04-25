import React from 'react';

Popover.defaultTrigger = (popovertarget) => {
  return <button popovertarget={popovertarget}>click me!</button>;
};

export function Popover({
  className,
  children,
  hint = false,
  manual = false,
  tagName = 'div',
  trigger = Popover.defaultTrigger
}) {
  const popoverTarget = React.useId();
  const Tag = tagName;
  const popoverMode = manual ? 'manual' : hint ? 'hint' : 'auto';
  console.log({arguments, popoverTarget, Tag, popoverMode})
  if (manual && hint) {
    console.error('pick one Popover option: manual or hint');
  }

//https://kinu.sh/docs/popover
// https://xandemon.github.io/developer-icons/icons/Design/
//https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/popover#nesting_popovers
  return (
    <>
      {trigger(popoverTarget)}

      <Tag id={popoverTarget} className={className} popover={popoverMode}>
        {children}
      </Tag>
    </>
  )
}