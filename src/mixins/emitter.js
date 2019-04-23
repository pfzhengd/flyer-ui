import {findParentByName} from '~/utils/util'
export default {
  methods: {
    dispatch (componentName, eventName, params) {
      let parent = findParentByName(componentName, this)
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params))
      }
    }
  }
}
