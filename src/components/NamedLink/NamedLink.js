/**
 * This component wraps React-Router's Link by providing name-based routing.
 *
 * The `name` prop should match a route in the flattened
 * routeConfiguration passed in context by the RoutesProvider
 * component. The `params` props is the route params for the route
 * path of the given route name.
 *
 * The `to` prop is an object with the same shape as Link requires,
 * but without `pathname` that will be generated from the given route
 * name.
 *
 * Some additional props can be passed for the <a> element like
 * `className` and `style`.
 *
 * The component can also be given the `activeClassName` prop that
 * will be added to the element className if the current URL matches
 * the one in the generated pathname of the link.
 */
import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import classNames from 'classnames';
import routeConfiguration from '../../routeConfiguration';
import { pathByRouteName } from '../../util/routes';
import config from '../../config';

export const NamedLinkComponent = props => {
  const { name, params, title } = props;

  // Link props

  //console.log(config.locale)

  var name1 = name;

  if (config.locale === 'ro')
  {
    name1 = name + "Ro"
    if (name.endsWith('Ro'))
    {
      name1 = name;
    }
    else 
    {
      if (title === 'EN')
      {
        name1 = name;
      }
      else 
      {
        name1 = name + "Ro"
      }      
    }
  }
  console.log('xxxxxxxxxxxx')
  console.log(name + " " + name1)
  console.log('xxxxxxxxxxxx')

  const { to, children } = props;
  const pathname = pathByRouteName(name1, routeConfiguration(), params);

  console.log('xxxxxxxxxxxx')
  console.log(pathname)
  console.log('xxxxxxxxxxxx')

  const { match } = props;
  const active = match.url && match.url === pathname;

  // <a> element props
  const { className, style, activeClassName } = props;
  const aElemProps = {
    className: classNames(className, { [activeClassName]: active }),
    style,
    title,
  };

  //console.log(pathname)
  
  const pathname1 = '/ro/about'//pathname + '/abc';
  //console.log(pathname1)
  // var first1 = pathname.split('/');
  // if (first1[1] !== 'ro')
  // {
  //   if (config.locale === 'ro')
  //   {
  //     pathname1 = '/ro' + pathname;
  //   }
  // }

  // if (pathname === '/ro')
  // {
  //   pathname1 = pathname;
  // }
  // else 
  // {
  //   if (config.locale === 'ro' && pathname.indexOf('/ro')<0)
  //   {
  //     pathname1 = ('/ro/' + pathname).replace('//', '');
  //   }
  //   else 
  //   {
  //     pathname1 = pathname;
  //   }
  // }
  

  return (
    <div>
{pathname}
    <Link to={{ pathname, ...to }} {...aElemProps}>
      {children}
    </Link>
    </div>
    
  );
};

const { object, string, shape, any } = PropTypes;

NamedLinkComponent.defaultProps = {
  params: {},
  to: {},
  children: null,
  className: '',
  style: {},
  activeClassName: 'NamedLink_active',
  title: null,
  match: {},
};

// This ensures a nice display name in snapshots etc.
NamedLinkComponent.displayName = 'NamedLink';

NamedLinkComponent.propTypes = {
  // name of the route in routeConfiguration
  name: string.isRequired,
  // params object for the named route
  params: object,
  // Link component props
  to: shape({ search: string, hash: string, state: object }),
  children: any,

  // generic props for the underlying <a> element
  className: string,
  style: object,
  activeClassName: string,
  title: string,

  // from withRouter
  match: object,
};

const NamedLink = withRouter(NamedLinkComponent);
NamedLink.displayName = 'NamedLink';

export default NamedLink;
