import {
  shallowMount
} from '@vue/test-utils'
import FirebaseLogin from '@/components/FirebaseLogin.vue'

describe('FireBaseLogin.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Dionaea simple shorten url service'

    const wrapper = shallowMount(FirebaseLogin, {
      propsData: {
        msg
      }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})