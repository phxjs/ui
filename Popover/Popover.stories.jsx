import React from 'react';
import { expect, userEvent } from 'storybook/test';
import { Popover } from './Popover';

export default {
  component: Popover,
  tags: ['autodocs'],
  args: {
    tagName: 'div',
    trigger: 'button',
    manual: false,
    hint: false
  },
  argTypes: {
    trigger: {
      control: 'radio',
      options: ['button', 'input'],
      mapping: {
        button: Popover.defaultTrigger,
        input: (popoverTarget) => (
          <input popovertarget={popoverTarget} type="button" value="input button trigger" />
        )
      }
    }
  }
};

export const PopoverExample = {
  render: (props) => (
    <>
      <Popover {...props}>
        <div>hidden content revealed by clicking popover</div>
      </Popover>

      <button id="nope">no event trigger</button>
    </>
  ),
  play: async ({canvas, canvasElement}) => {
    const document = canvasElement.ownerDocument;
    const popover = document.querySelector('[popover]');
    expect(popover).not.toBeVisible();
  }
};

export const PopoverInAction = {
  ...PopoverExample,
  play: async ({canvas, canvasElement}) => {
    const document = canvasElement.ownerDocument;
    const btn = await document.querySelector('button[popoverTarget]');
    await userEvent.click(btn);
    const popover = document.querySelector('[popover]');
    expect(popover).toBeVisible();
  }
};

export const PopoverHintMode = {
  render: (props) => (
    <>
      <Popover {...props}>
        <blockquote
          cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/popover#hint"
        >
        hint popovers do not close auto popovers when they are displayed, but will close other hint popovers. They can be light dismissed and will respond to close requests.
        </blockquote>
      </Popover>

      <Popover 
        hint
        trigger={(popovertarget) => <button popovertarget={popovertarget}>click me 2!</button>}
      >
        Example 2
      </Popover>
    </>
  ),
  args: {
    hint: true
  },
  play: async ({canvas, canvasElement}) => {
    const document = canvasElement.ownerDocument;
    const [btn, btnOther] = await document.querySelectorAll('button[popovertarget]');
    await userEvent.click(btn);
    const [popover, popoverOther] = document.querySelectorAll('[popover]');
    expect(popover).toBeVisible();

    await userEvent.click(btnOther);
    expect(popover).not.toBeVisible();
    expect(popoverOther).toBeVisible();

    await userEvent.click(btnOther);
    expect(popover).not.toBeVisible();
    expect(popoverOther).not.toBeVisible();
  }
};

export const PopoverManualMode = {
  render: (props) => (
    <>
      <style>{`
      .left, .right {
        position: absolute;
        width: 50%;
        top: 60px;
      }
      .left {
        margin-left: 0;
      }
      .right {
        margin-right: 0;
      }
      `}</style>
      <Popover
        {...props}
        className="left"
        trigger={(popovertarget) => (
          <>
            <button popovertarget={popovertarget}>toggle popover 1</button>
            <button id="nope">not me</button>
          </>
        )}
      >
        <div>
          <blockquote
            cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/popover#manual"
          >
          manual popovers cannot be "light dismissed" and are not automatically closed. Popovers must explicitly be displayed and closed using declarative show/hide/toggle buttons or JavaScript. Multiple independent manual popovers can be shown simultaneously.
          </blockquote>
        </div>
      </Popover>

      <Popover
        {...props}
        className="right"
        trigger={(popovertarget) => (
          <div style={{float: 'right'}}>
            <button popovertarget={popovertarget} popoverTargetAction="show">show popover 2</button>
            <button popovertarget={popovertarget} popoverTargetAction="hide">hide popover 2</button>
          </div>
        )}
      >
        <div>
          <blockquote
            cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/popover#manual"
          >
          manual popovers cannot be "light dismissed" and are not automatically closed. Popovers must explicitly be displayed and closed using declarative show/hide/toggle buttons or JavaScript. Multiple independent manual popovers can be shown simultaneously.
          </blockquote>
        </div>
      </Popover>
    </>
  ),
  args: {
    manual: true
  },
  play: async ({canvas, canvasElement}) => {
    const document = canvasElement.ownerDocument;
    const [toggleBtn, showBtn, hideBtn] = await document.querySelectorAll('button[popoverTarget]');
    await userEvent.click(toggleBtn);
    const [popover1, popover2] = document.querySelectorAll('[popover]');
    expect(popover1).toBeVisible();

    await userEvent.click(document.getElementById('nope'));
    expect(popover1).toBeVisible();

    await userEvent.click(toggleBtn);
    expect(popover1).not.toBeVisible();

    await userEvent.click(showBtn);
    expect(popover2).toBeVisible();

    await userEvent.click(toggleBtn);
    expect(popover1).toBeVisible();
    expect(popover2).toBeVisible();

    await userEvent.click(hideBtn);
    expect(popover2).not.toBeVisible();
    expect(popover1).toBeVisible();
    
  }
};