import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { warn } from '../../../warn'

import Link from '../Link'

jest.mock('../../../warn', () => (
  { warn: jest.fn() }
))

describe('Link', () => {
  const doShallow = (overrides = {}) => shallow(
    <Link {...overrides}>Go home</Link>
  )

  it('renders', () => {
    const link = doShallow()

    expect(toJson(link)).toMatchSnapshot()
  })

  it('is an anchor HTML element when using the href attribute', () => {
    const link = doShallow({ href: 'http://telus.com' })

    expect(link).toHaveTagName('a')
    expect(link).toHaveProp('href', 'http://telus.com')
  })

  it('renders a react router link element when passed as a prop', () => {
    const MyLink = () => <span />
    const link = doShallow({ reactRouterLinkComponent: MyLink })

    expect(link).toMatchSelector('MyLink')
  })

  it('must use `reactRouterLinkComponent` and `to` props together', () => {
    const MyLink = () => <span />
    let link = doShallow({ reactRouterLinkComponent: MyLink })

    expect(warn).toHaveBeenCalled()

    link = doShallow({ to: '/about' })

    expect(link).toHaveProp('to')
    expect(warn).toHaveBeenCalled()
  })

  it('can be inverted', () => {
    let link = doShallow({ variant: 'inverted' })
    expect(link).toHaveClassName('inverted')

    link = doShallow({ variant: 'base' })
    expect(link).toHaveClassName('base')
  })

  it('passes additional attributes to the link element', () => {
    const link = doShallow({ id: 'the-link', role: 'button' })

    expect(link).toHaveProp('id', 'the-link')
    expect(link).toHaveProp('role', 'button')
  })

  it('does not allow custom CSS', () => {
    const link = doShallow({ className: 'my-custom-class', style: { color: 'hotpink' } })

    expect(link).not.toHaveProp('className', 'my-custom-class')
    expect(link).not.toHaveProp('style')
  })
})