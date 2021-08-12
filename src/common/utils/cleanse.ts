
import _ from 'lodash'

/**
 * Remove undefined properties from object
 * @param obj Any javascript object
 * @returns That same object but without the undefined properties
 */
export function cleanse<T extends object>(obj: T): T {
  return _.omitBy(obj, _.isUndefined) as T
}
