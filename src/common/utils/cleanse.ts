
import _ from 'lodash'

/**
 * remove undefined properties from object
 * @param obj Any javascript object
 * @returns That same object but without the undefined properties
 */
export function cleanse<T>(obj: T): T {
  console.log(_.omitBy)
  return _.omitBy(obj, _.isUndefined) as T
}
