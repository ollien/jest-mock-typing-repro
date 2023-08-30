import { MockedObject, ModuleMocker } from 'jest-mock';

class Foo {
  bar() {}
}

const moduleMocker = new ModuleMocker(global);

test('my code works', () => {
  const mockMetadata = moduleMocker.getMetadata(Foo)!;
  const mockClass = moduleMocker.generateFromMetadata(mockMetadata);
  const x: MockedObject<Foo> = new mockClass();
})
