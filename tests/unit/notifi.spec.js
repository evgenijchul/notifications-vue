import { shallowMount } from "@vue/test-utils";
import Notifi from "@/VueNotifi/Notifi";
// вспомогательная функция, выполняющая монтирование и
// возвращающая отрисованный компонент
function getMountedComponent (Component, propsData) {
  return shallowMount(Component, {
    propsData
  })
}

describe("Notifi.vue", () => {

  it("renders props.msg when passed", () => {
       
    expect(
      getMountedComponent(Notifi, {
        message: 'Bye'
      }).text()
    ).toBe('Bye')

  });
});
